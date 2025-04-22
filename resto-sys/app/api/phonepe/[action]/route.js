import axios from "axios";
import crypto from 'crypto';
import createOrder from "../../../actions/order";
import { getCartItems } from "../../../actions/cart";

// const baseUrl = process.env.NODE_ENV === "production"
//     ? "https://api.phonepe.com/apis/hermes"
//     : "https://api-preprod.phonepe.com/apis/pg-sandbox";

export async function POST(req, { params }) {
    const { action } = await params;

    const requiredEnvVars = [
        "PHONEPE_MERCHANT_ID",
        "PHONEPE_CLIENT_ID",
        "PHONEPE_CLIENT_SECRET",
        "PHONEPE_SALT_KEY",
        "PHONEPE_SALT_INDEX",
        "PHONEPE_HOST_URL",
        "NEXT_PUBLIC_BASE_URL"
    ];

    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            console.error('Missing environment variable:', envVar);
            return new Response(JSON.stringify({ error: `Server configuration error: Missing ${envVar}` }), { status: 500 });
        }
    }

    if (action === "create") {
        const { formData } = await req.json();
        const cartItems = await getCartItems();

        if (cartItems.length === 0) {
            return new Response(JSON.stringify({ error: 'Cart is empty' }), { status: 400 });
        }

        const totalPrice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);
        const merchantTransactionId = `MT${Date.now()}`;

        const payload = {
            merchantId: process.env.PHONEPE_MERCHANT_ID,
            merchantTransactionId,
            merchantUserId: `MUID${cartItems[0].cart_item_id}`,
            amount: Math.round(totalPrice * 100), // Conversion to paise
            redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/userLogin/order-confirmation`,
            redirectMode: 'REDIRECT',
            callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/verify`,
            mobileNumber: formData.phone,
            paymentInstrument: { type: "PAY_PAGE" },
        };

        const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
        const xVerify = crypto
            .createHash("sha256")
            .update(base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY)
            .digest('hex') + '###' + process.env.PHONEPE_SALT_INDEX;

            console.log("Payload:", payload);
            console.log("Base64 Payload:", base64Payload);
            console.log("X-VERIFY:", xVerify);

        try {
            const res = await axios.post(
                `${process.env.PHONEPE_HOST_URL}/pg/v1/pay`,
                { request: base64Payload },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-VERIFY': xVerify,
                        "Accept": "application/json",
                        "X-CLIENT-ID": process.env.PHONEPE_CLIENT_ID,
                        "X-CLIENT-SECRET": process.env.PHONEPE_CLIENT_SECRET,
                    },
                }
            );

            return new Response(
                JSON.stringify({
                    redirectUrl: res.data.data.instrumentResponse.redirectInfo.url,
                    merchantTransactionId,
                    formData,
                    cartItems,
                }),
                { status: 200 }
            );
        } catch (err) {
            console.error('Error initiating PhonePe payment:', {
                message: err.message,
                response: err.response?.data,
                status: err.response?.status,
            });
            return new Response(JSON.stringify({ error: 'Failed to initiate payment' }), { status: 500 });
        }
    }

    if (action === "verify") {
        const { merchantTransactionId, formData, cartItems } = await req.json();

        const xVerify = crypto
            .createHash('sha256')
            .update(`/pg/v1/status/${process.env.PHONEPE_MERCHANT_ID}/${merchantTransactionId}` + process.env.PHONEPE_SALT_KEY)
            .digest('hex') + '###' + process.env.PHONEPE_SALT_INDEX;

        console.log("Status X-VERIFY:", xVerify);

        try {
            const res = await axios.get(
                `${process.env.PHONEPE_HOST_URL}/pg/v1/status/${process.env.PHONEPE_MERCHANT_ID}/${merchantTransactionId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-VERIFY': xVerify,
                        'X-MERCHANT-ID': process.env.PHONEPE_MERCHANT_ID,
                        'Accept': "application/json",
                        "X-CLIENT-ID": process.env.PHONEPE_CLIENT_ID,
                        "X-CLIENT-SECRET": process.env.PHONEPE_CLIENT_SECRET,
                    },
                }
            );

            if (res.data.success && res.data.code === "PAYMENT_SUCCESS") {
                await createOrder({
                    formData,
                    cartItems,
                    paymentId: merchantTransactionId,
                });

                return new Response(JSON.stringify({ success: true }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ error: 'Payment not successfully' }), { status: 400 });
            }
        } catch (err) {
            console.error('Error verifying PhonePe payment:', {
                message: err.message,
                response: err.response?.data,
                status: err.response?.status,
            });
            return new Response(JSON.stringify({ error: 'Failed to verify payment' }), { status: 500 });
        }
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
}
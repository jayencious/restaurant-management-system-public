import Razorpay from "razorpay";

export async function POST (req) {
    try {
        const { amount } = await req.json();

        if (!amount || isNaN(amount)) {
            return new Response(JSON.stringify({ error: 'Invalid amount' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const order = await razorpay.orders.create({
            amount: amount,
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
        });

        return new Response(JSON.stringify({ order }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Error creating Razorpay order:', err);
        return new Response(JSON.stringify({ error: 'Failed to create order' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
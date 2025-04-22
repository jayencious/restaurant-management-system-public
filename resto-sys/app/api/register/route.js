import sql from "../../data/db";
import * as bcrypt from 'bcryptjs';

export async function POST(req) {
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);

    await sql`
        INSERT INTO admin (
            first_name,
            last_name,
            email,
            password
        )
        VALUES (
            ${body.firstName},
            ${body.lastName},
            ${body.email},
            ${hashedPassword}
        )
    `;

    // await sql`
    //     INSERT INTO users (first_name, last_name, email, mobile_no, password)
    //     VALUES (${body.firstName}, ${body.lastName}, ${body.email}, ${body.mobileNumber}, ${hashedPassword});
    // `;
    return Response.json('User Created Successfully!');
}
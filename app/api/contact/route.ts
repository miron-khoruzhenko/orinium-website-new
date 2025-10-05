// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Создаем экземпляр Resend, используя ключ из .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		// const { name, email, subject, message } = body;
		const { name, email, subject, message, token } = body;
		const secretKey = process.env.NODE_ENV === 'development' ?
			process.env.TURNSTILE_DUMMY_SECRET_KEY! :
			process.env.TURNSTILE_SECRET_KEY!;

		// 👇 Проверяем токен Turnstile
		const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
		});
		const turnstileData = await turnstileResponse.json();
		if (!turnstileData.success) {
			console.error("Turnstile error:", turnstileData);
			return NextResponse.json({ error: 'Captcha validation failed' }, { status: 400 });
		} else {
			console.log("Turnstile success:", turnstileData);
		}

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		// ✅ Отправляем email с помощью Resend
		const { data, error } = await resend.emails.send({
			from: 'Contact Form <form@orinium.co>',
			to: ['orinium.tech@gmail.com'],
			subject: `New Form Submission from ${name}: ${subject}`,
			html: `<p>You have a new message from your contact form:</p>
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email}</p>
						<p><strong>Message:</strong>${message}</p>`,
		});

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

	} catch (error) {
		console.error('Error in contact form submission:', error);
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
	}
}
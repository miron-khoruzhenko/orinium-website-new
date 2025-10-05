// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Создаем экземпляр Resend, используя ключ из .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;
		// const { name, email, subject, message, token } = body; // ✅ Получаем токен

		// // 👇 Проверяем токен Turnstile
		// const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v1/siteverify', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		secret: process.env.TURNSTILE_SECRET_KEY,
		// 		response: token,
		// 	}),
		// });
		// const turnstileData = await turnstileResponse.json();
		// if (!turnstileData.success) {
		// 	return NextResponse.json({ error: 'Captcha validation failed' }, { status: 400 });
		// }else{
		// 	console.log("Turnstile success:", turnstileData);
		// }

		// if (!name || !email || !message) {
		// 	return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		// }

		// ✅ Отправляем email с помощью Resend
		const { data, error } = await resend.emails.send({
			from: 'Contact Form <form@orinium.co>', // ❗️ Должен быть email на вашем верифицированном домене
			to: ['orinium.tech@gmail.com'], // Ваш личный email, куда придут письма
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
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
	}
}
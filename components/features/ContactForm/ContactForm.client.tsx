"use client"

import { sendContactForm } from "@/lib/actions";
import type React from "react"
import { useState } from "react"
import { Turnstile } from '@marsidev/react-turnstile';
import Map from "./MapBlock";
import MapBlock from "./MapBlock";



export default function ContactFormClient({
	title,
	formStrings,
	locationStrings,
}: ContactFormClientProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "general",
		message: "",
	});

	// Состояние для отслеживания статуса отправки
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	// Состояние для хранения текста ошибки с сервера
	const [errorMessage, setErrorMessage] = useState('');
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!turnstileToken) {
			setErrorMessage("Please verify you are not a robot.");
			setStatus('error');
			return;
		}
		setStatus('loading');

		// Вызываем нашу вынесенную функцию для отправки данных
		// const result = await sendContactForm(formData);
		const result = await sendContactForm({ ...formData, token: turnstileToken });

		if (result.success) {
			setStatus('success');
			// Очищаем форму только в случае успеха
			setFormData({ name: "", email: "", subject: "general", message: "" });
		} else {
			setStatus('error');
			// Устанавливаем сообщение об ошибке, полученное от сервера
			setErrorMessage(result.error || 'An unexpected error occurred.');
		}
	};

	return (
		<section id="contact" className="py-24 bg-black text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-display font-bold text-4xl lg:text-5xl mb-16">{title}</h2>
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Блок с картой */}
					<MapBlock title={locationStrings.title} address={locationStrings.address} />

					{/* Форма */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">{formStrings.name}</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">{formStrings.email}</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium mb-2">{formStrings.subject}</label>
							<select
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							>
								<option value="general">{formStrings.subjects.general}</option>
								<option value="partnership">{formStrings.subjects.partnership}</option>
								<option value="join">{formStrings.subjects.join}</option>
								<option value="media">{formStrings.subjects.media}</option>
								<option value="other">{formStrings.subjects.other}</option>
							</select>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">{formStrings.message}</label>
							<textarea
								id="message"
								name="message"
								required
								rows={6}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
							/>
						</div>
						<Turnstile
							onSuccess={(token) => setTurnstileToken(token)}
							siteKey={process.env.NODE_ENV === 'development' ? 
								process.env.NEXT_PUBLIC_TURNSTILE_DUMMY_SITE_KEY! : 
								process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
							}
						/>
						<button
							type="submit"
							// disabled={status === 'loading'}
							disabled={status === 'loading' || !turnstileToken}
							className="w-full px-8 py-4 bg-white text-black font-display font-bold hover:bg-gray-200 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
						>
							{status === 'loading' ? 'Sending...' : formStrings.submit}
						</button>

						{/* Блок для отображения статуса */}
						<div className="h-6 text-center">
							{status === 'success' && (
								<p className="text-green-500">{formStrings.success}</p>
							)}
							{status === 'error' && (
								<p className="text-red-500">{errorMessage}</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
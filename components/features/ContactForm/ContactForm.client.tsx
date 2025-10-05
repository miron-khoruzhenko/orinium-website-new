"use client"

import type React from "react"
import { useState } from "react"

// ⚙️ Определяем типы для всех текстов, которые придут как props
type FormStrings = {
	name: string;
	email: string;
	subject: string;
	subjects: {
		general: string;
		partnership: string;
		sponsorship: string;
		join: string;
		media: string;
		other: string;
	};
	message: string;
	submit: string;
	success: string;
};

type LocationStrings = {
	title: string;
	address: string;
};

type ContactFormClientProps = {
	title: string;
	formStrings: FormStrings;
	locationStrings: LocationStrings;
};

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
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formData)
		alert(formStrings.success)
		setFormData({ name: "", email: "", subject: "general", message: "" })
	}

	return (
		<section id="contact" className="py-24 bg-black text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-display font-bold text-4xl lg:text-5xl mb-16">{title}</h2>
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Map */}
					<div className="border border-white p-8">
						<h3 className="font-display font-bold text-2xl mb-4">{locationStrings.title}</h3>
						<p className="mb-6 leading-relaxed">{locationStrings.address}</p>
						<div className="aspect-video bg-gray-800 flex items-center justify-center">
							<span className="text-gray-400">[Карта Yıldız Teknopark]</span>
						</div>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">
								{formStrings.name}
							</label>
							<input
								type="text"
								id="name"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								{formStrings.email}
							</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium mb-2">
								{formStrings.subject}
							</label>
							<select
								id="subject"
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
							>
								<option value="general">{formStrings.subjects.general}</option>
								<option value="partnership">{formStrings.subjects.partnership}</option>
								<option value="sponsorship">{formStrings.subjects.sponsorship}</option>
								<option value="join">{formStrings.subjects.join}</option>
								<option value="media">{formStrings.subjects.media}</option>
								<option value="other">{formStrings.subjects.other}</option>
							</select>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">
								{formStrings.message}
							</label>
							<textarea
								id="message"
								required
								rows={6}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
							/>
						</div>

						<button
							type="submit"
							className="w-full px-8 py-4 bg-white text-black font-display font-bold hover:bg-gray-200 transition-colors"
						>
							{formStrings.submit}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
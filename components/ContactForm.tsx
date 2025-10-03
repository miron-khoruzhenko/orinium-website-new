"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"

export default function ContactForm() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // API stub - would send to backend
    console.log("Form submitted:", formData)
    alert(t("form.success"))
    setFormData({ name: "", email: "", subject: "general", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-16">{t("title")}</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="border border-white p-8">
            <h3 className="font-display font-bold text-2xl mb-4">{t("location.title")}</h3>
            <p className="mb-6 leading-relaxed">{t("location.address")}</p>
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">[Yıldız Teknopark Map]</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("form.name")}
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
                {t("form.email")}
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
                {t("form.subject")}
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="general">{t("form.subjects.general")}</option>
                <option value="partnership">{t("form.subjects.partnership")}</option>
                <option value="sponsorship">{t("form.subjects.sponsorship")}</option>
                <option value="join">{t("form.subjects.join")}</option>
                <option value="media">{t("form.subjects.media")}</option>
                <option value="other">{t("form.subjects.other")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("form.message")}
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
              {t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

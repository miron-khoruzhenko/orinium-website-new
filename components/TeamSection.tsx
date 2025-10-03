"use client"

import { useTranslations } from "next-intl"

export default function TeamSection() {
  const t = useTranslations("team")

  const founders = [
    { name: t("founders.founder1.name"), role: t("founders.founder1.role") },
    { name: t("founders.founder2.name"), role: t("founders.founder2.role") },
    { name: t("founders.founder3.name"), role: t("founders.founder3.role") },
  ]

  const leads = [
    { name: t("leads.lead1.name"), role: t("leads.lead1.role") },
    { name: t("leads.lead2.name"), role: t("leads.lead2.role") },
    { name: t("leads.lead3.name"), role: t("leads.lead3.role") },
    { name: t("leads.lead4.name"), role: t("leads.lead4.role") },
    { name: t("leads.lead5.name"), role: t("leads.lead5.role") },
    { name: t("leads.lead6.name"), role: t("leads.lead6.role") },
  ]

  return (
    <section id="team" className="py-24 bg-white border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">{t("title")}</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl">{t("subtitle")}</p>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl mb-8">{t("founders.title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="border border-black">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={`/professional-portrait.png?height=400&width=400&query=professional portrait ${founder.name}`}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl mb-1">{founder.name}</div>
                  <div className="text-sm text-gray-600">{founder.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leads */}
        <div>
          <h3 className="font-display font-bold text-2xl mb-8">{t("leads.title")}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leads.map((lead) => (
              <div key={lead.name} className="border border-black">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={`/professional-portrait.png?height=300&width=300&query=professional portrait ${lead.name}`}
                    alt={lead.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-lg mb-1">{lead.name}</div>
                  <div className="text-sm text-gray-600">{lead.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

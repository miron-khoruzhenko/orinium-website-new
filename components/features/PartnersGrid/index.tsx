import { PartnersData } from "@/types/sanity"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

export default async function PartnersGrid(props: {
  data: PartnersData | null
}) {
  const t = await getTranslations("home.partners")

  // const partners = ["Yıldız Technical University", "Teknopark Istanbul", "TUBITAK", "IEEE", "ROS Industrial", "NVIDIA"]
  const partners = props.data?.partners || [
    { name: "Yıldız Technical University", website: "https://www.yildiz.edu.tr/en/" },
    { name: "Teknopark Istanbul", website: "https://www.teknoparkistanbul.com/en/" },
    { name: "TUBITAK", website: "https://www.tubitak.gov.tr/en" },
  ]

  return (
    <section id="partners" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4 text-center">{t("title")}</h2>
        <p className="text-xl text-gray-400 mb-16 text-center">{t("subtitle")}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.website || '#'}
              className="border border-white p-8 flex items-center justify-center hover:bg-white hover:text-black transition-colors group"
            >
              <span className="font-display font-bold text-lg text-center">{partner.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function RDGrid() {
  const t = useTranslations("home.rd")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const areas = [
    {
      title: t("robotics.title"),
      description: t("robotics.description"),
      icon: "cube",
    },
    {
      title: t("ai.title"),
      description: t("ai.description"),
      icon: "brain",
    },
    {
      title: t("embedded.title"),
      description: t("embedded.description"),
      icon: "chip",
    },
  ]

  return (
    <section id="rd" className="py-24 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">{t("subtitle")}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border border-white p-8 hover:bg-white hover:text-black transition-colors group"
              >
                <div className="w-16 h-16 border border-white group-hover:border-black mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white group-hover:bg-black" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{area.title}</h3>
                <p className="leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

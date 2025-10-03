"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const t = useTranslations("about")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    { year: "2022", text: t("milestones.2022") },
    { year: "2023", text: t("milestones.2023") },
    { year: "2024", text: t("milestones.2024") },
    { year: "2025", text: t("milestones.2025") },
  ]

  return (
    <section id="about" className="py-24 bg-white border-t border-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-12">{t("title")}</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{t("description1")}</p>
              <p className="text-lg leading-relaxed">{t("description2")}</p>
            </div>

            <div className="bg-gray-100 aspect-video flex items-center justify-center">
              <img src="/robotics-laboratory-with-autonomous-systems.jpg" alt="ORINIUM Lab" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Milestones */}
          <div>
            <h3 className="font-display font-bold text-2xl mb-8">{t("milestones.title")}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-black p-6"
                >
                  <div className="font-display font-bold text-3xl mb-3">{milestone.year}</div>
                  <p className="text-sm leading-relaxed">{milestone.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

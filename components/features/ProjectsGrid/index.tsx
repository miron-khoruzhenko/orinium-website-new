"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProjectsGrid() {
  const t = useTranslations("home.projects")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: "ARES",
      fullName: t("ares.fullName"),
      description: t("ares.description"),
      specs: [t("ares.spec1"), t("ares.spec2"), t("ares.spec3")],
      image: "/tracked-unmanned-ground-vehicle-ugv-robot.jpg",
    },
    {
      name: "BR-01",
      fullName: t("br01.fullName"),
      description: t("br01.description"),
      specs: [t("br01.spec1"), t("br01.spec2"), t("br01.spec3")],
      image: "/self-balancing-two-wheeled-robot.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white border-t border-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">{t("subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border border-black group hover:scale-[1.02] transition-transform"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="p-8">
                  <div className="font-display font-bold text-3xl mb-2">{project.name}</div>
                  <div className="text-sm text-gray-600 mb-4">{project.fullName}</div>
                  <p className="leading-relaxed mb-6">{project.description}</p>
                  <ul className="space-y-2">
                    {project.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

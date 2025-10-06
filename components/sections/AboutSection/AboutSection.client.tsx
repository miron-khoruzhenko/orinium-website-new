'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import PortableTextRenderer from "@/components/layout/PortableTextRenderer";

// Определяем типы для пропсов, чтобы было чисто
type Milestone = {
  item_title: string;
  item_content: string;
};

type AboutSectionClientProps = {
  title: string;
  description: any[]; // Portable Text
  milestonesTitle: string;
  milestones: Milestone[];
  imgeUrl?: string;
  imageAlt?: string;
};

export default function AboutSectionClient({
  title,
  description,
  milestonesTitle,
  milestones,
  imgeUrl,
  imageAlt
}: AboutSectionClientProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  


  return (
    <section id="about" className="py-24 bg-white border-t border-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-12">{title}</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              {
                description[0]._key ? <PortableTextRenderer value={description} /> :
                  description.map((para, idx) => (
                    <p key={idx} className="text-lg leading-relaxed">{para}</p>
                  ))}
            </div>
            <div className="bg-gray-100 aspect-video flex items-center justify-center">
              <ImageWithSkeleton
                loading="lazy"
                width={800}
                height={600}
                src={imgeUrl || "/robotics-laboratory-with-autonomous-systems.jpg"}
                alt={imageAlt || "ORINIUM Lab"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl mb-8">{milestonesTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.item_title + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-black p-6"
                >
                  <div className="font-display font-bold text-3xl mb-3">{milestone.item_title}</div>
                  <p className="text-sm leading-relaxed">{milestone.item_content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
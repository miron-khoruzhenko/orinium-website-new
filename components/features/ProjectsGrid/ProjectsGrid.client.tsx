"use client"


import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image";
import { useRef } from "react"

interface ProjectGridClientProps {
	title: string;
	subtitle: string;
	projects: {
		name: string;
		fullName: string;
		description: string;
		specs: string[];
		image: string;
	}[];
}

export default function ProjectsGridClient({title, subtitle, projects} : ProjectGridClientProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	return (
		<section id="projects" className="py-24 bg-white border-t border-black" ref={ref}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">{title}</h2>
					<p className="text-xl text-gray-600 mb-16 max-w-3xl">{subtitle}</p>

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
									<Image
										width={600}
										height={400}
										loading="lazy"
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

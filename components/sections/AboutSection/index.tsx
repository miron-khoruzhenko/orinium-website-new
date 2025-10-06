import { getTranslations } from "next-intl/server"
import AboutSectionClient from "./AboutSection.client" // Импортируем наш новый клиентский компонент
import { AboutData } from "@/types/sanity"

// Этот компонент теперь серверный по умолчанию, убираем 'use client'
export default async function AboutSection(props: {
  data: AboutData | null
}) {
  const t = await getTranslations("home")

  const backupMilestones = [
    { item_title: "2022", item_content: t("about.milestones.I") },
    { item_title: "2023", item_content: t("about.milestones.II") },
    { item_title: "2024", item_content: t("about.milestones.III") },
    { item_title: "2025", item_content: t("about.milestones.IV") },
  ]
  
  return (
    <AboutSectionClient
      title={props.data?.title || t("about.title")}
      description={props.data?.content || [t("about.description1"), t("about.description2")]}
      milestonesTitle={props.data?.subsection_title || t("about.milestones.title")}
      milestones={props.data?.subsection_items || backupMilestones}
      imgeUrl={props.data?.imageUrl}
      imageAlt={props.data?.imageAlt}
    />
  )
}
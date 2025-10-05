import { getTranslations } from "next-intl/server"
import AboutSectionClient from "./AboutSection.client" // Импортируем наш новый клиентский компонент

// Этот компонент теперь серверный по умолчанию, убираем 'use client'
export default async function AboutSection() {
  // 1. Получаем переводы на сервере
  const t = await getTranslations("home.about")

  // 2. Готовим данные для передачи в дочерний компонент
  const milestones = [
    { year: "2023", text: t("milestones.I") },
    { year: "2024", text: t("milestones.II") },
    { year: "2025", text: t("milestones.III") },
    { year: "2026", text: t("milestones.IV") },
  ]

  // 3. Рендерим клиентский компонент и передаем ему все данные как props
  return (
    <AboutSectionClient
      title={t("title")}
      description1={t("description1")}
      description2={t("description2")}
      milestonesTitle={t("milestones.title")}
      milestones={milestones}
    />
  )
}
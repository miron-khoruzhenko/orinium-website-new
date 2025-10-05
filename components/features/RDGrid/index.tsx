import { getTranslations } from "next-intl/server"
import RDGridClient from "./RDGrid.client" // Импортируем наш новый клиентский компонент

// Убираем "use client" - это серверный компонент
export default async function RDGrid() {
  // 1. Получаем переводы на сервере
  const t = await getTranslations("home.rd")

  // 2. Готовим массив с данными
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

  // 3. Рендерим клиентский компонент, передавая данные как props
  return (
    <RDGridClient
      title={t("title")}
      subtitle={t("subtitle")}
      areas={areas}
    />
  )
}
import { getTranslations } from "next-intl/server"
import RDGridClient from "./RDGrid.client" // Импортируем наш новый клиентский компонент
import { RndData } from "@/types/sanity"

// Убираем "use client" - это серверный компонент
export default async function RDGrid(props: {
  data: RndData | null
}) {
  // 1. Получаем переводы на сервере
  const t = await getTranslations("home.rd")

  // 2. Готовим массив с данными
  const backupAreas = [
    {
      item_title: t("robotics.title"),
      item_content: t("robotics.description"),
      // icon: "cube",
    },
    {
      item_title: t("ai.title"),
      item_content: t("ai.description"),
      // icon: "brain",
    },
    {
      item_title: t("embedded.title"),
      item_content: t("embedded.description"),
      // icon: "chip",
    },
  ]

  // 3. Рендерим клиентский компонент, передавая данные как props
  return (
    <RDGridClient
      title={props.data?.title || t("title")}
      subtitle={props.data?.content || t("subtitle")}
      areas={props.data?.subsection_items || backupAreas}
    />
  )
}
"use client";

import {useTranslations} from "next-intl";
import TeamSectionView from "./View";

type Person = { id?: string; name: string; role: string };

export default function TeamSection() {
  const t = useTranslations("home");

  const founders = (t.raw("team.founders") as Person[]) ?? [];
  const leads = (t.raw("team.leads") as Person[]) ?? [];

  return (
    <TeamSectionView
      title={t("team.title")}
      subtitle={t("team.subtitle")}
      foundersTitle={t("team.sections.founders")}
      leadsTitle={t("team.sections.leads")}
      founders={founders}
      leads={leads}
    />
  );
}


// // Убираем "use client";

// import {getTranslations} from "next-intl/server"; // Импортируем серверную функцию
// import TeamSectionView from "./View";

// type Person = { id?: string; name: string; role: string };

// // Компонент становится асинхронным, чтобы использовать await
// export default async function TeamSection() {
//   const t = await getTranslations("home"); // Используем await getTranslations

//   const founders = (t.raw("team.founders") as Person[]) ?? [];
//   const leads = (t.raw("team.leads") as Person[]) ?? [];

//   return (
//     <TeamSectionView
//       title={t("team.title")}
//       subtitle={t("team.subtitle")}
//       foundersTitle={t("team.sections.founders")}
//       leadsTitle={t("team.sections.leads")}
//       founders={founders}
//       leads={leads}
//     />
//   );
// }
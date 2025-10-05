import {getTranslations} from "next-intl/server";
import TeamSectionView from "./View";

type Person = { id?: string; name: string; role: string };

export default async function TeamSection() {
  const t = await getTranslations("home");

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
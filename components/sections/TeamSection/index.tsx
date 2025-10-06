import {getTranslations} from "next-intl/server";
import TeamSectionView from "./View";
import { TeamData } from "@/types/sanity";

type Person = { id?: string; name: string; role: string };

export default async function TeamSection(props: {
  data: TeamData | null
}) {
  const t = await getTranslations("home");

  // const founders = (t.raw("team.founders") as Person[]) ?? [];
  // const leads = (t.raw("team.leads") as Person[]) ?? [];

  const founders = props.data?.founders
  const leads = props.data?.leads

  return (
    <TeamSectionView
      title={props.data?.title || t("team.title")}
      subtitle={props.data?.subtitle || t("team.subtitle")}
      foundersTitle={t("team.sections.founders")}
      leadsTitle={t("team.sections.leads")}
      founders={founders || []}
      leads={leads || []}
    />
  );
}
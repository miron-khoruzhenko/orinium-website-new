import { getTranslations } from 'next-intl/server'
import ProjectsGridClient from './ProjectsGrid.client'
// import { getProjects, SanityProject } from '@/sanity/utils/get-projects'
import { ProjectSectionData } from '@/types/sanity'

// export default async function ProjectsGrid({ params } : {params: {locale: string}}) {
export default async function ProjectsGrid(props: { data: ProjectSectionData | null }) {
	const t = await getTranslations("home.projects")
	const backupProjects = [
		{
			_id: "ares",
			slug: "ares",
			name: "ARES",
			title: "ARES",
			subtitle: t("ares.fullName"),
			content: t("ares.description"),
			specs: [t("ares.spec1"), t("ares.spec2"), t("ares.spec3")],
			imageUrl: "/tracked-unmanned-ground-vehicle-ugv-robot.jpg",
		},
		{
			_id: "br01",
			slug: "br01",
			name: "BR-01",
			title: "BR-01",
			subtitle: t("br01.fullName"),
			content: t("br01.description"),
			specs: [t("br01.spec1"), t("br01.spec2"), t("br01.spec3")],
			imageUrl: "/self-balancing-two-wheeled-robot.jpg",
		},
	]
	return (
		<ProjectsGridClient
			title={props.data?.title || t("title")}
			subtitle={props.data?.subtitle || t("subtitle")}
			projects={props.data?.projects || backupProjects}
		/>
	)

}
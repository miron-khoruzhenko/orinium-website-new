import { getTranslations } from 'next-intl/server'
import ProjectsGridClient from './ProjectsGrid.client'
import { getProjects, SanityProject } from '@/sanity/utils/get-projects'

// export default async function ProjectsGrid({ params } : {params: {locale: string}}) {
export default async function ProjectsGrid(props : { locale: Locale }) {
	const t = await getTranslations("home.projects")

	const cmsProjects : SanityProject[] = await getProjects(props.locale)

	// const projects = [
	// 	{
	// 		name: "ARES",
	// 		fullName: t("ares.fullName"),
	// 		description: t("ares.description"),
	// 		specs: [t("ares.spec1"), t("ares.spec2"), t("ares.spec3")],
	// 		image: "/tracked-unmanned-ground-vehicle-ugv-robot.jpg",
	// 	},
	// 	{
	// 		name: "BR-01",
	// 		fullName: t("br01.fullName"),
	// 		description: t("br01.description"),
	// 		specs: [t("br01.spec1"), t("br01.spec2"), t("br01.spec3")],
	// 		image: "/self-balancing-two-wheeled-robot.jpg",
	// 	},
	// ]

	return (
		<ProjectsGridClient
			title={t("title")}
			subtitle={t("subtitle")}
			projects={cmsProjects}
		/>
	)

}
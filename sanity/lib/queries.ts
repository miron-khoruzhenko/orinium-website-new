import { groq } from 'next-sanity';

// ✅ Определяем и экспортируем наш главный запрос для домашней страницы
export const HOME_PAGE_QUERY = groq`
  {
    "hero": *[_type == "heroSection" && language == $lang][0],
    "about": *[_type == "aboutSection" && language == $lang][0] {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    "rnd": *[_type == "rndSection" && language == $lang][0],
    "projectSection": *[_type == "projectSection" && language == $lang][0] {
      title,
      subtitle,
      "projects": featuredProjects[]->{
        _id,
        "slug": slug.current,
        "name": project_name,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
        "title": project_title,
        "subtitle": project_subtitle,
        "content": content
      }
    },

    "partners": *[_type == "partnersSection" && language == $lang][0] {
      title,
      subtitle,
      partners[]{ // Проходим по каждому партнеру
        name,
        website
      }
    },
    
    "team": *[_type == "teamSection" && language == $lang][0] {
      title,
      subtitle,
      founders[]{ // Проходим по каждому основателю
        name,
        status,
        "profilePictureUrl": profilePicture.asset->url,
        "alt": profilePicture.alt
      },
      leads[]{ // Проходим по каждому лиду
        name,
        status,
        "profilePictureUrl": profilePicture.asset->url,
        "alt": profilePicture.alt
      }
    }
  }
`;
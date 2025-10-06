// types/sanity.d.ts
export type HeroData = {
  slogan: string;
  title: string;
  subtitle: string;
};

export type AboutData = {
  title: string;
  content: any[]; // Portable Text
  imageUrl: string;
  imageAlt: string;
  subsection_title: string;
  subsection_items: { item_title: string; item_content: string }[];
};

export type ProjectCard = {
  _id: string;
  slug: string;
  name: string;
  imageUrl: string;
  imageAlt?: string | null;
  title: string;
  subtitle: string;
  content: any[] | string; // Portable Text or plain string
  specs?: string[];
};

export type ProjectSectionData = {
  title: string;
  subtitle: string;
  projects: ProjectCard[];
};

export type RndData = {
  title: string;
  content: any[];
  subsection_items: { 
    item_title: string 
    item_content: string
  }[];
};

export type Partner = {
  name: string;
  website: string;
};
export type PartnersData = {
  title: string;
  subtitle: string;
  partners: Partner[];
};

export type TeamMember = {
  name: string;
  status: string;
  profilePictureUrl: string;
  alt: string | null;
};
export type TeamData = {
  title: string;
  subtitle: string;
  founders: TeamMember[];
  leads: TeamMember[];
};

export type HomePageData = {
  hero: HeroData;
  about: AboutData;
  rnd: RndData;
  projectSection: ProjectSectionData;
  partners: PartnersData;
  team: TeamData;        
};
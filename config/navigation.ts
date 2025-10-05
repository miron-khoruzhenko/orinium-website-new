export const ANCHORS = {
  home: "home",
  about: "about",
  rd: "rd",
  projects: "projects",
  partners: "partners",
  team: "team",
  contact: "contact",
}

export const getAnchorLink = (anchor: keyof typeof ANCHORS) => `#${ANCHORS[anchor]}`

export const navLinks = [
  { href: `#${ANCHORS.home}`, key: "nav.home" },
  { href: `#${ANCHORS.about}`, key: "nav.about" },
  { href: `#${ANCHORS.rd}`, key: "nav.rd" },
  { href: `#${ANCHORS.projects}`, key: "nav.projects" },
  { href: `#${ANCHORS.partners}`, key: "nav.partners" },
  { href: `#${ANCHORS.team}`, key: "nav.team" },
  { href: `#${ANCHORS.contact}`, key: "nav.contact" },
] as const

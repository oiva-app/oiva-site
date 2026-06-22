import type { ImageMetadata } from "astro";
import jonathanHeadshot from "../assets/team/jonathan-mcnair.png";
import stevenHeadshot from "../assets/team/steven-valenziano.png";
import tiiaHeadshot from "../assets/team/tiia-rikama.png";
import valerieHeadshot from "../assets/team/valerie-racine.png";

export type TeamMember = {
  name: string;
  location: string;
  initials: string;
  headshot?: ImageMetadata;
  emailUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jonathan McNair",
    location: "Atlanta, GA, United States",
    initials: "JM",
    headshot: jonathanHeadshot,
    githubUrl: "https://github.com/unlikelykoala",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-mcnair-aa3b47ab/",
  },
  {
    name: "Valerie Racine",
    location: "Sparks, NV, United States",
    initials: "VR",
    headshot: valerieHeadshot,
    githubUrl: "https://github.com/v-racine",
    linkedinUrl: "https://www.linkedin.com/in/valerie-racine-743a08241/",
  },
  {
    name: "Tiia Rikama",
    location: "Los Altos, CA, United States",
    initials: "TR",
    headshot: tiiaHeadshot,
    githubUrl: "https://github.com/tiiarikama",
    linkedinUrl: "https://www.linkedin.com/in/tiia-rikama-02b491239/",
  },
  {
    name: "Steven Valenziano",
    location: "Durham, NC, United States",
    initials: "SV",
    headshot: stevenHeadshot,
    githubUrl: "https://github.com/svalenziano",
    linkedinUrl: "https://www.linkedin.com/in/stevenvalenziano/",
  },
];

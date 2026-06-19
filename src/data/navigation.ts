import { withBase } from "../lib/urls";

export const githubUrl = "https://github.com/oiva-app/oiva";

export const navLinks = [
  {
    label: "Case Study",
    href: withBase("/case-study/"),
    match: "/case-study/",
  },
  {
    label: "Getting Started",
    href: withBase("/getting-started/"),
    match: "/getting-started/",
  },
  {
    label: "Team",
    href: withBase("/team/"),
    match: "/team/",
  },
];

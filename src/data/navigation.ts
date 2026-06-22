import { withBase } from "../lib/urls";

export const githubUrl = "https://github.com/oiva-app/oiva";

export const navLinks = [
  {
    label: "Case Study",
    href: withBase("/case-study/"),
    match: "/case-study/",
  },
  {
    label: "Get Started",
    href: withBase("/get-started/manual-setup/"),
    match: "/get-started/",
    children: [
      {
        label: "Manual Setup",
        href: withBase("/get-started/manual-setup/"),
        match: "/get-started/manual-setup/",
      },
      {
        label: "Configuration",
        href: withBase("/get-started/configuration/"),
        match: "/get-started/configuration/",
      },
    ],
  },
  {
    label: "Team",
    href: withBase("/team/"),
    match: "/team/",
  },
];

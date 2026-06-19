import { withBase } from "./urls";

export type SectionKey = "caseStudy" | "gettingStarted";

export type SectionPage = {
  href: string;
  label: string;
  title: string;
  description: string;
  id: string;
  order: number;
  headings: HeadingLink[];
};

export type HeadingLink = {
  depth: number;
  slug: string;
  text: string;
};

const sectionBasePath: Record<SectionKey, string> = {
  caseStudy: "/case-study",
  gettingStarted: "/getting-started",
};

export const sectionTitles: Record<SectionKey, string> = {
  caseStudy: "Case Study",
  gettingStarted: "Getting Started",
};

export function toSinglePageSidebarPages(
  section: SectionKey,
  headings: HeadingLink[],
): SectionPage[] {
  const pages: SectionPage[] = [];

  headings.forEach((heading) => {
    if (heading.depth === 2) {
      pages.push({
        href: withBase(`${sectionBasePath[section]}/#${heading.slug}`),
        label: heading.text,
        title: heading.text,
        description: "",
        id: heading.slug,
        order: pages.length + 1,
        headings: [],
      });

      return;
    }

    if (heading.depth === 3 && pages.length > 0) {
      pages[pages.length - 1].headings.push(heading);
    }
  });

  return pages;
}

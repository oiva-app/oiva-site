import { withBase } from "./urls";

export type SectionKey = "caseStudy" | "getStarted";

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
  children?: HeadingLink[];
};

const sectionBasePath: Record<SectionKey, string> = {
  caseStudy: "/case-study",
  getStarted: "/get-started",
};

export const sectionTitles: Record<SectionKey, string> = {
  caseStudy: "Case Study",
  getStarted: "Get Started",
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

export function toSectionSidebarPages(
  section: SectionKey,
  entries: {
    entry: {
      id: string;
      data: {
        title: string;
        description: string;
        order: number;
        sidebarLabel?: string;
      };
    };
    headings: HeadingLink[];
  }[],
): SectionPage[] {
  return entries
    .map(({ entry, headings }) => ({
      href: withBase(`${sectionBasePath[section]}/${entry.id}/`),
      label: entry.data.sidebarLabel ?? entry.data.title,
      title: entry.data.title,
      description: entry.data.description,
      id: entry.id,
      order: entry.data.order,
      headings: toNestedHeadingLinks(headings),
    }))
    .sort((a, b) => a.order - b.order);
}

function toNestedHeadingLinks(headings: HeadingLink[]): HeadingLink[] {
  const nestedHeadings: HeadingLink[] = [];

  headings.forEach((heading) => {
    if (heading.depth === 2) {
      nestedHeadings.push({ ...heading, children: [] });
      return;
    }

    if (heading.depth === 3 && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].children?.push(heading);
    }
  });

  return nestedHeadings;
}

import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

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

export async function getSectionEntries(section: SectionKey) {
  const entries = await getCollection(section);

  return entries.sort((a, b) => {
    if (a.data.order === b.data.order) {
      return a.id.localeCompare(b.id);
    }

    return a.data.order - b.data.order;
  });
}

export function mapSectionPages(
  section: SectionKey,
  entries: CollectionEntry<SectionKey>[],
): SectionPage[] {
  return entries.map((entry) => ({
    href: `${sectionBasePath[section]}/${entry.id}/`,
    label: entry.data.sidebarLabel ?? entry.data.title,
    title: entry.data.title,
    description: entry.data.description,
    id: entry.id,
    order: entry.data.order,
    headings: [],
  }));
}

export function getAdjacentPages(pages: SectionPage[], currentId: string) {
  const index = pages.findIndex((page) => page.id === currentId);

  return {
    previous: index > 0 ? pages[index - 1] : undefined,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined,
  };
}

export function toHeadingLinks(headings: HeadingLink[]) {
  return headings.filter((heading) => heading.depth === 2);
}

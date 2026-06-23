// Home page hero content. Kept separate from presentation so copy can be
// edited without touching layout, matching the data-module pattern used by
// navigation.ts and team.ts.

// Verbs the hero headline cycles through. Kept deliberately descriptive
// (what Oiva actually does) to avoid over-promising an auto-fix. They are
// also rendered (hidden) in the headline's sizer so the rotation script can
// read them straight from the DOM.
export const heroVerbs = ["examines", "analyzes", "diagnoses", "untangles"] as const;

// Headline reads: "{heroLeadIn} {verb}" / "{heroTrailing}" (verb ends line 1).
export const heroLeadIn = "Oiva";
export const heroTrailing = "your production incidents";

// "evidence‑backed" uses a non-breaking hyphen (U+2011) so the compound
// never splits across lines. Used as both the visible subtext and the page
// meta description.
export const heroSubtext =
  "An open-source service for AI-assisted incident investigations, delivering evidence‑backed reports from your observability stack and codebase.";

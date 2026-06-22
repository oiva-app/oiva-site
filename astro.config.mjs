// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import GithubSlugger from 'github-slugger';

const anchorableHeadingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

function createHeadingAnchor(id, label) {
  return {
    type: 'element',
    tagName: 'a',
    properties: {
      className: ['heading-anchor'],
      href: `#${id}`,
      ariaLabel: `Link to ${label || 'section'}`,
    },
    children: [
      {
        type: 'element',
        tagName: 'svg',
        properties: {
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        children: [
          {
            type: 'element',
            tagName: 'path',
            properties: {
              d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
            },
            children: [],
          },
          {
            type: 'element',
            tagName: 'path',
            properties: {
              d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
            },
            children: [],
          },
        ],
      },
    ],
  };
}

function getNodeText(node) {
  if (!node || typeof node !== 'object') {
    return '';
  }

  if (node.type === 'text') {
    return node.value;
  }

  if (!Array.isArray(node.children)) {
    return '';
  }

  return node.children.map(getNodeText).join('');
}

function hasHeadingAnchor(node) {
  return node.children.some((child) => {
    const className = child.properties?.className;

    return (
      child.type === 'element'
      && child.tagName === 'a'
      && (
        className === 'heading-anchor'
        || (Array.isArray(className) && className.includes('heading-anchor'))
      )
    );
  });
}

function addHeadingAnchors(node, slugger) {
  if (!node || typeof node !== 'object') {
    return;
  }

  if (
    node.type === 'element'
    && anchorableHeadingTags.has(node.tagName)
    && Array.isArray(node.children)
    && !hasHeadingAnchor(node)
  ) {
    node.properties ??= {};

    const label = getNodeText(node).trim();
    const id = typeof node.properties.id === 'string'
      ? node.properties.id
      : slugger.slug(label);

    node.properties.id = id;
    node.children.push(createHeadingAnchor(id, label));
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => addHeadingAnchors(child, slugger));
  }
}

function rehypeHeadingAnchors() {
  return (tree) => {
    addHeadingAnchors(tree, new GithubSlugger());
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://oiva-app.github.io',
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeHeadingAnchors],
    }),
  },
  integrations: [mdx()],
});

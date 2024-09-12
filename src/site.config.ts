import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Chris Williams",
	title: "Astro Theme Cactus",
	description: "An opinionated starter theme for Astro",
	lang: "en-GB",
	ogLocale: "en_GB",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/adikris.in/webmention",
		pingback: "https://webmention.io/adikris.in/xmlrpc",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/blog/",
	},
	{
		title: "About",
		path: "/blog/about/",
	},
	{
		title: "Blog",
		path: "/blog/posts/",
	},
];
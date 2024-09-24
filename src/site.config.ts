import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "adithya krishna",
	title: "Adi's Blog",
	description: "my blogs and short essays",
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
		title: "home",
		path: "/blog/",
	},
	{
		title: "about",
		path: "/blog/about/",
	},
	{
		title: "blog",
		path: "/blog/posts/",
	},
];

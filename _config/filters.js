import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addFilter(
		"readableDate",
		(dateObj, locale = "de", format, zone) => {
			// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
			return DateTime.fromJSDate(dateObj, { zone: zone || "utc" })
				.setLocale(locale)
				.toFormat(format || "dd LLLL yyyy");
		},
	);

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
			"yyyy-LL-dd",
		);
	});

	eleventyConfig.addNunjucksFilter("limit", (arr, limit) =>
		arr.slice(0, limit),
	);

	eleventyConfig.addFilter("filterByLanguage", (items, language) => {
		return (items || []).filter((item) => item.data.lang === language);
	});

	eleventyConfig.addFilter("includeCurrentLocale", (links, language) => {
		return [...(links || []), { lang: language }];
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(
			(tag) => tag !== "all" && !tag.startsWith("posts"),
		);
	});

	eleventyConfig.addFilter("getLocaleTags", (collections, language) => {
		return Object.keys(collections || {})
			.filter((tag) => tag !== "all" && !tag.startsWith("posts"))
			.filter((tag) =>
				collections[tag].some((item) => item.data.lang === language),
			);
	});
}

/** @type {import("next").NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
	"./i18n/i18n.ts"
);

const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});
		return config;
	}
};

export default withNextIntl(nextConfig);

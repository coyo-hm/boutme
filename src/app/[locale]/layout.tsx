import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@i18n/routing";
import Container from "@components/container";

export default async function LocaleLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Container>{children}</Container>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}


export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}


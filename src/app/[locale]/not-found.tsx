import { redirect } from "@i18n/routing";

export default function NotFound(message: string) {
	return redirect("/")
}
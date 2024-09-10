import { redirect } from "next/navigation";

export default function NotFound(message: string) {
	return redirect("/ko")
}

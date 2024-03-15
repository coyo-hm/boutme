import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

export default function PageTitle({ ...rest }: Props) {
	return <header {...rest} className={`${rest?.className} font-extrabold text-5xl`} />;
}

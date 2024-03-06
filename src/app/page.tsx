import Container from "@components/Container";
import Home from "@components/Home";
import Abouts from "@components/Abouts"
import Skills from "@components/Skills"
import Projects from "@components/Projects"
import Careers from "@components/Careers"
import Activities from "@components/Activities"

export default function Main() {
	return (
		<Container>
			<Home/>
			<Abouts />
			<Skills />
      <Projects/>
			<Careers/>
			<Activities/>
		</Container>
	)
}

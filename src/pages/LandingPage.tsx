import React, { useEffect } from "react"
import { Grid } from "@material-ui/core"

import LandingHeader from "../components/sections/LandingHeader"
import ContactSection from "../components/sections/ContactSection"
import ServicesSection from "../components/sections/ServicesSection"
import DocumentationSection from "../components/sections/DocumentationSection"
import AboutSection from "../components/sections/AboutSection"
import JurisprudencesSection from "../components/sections/JurisprudencesSection"

export default function LandingPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<LandingHeader />
				</Grid>
				<Grid item xs={12}>
					<ContactSection />
				</Grid>
				<Grid item xs={12} id="services">
					<ServicesSection />
				</Grid>
				<Grid item xs={12} id="documentation">
					<DocumentationSection />
				</Grid>
				<Grid item xs={12} id="about-us">
					<AboutSection showLink={true} title="Conócenos" />
				</Grid>
				<Grid item xs={12} id="jurisprudences">
					<JurisprudencesSection />
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

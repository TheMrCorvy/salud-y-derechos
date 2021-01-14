import React, { lazy } from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))

const Routes = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/conocenos" component={AboutPage} />
				<Route path="/" component={LandingPage} />
				{/* <Redirect to="/" /> */}
			</Switch>
		</Layout>
	</BrowserRouter>
)

export default Routes

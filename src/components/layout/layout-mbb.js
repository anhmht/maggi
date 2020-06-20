/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "bulma/css/bulma.css";
import "./layout.scss"
import "./mbb-style.scss"

const Layout = ({ children }) => {
	return (
		<div className="mbb-wrapper">
			<Header siteTitle="Make a balanced bowl" />
			<main>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
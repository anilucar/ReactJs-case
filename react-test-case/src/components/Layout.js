import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
	<div className="Layout">
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand">hepsiburada.com</a>
			</div>
		</nav>
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired
};

export default Layout;

import React from 'react';
import {
	Navbar,
	NavbarGroup,
	NavbarHeading,
	NavbarDivider,
	Alignment,
	Button
} from '@blueprintjs/core';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
	return (
		<Navbar className="pt-dark pt-fixed-top">
			<NavbarGroup align={Alignment.LEFT}>
				<NavbarHeading>{"Jacob Conley's Portfolio"}</NavbarHeading>
				<NavbarDivider />
				<NavLink to="/">
					<Button href="/" className="pt-minimal" icon="home" text="Home" />
				</NavLink>
				<NavLink to="/test">
					<Button className="pt-minimal" text="test" />
				</NavLink>
			</NavbarGroup>
		</Navbar>
	);
};

export { TopNav };

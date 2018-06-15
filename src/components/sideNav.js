import React from 'react';
import { Column } from 'simple-flexbox';
import { Button, AnchorButton } from '@blueprintjs/core';
import Linkedin from 'react-icons/lib/fa/linkedin';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

import jacob from '../assets/jacob.png';

const SideNav = () => {
	return (
		<div>
			<Column style={styles.sideNav} className="pt-elevation-2">
				<div
					style={{
						width: '80%',
						alignSelf: 'center',
						marginTop: '75px'
					}}
				>
					<img
						className="pt-elevation-4"
						src={jacob}
						style={{ width: '100%', borderRadius: 20 }}
					/>
				</div>
				<hr />
				<AnchorButton
					className="pt-minimal"
					icon={<Linkedin size={15} />}
					href="https://www.linkedin.com/in/jacob-conley-ba10a9156/"
				>
					LinkedIn
				</AnchorButton>
				<AnchorButton
					className="pt-minimal"
					icon={<GoMarkGithub size={15} />}
					href="https://github.com/conley31"
				>
					GitHub
				</AnchorButton>
			</Column>
			<div style={styles.hiddenSide} />
		</div>
	);
};

const styles = {
	sideNav: {
		padding: '70px 0px 20xp 20px',
		minWidth: 220,
		width: 220,
		height: '100vh',
		backgroundColor: 'WhiteSmoke',
		position: 'fixed'
	},
	hiddenSide: {
		padding: '70px 0px 20xp 20px',
		minWidth: 220,
		width: 220,
		height: '100vh'
	}
};

export { SideNav };

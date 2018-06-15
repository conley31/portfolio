import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import { Elevation } from '@blueprintjs/core';

import { TopNav } from '../components/topNav';
import { Resume } from '../components/resume';
import { SideNav } from '../components/sideNav';

export default class Home extends Component {
	render() {
		return (
			<div style={{ backgroundColor: 'lightGray' }}>
				<TopNav />
				<Row flexGrow={1}>
					<SideNav />
					<Resume />
				</Row>
			</div>
		);
	}
}

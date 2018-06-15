import React from 'react';

import { Card } from '@blueprintjs/core';
import { Row, Column } from 'simple-flexbox';

const Resume = () => {
	return (
		<div
			style={{
				width: '100%',
				marginTop: 50,
				justifyContent: 'center'
			}}
		>
			<Card style={{ margin: 10, maxWidth: 750 }}>
				<h5>Resume</h5>
				<Card>
					<h2 style={{ textAlign: 'center' }}>Jacob Conley</h2>
					<h6 style={{ textAlign: 'center', fontWeight: 'normal' }}>
						(815) 985-7702 |
						<a href="mailto: jacob.conley97@gmail.com">
							{' jacob.conley97@gmail.com'}
						</a>
					</h6>
					<hr />
					<br />
					<h5>Objective</h5>
					<p>
						Looking for a job in Computer Science where I will be able to use my
						problem solving and team work skills in order to develop useful and
						innovative software.
					</p>
					<br />
					<h5>Work History</h5>
					<div
						style={{
							borderColor: '#000',
							borderWidth: '0px 0px 0px 2px',
							borderStyle: 'dotted'
						}}
					>
						<div style={{ marginLeft: 20 }}>
							<span style={{ fontWeight: 'bold' }}>05/2017 - 08/2018</span>
							<h5>
								Software Devoloper Intern, By The Book <br />Byron, IL
							</h5>
							Worked on Competitor Analysis to deterimine an effective space in
							the market. Designed an IOS and Android Application using React
							Native, and an API and gateway to manage the software components.
						</div>
					</div>
					<br />
					<h5>Education</h5>
					<div
						style={{
							borderColor: '#000',
							borderWidth: '0px 0px 0px 2px',
							borderStyle: 'dotted'
						}}
					>
						<div style={{ marginLeft: 20 }}>
							<span style={{ fontWeight: 'bold' }}>May 2019</span>
							<h5>
								Bachelor of Science, Purdue University<br />West Lafayette, IN
							</h5>
							3.15 GPA, emphasis in Software Engineering, achieving Certifcate
							in Entrepreneurship, Investment Club Member (2017-2019)
						</div>
					</div>
					<br />
					<h5>Skills</h5>
					<ul>
						<Row flexGrow={1} justifyContent="space-between">
							<Column style={{ width: '50%' }}>
								<li>
									Expertise in C, C++, java, Javascript, React Native, React.js
								</li>
								<li>Shell Scripting</li>
								<li>Troubleshooting and debugging</li>
							</Column>
							<Column style={{ width: '50%' }}>
								<li>Agile/Scrum</li>
								<li>Web and Desktop Applications</li>
								<li>Software Engineering Standard</li>
							</Column>
						</Row>
					</ul>
					<br />
					<h5>Accomplishments</h5>
					<ul>
						<li>Developing a shell using Lexx, Yacc and C++</li>
						<li>
							Key contributor in the design and implimentation of new features
							for the Transforming Drainage Project Web application, sponsored
							byt the Purdue Agriculture Department
						</li>
						<li>
							'Devloped a media rating website, it aggregates movies, music,
							books, and games from different API\'s and allows users to rate
							and review any medial they choose'
						</li>
						<li>
							Developed a React native application, Gateway, and API to allow
							churches to show sermons, events, news and other features to their
							memebers
						</li>
					</ul>
				</Card>
			</Card>
		</div>
	);
};

export { Resume };

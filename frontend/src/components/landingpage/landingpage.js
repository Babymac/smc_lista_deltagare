import React from 'react';
import './landingpage.css';
import Dropzone from 'react-dropzone';
import { PulseLoader } from 'react-spinners';
import { Grid, Row, Col, Button } from 'react-bootstrap';
//---------------------------------------
// Imports and constants
//---------------------------------------

const Landingpage = props => {

	const {
		uploadFile,
		landingpage,
	} = props;

	return (
		<div  className="sitebackground">
			<Grid>
				<Row>
					<h1 className="introHeader"> SMC Deltagar lista </h1>
				</Row>
				<Row>
					<Col md={4} />
					<Col md={4}>
						<Dropzone
							onDrop={uploadFile}
							accept=".csv"
							className='dropzone'>
							<h5 className="dropboxtext">Dra din fil hit, <br/>eller klicka för att lägga till.</h5>
							<h5>
								<br />
								File: {landingpage.file.fileName}
							</h5>
							<PulseLoader
								className="loader"
								sizeUnit="px"
								size={15}
								color="#00bbff"
								loading={landingpage.spinner}
							/>
						</Dropzone>
					</Col>
					<Col md={4} />
				</Row>
			</Grid>
		</div>
	);
};

export default Landingpage;

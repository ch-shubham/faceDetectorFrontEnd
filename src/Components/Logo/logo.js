import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import logo from './logo.png';

const Logo = () =>{
	return (
		<div className = 'ma5 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner">
					<img style={{paddingTop : '20px'}} alt='LOGO'src={logo} />
				</div>
			</Tilt>			
		</div>
	);
};

export default Logo;
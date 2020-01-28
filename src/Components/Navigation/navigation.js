import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
			if(isSignedIn){
				return(
				<nav style = {{display : 'flex' , justifyContent : 'flex-end' }}>
					<p style = {{color:'black'}} onClick={() => onRouteChange('signout')} className = "f3 pa3 shadow-1 light-gray dim black underline pointer">Sign Out</p>
				</nav>
				);	
			}else {
				return(
					<nav style = {{display : 'flex' , justifyContent : 'flex-end' }}>
						<p style = {{color:'black'}} onClick={() => onRouteChange('signin')} className = "f3 pa3 shadow-1 light-gray dim black underline pointer">Sign In</p>
						<p style = {{color:'black'}} onClick={() => onRouteChange('register')} className = "f3 pa3 shadow-1 ml2 light-gray dim black underline pointer">Register</p>
						<p style = {{color:'black'}} onClick={() => onRouteChange('aboutme')} className = "f3 pa3 shadow-1 ml2 light-gray dim black underline pointer">About ME</p>
					</nav>
			 	);
			}
}



export default Navigation;
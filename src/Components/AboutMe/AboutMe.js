import React from 'react';


const AboutMe = () => {
	return (
			<div>
				<p>Hello, my name is Shubham Chaudhary.And I am currently pursuing Bachelor of technology from NIT UTTARAKHAND.I am a passionate Web Developer.<br/><br/>
				Contact: shubham128166@gmail.com</p>
				
				<h3>About this WebAPP</h3>
				<p>
					This is basically a simple face detector app which can detect the face in a photo.Detected face is outlined by blue boundary.
					This app helps you keep record of number of faces detected by you.
				</p>
				<h4>How to Use this WebApp</h4>
				<ul>
					<li>Register on the app from navigation bar if not registered.For already registered users directly signin using your credentials. </li>
					<li>Once logged in you just have to enter the url of the image you want to detect face.</li>
					<li>On each detection the Count is incremented.</li>
				</ul>
				<strong>DON'T WORRY YOUR PASSWORD IS COMPLETELY SAFE WITH US AS WE USE HASHES TO SAVE THE PASSWORD IN OUR DATABASE SO THERE IS NO CHANCE OF GETTING HACKED. </strong>
				<h2>HAPPY DETECTION!!</h2>
			</div>
		)
}

export default AboutMe;
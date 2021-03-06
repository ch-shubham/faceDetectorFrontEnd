import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/navigation.js';
import Logo from './Components/Logo/logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import AboutMe from './Components/AboutMe/AboutMe';

const initialState = {
      input:'',
      imageURL:'',
      box:{},
      route : 'signin',
      isSignedIn : false,
      user : {
        id: '',
        name: '',
        email: '',
        entries: 0,  
        joined : ''
      }
}
 const particleOptions = {	
 	particles: {
		number :{
			value:100,
			density:{
				enable:true,
				value_area:800
			}
		}    			
    }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }
 loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,  
        joined : data.joined 
       }
    })
}
  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow :height -  (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
   this.setState({box: box});
  }
 
  onInputChange = (e) =>{
    this.setState({input: e.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
      fetch('https://ancient-plains-44396.herokuapp.com/imageurl' , {
           method : 'post',
           headers : {'content-type' : 'application/json'},
           body : JSON.stringify({
            input : this.state.input
          })
        })
      .then(response => response.json())
      .then(response => {
        if(response){
          fetch('https://ancient-plains-44396.herokuapp.com/image' , {
           method : 'put',
           headers : {'content-type' : 'application/json'},
           body : JSON.stringify({
            id : this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user , {entries: count}))
          })
          .catch(console.log)
        }
          this.displayFaceBox(this.calculateFaceLocation(response))
  })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState(initialState)
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn,imageURL,route,box } = this.state;
    return (
      <div className = 'App'>
      	<Particles className='particles' params= {particleOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange ={this.onRouteChange} />
        <Logo />
        { 
          route === 'home'
        ? <div>
            <Rank 
              name={this.state.user.name} 
              entries= {this.state.user.entries}
            />
            <ImageLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange = {this.onInputChange}/>
            <FaceRecognition box={box} imageURL={imageURL} />
          </div>
        :(
          route === 'signin'
          ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :(
          route === 'aboutme'
           ?<AboutMe />
           :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
          )          
      }
      </div>
    );
  }
}

export default App;

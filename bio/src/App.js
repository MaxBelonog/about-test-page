import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Citys from './components/Citys';




export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			 name: 'Max Belonog',
			 city: [ "Kiev" , "San Diego" , "Saint Louis" ]	
		};
	}
	
	render() {

		return (
		  <div className = 'App'>
			<div>
      </div>
			<div>
			  <Header name={this.state.name}/>
			</div>
			<div>
			  <About/>
			</div>
			<div>
			  <Citys city={this.state.city}/>
			</div>
			<div>
			  <Footer/>
			</div>
		  </div>
		);
	   
	}
};    



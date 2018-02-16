import React, { Component } from 'react';


export default class Citys extends Component {
    render(){
        let citys = this.props.city.map(function(city){
            return(
                <li key={city}>{city}</li>
            )
        })    
        return(    
            <ul className = 'city'>
                {citys}
            </ul> 
        )  
    }         
}


// unction CityList(props) {
//     const citys = props.citys;
//     const listItems = citys.map({city})=>
//         <li key={city.toString}>
//             <ul>listItems</ul>
//         </li>
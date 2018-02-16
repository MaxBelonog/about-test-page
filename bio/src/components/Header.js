import React, { Component } from 'react';
import { inherits } from 'util';

export default class Header extends Component {
    render(){
        
        return(
            <div className= 'header'>
               <image classNmae = 'pic'> 
                    <img width={200} height={200} alt="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5C8f4yMGfkDftn3l6DerY3Ukl8SaQNsboQMvDL2-PTsTzusU" height="100px" width="auto"/> 
               </image>
                <div className= 'Name'>
                  {this.props.name}
                </div>
            </div>
        )
    }
}
import React, { Component, PropTypes } from 'react';
// import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
// import {Button} from 'react-toolbox/lib/button/Button';
import Recent from '@atlaskit/icon/glyph/recent';

import './style.css';
// import bluePrintImage from '../../images/meetings.png';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';


export default class VideoCard extends Component {

 

  
  render(){
    return (
      
    <div className="card">
      <img className="cardImage" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" alt="Avatar" />
      
      <div className="container">
        <div className="cardHeading">
          <h3><b>Learn to use the Meeting Template</b></h3> 
        </div>
        <div className="cardBody">
          <p>On this tutorial you will learn how to use our meeting blueprint to make your meetings more effective</p> 
        </div>
        <div className="cardFooter">
          <div className="footerElement footerIcon">
          <Recent size="small"/>
          </div>          

          <div className="footerElement">
            <p>15mins</p>
          </div>
          <div className="footerElement">
           <p>element</p>
          </div>
        </div>
      </div>

    </div>
  )
  }
    

}
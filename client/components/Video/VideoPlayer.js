import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends Component {
  render () {
    return <ReactPlayer 
          url='https://www.youtube.com/watch?v=1h1tlQ0KyDY' 
          playing={false}
          controls={true}
           />
  }
}

 
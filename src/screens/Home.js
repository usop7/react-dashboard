import React from 'react';
import Image from 'react-bootstrap/Image';


export default class Home extends React.Component {
  render() {
    return (
      <div className='contentDiv'>
        <h2>Burli Newsroom</h2>
        <Image src={require('../assets/burli1.png')} fluid className='marginBottom' />
        <p>
          The Burli Newsroom System is a leading computer newsroom system designed for radio. It has tools for every step of the news gathering process, from story ideas and assignments right through to broadcast and archiving. Burli is sophisticated, stable and runs in hundreds of newsrooms worldwide — from modest operations with one or two staff to the demanding 24/7 newsrooms of major national broadcasters.
        </p>

        <hr />

        <h2>Burli NE</h2>
        <Image src={require('../assets/burli2.png')} fluid className='marginBottom' />
        <p>
          Burli NE is the next generation newsroom system from Burli Software. It has the tools you’ll find in Burli Newsroom, plus a host of powerful additional features. Burli NE is a scalable, flexible newsroom system for journalists, designed to open up workflows of the modern newsroom.
        </p>
      </div>
    )
  }
}
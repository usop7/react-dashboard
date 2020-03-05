import React from 'react';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import { FaSlidersH, FaUser, FaHeart } from 'react-icons/fa';

export default class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div id='topDefault'>
          <Navbar className="justify-content-between">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Form inline>
              <FaUser className='icon' onClick={() => alert('Welcome to Burli!')} />
              <Link to='/saved'><FaHeart className='icon' /></Link>
              <Link to='/setting'><FaSlidersH className='icon' /></Link>
            </Form>
          </Navbar>
        </div>

        <div id='topMenu'>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <a href='/'>
              <Image 
                src={require('../assets/textlogo.png')} 
                id='topLogo'
              />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <SideNav />
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
              <hr />
              <Form inline>
                <FaUser className='icon' onClick={() => alert('Welcome to Burli!')} />
                <Link to='/saved'><FaHeart className='icon' /></Link>
                <Link to='/setting'><FaSlidersH className='icon' /></Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
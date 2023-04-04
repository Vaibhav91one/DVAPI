import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
</style>


function Header() {

  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);


  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  function handleMouseEnter1() {
    setHovered1(true);
  }

  function handleMouseLeave1() {
    setHovered1(false);
  }

  const headerStyle = hovered ? {
    transition: ' .5s  ease-in-out ',
    color: '#fff',
    padding: '1rem',
    margin: '1rem ',
    borderRadius: '10px',
  } : {
    transition: ' .5s  ease-in-out ',
    color: '#fff',
    padding: '1rem',
    margin: '1rem ',
    borderRadius: '10px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const btn1 = hovered ? {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    border: '.5px solid white',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    boxShadow: '20px 10px 192px 11px rgba(98,246,176)',
    transform: 'translate(10px , -3rem)',
    fontFamily: "'Inconsolata', monospace",

  } : {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    border: '.5px solid purple',
    backgroundColor: 'black',
    transition: ' .5s  ease-in-out ',
    transform: 'translate(10px , -3rem)',
    boxShadow: '20px 10px 192px 11px rgb(174,36,213)',
    fontFamily: "'Inconsolata', monospace",

  };

  const btn2 = hovered ? {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    border: '.5px solid white',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    boxShadow: '20px 10px 192px 11px rgba(98,246,176)',
    // transform: 'scale(1.2)',
    translate: '80rem -3rem',
    // transform: 'scale(1.2) ',
    fontFamily: "'Inconsolata', monospace",

  } : {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    
    border: '.5px solid purple',
    backgroundColor: 'black',
    transition: ' .5s  ease-in-out ',
    // transform: 'translate(82rem, -10rem)',
    translate: '80rem -3rem',

    boxShadow: '20px 10px 192px 11px rgb(174,36,213)',
    fontFamily: "'Inconsolata', monospace",

  };

  const linkStyle = hovered1 ? {textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '2rem',
  transition: ' .5s  ease-in-out ',
  fontFamily: "'Inconsolata', monospace",
  color: "#39ff14",
  opacity: '1 !important',
  // backgroundColor: 'rgba(97,244,68,0.79)',
  borderRadius: '20px',
  padding: '20px',
  margin: '10px',
  // borderRadius: '20px'
  cursor: 'none',
  boxShadow: '-4px -5px 66px 1px rgba(97,244,68,.3)',
  transform: ' scale(1.1, 1.1) rotateY(360deg)',
} : {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '2rem',
    transition: ' .5s  ease-in-out ',
    fontFamily: "'Inconsolata', monospace",
    color: "#39ff14",
    opacity: '1 !important',
    // backgroundColor: 'rgba(97,244,68,0.79)',
    borderRadius: '20px',
    padding: '20px',
    margin: '10px',
    // borderRadius: '20px'
    cursor: 'none',
    boxShadow: '-4px -5px 66px 1px rgba(97,244,68,.3)',
  };



  return (
    <header style={headerStyle} >
      <nav>
        <ul style={navStyle} >
          <a  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={linkStyle}>DVAPI</a>
        </ul>
        < Link to="/">
            <button variant="text" style={btn1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
               Home
            </button>
        </Link>
        < Link to="/App">
            <button variant="text" style={btn2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
               Github
            </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

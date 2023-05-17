import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import  Grid  from "@material-ui/core/Grid";
import { hover } from '@testing-library/user-event/dist/hover';
import "./header.css";

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



  const btn1 =  hovered ? {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '0rem',
    border: '.5px solid rgba(198, 38, 211, 0.8)',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    boxShadow: '20px 10px 192px 11px rgba(198, 38, 211, 0.8)',
    color: 'white',
    fontFamily: "'Inconsolata', monospace",
    boxShadow: '20px 10px 192px 11px rgb(174,36,213)',
    transition: ' .5s  ease-in-out ',
    scale: '1.1'
  } : {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '0rem',
    border: '.5px solid white',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    // boxShadow: '20px 10px 192px 11px rgba(98,246,176)',
    color: 'white',
    fontFamily: "'Inconsolata', monospace",
  }

  

  const btn2 =  hovered ? {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '0rem',
    border: '.5px solid rgba(198, 38, 211, 0.8)',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    boxShadow: '20px 10px 192px 11px rgba(198, 38, 211, 0.8)',
    color: 'white',
    fontFamily: "'Inconsolata', monospace",
    boxShadow: '20px 10px 192px 11px rgb(174,36,213)',
    transition: ' .5s  ease-in-out ',
    scale: '1.1'
  } : {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '0rem',
    border: '.5px solid white',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: "'Inconsolata', monospace",
  }


  const linkStyle = hovered1 ? {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '2rem',
    transition: ' .5s  ease-in-out ',
    fontFamily: "'Inconsolata', monospace",
    // color: "#39ff14",
    color: "black",
    backgroundColor: "rgba(0, 234, 65)",
    borderRadius: '20px',
    padding: '20px',
    margin: '10px',
    borderRadius: '20px',
    cursor: 'none',
    boxShadow: '-4px -5px 66px 1px rgba(0, 255, 60, .5)',

  } : {
    textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '2rem',
  transition: ' .5s  ease-in-out ',
  fontFamily: "'Inconsolata', monospace",
  color: "#39ff14",
  borderRadius: '20px',
  padding: '20px',
  margin: '10px',
  borderRadius: '20px',
  cursor: 'none',
  boxShadow: '-4px -5px 66px 1px rgba(97,244,68,.3)',
  };

 const navstyle = hovered1 ? {
  transform: 'scale(1.1) translateX(1rem)',
 } : { 
 };




  return (
    <header >
      {/* <nav style={headerStyle}>
        < Link to="/">
          <button variant="text" style={btn1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            Home
          </button>
        </Link>
        <ul style={navStyle} >
          <a onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={linkStyle}>DVAPI</a>
        </ul>
        < Link to="https://github.com/Vaibhav91one/DVAPI" target='_blank'>
          <button variant="text" style={btn2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            Github
          </button>
        </Link>
      </nav> */}
      <Grid container className="wrapper" spacing={0}>
        <Grid item xs={4}>
        < Link to="/">
          <button variant="text" style={btn1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            Home
          </button>
        </Link>
        </Grid>
        <Grid item xs={5}>
        <ul lonMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={navstyle}>
          <a onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={linkStyle}>DVAPI</a>
        </ul>
        </Grid>
        <Grid item xs={0}>
        <button variant="text" style={btn2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.open("https://github.com/Vaibhav91one/DVAPI", '_blank')}>
            Github
          </button>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import "./ApiPlayground.css";
import { useLocation } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const ApiPlayground = () => {
  const location = useLocation()
  const { main, main2, main3, main4, main5} = location.state
  console.log(main5)
  const [flag, setFlag] = useState('');
  const [display, setDisplay] = useState('');
  const [clicked, setClicked] = useState(false);
  
  function handleCheckOut() {
    setClicked(true);
  }
  let flagToCheck = process.env[`REACT_APP_FLAG_${main3}`];


  const handleSubmit = (event) => {
    event.preventDefault();
    // Check the environment stored flag value here
    if (flag === flagToCheck) {
      setDisplay('Correct!');
    } else {
      setDisplay('Incorrect!');
    }
  }

  const handleChange = (e) => {
    setFlag(e.target.value);
  };



  return (
    <div> 
      < Link to="/DVAPI" className="back-btn">
          <button>Back</button>
        </Link>
    <Grid container className="wrapper" spacing={0}>
      <Grid item xs={5}>
        <h1 className="about-Vulnerability-h1 about-Vulnerability-left"> {main}</h1>
        <h4 className="about-Vulnerability-h4" > {main2} </h4>
      </Grid>
      <Grid className="Vulnerability-example" item xs={5}>
        <h2> Having Problem Solving?</h2>
        <h5>Check out the writeup for this challenge</h5>
        <button className="btn-check" onClick={handleCheckOut}>Check Out!</button>
        {clicked && <p>{main5}</p>}
      </Grid>
      <Grid item xs={10} >
        <div className="btn-check-1" onClick={() => window.open(main4, '_blank')}>
          <p>Go To Challenge</p>
        </div>
      </Grid>
      <Grid item xs={10}>
        <div className="submit-flag">
          <form onSubmit={handleSubmit}>
            <label>
              Submit Flag:
              <input type="text" name="flag" value={flag} placeholder="FLAG{XXXXXXXXXXX}" onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          {display && <p>{display}</p>}
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default ApiPlayground;

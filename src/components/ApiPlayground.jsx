import React, { useState } from "react";
import axios from "axios";
import "./ApiPlayground.css";
import { useLocation } from 'react-router-dom';
import  Grid  from "@material-ui/core/Grid";

const ApiPlayground = () => {
  const location = useLocation()
  const { url1 } = location.state
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [params, setParams] = useState("");
  const [headers, setHeaders] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleParamsChange = (event) => {
    setParams(event.target.value);
  };

  const handleHeadersChange = (event) => {
    setHeaders(event.target.value);
  };

  const handleSendRequest = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios({
        method,
        url,
        params: JSON.parse(params),
        headers: JSON.parse(headers),
      });

      setResponse(JSON.stringify(response.data, null, 2));
      setLoading(false);
      setError("");
    } catch (error) {
      setResponse("");
      setLoading(false);
      setError(error.message);
    }
  };

  return (
      <Grid container className="wrapper" spacing={2}>
        <Grid item xs={5}>
          <h1 className="about-Vulnerability-h1 about-Vulnerability-left"> Vulnerability</h1>
          <h4 className="about-Vulnerability-h4" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente totam assumenda saepe aliquid officiis, dolores explicabo quasi ab iste sed. Minima a, doloribus dicta reprehenderit suscipit quisquam numquam quo tenetur!</h4>
        </Grid>
        <Grid className="Vulnerability-example" item xs={5}>
          <h2> Example Request</h2>
          <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique ipsam ducimus. Vero pariatur modi corrupti nostrum exercitationem mollitia perspiciatis quae sed debitis quibusdam illum maxime, natus similique facilis. Similique?</h5>
        </Grid>
        <Grid item xs={5}>
            <div className="params-container">
              <form className="params-form">
                <label>
                  URL:
                  <input type="text" value={url} onChange={handleUrlChange} placeholder={url1} />
                </label>
                <label>
                  Method:
                  <select value={method} onChange={handleMethodChange}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                </label>
                <label>
                  Params:
                  <textarea value={params} onChange={handleParamsChange}></textarea>
                </label>
                <label>
                  Headers:
                  <textarea value={headers} onChange={handleHeadersChange}></textarea>
                </label>
                <button className="button" onClick={handleSendRequest} disabled={loading}>
                  {loading ? "Loading..." : "Send Request"}
                </button>
              </form>
            </div>
        </Grid>
        <Grid item xs={5}>
          <div className="response-container">
            <pre className="response">{error || response}</pre>
          </div>
        </Grid>
      </Grid>
  );
}

export default ApiPlayground;

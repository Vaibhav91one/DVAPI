import './App.css';
import ActionCard from './components/Card';
import Header from './components/header.jsx';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <>
      <div className="my-animation">
        <Header />

        <Grid container spacing={0}>

          <Grid container item xs={4}>

            <ActionCard writeup='- click on get info button
- url path would be like this "/API1/accounts/id1/personal_info"
- change id1 to id2 and you have flag.' title={"Broken Object-Level Authorization"} description="Object-level authorization is an access control mechanism that is usually implemented at the code level to validate that a user can access only objects that they should have access to." number={1} url='http://localhost/API1' imageurl='https://res.cloudinary.com/practicaldev/image/fetch/s--vSTkTsKC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/occx26cqp284w5uydwe4.png' />
          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- Register with a new account
- login with new credentials
- go to change name section
- change name to "admin"
- logout and then login again with name "admin" and you have the flag.' title={"Broken User Authentication"} description="When authentication mechanisms are implemented incorrectly, they can allow attackers to assume other user’s identities." number={2} url='http://localhost/API2' imageurl='https://apisecurity.io/encyclopedia/images/owasp/api2.jpg' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- click on get info button
- url path would be like this "/API3/accounts/id1/raw/personal_info"
- go one directory back to "/raw" and you have the flag' title={"Excessive Data Exposure"} description="Developers tend to expose all object properties by default, relying on clients to perform data filtering before displaying to the user." number={3} url='http://localhost/API3' imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Excessive-Data-Exposure-3.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- click on get info button
- refresh the page very quickly and you will get the flag' title={"Lack of Resources and Rate Limiting"} description="Too often APIs do not impose any restrictions on the size or number of resources that can be requested by the client or user. " number={4} url='http://localhost/API4' imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Lack-of-Resources-Rate-Limiting-4.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- click on get info button
- url path would be like this "/API5/api/v1/users/gary/personal_info"
- change it to "/API5/api/v1/users/admin/all_info"' title={"Broken Function-Level Authorization"} description="Authorization flaws can be caused by overly complex access control policies with different hierarchies, groups, and roles, and by an unclear separation between administrative and regular functions." number={5} url='http://localhost/API5' imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Broken-Function-Level-Authorization-5.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- click on get info button
- capture the POST request in burpsuite when clicking on the get info button
- in the request observe the cookies
- change "isadmin=true" instead of false and resend the request
- now observe the response and there is flag' title={"Mass Assignment"} description="Modern frameworks encourage developers to use functions that automatically bind input from the client into code variables and internal objects." number={6} url='http://localhost/API6' imageurl='https://varutra-1a3b6.kxcdn.com/wp-content/uploads/2021/10/Mass-Assignment-Vulnerability.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard writeup='- go to "/robots.txt"
- there is a new path "/.config" in disallow
- go to "/.config"
- observe the JSON data
- looks like a request with some special header in it
- capture the POST request in burpsuite when clicking on the get info button
- add the "apikey" header with its value in the request and resend it
- now observe the response and there is flag' title={"Security Misconfiguration"} description="Security misconfiguration can happen at any level of an API stack, from the network level to the application level." number={7} url='http://localhost/API7' imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Security-Misconfiguration-7.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Improper Assets Management"} description="Old API versions are usually unpatched. Improper asset managment can lead to unauthorized access" number={3}  url='http://localhost/API9' writeup='- Register with a new account
- login with new credentials
- go to change name section
- change name to "admin"
- logout and then login again with name "admin" and you have the flag.'  imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Improper-Assets-Management-9.png' />

          </Grid>
        </Grid>

      </div>


    </>
  );
}

export default App;

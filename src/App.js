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

            <ActionCard title={"Broken Object-Level Authorization"} description="Object-level authorization is an access control mechanism that is usually implemented at the code level to validate that a user can access only objects that they should have access to." imageurl='https://res.cloudinary.com/practicaldev/image/fetch/s--vSTkTsKC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/occx26cqp284w5uydwe4.png' />
          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Broken User Authentication"} description="When authentication mechanisms are implemented incorrectly, they can allow attackers to assume other user’s identities." imageurl='https://apisecurity.io/encyclopedia/images/owasp/api2.jpg' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Excessive Data Exposure"} description="Developers tend to expose all object properties by default, relying on clients to perform data filtering before displaying to the user." imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Excessive-Data-Exposure-3.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Lack of Resources and Rate Limiting"} description="Too often APIs do not impose any restrictions on the size or number of resources that can be requested by the client or user. " imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Lack-of-Resources-Rate-Limiting-4.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Broken Function-Level Authorization"} description="Authorization flaws can be caused by overly complex access control policies with different hierarchies, groups, and roles, and by an unclear separation between administrative and regular functions." imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Broken-Function-Level-Authorization-5.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Mass Assignment"} description="Modern frameworks encourage developers to use functions that automatically bind input from the client into code variables and internal objects." imageurl='https://varutra-1a3b6.kxcdn.com/wp-content/uploads/2021/10/Mass-Assignment-Vulnerability.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Security Misconfiguration"} description="Security misconfiguration can happen at any level of an API stack, from the network level to the application level." imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Security-Misconfiguration-7.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Injection"} description="Injection flaws occur when untrusted data is sent to an interpreter as part of a command or query. " imageurl='https://assets.website-files.com/5ff66329429d880392f6cba2/6102950dc21e18db87b70433_API8%20Injection-p-500.png' />

          </Grid>
          <Grid container item xs={4}>

            <ActionCard title={"Improper Assets Management"} description="Old API versions are usually unpatched. Improper asset managment can lead to unauthorized access" imageurl='https://www.indusface.com/wp-content/uploads/2022/01/Improper-Assets-Management-9.png' />

          </Grid>

          <Grid container item xs={4}>

            <ActionCard title={"Insufficient Logging and Monitoring"} description="Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems to tamper with, or extract or destroy data." imageurl='https://4.bp.blogspot.com/-388_kTdMZYw/XIXvjL86HaI/AAAAAAAAAb8/Ab-KZR1xPxceQVgp3wCFfOTJSr0yofyYgCLcBGAs/s1600/ILM.jpg' />

          </Grid>
        </Grid>

      </div>


    </>
  );
}

export default App;

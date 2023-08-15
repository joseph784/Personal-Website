import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CCard from './CCard';

export default function Software(){
    return ( <>
    <CCard title={"Powerex"} text={
        <div>
        <ul> 
            <li>
            <span>Gathering client requirements</span>, designed C# console application for data reconciliation with GemBox
            </li>
            <li>
            Migrated finance application from Angular.js to <span>React.js</span>
            </li>
            </ul> 
            <p>Technologies Utilzed: C#, JavaScript, SQL, Azure DevOps</p></div>
            } role={"Back Office Developer"}/>
        <CCard title={"Cascade Aerospace"} text={
        <div>
        <ul> 
            <li>
            Constructed both server-side and client-side <span>REST APIs</span> for aeronautical scheduling applications 
            </li>
            <li>
            Implemented creative data translation logic to <span>move 100,000+ entries</span> from user widgets to ERP/custom databases   
            </li>
            </ul> 
            <p>Technologies Utilized: C#, .Net CORE, SQL/LINQ, Razor, JavaScript, Swagger, VS </p></div>
            } role={"Full Stack Developer"}/>
                   
        <CCard title={"UBC Rocket"} text={
        <div>
        <ul> 
            <li>
            Implemented ground station <span>formatters and linters</span> with Python 
            </li>
            <li>
            <span>Researched and documented</span> GPS and altimeter radio configurations for ground station communication   
            </li>
            </ul> 
            <p>Technologies Utilzed: Python, PyCharm </p></div>
            } role={"Avionics Team"}/>
</>)
}


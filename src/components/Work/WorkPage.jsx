import { useState } from 'react';
import '../../design.css'
import Button from 'react-bootstrap/Button';
import Software from './Software';
import Business from './Business';

export default function WorkPage(){
    const [softwareTab, setSoftwareTab] = useState(true)
    
    
    return ( <>
        <div className="row">
            <div class="column">
                <Button disabled={softwareTab} className='buttonClass' onClick={() => setSoftwareTab(true)} variant="dark">Software</Button>
            </div>    
            <div class="column">
                <Button disabled={!softwareTab} className='buttonClass' onClick={() => setSoftwareTab(false)} variant="dark">Business</Button>
            </div>  
        </div>
        <br /> 
        <br />
        {softwareTab && <Software />}
        {!softwareTab && <Business />}
        <br />
        <br />
    </>)
}
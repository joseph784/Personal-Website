import './About.css'

import Button from 'react-bootstrap/Button';

export default function AboutPage(){
    return ( 
        <>
        <div class="wrapper" >
	        <div class="box" >
                <p>Hey, I'm Joseph, a 4th year student, studying computer science and business at the University of British Columbia. I 
                love the interplay of technology and people and am always excited to creatively solve real problems with 
                software. 
                </p>
                
            </div>
        </div>
        <h1>Languages</h1>
        <div>
            <Button className='buttonClass' variant="outline-dark">C#</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">C/C++</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">Java</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">JavaScript</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">Python</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">HTML/CSS/Razor</Button>{' '}
            <Button className='buttonClass' variant="outline-dark">SQL/LINQ</Button>{' '}
        </div>
        <h1 style={{color: 'black'}}>Programs/Frameworks</h1>
        <div>
            <Button className='buttonClass' variant="outline-light">ASP.NET CORE</Button>{' '}
            <Button className='buttonClass' variant="outline-light">React.js</Button>{' '}
            <Button className='buttonClass' variant="outline-light">Excel/VBA</Button>{' '}
            <Button className='buttonClass' variant="outline-light">Tableau</Button>{' '}
            <Button className='buttonClass' variant="outline-light">Power BI</Button>{' '}
            <Button className='buttonClass' variant="outline-light">DevExpress</Button>{' '}
        </div>



         </>)
}

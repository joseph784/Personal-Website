import CCard from "./CCard"
import './card.css'

export default function Business(){
    return ( <>
        <CCard title={"IMUNA"} text={
        <div>
        <ul> 
            <li>
            Executive staff with UN-partnered non-profit, overseeing logistics of <span>largest MUN conference in world</span>
            </li>
            <li>
            Collaborated with UN Missions to address concerns and resolve operational challenges
            </li>
            <li>
            <span>Directly managing 20 undergraduate students</span>, facilitating publication of 20+ educational guides  
            </li>
            </ul> 
            </div>
            } role={"Undersecretary General"}/>
        <CCard title={"UBC Social Enterprise Club"} text={
        <div>
        <ul> 
            <li>
            <span>Proposed and acquired $2000 </span>in funding through extensive pitches and inter-dept collab
            </li>
            <li>
            <span>Directly oversaw team</span> of 4 undergraduate students in organizing sustainability conference 
            </li>
            </ul> 
            </div>
            } role={"Vice President"}/>
                   
        <CCard title={"GEOMUN"} text={
        <div>
        <ul> 
            <li>
            <span>Founded and organized</span> international UNHCR-partnered non-profit, <span>raising $2000+</span> for charity
            </li>
            <li>
            <span>Coordinated global team of 40+ staff</span> across 16 countries to host 3-day conference
            </li>
            <li>
            Oversaw all aspects of organization, including marketing, outreach, payment, culture
            </li>
            </ul> 
            </div>
            } role={"Director General"}/>
    </>
    )
}
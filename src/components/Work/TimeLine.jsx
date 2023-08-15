
import ExperiencePopup from './ExperiencePopup'
import './timeline.css'

export default function TimeLine(){
    return( 
        <>
            <div style={{display: 'inline-flex', zIndex: 1}}>
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
                <ExperiencePopup />
            </div>
        </>
    )
}


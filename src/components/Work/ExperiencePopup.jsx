import './experience-popup.css'

export default function ExperiencePopup({title}){
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet"></link>
            <div class="item-hints">
            <div class="hint" data-position="4">
                <span class="hint-radius"></span>
                <span class="hint-dot"></span>
                <div class="hint-content do--split-children">
                <p>{title}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
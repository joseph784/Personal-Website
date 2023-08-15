import './card.css'

export default function CCard({title, role, text, image}){
    return(
        <>
        <div class="container">
	        <div class="front side">
                <div class="content">
                    <h1>{title}</h1>
                    <p>
                        {role}
                    </p>
                </div>
	        </div>
            <div class="back side">
                <div class="content">
                    <p>{text}</p>
                </div>
            </div>
        </div>
        </>
    )
}
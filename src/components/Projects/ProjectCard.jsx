import { Button } from 'react-bootstrap'
import './card.css'

export default function ProjectCard(){
    return(
        <>
<div class="">
  <div class="cards">
    <div class="card card-1">
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Visual AI.d</h2>
      Application which summarizes large text into generated images, designed for storyboarding.  
      <p class="card__apply">
        <a class="card__link" ><Button href="https://github.com/joseph784/nwhack23" target="_blank" variant="outline-dark">Check it out</Button> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card card-2">
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Agenda Planner</h2>
      Interactive agenda designed to prioritize and organize tasks.  
      <p class="card__apply">
        <a class="card__link" ><Button href="https://github.com/joseph784/ActivityPlanner"  target="_blank" variant="outline-dark">Check it out</Button> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="cards">
    <div class="card card-4">
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Language Exchange</h2>
      Application connecting users learning a language with native speakers
      <p class="card__apply">
        <a class="card__link" ><Button href="https://github.com/joseph784/Language-Exchange" target="_blank" variant="outline-dark">Check it out</Button> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card card-3">
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Community Finder</h2>
      Initiative-taking planning application to connect individuals
      <p class="card__apply">
        <a class="card__link" ><Button  target="_blank" variant="outline-dark">Coming Soon</Button> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>

    </div>
    

  </div>
  

</div>
        </>
    )
}
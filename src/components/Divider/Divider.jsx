import './divider.css'
export default function Divider({text}){
    return(
        <>

  <div class="boxD">
    <div class="boxD-sm orange"></div>
    <div class="boxD-sm yellow "></div>
    <div class="boxD-sm green "> <h1 style={{color: 'black', verticalAlign: 'center'}}>{text}</h1></div>
    <div class="boxD-sm blue "></div>
    <div class="boxD-sm purple"></div>
  </div>
        </>
    )
}
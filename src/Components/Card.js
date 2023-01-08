import img1 from '../Images/image.png'
import star from '../Images/Star.png'
import bike from '../Images/bike.png'
import wedding from '../Images/wedding.png'
export default function Card(){
    return(
       <div className='card'>
        <img src={img1} className='card--img'/>
        <div>
            <img src={star} />
            <span>  5.0  </span>
            <span>  (6) - </span>
            <span> USA</span>
            <p> Life lessons with Katie Zaferes</p>
            <p> From $136 / person</p>
        </div>
        </div>
    )
}
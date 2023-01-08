import img1 from '../Images/image.png'
import star from '../Images/Star.png'
import bike from '../Images/bike.png'
import wedding from '../Images/wedding.png'
export default function Card(){
    return(
       <div className='card'>
        <img src={img1} className='card--img'/>
        <div>
            <img src={star} className='card--star' />
            <span >  5.0  </span>
            <span className='gray'>  (6) - </span>
            <span className='gray'> USA</span>
            <p> Life lessons with Katie Zaferes</p>
            <p> <span className='bold'>From $136</span> / person</p>
        </div>
        </div>
    )
}
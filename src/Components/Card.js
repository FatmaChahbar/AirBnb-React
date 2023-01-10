
import star from '../Images/Star.png'

export default function Card(props){
    return(
       <div className='card'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={props.image} className='card--img'/>
        <div>
            <img src={star} className='card--star' />
            <span >  {props.rate}  </span>
            <span className='gray'>({props.num}) - </span>
            <span className='gray'> USA</span>
            <p> {props.parg}</p>
            <p> <span className='bold'>From ${props.price}</span> / person</p>
           
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
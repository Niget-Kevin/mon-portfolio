import { Link } from 'react-router-dom';
import "./Card.scss"

function Card({ id, title, img}) {

    return (
      <Link to={`/${id}` }>
        <div >
          <img src={img} alt={title} className='card__image'/>
          <h3 className='card__title'>{title}</h3>          
        </div>
      </Link>
    )
  }
  
  export default Card
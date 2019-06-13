import React from 'react';

const Card = (props) => {

    return (
        
        <div className="card col-md-4">
				<img className="bigImg" src={props.img} alt="img"/>
				<h4 className="title">{props.title}</h4>
				<p className="category">Категорија : <span className="blueCat">{props.category}</span></p>
				<i class="far fa-clock"></i> <p className="time">Времетраење</p>
                <span className="timeFrame">{props.time}</span>
			
		</div>
    )
}

export default Card;
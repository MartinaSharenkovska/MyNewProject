import React from 'react';
import axios from 'axios';
import Card from './Card';

class CardCont extends React.Component {
    state = {
            games: []
        }
    

    componentDidMount(){
        axios.get(`https://brainsterboxapi.herokuapp.com/games`).then(res => {
            this.setState({games : res.data});
        })
    }
    render(){
        return(
            <div className="Cardcont container">
                <div className="col-md-12">
                    <div class="row">
                        {this.state.games.map(element => {
                        return (
                            <Card title={element.title} img={element.image} category={element.category} time={element.timeFrame} />

                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardCont;


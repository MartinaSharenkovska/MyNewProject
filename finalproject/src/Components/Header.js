import React from 'react';


class Header extends React.Component{
    render(){
        return (

            <div className="header">
                <div className="col-md-6 col-md-offset-3" >
                <p>Изработено од студенти на академијата за програмирање на <span className="brain">Brainster</span></p>
                <h1>Future-proof your organisation</h1>
                <h5>Find out how to unlock progress in your business. Understand your current state, identify opportunity ideas and prepare t take charge of your organisation's future.</h5>
                <button className="btn-yellow"> Take the assessment</button>
                </div>
            </div>
        )
    }
}

export default Header;
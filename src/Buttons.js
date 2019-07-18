import React from 'react';
import "./App.css";

const Buttons = (props) => {
    return (
        <section className="buttons">
            <div className="homeButtons">
                <button onClick={() => props.homeScoreCount(props.homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
                <button onClick={() => props.homeScoreCount(props.homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={() => props.awayScoreCount(props.awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={() => props.awayScoreCount(props.awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    )
}

export default Buttons;
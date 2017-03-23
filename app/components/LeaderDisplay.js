import React from 'react';

function LeaderDisplay(props) {
    return (
    <div className="leader">
        <div className="row"> 
            <div className="col-xl-12">
                <h3 className="username">{props.leader.username}</h3>
            </div>
        </div>    
        <div className="row">
            <div className="col-sm-3">
                 <img className="leader-img img-rounded img-responsive" src={props.leader.img} />
            </div>
            <div className="col-sm-3 recent">
                <h4>Recent Brownie Points</h4>
                <p>{props.leader.recent}</p>
            </div>
            <div className="col-sm-3 alltime">
                <h4>Alltime Brownie Points</h4>
                <p>{props.leader.alltime}</p>
            </div>
        </div>
    </div>
    )
}


export default LeaderDisplay;

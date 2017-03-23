import React, { Component } from 'react'
import axios from 'axios'
import LeaderDisplay from './LeaderDisplay'
import Button from './ToggleCamperData'
import FetchCampers from './FetchCampers.js'

class LeaderboardList extends Component {
    constructor() {
        super();
        this.state = {
            leaderboard: [],
            isLoading: true,
            toggleText: 'Alltime',
            sortBy: 'Recent Points'
        };
    }
    componentDidMount() {
        var that = this;
        FetchCampers(1).then(function(leaderboard) {
            that.setState({ leaderboard: leaderboard.data, isLoading: false })
        });
    }
    toggleCampers() {
       console.log(this)
       var button = this.state.toggleText;
       if(button ==="Alltime") {
            var i = 0;
            var toggleText = "Last 30 days"
        }  else {
            var i = 1;
            var toggleText = "Alltime"
        }
        var that = this;
        FetchCampers(i).then(function(leaderboard) {
            that.setState({ leaderboard: leaderboard.data, isLoading: false, toggleText: toggleText })
        });
     }
    sortCampers(sort) {
        if(sort ==="Alltime") {
            var sortBy = "alltime"
            this.setState({ sortBy: "Recent Points"})
        } else {
            sortBy = "recent"
            this.setState({ sortBy: "Alltime"})
        }
        this.setState( { leaderboard: this.state.leaderboard.sort(function(a,b){
            return b[sortBy] - a[sortBy]; 
        })  } )  
    } 
    renderLeaders() {
        if(this.state.isLoading) {
            return <p>Loading....</p>
        } else {
            return this.state.leaderboard.map(leader => <LeaderDisplay key={leader.username} leader={leader} />
            )
        }
    } 
    render() {
        return (
            <div>
            <Button text={"Toggle Leaderboard"} onClick={this.toggleCampers.bind(this)} />
            <Button text={"Sort by: "+this.state.sortBy} onClick={()=>this.sortCampers(this.state.sortBy)} />
            <h3>Leaderboard: {this.state.toggleText} Brownie Point Leaders </h3>
            <div className="leaderboardContainer">{ this.renderLeaders() } </div>
            </div>
        );
    }
};

export default LeaderboardList

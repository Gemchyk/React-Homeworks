import { Component } from "react";
import './App.css';




export default class Smile extends Component{

    

    handleClick = () => {
        this.props.onChange(this.props.smile.id);
    }

    render(){
        return(
            <div >
                <h1>{this.props.smile.name}</h1>
                {!this.props.isWinner && <button onClick={this.handleClick}>Vote {this.props.smile.votes}</button>}
            </div>
        )
    }
}
import { Component } from "react";
import Smile from "./Smile";
import './App.css'


export default class SmileList extends Component{

    render(){   
        return(
        <div className="flex">
            {this.props.smiles.map(i => <Smile key={i.id} smile={i} onChange={this.props.onChange} />)} 
          </div>
        )
    }
}

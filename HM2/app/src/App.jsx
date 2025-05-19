import './App.css';
import {Component} from 'react';
import './SmileList.jsx'
import SmileList from './SmileList.jsx';
import Smile from './Smile';




export default class App extends Component{
  
  

  userVotes = localStorage.getItem("votes") || null;

  

  state = {
    smiles: [
      { id: 1, name: "😀", votes: 0 },
      { id: 2, name: "😎", votes: 0 },
      { id: 3, name: "🥳", votes: 0 }
    ],
    winnerId: null
  };

 

 
  constructor(props) {
    super(props);
  
    const savedSmiles = localStorage.getItem('votes');
    this.state = {
      smiles: savedSmiles ? JSON.parse(savedSmiles) :this.state,
      winnerId: null,
    };
  }
 
  

  localSave = (arr) => {
    localStorage.setItem("votes", JSON.stringify(arr));
  }
  
  updateSmiles = (id) => {
    const updated = this.state.smiles.map(smile =>
      smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
    );
    this.localSave(updated);
    this.setState({ smiles: updated });
    console.log(this.userVotes);
  };

  

  getWinner = () => {
    let winInd = 0;
    const arr = this.state.smiles
    for(let i = 0; i < arr.length; i++){
      if(arr[i].votes > arr[winInd].votes){
        winInd = i;
      }
    }
    const winnerId = arr[winInd].id;
    this.setState({winnerId});
  }

  
  clearResults = () => {
    const cleared = this.state.smiles.map(smile => 
      smile.votes > 0 ? { ...smile, votes: 0} : smile
    );
    console.log(cleared);
    this.localSave(cleared);
    this.setState({smiles: cleared, winnerId: null});
  }
 

  

  render(){
      return(
        <div >
          <SmileList smiles={this.state.smiles} onChange={this.updateSmiles} />
          {!this.state.winnerId && <button onClick={this.getWinner}>Show Results</button>}
          {this.state.winnerId &&
            <>
            <h1>Winner:</h1>
              <Smile smile={this.state.smiles.find(i => i.id === this.state.winnerId)} onChange={this.updateSmiles} isWinner={true}/>
              <button onClick={this.clearResults}>Clear Results</button>
            </> 
          }
        </div>
      )
  }
}



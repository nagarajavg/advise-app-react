import React from "react";
import axiox from 'axios';
import './App.css';
class App extends React.Component{
    
    state={
        advice:''
    };
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axiox.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice}=response.data.slip;
            console.log(advice);
            this.setState({
                advice:advice
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        const{advice}=this.state;
        return(
            
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="btn" onClick={this.fetchAdvice}>
                        <span>Give Me Advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default App;
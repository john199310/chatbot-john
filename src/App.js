import "./App.css";
import KommunicateChat from "./chat.js";
import React from "react";
// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// cont[transferflag, settransferflag] = React.useState();

class App extends React.Component
{
    constructor(){
    super();
    this.state = {'app_id' : process.env.REACT_APP_ID, 'agent' : "kommunicate-support", 'clickflg' : 0};
    
  }

  // componentDidUpdate()
  // {
    
  // }

  transferAgentBtnClick = () => {
    if(this.state.clickflg === 0)
      this.setState({'clickflg' : 1});
    else
      this.setState({'clickflg' : 0});
  }
  
  render() {
    
    return (
    <div className="App">
      <div className="content">        
        <h1>Hello!<br/> MD FAISAL</h1>
        <p> To customize plugin, click button at right bottom </p>
        <div className="Km-btn">
          <a
            //href="https://docs.kommunicate.io/docs/web-installation.html#step-2-add-the-customized-kommunicate-plugin-to-your-website"
            //target="_blank"
            //rel="noopener noreferrer"
          >
            <button id = 'transferAgent' onClick={this.transferAgentBtnClick}>Transfer to Agent</button>
          </a>
        </div>
      </div>

      {/* <KommunicateChat/> */}
      
    </div>
  );}
}

export default App;
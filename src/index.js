import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";
// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// Kommunicate.init("kommunicate-support", {
//   automaticChatOpenOnNavigation: true,
//   popupWidget: true
// });
/*var app_id = process.env.REACT_APP_ID;
var agent = "kommunicate-support";
var transferAgentFlag = 1;

window.addEventListener('click', function(e){
  console.log(e.target);
    if(e.target.id == 'transferAgent')
    {
        console.log('dddddd');
        transferAgentFlag = transferAgentFlag == 1 ? 0 : 1;
        if(transferAgentFlag == 1)
          agent = "kommunicate-support";
        else
        agent = app_id;

    }
})

console.log(app_id);*/
// Kommunicate.init("kommunicate-support", {
//   automaticChatOpenOnNavigation: true,
//   popupWidget: true
// });
// window.Kommunicate.launchConversation();


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

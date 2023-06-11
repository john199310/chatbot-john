import React, { Component } from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

class KommunicateChat extends Component {
    constructor(props) {

        super(props);
    }

    componentDidMount() {
        (function(d, m){
            var defaultSettings = {
                "defaultBotIds": ["kommunicate-support"], // Replace <BOT_ID> with your bot ID which you can find in bot section of dashboard
                "defaultAssignee": "kommunicate-support", // Replace <BOT_ID> with your bot ID which you can find in bot section of dashboard
                "skipRouting":true
                };
            var kommunicateSettings = {
                "appId":"28c780ada74f262ff0bb2797d6aab4e7",  // Replace <APP_ID> with your APP_ID which you can find in install section of dashboard
                "automaticChatOpenOnNavigation":false,
                "onInit": function() {
                    Kommunicate.updateSettings(defaultSettings); 
                }
            };
            //var kommunicateSettings = {"appId":"28c780ada74f262ff0bb2797d6aab4e7","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            // s.src = "http://localhost:3030/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    };

render() {
        return(
            <div></div>
        );
    }
}
export default KommunicateChat;
// const Chat = () => {

//     // const app_id = process.env.REACT_APP_ID.toString();
//     const bot = process.env.REACT_APP_ID.toString()
//     const agent = "kommunicate-support";
//     const [app_id, setAppId] = useState(agent)
  
//     console.log(app_id)
//     useEffect(()=>{
//       console.log('=============>');
      
//       Kommunicate.init(app_id, {
//         automaticChatOpenOnNavigation: true,
//         popupWidget: true
//       });
//       return()=>{
//         Kommunicate.myClose();
//       }
//     }, [app_id])
//     //var transfer_agent = window.document.getChildrenById('transferagent');
//     // console.log('transfer_agent');
//     // console.log(window.document.getElementById('root'));
  
//     const switchAppId = ()=>{
//       if(app_id == bot) setAppId(agent)
//       else setAppId(bot);
//     }
//}  
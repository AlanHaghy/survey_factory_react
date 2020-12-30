import {useState, useEffect} from 'react';
import http from "./services/HttpService";
import config from './config.json';
import './App.css';
import Questionaire from './components/questionaire';
import MessagePanel from './components/messagePanel';

function App() {

  const [ currentSurvey , setSurvey] = useState([]);

  useEffect (  () => {

    async function fetchData() {
      const promise = await  http.get(config.apiEndpoint);
    setSurvey(promise.data);
     
    }
    fetchData();
   
  }, []);

  if( currentSurvey.nodes ) {
    console.log('setSurvey(data) ' ,currentSurvey.nodes);
  }

 const viewState = currentSurvey.nodes[1];
 
 document.title = currentSurvey.name;
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = currentSurvey.css_include;
 document.head.appendChild(link);

 var meta = document.createElement('meta');
 meta.name = 'description';
 meta.content = currentSurvey.description;
 document.head.appendChild(meta);


const handleAnswer = (answer) => {
 //check the answer

 // redirect to another target_node_id
 // add answer to new state .json file for result.
   console.log(answer);
};
 
   return(
                  
    <div className="App container">
        
      {(viewState.type === "Content"  && !viewState.formfields.length) ?
        <Questionaire handleAnswer={handleAnswer} data={viewState}/> : 
        <MessagePanel handleAnswer={handleAnswer} data={viewState}/>
      } 
       
    </div>
   )
  }

  export default App;

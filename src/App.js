import {useState, useEffect} from 'react';
import config from './config.json';
import './App.css';
import localFeed from './survey.json';
import MessagePanel from './components/messagePanel';
import {Questionaire, CheckboxForm, DropdownForm } from './components';

function App() {

     const [localSurvey, setLocalSurvey] = useState(localFeed);
    //  const [currentTargetNode , setTargetNode] = useState(() =>
    //  {return localSurvey.root_node_id });

    const [currentTargetNode , setTargetNode] = useState(1);

     let resultAnswers,resultAnswer = {};

  // useEffect (() => {
    
  //   fetch(config.apiEndpoint)
  //   .then(response => response.json())
  //   .then(json => setLocalSurvey(json))
  // }, []);

  //console.log('localFeed: ', localFeed.nodes[1]);
  //setLocalSurvey(localFeed);

  const viewState = localSurvey.nodes[currentTargetNode];
    
 document.title = localSurvey.name;
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = localSurvey.css_include;
 document.head.appendChild(link);

 var meta = document.createElement('meta');
 meta.name = 'description';
 meta.content = localSurvey.description;
 document.head.appendChild(meta);


const handleAnswer = (answer) => {

  if(answer.value === 'finish') {
    console.log('final Results: ',resultAnswers);
    answer.targetNodeId = 1;
  } else {
    resultAnswer[viewState.variable] = answer.clickValue;
    resultAnswers = {...resultAnswers, resultAnswer};
  }
   setTargetNode(answer.targetNodeId);
      
};
   return(
                  
    <div className="App container">
              <div className="card">          
            <div className="card-body">

            <h5 className="card-title font-weight-bold">{viewState.page_title}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html:viewState.content}}></div>
        
      {(viewState.type === "Content"  && !viewState.formfields.length) ?
        <Questionaire handleAnswer={handleAnswer} data={viewState}/> : 

      // (viewState.type === "Content"  && viewState.formfields[1].type === "checkbox") ?
      //   <div> CheckboxForm
      //   <CheckboxForm handleAnswer={handleAnswer} data={viewState}/>
      //   </div>
      //    :

      // (viewState.type === "Content"  && viewState.formfields[1].type === "select") ?
      // <div> DropdownForm
      //   <DropdownForm handleAnswer={handleAnswer} data={viewState}/>
      //   </div>
      //    :
         <div> MessagePanel
        <MessagePanel handleAnswer={handleAnswer} data={viewState}/>
        </div>
      } 
       
    </div>
    </div>
    </div>
   )
  }

  export default App;

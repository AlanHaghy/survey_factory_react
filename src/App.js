import {useState, useEffect} from 'react';
import config from './config.json';
import './App.css';
import MessagePanel from './components/messagePanel';
import {Questionaire, CheckboxForm, DropdownForm } from './components';

function App() {

     const [localSurvey, setLocalSurvey] = useState({});
     const [currentTargetNode , setTargetNode] = useState(() =>
     {return localSurvey.root_node_id });

  useEffect (() => {
    
    fetch(config.apiEndpoint)
    .then(response => response.json())
    .then(json => setLocalSurvey(json))
  }, []);


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
 //check the answer

 // redirect to another target_node_id
 // add answer to new state .json file for result.
   console.log(answer);
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

      (viewState.type === "Content"  && viewState.formfields === "checkbox") ?

        <CheckboxForm handleAnswer={handleAnswer} data={viewState}/> :

      (viewState.type === "Content"  && viewState.formfields === "select") ?

        <DropdownForm handleAnswer={handleAnswer} data={viewState}/> :

        <MessagePanel handleAnswer={handleAnswer} data={viewState}/>
      } 
       
    </div>
    </div>
    </div>
   )
  }

  export default App;

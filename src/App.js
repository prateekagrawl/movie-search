import React , {useState} from 'react'
import axios from 'axios';

import Search from "./Components/Search";
import Results from './Components/Results';

function App() {

    const url=" http://www.omdbapi.com/?i=tt3896198&apikey=b750b33c";

  const [state, setState] = useState({
    s:"",
    results: [],
    selected: {}
  });

  const search = (e) =>{
    if(e.key=== "Enter"){
      axios.get(url+"&s="+state.s)
      .then(({data}) => {
        let results=data.Search

        setState(prevState =>{
          return {...prevState, results:results}
        })
      });
    }
  } 

  const inputHandler=(e) =>{
    let s=e.target.value;

    setState(prevState => {
      return {...prevState,s:s}
      });
  }

  return (
    <div className="App">
      <header>
        <h1> Movie search</h1> 
      </header>
      <main>
        <Search inputHandler={inputHandler} searchHandler={search}/>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;

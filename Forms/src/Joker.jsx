import { useEffect, useState } from "react";

export default function Joker(){
 const URL = "https://official-joke-api.appspot.com/random_joke";

const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonres = await res.json();
    
    setJoke({setup:jsonres.setup , punchline:jsonres.punchline});
   
   };

   useEffect(() =>{ 
    async function getFirstJoke () {
    let res = await fetch(URL);
    let jsonres = await res.json();
    console.log(jsonres);
    setJoke({setup:jsonres.setup , punchline:jsonres.punchline});
    
   }
    getFirstJoke();
    },[]);
    let [joke,setJoke] = useState(getNewJoke);
   
   
    return (<div>
        <h2>Joker!</h2>
        <h1>{joke.setup}</h1>
        <h1>{joke.punchline}</h1>
        <button onClick={getNewJoke}>New Joke</button>
    </div>)
}
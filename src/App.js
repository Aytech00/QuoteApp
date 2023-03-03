import { useState } from "react";
import "./App.css";
import Quote from "./Components/Quote";
import Input from "./Components/Input";

import {motion} from 'framer-motion'

const btnVariant = {
  hover:{
    scale:1.1,
    transition:{
      yoyo:4,
    }
  }
}

function App() {


   const [quote, setQuote] = useState([]);

   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)



  const quoteHandler = async () => {
      
    setIsLoading(true)
    setError(null);

    

    try{
        const res = await fetch(
          "https://quoteapp-5a4fd-default-rtdb.firebaseio.com/quotes.json"
        );

        if (!res.ok){
          throw new Error('something went wrong')
        }
        
        const data = await res.json()

        const loadedQuotes = []

        for(const key in data){
          loadedQuotes.push({
            id: key,
            quote: data[key].quote,
            author: data[key].author,
          })


        }
     
        
        setQuote(loadedQuotes);

        


    } catch(error){
      setError(error.message)

    }
    setIsLoading(false);
    
 
     
  };


  // Submit quote


  const addQuote = async (data)=>{
  

    const response = await fetch(
      "https://quoteapp-5a4fd-default-rtdb.firebaseio.com/quotes.json", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": 'application/json'
        }
        
      }
    );
  
    const output = await response.json()
    console.log(output);


    

  }



 

  return (
    <div className="container px-3 mx-auto  md:px-4 py-1 ">

      <div className="  mt-10">
        <Input onAddQuote= {addQuote}/>
      </div>

      <div className="mx-auto  w-70 mt-10  md:w-4/6 p-7 rounded-xl">
        <div className="text-center">
          <motion.button
          variants={btnVariant}
          whileHover="hover"
            onClick={quoteHandler}
            
            className=" bg-indigo-500   py-2 px-10 text-white rounded-md"
          >
            Get Quote
          </motion.button>
        </div>
        <div className="">
          {!isLoading &&  <Quote data={quote} />}
          {!isLoading && quote.length === 0 && <p className="text-center text-white">No quote found</p> }
          {isLoading && <p className="text-center mt-7 text-slate-50">Loading quotes...</p> }
          {!isLoading && error && <p className=" border p-3 text-center text-red-500 mt-10">{error}</p> }
        </div>
      </div>
    </div>
  );
}

export default App;

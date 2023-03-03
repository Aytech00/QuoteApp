import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'


const firstVariant = {
 

  hidden: {
    
    opacity:0,
  },

  visible: {
    
    opacity: 2,
   
  },
};


const secondVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2.5,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};



const thirdVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2.5,
    transition: {
      duration: 0.9,
      delay: 0.7,
    },
  },
};





const Input = (props) => {

  const [enteredQuotes, setQuotes] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  const enteredInputHandler = (e) => {
    setQuotes(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const dataHandler = (e) => {
    e.preventDefault();

    const data = {
      quote: enteredQuotes,
      author: enteredAuthor
    }

    props.onAddQuote(data)

    setQuotes("");
    setAuthor("");
  };



  

  return (
    <div className="border md:w-4/5 mx-auto border-slate-800 rounded-md py-10 px-7">
      <div className="mb-10 text-center ">
        <motion.h1
          variants={firstVariant}
          initial="hidden"
          animate="visible"
          className="text-pink-500 text-4xl mb-6 font-extrabold "
        >
          QUOTEAPP
        </motion.h1>
        <motion.p
          variants={secondVariant}
          initial="hidden"
          animate="visible"
          className="text-slate-100 w-5/6 md:w-4/5 mx-auto"
        >
          Please input a quote on the quote field and then add your name on the
          Author field.
        </motion.p>
      </div>
      <motion.form
        variants={thirdVariant}
        initial="hidden"
        animate="visible"
        onSubmit={dataHandler}
        className="text-center"
      >
        <textarea
          className="bg-slate-50 rounded-sm w-4/5  md:w-3/5 outline-pink-400 p-2"
          name="text"
          id="quote"
          onChange={enteredInputHandler}
          value={enteredQuotes}
          placeholder="Enter a quote"
        ></textarea>
        <div className="mt-3">
          <input
            className=" w-3/5 rounded-sm md:w-2/6  p-2 outline-pink-400"
            type="text"
            onChange={authorHandler}
            placeholder="Author"
            value={enteredAuthor}
          />
        </div>
        <div className="mt-5">
          <button className="py-1 px-10 rounded-md text-white bg-indigo-500">
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Input;

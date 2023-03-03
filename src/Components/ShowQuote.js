import React from 'react'
import {motion} from 'framer-motion'

const firstVariant = {
  hidden: {

   
    opacity: 0,

  },

  visible:{


    opacity: 2.5,
    transition:{
      duration: 1.5,
    
    }

  },

  hover: {
    x: 20,
    originX: 0,

    transition:{
      scale: 1.1,
      type: 'spring',
      stiffness: 70,
      
    }
  }


}



const ShowQuote = (props) => {
  return (
    <div>
      <motion.li whileHover="hover" variants={firstVariant} initial="hidden" animate="visible" className='border w-95 p-3  bg-indigo-300 md:w-5/10 mx-auto md:p-6 rounded-lg mt-7'>
        <div className=''>
          <p className='italic mb-3'>"{props.quote}"</p>
          <p><span className='mx-1'>By:</span>{props.author}</p>
        </div>
      </motion.li>
    </div>
  );
}

export default ShowQuote
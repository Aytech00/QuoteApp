import React from 'react'
import ShowQuote from './ShowQuote';

const Quote = (props) => {
  return (
    <div>
      <ul className="  text-center mt-5">
        {props.data.map((item) => (
          <ShowQuote quote={item.quote} key={item.id} author={item.author} />
        ))}
      </ul>
    </div>
  );
}

export default Quote
import React from 'react';


const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p>
      </div>
      <PDF targetRef={ref} filename="Post.js">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </PDF>
    </>
  );
}

export default PDF;
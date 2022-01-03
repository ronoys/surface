import React from 'react'

function FunctionalComponent() {
    
    const [count, setCount] = React.useState(0);

    function increaseCount(){
        setCount(prev => prev + 1);
    }

    function clearCount(){
        setCount(prev => 0);
    }
   
    return (
      <div>
        <p>count: {count}</p>
        <button onClick={increaseCount}>Click</button>
        <button onClick={clearCount}>Clear</button>
      </div>
    );
   };

export default function Book(props){
    return <li>{props.title}</li>
}
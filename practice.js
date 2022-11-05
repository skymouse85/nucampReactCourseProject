import { useState } from 'react';

const App = () => {
    const [myCounter, setMyCounter] = useState(0);
    //common pattern for array destructreing used with use state
    // const myCounter = retValFromUseState[0];
    // const setMyCounter = retValFromUseState[1];
    //another example, a common naming convention
    const [name, setName] = useState('Irine');


    return (
        //we can set up an event handler for a div (divs can be clicked too!)
        <div onClick={() => setMyCounter(myCounter + 1)}>
            Count: {myCounter}
        </div>
    );


};

export default App;
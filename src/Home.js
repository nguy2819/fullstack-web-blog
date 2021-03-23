import React from 'react';

const Home = () => {
    const handleClick = () => {
        console.log('hello')
    }
    const consoleReturn = console.log('hello1')
    console.log(consoleReturn);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button class="home-button" onClick={() => console.log('hello')}>Click Me</button>
        </div>
     );
}
// event => handleclick(event)
 
export default Home;
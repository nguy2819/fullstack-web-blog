import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Container from './components/Container';
import './css/main.css';

function App() {
//   const [mouseY, setMouseY] = useState(0); // [object, function]
//   const [mouseX, setMouseX] = useState(0);
//   const [intv, setIntv] = useState(0);

//   const btn = document.querySelector('button')

//     const mouseMove = () => {
//     intv += 1
//     circleSvg.style.top = mouseY
//     circleSvg.style.left = mouseX
//     circleSvg.style.opacity = Math.abs(Math.sin(intv * 0.025))
//     window.requestAnimationFrame(mouseMove)
//   }

//   useEffect(() => {
//     const moveHandler = (event) => {
//       const circleSvg = document.querySelector('svg')
//       setMouseY((event.clientY / 16) - (45 / 16) + 'rem');
//       setMouseX((event.clientX / 16) - (45 / 16) + 'rem');
//     };
//     window.addEventListener('mousemove', moveHandler);
//     return () => {
//       window.removeEventListener('mousemove', moveHandler);
//     }
//     //eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Container />
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en"
        xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
        <title>Circular Text Path</title>

        <defs>
          <path id="textcircle"
            d="M250,400
                      a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)" />
        </defs>
        <rect width="100%" height="100%" fill="none" />
        <text>
          <textPath xlinkHref="#textcircle"
            aria-label="All for One &amp; One for All"
            textLength="942">Nắm Chặt vào Thanh Sắt. </textPath>
        </text>
      </svg> */}



    </div>
  );
}

export default App;

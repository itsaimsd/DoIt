// // src/App.js
// import React, { useState } from 'react';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import MainContent from './components/MainContent/MainContent';
// import RightSidebar from './components/RightSidebar/RightSidebar';
// import Header from './components/Header';
// import './styles/App.css';

// function App() {
//   const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
//   const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

//   const toggleLeftSidebar = () => {
//     setIsLeftSidebarVisible((prev) => !prev);
//   };

//   const toggleRightSidebar = () => {
//     setIsRightSidebarVisible((prev) => !prev);
//   };

//   return (
//     <div className="app">
//       <Header toggleLeftSidebar={toggleLeftSidebar} />
//       <div className="content">
//         <LeftSidebar isVisible={isLeftSidebarVisible} />
//         <MainContent
//           toggleRightSidebar={toggleRightSidebar}
//           isLeftSidebarVisible={isLeftSidebarVisible}
//         />
//         <RightSidebar isVisible={isRightSidebarVisible} />
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import MainContent from './components/MainContent/MainContent';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarVisible((prev) => !prev);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarVisible((prev) => !prev);
  };

  return (
    <div className="app">
      <Header toggleLeftSidebar={toggleLeftSidebar} />
      <div className="content">
        <LeftSidebar isVisible={isLeftSidebarVisible} />
        <MainContent
          toggleRightSidebar={toggleRightSidebar}
          isLeftSidebarVisible={isLeftSidebarVisible}
        />
        <RightSidebar isVisible={isRightSidebarVisible} />
      </div>
    </div>
  );
}

export default App;

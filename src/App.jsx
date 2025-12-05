import React from 'react';
import Hero from "./component/Hero.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import TaskBoard from "./component/TaskBoard.jsx";

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      <Header />
      <div className="flex flex-col justify-center items-center px-4 py-8">
        <Hero/>
        <TaskBoard/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
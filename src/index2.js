import React from 'react';
import logo from './logo.svg';
import './App.css';

function Index2() {
  return (
    <div className="App">
      <header className="bg-red-500">
        <img src={logo} className="ml-7" alt="logo" />
        <p className='p-3'>
        React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. 
        It is maintained by Meta and a community of individual developers and companies.
        React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
        </p>
      </header>
    </div>
  );
}

export default Index2;

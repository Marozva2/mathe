import React from 'react';
import Header from './Header';

function Home() {
  return (
    <div className='bg-[#56dffe] min-h-screen flex flex-col items-center'>
      {/* <Header /> */}
      <div className="text-white text-3xl italic m-20 text-center">
        Welcome to <span className="font-bold">Mathe</span>
      </div>
      <div className="text-white text-2xl mt-4 mb-10 text-center">
        Your reliable <br />
        door-to-door <br />
        laundry service!
      </div>
      <button className="bg-[#6b4146] text-white text-xl px-6 py-3 rounded-lg">
        Let's Get Started
      </button>
    </div>
  );
}

export default Home;

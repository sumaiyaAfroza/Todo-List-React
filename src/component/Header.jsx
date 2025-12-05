import React from 'react';

const Header = () => {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <p className='text-white text-2xl'>Tasker</p>
        </a>
      </div>
    </nav>
  );
};

export default Header;
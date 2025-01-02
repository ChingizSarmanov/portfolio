import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl">
          <span className="text-green-500">const</span> developer = 
          <span className="text-purple-500">'frontend'</span>;
        </div>
        <div className="space-x-8">
          {['projects', 'skills', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`} // Ссылка на якорь
              className="hover:text-green-500 transition-colors"
            >
              {`<${item} />`}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

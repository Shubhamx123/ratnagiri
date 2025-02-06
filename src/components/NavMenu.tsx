import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavMenuItem {
  title: string;
  items: string[];
}

interface NavMenuProps {
  items: (string | NavMenuItem)[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const handleUpload = () => {
    // Logic for handling upload
    console.log("Upload button clicked");
  };

  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2 animate-fadeIn">
      {items.map((item, index) => (
        typeof item === 'string' ? (
<<<<<<< HEAD
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block px-4 py-2 text-gray-700 text-xs hover:bg-forest-green hover:text-white transition-colors"
          >
            {item}
          </a>
=======
          item === "Videos" ? (
            <div key={index} className="px-4 py-2">
              <button onClick={handleUpload} className="w-full text-left text-gray-700 hover:bg-forest-green hover:text-white transition-colors">
                Upload
              </button>
            </div>
          ) : (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block px-4 py-2 text-gray-700 hover:bg-forest-green hover:text-white transition-colors"
            >
              {item}
            </a>
          )
>>>>>>> ef63efd12e2cba64c5b4f3e33a5c53b2a5012e1c
        ) : (
          <div key={index} className="group/submenu relative">
            <div className="px-4 py-2 text-gray-700 text-xs hover:bg-forest-green hover:text-white transition-colors flex items-center justify-between cursor-pointer">
              <span>{item.title}</span>
              <ChevronRight size={12} />
            </div>
            <div className="hidden group-hover/submenu:block absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-2">
              {item.items.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-gray-700 text-xs hover:bg-forest-green hover:text-white transition-colors"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default NavMenu;
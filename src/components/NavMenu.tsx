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
  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2 animate-fadeIn">
      {items.map((item, index) => (
        typeof item === 'string' ? (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block px-4 py-2 text-gray-700 text-xs hover:bg-forest-green hover:text-white transition-colors"
          >
            {item}
          </a>
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

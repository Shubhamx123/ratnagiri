import React, { useState, useEffect } from 'react';
import { Menu, Search, Globe, X, ChevronDown, MapPin, Phone, Mail, Upload } from 'lucide-react';
import NavMenu from './NavMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    {
      title: 'About',
      items: [
        'Aim',
        'Mission',
        'History',
        'Registration Certificate',
        'MOA',
        'Code of Commitments',
        {
          title: 'Members',
          items: [
            'Founder Members',
            'Associates',
            'Advisors',
            'Supporters',
            'Special Contributions'
          ]
        }
      ]
    },
    {
      title: 'Konkan Geoglyphs',
      items: [
        'Preface',
        'Discovery',
        'Geography',
        'Sites',
        'Age and Meaning',
        'Uniqueness',
        'Conservation',
        'Projects',
        {
          title: 'Activity and Publications',
          items: [
            'Activities',
            'Publications',
            'Tours',
            'Social Media',
            'Videos'
          ]
        }
      ]
    },
    {
      title: 'Heritage',
      items: [
        'Abstract',
        'Tangible Heritage',
        'Intangible Heritage',
        'Cultural Heritage',
        'Natural Heritage',
        'Projects',
        'Activity'
      ]
    },
    {
      title: 'Wonders',
      items: [
        'Abstract',
        'Hot Water Springs',
        'Magnetic Deflection',
        'Other Wonders'
      ]
    },
    {
      title: 'Biodiversity',
      items: [
        'Abstract',
        'Flora',
        {
          title: 'Fauna',
          items: [
            'Sea Animals',
            'Amphibians',
            'Reptiles',
            'Butterflies & Insects',
            'Birds',
            'Mammals'
          ]
        },
        'Turtle Conservation',
        'Activity'
      ]
    },
    'Projects',
    'Support Us',
    'Videos'
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-forest-green text-white py-2 hidden lg:block">
        <div className="section-container">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Konkan Region, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@nisargayatri.org</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="hover:text-earth-brown transition-colors">
                <Search size={14} />
              </button>
              <button aria-label="Language selector" className="hover:text-earth-brown transition-colors">
                <Globe size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex flex-col items-center">
              
                <img 
                  src="https://i.imghippo.com/files/PE4946gZg.JPG" 
                 
                  className="h-12 mt-1"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a href="/" className="nav-link text-sm">
                Home
              </a>
              {mainNavItems.map((item) => (
                typeof item === 'string' ? (
                  <a 
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="nav-link text-sm"
                  >
                    {item}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="nav-link text-sm flex items-center space-x-1"
                      aria-expanded={activeDropdown === item.title}
                      aria-haspopup="true"
                    >
                      <span>{item.title}</span>
                      <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform" />
                    </button>
                    {activeDropdown === item.title && (
                      <NavMenu items={item.items} />
                    )}
                  </div>
                )
              ))}
              <button 
                onClick={() => window.location.href = '/upload'} 
                className="nav-link text-sm flex items-center space-x-1 text-forest-green"
              >
                <Upload size={9} />
                <span>Upload</span>
              </button>
              <button 
                className="nav-link text-sm flex items-center space-x-1 bg-forest-green text-white hover:bg-forest-green/90"
              >
                <span>Admin</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
          <div className="section-container py-4">
            <MobileMenu items={mainNavItems} />
          </div>
        </div>
      </header>
    </>
  );
};

const MobileMenu = ({ items }: { items: any[] }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <nav className="space-y-2">
      <a href="/" className="mobile-nav-link">
        Home
      </a>
      {items.map((item) => (
        typeof item === 'string' ? (
          <a
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="mobile-nav-link"
          >
            {item}
          </a>
        ) : (
          <div key={item.title} className="space-y-2">
            <button
              className="mobile-nav-link w-full flex items-center justify-between"
              onClick={() => toggleItem(item.title)}
              aria-expanded={expandedItems.includes(item.title)}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={14}
                className={`transform transition-transform duration-300 ${
                  expandedItems.includes(item.title) ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
              expandedItems.includes(item.title) ? 'max-h-screen' : 'max-h-0'
            }`}>
              {item.items.map((subItem: any) => (
                typeof subItem === 'string' ? (
                  <a
                    key={subItem}
                    href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mobile-nav-link"
                  >
                    {subItem}
                  </a>
                ) : (
                  <div key={subItem.title} className="space-y-2">
                    <button
                      className="mobile-nav-link w-full flex items-center justify-between"
                      onClick={() => toggleItem(subItem.title)}
                      aria-expanded={expandedItems.includes(subItem.title)}
                    >
                      <span>{subItem.title}</span>
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-300 ${
                          expandedItems.includes(subItem.title) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      expandedItems.includes(subItem.title) ? 'max-h-screen' : 'max-h-0'
                    }`}>
                      {subItem.items.map((subSubItem: string) => (
                        <a
                          key={subSubItem}
                          href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.title.toLowerCase().replace(/\s+/g, '-')}/${subSubItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="mobile-nav-link"
                        >
                          {subSubItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )
      ))}
      <a href="/upload" className="mobile-nav-link flex items-center space-x-2 text-forest-green">
        <Upload size={14} />
        <span>Upload</span>
      </a>
      <a href="/admin" className="mobile-nav-link bg-forest-green text-white hover:bg-forest-green/90">
        Admin
      </a>
    </nav>
  );
};

export default Header;
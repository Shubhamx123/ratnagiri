import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Konkan Geoglyphs',
    'Heritage Sites',
    'Natural Wonders',
    'Conservation',
    'Support Us'
  ];

  const resources = [
    'Research Papers',
    'Photo Gallery',
    'Video Library',
    'News & Updates',
    'Events Calendar',
    'Downloads'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-forest-green text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-merriweather font-bold">Konkan Heritage</h3>
            <p className="text-gray-300">
              Dedicated to preserving and promoting the rich cultural and natural heritage
              of the Konkan region, including its mysterious geoglyphs and diverse biodiversity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-earth-brown transition-colors"
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-merriweather font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-merriweather font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    <span>{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-merriweather font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  123 Heritage Way,<br />
                  Ratnagiri District,<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p className="text-gray-300">+91 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:info@konkanheritage.org" className="text-gray-300 hover:text-white transition-colors">
                  info@konkanheritage.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Konkan Heritage. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
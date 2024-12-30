import { Menu, Twitter, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://www.neevhq.com/neev.svg"
              alt=""
              className="h-8 w-auto m-2 "
            />
            <span className="text-2xl font-bold text-blue-600">Neev</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#technology" className="text-gray-700 hover:text-blue-600">
              Technology
            </a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">
              Team
            </a>
            <a href="#careers" className="text-gray-700 hover:text-blue-600">
              Careers
            </a>
            <a
              href="https://x.com/NeevHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#technology"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Technology
            </a>
            <a
              href="#team"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Team
            </a>
            <a
              href="#careers"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

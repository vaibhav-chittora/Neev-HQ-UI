import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-blue-600">Neev</span>
            <p className="mt-4 text-gray-600">
              Making healthcare documentation smarter and more human-centric.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/NeevHQ"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#linkedin"
                  className="text-gray-600 hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2024 Neev. All rights reserved.</p>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <MessageCircle className="w-5 h-5" />
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

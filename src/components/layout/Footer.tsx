
import { Link } from 'react-router-dom';
import { DumbbellIcon, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner dark:bg-gray-900 mt-16">
      <div className="max-container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <DumbbellIcon className="h-8 w-8 text-brand-teal" />
              <span className="ml-2 text-xl font-bold text-brand-dark dark:text-white">
                AchieveIt
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Connecting trainers and clients through accountability and results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-teal">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-teal">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-teal">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">For Trainers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/create-program" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Create Program
                </Link>
              </li>
              <li>
                <Link to="/trainer-resources" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/trainer-faq" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-program" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Find Program
                </Link>
              </li>
              <li>
                <Link to="/bidding-guide" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Bidding Guide
                </Link>
              </li>
              <li>
                <Link to="/client-faq" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-gray-500 text-sm text-center dark:text-gray-400">
            &copy; {new Date().getFullYear()} AchieveIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  DumbbellIcon, 
  LogIn 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'trainer' | 'client' | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // For demo purposes, let's add quick login options
  const loginAsTrainer = () => {
    setIsLoggedIn(true);
    setUserType('trainer');
    setIsOpen(false);
  };

  const loginAsClient = () => {
    setIsLoggedIn(true);
    setUserType('client');
    setIsOpen(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900">
      <div className="max-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <DumbbellIcon className="h-8 w-8 text-brand-teal" />
              <span className="ml-2 text-xl font-bold text-brand-dark dark:text-white">
                AchieveIt
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/programs" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors">
              Programs
            </Link>
            <Link to="/trainers" className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors">
              Find Trainers
            </Link>
            {isLoggedIn ? (
              <>
                <Link to={userType === 'trainer' ? "/dashboard/trainer" : "/dashboard/client"} className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors">
                  Dashboard
                </Link>
                <Button variant="ghost" onClick={logout} className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors">
                  Logout
                </Button>
                <Link to="/profile" className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-brand-teal flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Link>
              </>
            ) : (
              <div className="space-x-3">
                <Button variant="outline" onClick={loginAsClient}>
                  <LogIn className="mr-2 h-4 w-4" /> Client
                </Button>
                <Button onClick={loginAsTrainer}>
                  <LogIn className="mr-2 h-4 w-4" /> Trainer
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 space-y-4 pb-3 md:hidden">
            <Link to="/programs" className="block text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors py-2" onClick={() => setIsOpen(false)}>
              Programs
            </Link>
            <Link to="/trainers" className="block text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors py-2" onClick={() => setIsOpen(false)}>
              Find Trainers
            </Link>
            {isLoggedIn ? (
              <>
                <Link to={userType === 'trainer' ? "/dashboard/trainer" : "/dashboard/client"} className="block text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
                <button onClick={logout} className="block w-full text-left text-gray-600 hover:text-brand-teal dark:text-gray-300 dark:hover:text-brand-teal transition-colors py-2">
                  Logout
                </button>
              </>
            ) : (
              <div className="space-y-3 pt-2">
                <Button variant="outline" onClick={loginAsClient} className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Login as Client
                </Button>
                <Button onClick={loginAsTrainer} className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Login as Trainer
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

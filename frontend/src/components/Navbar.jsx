import { Link } from "react-router";
import { PlusIcon, Gift } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <Gift className="size-8" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              Donation Item List System
            </h1>
          </div>

          {/* Button */}
          <Link
            to="/create"
            className="btn btn-accent text-white hover:scale-105 transition-transform duration-200"
          >
            <PlusIcon className="size-5" />
            <span>New Donation</span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
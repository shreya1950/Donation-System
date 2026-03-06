import React from "react";
import { Gift } from "lucide-react";
import { Link } from "react-router";

const DonationNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      
      {/* Icon Circle */}
      <div className="bg-primary/10 rounded-full p-8">
        <Gift className="size-10 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold">
        No Donations Yet
      </h3>

      {/* Description */}
      <p className="text-base-content/70">
        Ready to make a difference? Add your first donation to the system.
      </p>

      {/* Button */}
      <Link to="/create" className="btn btn-primary">
        Add First Donation
      </Link>

    </div>
  );
};

export default DonationNotFound;
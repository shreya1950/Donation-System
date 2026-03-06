import React, { useState } from "react";
import { Link } from "react-router";
import { Trash2Icon, PencilIcon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { formatDate } from "../lib/utils";

const DonationCard = ({ donation, setDonations }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/donations/${donation._id}`);
      toast.success("Donation deleted successfully");

      setDonations((prev) =>
        prev.filter((item) => item._id !== donation._id)
      );

      setShowDeleteModal(false);
    } catch (error) {
      console.log("Error deleting donation", error);
      toast.error("Failed to delete donation");
    }
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="card-body">

          {/* Item Name */}
          <h2 className="card-title text-primary">
            {donation.itemName}
          </h2>

          {/* Donor Name */}
          <p>
            <span className="font-semibold">Donor:</span>{" "}
            {donation.donorName}
          </p>

          {/* Category */}
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {donation.category}
          </p>

          {/* Quantity */}
          <p>
            <span className="font-semibold">Quantity:</span>{" "}
            {donation.quantity}
          </p>

          {/* Item Condition */}
          <p>
            <span className="font-semibold">Condition:</span>{" "}
            {donation.itemCondition}
          </p>

          {/* Formatted Date */}
          <p className="text-sm text-gray-500">
            {formatDate(donation.donationDate)}
          </p>

          {/* Action Buttons */}
          <div className="card-actions justify-end mt-4 gap-2">

            <Link
              to={`/donations/${donation._id}`}
              className="btn btn-sm btn-outline btn-primary"
            >
              <PencilIcon className="size-4" />
              Edit
            </Link>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="btn btn-sm btn-outline btn-error"
            >
              <Trash2Icon className="size-4" />
              Delete
            </button>

          </div>
        </div>
      </div>

      {/* Custom Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl">

            <div className="flex items-center gap-2 text-red-500 text-xl font-semibold mb-4">
              <Trash2Icon className="size-5" />
              Delete Donation
            </div>

            <p className="text-gray-300 mb-6">
              Are you sure you want to delete
              <span className="font-semibold text-white">
                {" "} "{donation.itemName}" {" "}
              </span>
              ? <br />
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-white"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default DonationCard;
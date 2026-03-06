import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CreateDonationPage = () => {
  const [donorName, setDonorName] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [donorContact, setDonorContact] = useState("");
  const [itemCondition, setItemCondition] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!donationDate) {
    toast.error("Please select a donation date");
    return;
  }

    setLoading(true);

    try {
      await api.post("/donations", {
        donorName,
        itemName,
        category,
        quantity: Number(quantity),
        donationDate : new Date(donationDate),
        donorContact,
        itemCondition,
      });

      toast.success("Donation created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating donation", error);
      toast.error("Failed to create donation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          
          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to donation
          </Link>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">
                Create New Donation
              </h2>

              <form onSubmit={handleSubmit}>

                {/* Donor Name */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Donor Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter donor name"
                    className="input input-bordered"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                </div>

                {/* Item Name */}
                <div className="form-control mb-4">
                  <label className="label-text">Item Name</label>
                  <input
                    type="text"
                    placeholder="Enter item name"
                    className="input input-bordered"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                  />
                </div>

                {/* Category */}
                <div className="form-control mb-4">
                  <label className="label-text">Category</label>
                  <input
                    type="text"
                    placeholder="Enter category"
                    className="input input-bordered"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                {/* Quantity */}
                <div className="form-control mb-4">
                  <label className="label-text">Quantity</label>
                  <input
                    type="number"
                    placeholder="Enter quantity"
                    className="input input-bordered"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>

                {/* Donation Date */}
                <div className="form-control mb-4">
                  <label className="label-text">Donation Date</label>
                  <input
                    type="date"
                    className="input input-bordered w-full"
                    value={donationDate}
                    onChange={(e) => setDonationDate(e.target.value)}
                    required
                  />
                </div>

                {/* Donor Contact */}
                <div className="form-control mb-4">
                  <label className="label-text">Donor Contact</label>
                  <input
                    type="text"
                    placeholder="Enter phone/email"
                    className="input input-bordered"
                    value={donorContact}
                    onChange={(e) => setDonorContact(e.target.value)}
                  />
                </div>

                {/* Item Condition */}
                <div className="form-control mb-6">
                  <label className="label-text">Item Condition</label>
                  <select
                    className="select select-bordered"
                    value={itemCondition}
                    onChange={(e) => setItemCondition(e.target.value)}
                    required
                  >
                    <option value="">Select Condition</option>
                    <option value="New">New</option>
                    <option value="Good">Good</option>
                    <option value="Used">Used</option>
                  </select>
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Donation"}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateDonationPage;
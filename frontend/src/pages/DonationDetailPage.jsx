import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const DonationDetailPage = () => {
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch Donation
  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const res = await api.get(`/donations/${id}`);
        setDonation(res.data);
      } catch (error) {
        console.error("Error fetching donation", error);
        toast.error("Failed to fetch donation");
      } finally {
        setLoading(false);
      }
    };
    fetchDonation();
  }, [id]);

  // Delete Donation
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this donation?"))
      return;

    try {
      await api.delete(`/donations/${id}`);
      toast.success("Donation deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting donation", error);
      toast.error("Failed to delete donation");
    }
  };

  // Update Donation
  const handleSave = async () => {
    if (!donation.donorName.trim() || !donation.itemName.trim()) {
      toast.error("Donor name and item name are required");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/donations/${id}`, {
        donorName: donation.donorName,
        itemName: donation.itemName,
        category: donation.category,
        quantity: Number(donation.quantity),
        donationDate: donation.donationDate,
        donorContact: donation.donorContact,
        itemCondition: donation.itemCondition,
      });

      toast.success("Donation updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating donation", error);
      toast.error("Failed to update donation");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to donation
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete
            </button>
          </div>

          {/* Form */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">

              {/* Donor Name */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Donor Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={donation.donorName || ""}
                  onChange={(e) =>
                    setDonation({ ...donation, donorName: e.target.value })
                  }
                />
              </div>

              {/* Item Name */}
              <div className="form-control mb-4">
                <label className="label-text">Item Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={donation.itemName || ""}
                  onChange={(e) =>
                    setDonation({ ...donation, itemName: e.target.value })
                  }
                />
              </div>

              {/* Category */}
              <div className="form-control mb-4">
                <label className="label-text">Category</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={donation.category || ""}
                  onChange={(e) =>
                    setDonation({ ...donation, category: e.target.value })
                  }
                />
              </div>

              {/* Quantity */}
              <div className="form-control mb-4">
                <label className="label-text">Quantity</label>
                <input
                  type="number"
                  className="input input-bordered"
                  value={donation.quantity || ""}
                  onChange={(e) =>
                    setDonation({ ...donation, quantity: e.target.value })
                  }
                />
              </div>

              {/* Donation Date */}
              <div className="form-control mb-4">
                <label className="label-text">Donation Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  value={donation.donationDate || ""}
                  onChange={(e) =>
                    setDonation({
                      ...donation,
                      donationDate: e.target.value,
                    })
                  }
                />
              </div>

              {/* Donor Contact */}
              <div className="form-control mb-4">
                <label className="label-text">Donor Contact</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={donation.donorContact || ""}
                  onChange={(e) =>
                    setDonation({
                      ...donation,
                      donorContact: e.target.value,
                    })
                  }
                />
              </div>

              {/* Item Condition */}
              <div className="form-control mb-6">
                <label className="label-text">Item Condition</label>
                <select
                  className="select select-bordered"
                  value={donation.itemCondition || ""}
                  onChange={(e) =>
                    setDonation({
                      ...donation,
                      itemCondition: e.target.value,
                    })
                  }
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Good">Good</option>
                  <option value="Used">Used</option>
                </select>
              </div>

              {/* Save Button */}
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DonationDetailPage;
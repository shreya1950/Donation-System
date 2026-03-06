import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import api from "../lib/axios";
import toast from "react-hot-toast";
import DonationCard from "../components/DonationCard.jsx";
import DonationNotFound from "../components/DonationNotFound.jsx";

const HomePage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await api.get("/donations");
        setDonations(res.data);
      } catch (error) {
        console.log("Error fetching donations", error);
        toast.error("Failed to load donations");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const donorCount = donations.length;

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.itemName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.donorName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      donation.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const sortedDonations = [...filteredDonations].sort((a, b) => {
    return sortOrder === "latest"
      ? new Date(b.donationDate) - new Date(a.donationDate)
      : new Date(a.donationDate) - new Date(b.donationDate);
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">

        <div className="flex flex-col gap-4 mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-primary">
              Total Donations: {donorCount}
            </h2>

            <select
              className="select select-bordered w-full md:w-60"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="latest">Sort by Latest</option>
              <option value="oldest">Sort by Oldest</option>
            </select>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search by item or donor..."
              className="input input-bordered w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          <select
            className="select select-bordered w-full md:w-1/4"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
         >
            <option value="">All Categories ({donations.length})</option>

            {[
            ...new Set(
            donations
            .map((donation) => donation.category)
            .filter((category) => category && category.trim() !== "")
            ),
            ].map((category) => {
            const count = donations.filter(
            (donation) =>
            donation.category?.toLowerCase() === category.toLowerCase()
            ).length;

            return (
            <option key={category} value={category}>
            {category} ({count})
            </option>
            );
            })}
            </select>
          </div>
        </div>

        {loading && (
          <div className="text-center text-primary py-10">
            Loading donations...
          </div>
        )}

        {!loading && sortedDonations.length === 0 && (
          <DonationNotFound />
        )}

        {!loading && sortedDonations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDonations.map((donation) => (
              <DonationCard
                key={donation._id}
                donation={donation}
                setDonations={setDonations}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
import Donation from "../models/Donation.js";

export async function getAllDonations(req, res) {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error in getAllDonations", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getDonationById(req, res) {
  try {
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json(donation);
  } catch (error) {
    console.error("Error in getDonationById", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createDonation(req, res) {
  try {
    const {
      donorName,
      itemName,
      category,
      quantity,
      donorContact,
      itemCondition,
      donationDate,
    } = req.body;

    if (
      !donorName ||
      !itemName ||
      !category ||
      !quantity ||
      !donorContact ||
      !itemCondition ||
      !donationDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const donation = new Donation({
      donorName,
      itemName,
      category,
      quantity,
      donorContact,
      itemCondition,
      donationDate,
    });

    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    console.error("Error in createDonation", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateDonation(req, res) {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json(updatedDonation);
  } catch (error) {
    console.error("Error in updateDonation", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteDonation(req, res) {
  try {
    const deletedDonation = await Donation.findByIdAndDelete(req.params.id);

    if (!deletedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (error) {
    console.error("Error in deleteDonation", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
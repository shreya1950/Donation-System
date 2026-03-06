import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
      trim: true,
    },
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    donorContact: {
      type: String,
      required: true,
      trim: true,
    },
    itemCondition: {
      type: String,
      required: true,
      trim: true,
    },

    donationDate: {
      type: Date,
      requires: true,
    },
  },
  {
    timestamps: true,
  }
);

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;

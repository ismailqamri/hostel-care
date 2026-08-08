import mongoose, { Schema, models } from "mongoose";

const ComplaintSchema = new Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    hostelBlock: {
      type: String,
      required: true,
      trim: true,
    },
    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Electrical",
        "Plumbing",
        "Cleaning",
        "Internet",
        "Furniture",
        "Mess",
        "Other",
      ],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

const Complaint =
  models.Complaint || mongoose.model("Complaint", ComplaintSchema);

export default Complaint;
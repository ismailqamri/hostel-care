# HostelCare 🏠

A smart hostel complaint management system that allows students to submit and track complaints while giving administrators a centralized dashboard to manage and update complaint status.

## 🚀 Live Demo

https://hostel-care-wheat.vercel.app

## 📌 What I Built

HostelCare provides separate experiences for students and administrators.

### Student Portal

- Submit hostel complaints
- Enter student name, hostel block and room number
- Select complaint category
- Add a detailed complaint description
- Search complaints using student name
- View complaint status and submission date
- Track the progress of submitted complaints

### Admin Portal

- View all submitted complaints
- View complaint statistics
- Search complaints by student, room or category
- Update complaint status
- Delete complaints
- Monitor open, in-progress and resolved complaints

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 🗄️ Database

MongoDB Atlas is used to store hostel complaints.

The application communicates with MongoDB through Mongoose and exposes API endpoints for creating, retrieving, updating and deleting complaints.

## 🔌 API Endpoints

### Get all complaints

```text
GET /api/complaints
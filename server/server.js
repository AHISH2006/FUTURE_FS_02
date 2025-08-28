const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // ✅ 1. Import the 'path' module

dotenv.config();
const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== API Routes =====
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

// ✅ 2. ===== DEPLOYMENT LOGIC =====
// This tells Express to serve the static files (like CSS, JS, images)
// from the 'dist' folder inside your 'client' folder.
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/client/dist")));

// This is a catch-all route. For any request that doesn't match an API route,
// it will send back the main index.html file from your frontend.
// This is crucial for React Router to work correctly on a live server.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"));
});


// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
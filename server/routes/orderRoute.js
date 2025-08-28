// routes/orderRoute.js
const express = require("express");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const mongoose = require("mongoose");
const router = express.Router();

// --- CREATE A NEW ORDER ---
// This route is called when the user clicks "Confirm & Place Order".
router.post("/:userId", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const { userId } = req.params;
    const { products, totalAmount, shippingInfo, paymentMethod } = req.body;

    // 1. Create a new order document with all the details from the checkout page.
    const newOrder = new Order({
      userId,
      products,
      totalAmount,
      shippingInfo,
      paymentMethod,
    });
    await newOrder.save();

    // 2. After saving the order, clear the user's shopping cart.
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.products = [];
      await cart.save();
    }

    res.status(201).json({ message: "Order placed successfully!", order: newOrder });

  } catch (err) {
    console.error("SERVER ERROR placing order:", err);
    res.status(500).json({ message: "Failed to place order." });
  }
});

// --- GET ALL ORDERS FOR A SPECIFIC USER ---
// This route is called when the "Your Orders" page loads.
router.get("/:userId", async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }
    try {
        // It finds all orders in the database that match the logged-in user's ID.
        const orders = await Order.find({ userId: req.params.userId }).sort({ orderDate: -1 }); // Sort by most recent
        res.status(200).json(orders);
    } catch (err) {
        console.error("SERVER ERROR fetching orders:", err);
        res.status(500).json({ message: "Failed to fetch orders." });
    }
});

// --- DELETE AN ORDER (CANCEL) ---
// This route is called when the user confirms they want to cancel an order.
router.delete("/:orderId", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.orderId)) {
    return res.status(400).json({ message: "Invalid order ID format" });
  }
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // You can only delete orders that are still "Processing".
    if (order.status !== 'Processing') {
        return res.status(400).json({ message: `Cannot delete a ${order.status} order.` });
    }

    // This command finds the order by its unique ID and deletes it from the database.
    await Order.findByIdAndDelete(req.params.orderId);

    res.status(200).json({ message: "Order successfully deleted." });

  } catch (err) {
    console.error("SERVER ERROR deleting order:", err);
    res.status(500).json({ message: "Failed to delete order." });
  }
});

module.exports = router;

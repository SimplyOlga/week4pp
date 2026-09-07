const express = require("express");
const app = express();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/userControllers");

const tourRouter = require('./routes/tourRouter');
app.use('/api/tours', tourRouter);

const userRouter = require('./routes/userRouter');
app.use('/api/user', userRouter);

// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours
app.get("/api/tours", getAllTours);

// POST /tours
app.post("/api/tours", createTour);

// GET /tours/:tourId
app.get("/api/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/api/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/api/tours/:tourId", deleteTour);

app.get("/api/users", getAllUsers);
app.post("/api/users", createUser);
app.get("/api/users/:userId", getUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

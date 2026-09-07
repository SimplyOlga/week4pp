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
app.use('/tours', tourRouter);

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours
app.get("/tours", getAllTours);

// POST /tours
app.post("/tours", createTour);

// GET /tours/:tourId
app.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/tours/:tourId", deleteTour);

app.get("/users", getAllUsers);
app.post("/users", createUser);
app.get("/users/:userId", getUserById);
app.put("/user/:userId", updateUser);
app.delete("/user/:userId", deleteUser);
const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

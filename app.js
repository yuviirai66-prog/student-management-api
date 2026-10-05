const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(logger);

// routes
app.use("/students", studentRoutes);

// if no route matches
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// error handler (also catches invalid JSON in request body)
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON" });
  }
  console.error(err.message);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
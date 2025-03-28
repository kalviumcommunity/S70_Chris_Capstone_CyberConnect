const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());

// Import Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/threats", require("./routes/threatRoutes"));
app.use("/api/incidents", require("./routes/incidentRoutes"));
app.use("/api/verifications", require("./routes/verificationRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/activity", require("./routes/activityLogRoutes"));
app.use("/api/ai-analysis", require("./routes/aiAnalysisRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

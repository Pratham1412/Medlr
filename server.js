import "dotenv/config";
import connectDB from "./src/config/db.js";  // Use `.js` extension
import app from "./src/app.js";  // Use `.js` extension

// Connect to DB and Start Server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

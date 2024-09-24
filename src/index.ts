// app.ts

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import ethRoutes from "./routes/ethRoutes";
import mainRoutes from "./routes/mainRoutes"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Use routes
app.use("/user", userRoutes);
app.use("/", mainRoutes);
app.use("/tweet", tweetRoutes);
app.use("/send-eth", ethRoutes);

// Global error handling middleware
app.use(
	(
		err: any,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		console.error("Unhandled error:", err);
		res.status(500).json({
			error: "An unexpected error occurred",
			details: err.message || err,
		});
	}
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
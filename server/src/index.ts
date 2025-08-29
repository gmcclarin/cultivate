import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON!; // Or use SUPABASE_SERVICE_ROLE for server-side only
const supabase = createClient(supabaseUrl, supabaseKey);

// Test route
app.get("/health", (_req: Request, res: Response) => {
  res.send("✅ Cultivate API is running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌱 Cultivate API running on http://localhost:${PORT}`);
});

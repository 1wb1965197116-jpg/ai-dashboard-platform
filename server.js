import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("./")); // Serve static files

// Dummy translation endpoint
app.post("/api/translate", async (req, res) => {
    const { text } = req.body;
    // Replace with your real translation logic or AI call
    if (typeof text !== "string" || !text.trim()) return res.status(400).json({ error: "Enter text" });
    const translated = text.split("").reverse().join(""); // Demo only, not translation.
    res.json({ original: text, translated, demo: true });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

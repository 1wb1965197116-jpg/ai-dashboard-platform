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
    const translated = text.split("").reverse().join(""); // Example: reverse string
    res.json({ original: text, translated });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

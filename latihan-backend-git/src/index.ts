import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/register", (req: Request, res: Response) => {
    const { username, password } = req.body;

    // code ...

    res.status(200).json({ message: "User registered", data: null });
});

app.post("/login", (req: Request, res: Response) => {
    const { username, password } = req.body;

    // code ...

    res.status(200).json({ message: "User logged in", data: null });
});

app.post("/products", (req: Request, res: Response) => {
    const { name, price } = req.body;

    // code ...

    res.status(200).json({ message: "Product added", data: null });
});

app.get("/products", (req: Request, res: Response) => {
    const { name, price } = req.body;

    // code ...

    res.status(200).json({ message: "List of product", data: [] });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

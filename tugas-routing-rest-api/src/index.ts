import express, { Request, Response } from "express";

const PORT = 3000;

function init() {
    const app = express();

    let categories = [
        { id: 1, name: "smartphones" },
        { id: 2, name: "laptops" },
    ];

    let products = [
        {
            id: 1,
            name: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
        },
        {
            id: 2,
            name: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
        },
        {
            id: 3,
            name: "MacBook Pro",
            description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
            price: 1749,
            discountPercentage: 11.02,
            stock: 83,
            brand: "Apple",
            category: "laptops",
        },
    ];

    app.use(express.static("public"));
    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });

    // Get All Category
    app.get("/api/category", (req: Request, res: Response) => {
        res.status(200).json(categories);
    });

    // Get Category By Id
    app.get("/api/category/:id", (req: Request, res: Response) => {
        const categoryId = parseInt(req.params.id);
        const category = categories.find((c) => c.id === categoryId);

        if (category) res.status(200).json(category);
        else res.status(404).json({ message: "Category not found" });
    });

    // Create New Category
    app.post("/api/category", (req: Request, res: Response) => {
        const newCategory = req.body;

        newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;

        categories.push(newCategory);

        res.status(201).json(newCategory);
    });

    // Update Category
    app.put("/api/category/:id", (req: Request, res: Response) => {
        const categoryId = parseInt(req.params.id);
        const categoryIndex = categories.findIndex((c) => c.id === categoryId);

        if (categoryIndex !== -1) {
            categories[categoryIndex] = { id: categoryId, ...req.body };
            res.status(200).json(categories[categoryIndex]);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    });

    // Delete Category
    app.delete("/api/category/:id", (req: Request, res: Response) => {
        const categoryId = parseInt(req.params.id);

        categories = categories.filter((category) => category.id !== categoryId);

        res.status(200).send();
    });

    // Search product by name
    app.get("/api/products/search", (req: Request, res: Response) => {
        const productName = req.query.name;
        const product = products.find((product) => product.name === productName);

        if (product) res.status(200).json(product);
        else res.status(404).json({ message: "Product not found" });
    });

    app.get("/api/c/:category", (req: Request, res: Response) => {
        const category = req.params.category;
        const productName = req.query.p;
        let product = [];

        if (productName) product = products.filter((product) => product.category === category && product.name === productName);
        else product = products.filter((product) => product.category === category);

        if (!product.length) res.status(404).json({ message: "Product not found" });

        res.status(200).json(product);
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

init();

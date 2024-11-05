import express, { Request, Response } from "express";

const PORT = 3000;

function init() {
    const app = express();

    app.use(express.static("public"));

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });

    app.get("/hello", (req: Request, res: Response) => {
        res.status(200).json({
            message: "Success fetch message",
            data: "Hello World!",
        });
    });

    app.get("/user", (req: Request, res: Response) => {
        res.status(200).json({
            message: "Success fetch message",
            data: {
                id: 1,
                name: "John Doe",
                username: "jdoe",
                email: "jdoe@mail.com",
            },
        });
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

init();

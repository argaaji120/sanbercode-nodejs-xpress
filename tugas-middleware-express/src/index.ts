import express from "express";
import router from "./routes/api";

const PORT = 3000;

function init() {
    const app = express();

    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

init();

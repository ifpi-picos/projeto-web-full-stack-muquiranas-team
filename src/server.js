const express = require('express');
const authController = require("./controllers/authController");
const AdminController = require("./controllers/AdminController");
const PostController = require("./controllers/PostController");
const FavController = require("./controllers/FavController");
const swagger = require('swagger-ui-express');
const swaggerDocs = require("./swagger.json");
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const helmet = require('helmet');



const port = process.env.PORT || 3000;
const authenticateMiddleware = require("./middlewares/authenticate")
const app = express();

app.use(express.json());

app.use(helmet());

app.use(cors());

app.use("/api-document", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/termos", (req, res) => {
    return res.json({
        message: "Termos de serviço",
    });
});
app.use("/auth", authController)
app.use("/admin", authenticateMiddleware, AdminController)
app.use("/post", PostController);
app.use("/fav", FavController);


app.listen(port, () => {
    console.log('Server is running at port 3000!');
});
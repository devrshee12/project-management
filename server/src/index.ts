import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// routes import 
import projectRoutes from "./routes/project.route"
import taskRoutes from "./routes/task.route"
import searchRoute from "./routes/search.route"
import usersRoutes from "./routes/user.route"
import teamsRoutes from "./routes/team.route"

// configuration 
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


// routes 

app.get("/", (req, res) => {
    res.send("everything working fine!!")
})


app.use("/projects", projectRoutes)
app.use("/tasks", taskRoutes)
app.use("/search", searchRoute)
app.use("/users", usersRoutes);
app.use("/teams", teamsRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
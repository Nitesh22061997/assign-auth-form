import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './databse/conn.js';
import router from './router/route.js';
import path from "path"


const port = process.env.PORT || 8080;

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack



/** HTTP GET Request */
// app.get('/', (req, res) => {
//     res.status(201).json("Home GET Request");
// });


// ****************   DEPLOYMENT CODE         *********************
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "frontend/build")))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
})


// ****************   DEPLOYMENT CODE         *********************



/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
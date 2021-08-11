import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import blogRouter from "./services/blogs/index.js"

const server = express()

const port = 3001

server.use(cors())

server.use(express.json())

//****************Routes****************/



console.log(listEndpoints(server));

server.listen(port, () =>{
    console.log("server is running on port: " + port);
})
import express from "express"
import  { fileURLToPath }  from "url"
import { dirname,join } from "path"
import fs from "fs"

const blogsJSONPath = join(dirname(fileURLToPath(import.meta.url)))

const blogRouter = express.Router()

const getBlogs = () => JSON.parse(fs.readFileSync(blogsJSONPath))

const writeBlog = ()  => content => fs.writeFileSync(blogsJSONPath, JSON.stringify(content))

blogRouter.get("/",(req,res) => {
    const blog = getBlogs()
})


export default blogRouter
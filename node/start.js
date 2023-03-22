const concurrently = require("concurrently")
const path = require("path");

concurrently([{
    command:"npm run tailwind",
    cwd:path.resolve(__dirname,"../"),
    name:"tailwind".yellow
},{
    command:"npm run dev",
    cwd:path.resolve(__dirname,"../"),
    name:"webpack".blue
}])

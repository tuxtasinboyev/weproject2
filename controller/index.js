import fs from "fs"
import path from "path"
const readfile = () => {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "utf-8"))
    return data
}
const writefile = (data1) => {
    const data = JSON.parse(fs.writeFileSync(path.join(process.cwd(), "/data/users.json"), JSON.stringify(data1, null, 2)))
    return data
}
const GETALL = (req, res) => {
    const data = readfile()
    res.send(data)

}
const GET = () => {
    const data = readfile()
    

}
const GETHISTORY = () => {

}
const POST = () => {


}
const PUT = () => {

}
export default {
    GETHISTORY,
    GETALL,
    GET,
    POST,
    PUT,

}
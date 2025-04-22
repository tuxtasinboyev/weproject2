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
const GETHISTORY = (req,res) => {
    const data=JSON.parse(fs.readFileSync(path.join(process.cwd(),"/data/history.json"),"utf-8"))
    const id = req.params.id
    const history = data.filter((item) => item.id === id)
    res.send(history)

}
const POST = (req,res) => {
    const data=readfile()
    let {fromUserId,toUserId,amount}=req.body
    
    let to = []
    let from = []
    for(let i of data){
       if(i.id == toUserId){
        to=i
       }
       if(i.id == fromUserId){
        from = i
       }
        
    }
    from.balance = from.balance - amount
    to.balance = to.balance + amount
    writefile(data)
      
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
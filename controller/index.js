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
const GET = (req,res) => {
    const data = readfile()
    let {id}=req.params
    let getbyid=data.filter(balance=>balance.id==parseInt(id))
    if(getbyid){
        res.json(getbyid)
    }else{
        res.json({message:"data fileni ichida bunday idli odam topilmadi"})
    }
    

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

const PUT = (req, res) => {
    const data = readfile();
    const { id } = req.params;
    const { timelimit } = req.body;

    let user = data.find(user => user.id === parseInt(id));

    if (user) {
        user.timelimit = timelimit; 
        writefile(data); 
        res.json({ message: "Ma'lumot yangilandi", user });
    } else {
        res.status(404).json({ message: "Bunday idli foydalanuvchi topilmadi" });
    }
};
export default {
    GETHISTORY,
    GETALL,
    GET,
    POST,
    PUT,

}
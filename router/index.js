import { Router } from "express"
import controller from "../controller/index.js"
const router = Router()

router
    .get("/users/all", controller.GETALL)
    .get("/users/:id", controller.GET)
    .get("/transactions/history/:id", controller.GETHISTORY)
    .post("/transactions/transfer", controller.POST)
    .put("/users/{userId}/limit", controller.PUT)
export default router
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();


export const getUsers = async(req: Request, res:Response) : Promise<void> => {
    try{
        const users = await prisma.user.findMany();
        res.status(201).json(users);
    }
    catch(err:any){
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
          });
        
    }
}
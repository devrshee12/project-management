import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (err:any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const createProject = async (req:Request, res: Response) : Promise<void> => {
    try{    
        const {name, description, startDate, endDate} = req.body;
        const newProject = await prisma.project.create({
            data: {
                name,
                description, 
                startDate,
                endDate
            }
        })

        res.status(201).json(newProject)

    }
    catch(err: any){
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

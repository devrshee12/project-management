/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView";
import ListView from "../ListView";
import TimelineView from "../TimelineView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
    params:{id: string};

};

const Project = ({params}: Props) => {
    const {id} = params;
    const [activeTab, setActiveTab] = useState<string>("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState<boolean>(false);

  return <div>
    <ModalNewTask isOpen={isModalNewTaskOpen} onClose={() => setIsModalNewTaskOpen(false)} id={id}/>
    
    <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
    {
        activeTab === 'Board' && <Board id={id} setIsModalNewOpen={setIsModalNewTaskOpen}/>
    }
    {
        activeTab === 'List' && <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
    }
    {
        activeTab === 'Timeline' && <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
    }
    {
        activeTab === 'Table' && <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
    }
  </div>;
};




export default Project;

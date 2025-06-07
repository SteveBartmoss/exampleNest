import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller({})
export class TaskController{

    taskservice:TaskService;

    constructor(tasksevice: TaskService){
        this.taskservice = tasksevice
    }

    @Get('/task')
    getAllTask(){
       return this.taskservice.getTask();
    }


}
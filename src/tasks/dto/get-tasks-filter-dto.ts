import { IsNotEmpty } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto {
    @IsNotEmpty()
    status: TaskStatus;

    @IsNotEmpty()
    search: string;
}


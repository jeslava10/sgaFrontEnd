import { Employees } from "./employees.model";

export class Activities {

    id?: Number ;
    description?: string ;
    employeeId?: Employees ;
    executionDate?: Date ;
    executionHour?: Number ;
    statusActivity?: Number ;
    lateDay?: Number ;

}

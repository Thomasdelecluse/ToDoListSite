import {Injectable} from "@angular/core";
import {ToDoListDAO} from "../dao/ToDoListDAO";
import {ToDoDTO} from "../dto/ToDoDTO";

@Injectable({
  providedIn: 'root'
})
export class ToDoListFormService {

  constructor(private todoListController: ToDoListDAO) {  }

  public form(todo: {title: string, type: string, description: string}) {
    this.todoListController.createToDo(todo)
  }

  public updateTableWithDatas() {
    return this.todoListController.getAllToDo()
  }

  public updateStatus(id: number, todo: Omit<ToDoDTO, "id">) {
   return  this.todoListController.putUpdateStatus(id,todo)
  }

  public deleteTodo(id: number) {
    return  this.todoListController.deleteTodo(id)
  }
}

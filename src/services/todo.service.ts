import { TTodo, TTodoUpdateOptions } from "../models/todo.model";
import TodoRepo from "../repositories/todo.repository";

export default class TodoSvc {
  static createTask(task: TTodo) {
    return TodoRepo.createTask(task);
  }

  static update(task: TTodoUpdateOptions) {
    return TodoRepo.update(task);
  }

  static delete(_id: string) {
    return TodoRepo.delete(_id);
  }
}

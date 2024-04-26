import { ObjectId } from "mongodb";

export type TTodo = {
  _id?: ObjectId;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
};

export type TTodoUpdateOptions = {
  _id?: ObjectId | string;
  title: string;
  description: string;
};

export class MOrganization implements Partial<TTodo> {
  _id?: ObjectId;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;

  constructor({ _id = new ObjectId(), title = "", description = "", createdAt = new Date(), updatedAt, status = "active" } = {} as TTodo) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
  }
}

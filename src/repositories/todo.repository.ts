import { ObjectId } from "mongodb";
import { MOrganization, TTodo, TTodoUpdateOptions } from "../models/todo.model";
import { getDB } from "../utils/mongo";

export default class TodoRepo {
  static collection() {
    return getDB().collection("organizations");
  }

  static async createTask(organization: TTodo) {
    return this.collection().insertOne(new MOrganization(organization));
  }

  static async update(organization: TTodoUpdateOptions) {
    try {
      organization._id = new ObjectId(organization._id);
    } catch (error) {
      return Promise.reject("Invalid organization id.");
    }
    const { title, description } = organization;
    const updatedAt = new Date();
    return this.collection().updateOne({ _id: organization._id }, { $set: { title, description, updatedAt } });
  }

  static async delete(_id: string | ObjectId) {
    try {
      _id = new ObjectId(_id);
    } catch (error) {
      return Promise.reject("Invalid organization id.");
    }

    try {
      await this.collection().deleteOne({ _id: new ObjectId(_id) });
      return Promise.resolve("Successfully deleted organization.");
    } catch (error) {
      return Promise.reject("Server internal error.");
    }
  }
}

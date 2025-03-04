import { Schema, model } from 'mongoose';

// 1. Create an interface representing a TS object.
export interface IDrone {
  name: string;
  type: string;
  _id?: string;
}

// 2. Create a Schema corresponding to the document in MongoDB.
const droneSchema = new Schema<IDrone>({
  name: { type: String, required: true },
  type: { type: String, required: true }
});

// 3. Create a Model.
export const DroneModel = model<IDrone>('Drone', droneSchema);

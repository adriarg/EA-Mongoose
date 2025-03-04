import { Schema, model } from 'mongoose';

// 1. Create an interface representing a TS object.
export interface IMission {
  name: string;
  description: string;
  _id?: string;
}

// 2. Create a Schema corresponding to the document in MongoDB.
const missionSchema = new Schema<IMission>({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// 3. Create a Model.
export const MissionModel = model<IMission>('Mission', missionSchema);

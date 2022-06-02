import { VehicleModel } from '@/domain/models/vehicle';
import { model, Schema } from "mongoose";

const schema = new Schema<VehicleModel>({
    // Implementation
});

export const VehicleModelSchema = model<VehicleModel>('vehicles', schema);

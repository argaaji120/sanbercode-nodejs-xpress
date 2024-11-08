import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CategoryModel = mongoose.model("Categories", CategorySchema);

export default CategoryModel;

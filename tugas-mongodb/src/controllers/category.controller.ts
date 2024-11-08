import { Request, Response } from "express";
import CategoryModel from "../models/category.model";

export default {
    async create(req: Request, res: Response) {
        try {
            const result = await CategoryModel.create(req.body);

            res.status(201).json({
                message: "Success create category",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed create category",
                data: err.message,
            });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const result = await CategoryModel.find();

            res.status(200).json({
                message: "Success get all category",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed get all category",
                data: err.message,
            });
        }
    },

    async findOne(req: Request, res: Response) {
        try {
            const result = await CategoryModel.findOne({ _id: req.params.id });

            res.status(200).json({
                message: "Success get one category",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed get one category",
                data: err.message,
            });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const result = await CategoryModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

            res.status(200).json({
                message: "Success update category",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed update category",
                data: err.message,
            });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const result = await CategoryModel.findOneAndDelete({ _id: req.params.id });

            res.status(200).json({
                message: "Success delete category",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed delete category",
                data: err.message,
            });
        }
    },
};

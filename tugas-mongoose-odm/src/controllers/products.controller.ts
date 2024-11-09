import { Request, Response } from "express";
import ProductsModel from "../models/products.model";

export default {
    async create(req: Request, res: Response) {
        try {
            const result = await ProductsModel.create(req.body);

            res.status(201).json({
                message: "Success create product",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed create product",
                data: err.message,
            });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const result = await ProductsModel.find().populate("category");

            res.status(200).json({
                message: "Success get all products",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed get all products",
                data: err.message,
            });
        }
    },

    async findOne(req: Request, res: Response) {
        try {
            const result = await ProductsModel.findOne({ _id: req.params.id });

            res.status(200).json({
                message: "Success get one product",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed get one product",
                data: err.message,
            });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const result = await ProductsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

            res.status(200).json({
                message: "Success update product",
                data: result,
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed update product",
                data: err.message,
            });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const result = await ProductsModel.findOneAndDelete({ _id: req.params.id });

            res.status(200).json({
                data: result,
                message: "Success delete product",
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                message: "Failed delete product",
                data: err.message,
            });
        }
    },
};

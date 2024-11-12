import { Request, Response } from "express";
import ProductsModel from "../models/products.model";
import * as Yup from "yup";

const createValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    images: Yup.array().of(Yup.string()).required().min(1),
    price: Yup.number().required(),
    qty: Yup.number().required().min(1),
    category: Yup.string().required(),
});

interface IPaginationQuery {
    page: number;
    limit: number;
    search?: string;
}

export default {
    async create(req: Request, res: Response) {
        try {
            await createValidationSchema.validate(req.body);
            const result = await ProductsModel.create(req.body);

            res.status(201).json({
                message: "Success create product",
                data: result,
            });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                res.status(400).json({
                    message: "Failed create product",
                    data: error.errors,
                });
            } else {
                const err = error as Error;

                res.status(500).json({
                    message: "Failed create product",
                    data: err.message,
                });
            }
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const { limit = 10, page = 1, search = "" } = req.query as unknown as IPaginationQuery;

            const query = {};

            if (search) {
                Object.assign(query, {
                    name: { $regex: search, $options: "i" },
                });
            }

            const result = await ProductsModel.find(query)
                .limit(limit)
                .skip((page - 1) * limit)
                .sort({ createdAt: -1 })
                .populate("category");

            const total = await ProductsModel.countDocuments(query);

            res.status(200).json({
                message: "Success get all products",
                page: +page,
                limit: +limit,
                total,
                totalPage: Math.ceil(total / limit),
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

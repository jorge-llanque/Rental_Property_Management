import express from "express";
import morgan from "morgan";
import 'reflect-metadata';
import { createConnection } from "typeorm";

export default () => {
    
    const app = express();
    app.use(express.json());
    app.use(morgan('combined'));

    createConnection();

    return app
}
import { Response } from "express";

type TResponse<T> = {
    success:boolean;
    statusCode:number;
    message?:string;
    data:T
}

const sendRes = <T>(res:Response,data:TResponse<T>)=>{
    res.status(data?.statusCode).json({
        success:data?.success,
        statusCode:data?.statusCode,
        message:data?.message,
        data:data?.data
    })
}

export const responseHandler ={
    sendRes
}
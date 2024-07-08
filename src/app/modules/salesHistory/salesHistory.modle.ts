import { Schema, model } from "mongoose";
import { TSalesHistory } from "./salesHistory.interface";

const salesHistorySchema = new Schema<TSalesHistory>({
    bayerName:{
        type:String,
        required:true
    },
    slingDate:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    productId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    },
    sellerId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User' 
    }

})

export const salesHistoryModel = model<TSalesHistory>('SalesHistory',salesHistorySchema)
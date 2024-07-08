import { Types } from "mongoose"

export type TSalesHistory = {
    bayerName:string,
    slingDate:string,
    quantity:number,
    productId:Types.ObjectId,
    sellerId: Types.ObjectId

}
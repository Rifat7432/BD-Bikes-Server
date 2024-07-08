import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { responseHandler } from "../../utils/sendResponse";
import { salesHistoryService } from "./salesHistory.service";
// get Sales History
const getSalesHistory = catchAsync(async(req,res)=>{
    const result = await salesHistoryService.getSalesHistoryFromDB()
    responseHandler.sendRes(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Sale History found successfully',
        data: result,
      })
})
export const salesHistoryController = {
    getSalesHistory
}
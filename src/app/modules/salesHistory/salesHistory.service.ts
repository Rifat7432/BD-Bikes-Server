import { salesHistoryModel } from './salesHistory.modle';
// get Sales History
const getSalesHistoryFromDB = async () => {
  const result = await salesHistoryModel.find().populate('productId')
  return result;
};

export const salesHistoryService = {
    getSalesHistoryFromDB
}
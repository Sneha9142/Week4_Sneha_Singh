import Invoice from "../models/invoice";
import { CreateInvoiceDTO } from "../utils/DTO";

export const createInvoice = async (data: CreateInvoiceDTO) => {
  return await Invoice.create(data as any);
};

export const getInvoices = async () => {
  return await Invoice.findAll();
};
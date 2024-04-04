const { Invoice } = require("../models");

const createInvoice = async (invoiceData) => {
  return Invoice.create(invoiceData);
}

const getAllInvoices = async () => {
  return Invoice.find();
}

const deleteInvoice = async (invoiceId) => {
  return Invoice.findByIdAndDelete(invoiceId);
}

const getInvoiceById = async (invoiceId) => {
  return Invoice.findById(invoiceId);
}

const updateInvoice = async (invoiceId, updateData) => {
  return Invoice.findByIdAndUpdate(invoiceId, { $set: updateData });
}

module.exports = {
  createInvoice,
  getAllInvoices,
  deleteInvoice,
  getInvoiceById,
  updateInvoice
}

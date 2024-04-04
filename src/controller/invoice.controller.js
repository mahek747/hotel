const Invoice = require('../models/invoice.model');

exports.createInvoice = async (req, res) => {
  try {
    const { invoiceNumber, customerName, items, totalAmount } = req.body;

    const newInvoice = new Invoice({
      invoiceNumber,
      customerName,
      items,
      totalAmount
    });

    await newInvoice.save();

    res.status(201).json({ success: true, message: 'Invoice created successfully', invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create invoice', error: error.message });
  }
};

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json({ success: true, message: 'Invoices retrieved successfully', invoices });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve invoices', error: error.message });
  }
};

exports.getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ success: false, message: 'Invoice not found' });
    }
    res.status(200).json({ success: true, message: 'Invoice retrieved successfully', invoice });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve invoice', error: error.message });
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus, paymentDate } = req.body;

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ success: false, message: 'Invoice not found' });
    }

    invoice.paymentStatus = paymentStatus || invoice.paymentStatus;
    invoice.paymentDate = paymentDate || invoice.paymentDate;

    await invoice.save();

    res.status(200).json({ success: true, message: 'Invoice updated successfully', invoice });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update invoice', error: error.message });
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);
    if (!invoice) {
      return res.status(404).json({ success: false, message: 'Invoice not found' });
    }
    res.status(200).json({ success: true, message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete invoice', error: error.message });
  }
};

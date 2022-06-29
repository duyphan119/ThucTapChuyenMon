const discountService = require("../services/discount.service");

const controller = {
  getAll: async (req, res) => {
    const { data, status } = await discountService.getAll(req.query);
    res.status(status).json(data);
  },
  create: async (req, res) => {
    const { data, status } = await discountService.create(req.body);
    res.status(status).json(data);
  },
  update: async (req, res) => {
    const { data, status } = await discountService.update(
      req.params.id,
      req.body
    );
    res.status(status).json(data);
  },
  destroy: async (req, res) => {
    const { data, status } = await discountService.destroy(req.params.id);
    res.status(status).json(data);
  },
};

module.exports = controller;

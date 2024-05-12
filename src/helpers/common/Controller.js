import httpStatus from 'http-status';
import aqp from 'api-query-params';

class Controller {
  constructor(service, modelName) {
    this.service = service;
    this.modelName = modelName;
  }

  async create(req, res) {
    try {
      const result = await this.service.create(req.body);
      res.status(httpStatus.CREATED).json(result);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const query = aqp(req.query);
      const result = await this.service.findAll(query);
      res.json(result);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }

  async findOne(req, res) {
    try {
      const result = await this.service.findById(req.params.id);
      if (!result) {
        return res.status(httpStatus.NOT_FOUND).json({ message: `${this.modelName} not found` });
      }
      res.json(result);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const result = await this.service.update(req.params.id, req.body);
      if (!result) {
        return res.status(httpStatus.NOT_FOUND).json({ message: `${this.modelName} not found` });
      }
      res.json(result);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  async remove(req, res) {
    try {
      const result = await this.service.remove(req.params.id);
      if (!result) {
        return res.status(httpStatus.NOT_FOUND).json({ message: `${this.modelName} not found` });
      }
      res.status(httpStatus.NO_CONTENT).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }
}

export default Controller;

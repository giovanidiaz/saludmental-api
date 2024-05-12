import mongoose from 'mongoose';

class Service {
  constructor(model) {
    this._model = model;
  }

  async findAll(query) {
    const { filter, options } = query;
    options.populate = options.populate || '';
    const result = await this._model.find(filter, null, options);
    return result;
  }

  async findById(id) {
    const result = await this._model.findById(id);
    return result;
  }

  async create(data) {
    const result = await this._model.create(data);
    return result;
  }

  async update(id, data) {
    const result = await this._model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return result;
  }

  async remove(id) {
    const result = await this._model.findByIdAndDelete(id);
    return result;
  }
}

export default Service;

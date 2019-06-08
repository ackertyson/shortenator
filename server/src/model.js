const assign = require('lodash.assign');
const keygen = require('keygen');

class Model {
  constructor() {
    this.records = {};
  }

  async all() {
    return Object.keys(this.records).map(key => ({ id: key, ...this.records[key] }));
  }

  async get(id) {
    const record = this.records[id];
    if (!record) return;

    return { id, ...record };
  }

  async insert(body) {
    const { url } = body;
    const id = keygen.url(8);
    this.records[id] = { url, hits: 0 };
    return { id, ...this.records[id] };
  }

  async update(id, body) {
    const record = this.records[id];
    if (!record) return;

    this.records[id] = assign({}, record, body);
  }
}

module.exports = () => new Model();

const uuid = require('uuid');

module.exports = class Todo {
  constructor({ text, when }) {
    this.text = text;
    this.when = when;
    this.status = '';
    this.id = uuid.v4();
  }

  isValid() {
    return !!this.text && !isNaN(this.when.valueOf())
  }
}

'use strict';

class Tag {
  constructor(name, index) {
    this.index = index;
    this.name = name.replace(/\s/g, '');
    this.separateTypeFromName();
  }

  separateTypeFromName() {
    this.type = this.determineType();
    if (this.type !== 6) {
      this.name = this.name.slice(1);
    }
  }

  determineType() {
    return {
      '>': 1,
      '#': 2,
      '^': 3,
      '/': 4,
      '{': 5
    }[this.name[0]] || 6;
  }

  toJSON() {
    let json =  {
      index: this.index,
      type: this.type,
      name: this.name
    };
    if (this.tree) {
      json.tree = this.tree.toJSON();
    }
    return json;
  }
}

module.exports = Tag;

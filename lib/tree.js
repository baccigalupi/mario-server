'use strict';

class Tree {
  constructor(name) {
    this.texts = [];
    this.tags = [];
    this.name = name;
  }

  addText(text) {
    if (text.length) { this.texts.push(text); }
  }

  addTag(tag) {
    tag.index = this.texts.length;
    this.tags.push(tag);
    this.texts.push('');
  }

  toJSON() {
    return {
      texts: this.texts,
      tags: this.tags.map((tag) => { return tag.toJSON(); })
    };
  }
}

module.exports = Tree;

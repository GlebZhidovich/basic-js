const chainMaker = {
  chain: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
        isNaN(position) ||
        position <= 0 ||
        position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = [];
    return chain.map(elem => `( ${elem} )`).join('~~');
  }
};

module.exports = chainMaker;

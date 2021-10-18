/* const { NotImplementedError } = require('../extensions/index.js'); */

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    function insertNode(node, newData) {
      if (node === null) {
        return new Node(newData);
      }
      if (node.data === newData) {
        return node;
      }
      if (newData < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }
      return node;
    }

    this.roots = insertNode(this.roots, data);
  }

  has(data) {
    function searchNode(node, newNode) {
      if (node === null) {
        return false;
      }
      if (node.data === newNode) {
        return true;
      }
      if (newNode < node.data) {
        return searchNode(node.left, newNode);
      } else {
        return searchNode(node.right, newNode);
      }
    }

    return searchNode(this.roots, data);
  }
  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

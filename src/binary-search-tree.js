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
    this.roots = insertNode(this.roots, data);

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

  find(data) {
    function findNode(node, newNode) {
      if (node === null) {
        return null;
      }
      if (node.data === newNode) {
        return node;
      }
      if (data < node.data) {
        return findNode(node.left, newNode);
      } else {
        return findNode(node.right, newNode);
      }
    }

    return findNode(this.roots, data);
  }

  remove(data) {
    this.root = removeNode(this.roots, data);

    function removeNode(node, newNode) {
      if (node === null) {
        return null;
      }
      if (newNode < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < newNode) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let min = node.right;
        while (min.left) {
          min = min.left;
        }

        node.data = min.data;
        node.right = removeNode(node.right, min.data);
        return node;
      }
    }
  }

  min() {
    if (this.roots === null) {
      return;
    }

    let minNode = this.roots;

    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (this.roots === null) {
      return;
    }

    let maxNode = this.roots;

    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
};

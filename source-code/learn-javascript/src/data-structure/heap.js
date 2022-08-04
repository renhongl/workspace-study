class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Heap {
  constructor() {
    this._root = null;
  }

  insert(data, node = this._root) {
    let newNode = new Node(data);
    if (node === null) {
      this._root = newNode;
    } else {
      //如果插入的数据比根节点的数据大
      //那么，将插入数据与根节点数据交换，再进行插入
      if (data > node.data) {
        let temp = data;
        data = node.data;
        node.data = temp;
        this.insert(data, node);
      } else {
        if (!node.left) {
          return (node.left = new Node(data));
        }
        if (!node.right) {
          return (node.right = new Node(data));
        }
        if (node.left && node.left.data <= data) {
          this.insert(data, node.left);
        } else {
          this.insert(data, node.right);
        }
      }
    }
  }

  //中序遍历
  inOrder(callback, node = this._root) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.inOrder(callback, node.left);
    }
    callback(node);
    if (node.right) {
      this.inOrder(callback, node.right);
    }
  }

  //先序遍历
  preOrder(callback, node = this._root) {
    if (node === null) {
      return;
    }
    callback(node);
    if (node.left) {
      this.preOrder(callback, node.left);
    }
    if (node.right) {
      this.preOrder(callback, node.right);
    }
  }

  //后序遍历
  postOrder(callback, node = this._root) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.postOrder(callback, node.left);
    }
    if (node.right) {
      this.postOrder(callback, node.right);
    }
    callback(node);
  }

  //层级遍历
  levelOrder(callback, node = this._root) {
    if (node === null) {
      return;
    }
    let queue = [];
    queue.push(node);
    while (queue.length > 0) {
      let curr = queue.shift();
      callback(curr);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
  }

  remove(data, node = this._root) {
    if (node === null) {
      return null;
    }
    if (this._root.data === data) {
      let curr = this._root;
      this._root = null;
      return curr;
    }
    if (node.left) {
      let curr = node.left;
      if (curr.data === data) {
        node.left = null;
        return curr;
      } else {
        this.remove(data, node.left);
      }
    }
    if (node.right) {
      let curr = node.right;
      if (curr.data === data) {
        node.right = null;
        return curr;
      } else {
        this.remove(data, node.right);
      }
    }
  }

  toString() {
    return JSON.stringify(this._root);
  }
}

let heap = new Heap();
heap.insert(35, heap._root);
heap.insert(52, heap._root);
heap.insert(21, heap._root);
heap.insert(11, heap._root);
heap.insert(16, heap._root);
heap.insert(87, heap._root);
heap.insert(100, heap._root);
console.log(heap.toString());
heap.levelOrder((node) => console.log(node.data));

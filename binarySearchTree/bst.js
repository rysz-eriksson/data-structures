class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        const recursiveInsert = (_currentLevel, _node) =>
        {
            const insertLeftOrRight = (direction) =>
            {
                if (!_currentLevel[direction])
                _currentLevel[direction] = _node
                else
                    recursiveInsert(_currentLevel[direction], _node)
            }

            if (_node.value < _currentLevel.value)
                insertLeftOrRight("left")
            else
                insertLeftOrRight("right")

        }
        if (!this.root)
            this.root = newNode
        else 
            recursiveInsert(this.root, newNode)
    }

    find(value) {
        let  result = false
        const recursiveSearch = (_currentLevel) =>
        {
            if (!_currentLevel || _currentLevel.value === null)
                return;
            if (value === _currentLevel.value)
            {
                result = true;
                return;
            }
            else if (value < _currentLevel.value)
                recursiveSearch(_currentLevel.left)
            else
                recursiveSearch(_currentLevel.right)
        }

        recursiveSearch(this.root)
        return result
    }

    findIter(value) {
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    bfs() {
        const queue = [];
        const result = []
        if (this.root.value)
        queue.push(this.root)
        while (queue.length)
        {
            const dequedItem = queue.shift()
            result.push(dequedItem.value)
            if (dequedItem.left)
                queue.push(dequedItem.left)
            if (dequedItem.right)
                queue.push(dequedItem.right) 
        }

        return result
    }

    dfsPreOrder() {
        const leftWaiting = []
        const rightWaiting = []
        const visited = []
        if (this.root.value)
            leftWaiting.push(this.root)

        while (leftWaiting.length || rightWaiting.length)
        {
            const currentElem = leftWaiting.shift() || rightWaiting.pop()

            visited.push(currentElem.value)
            if (currentElem.left) leftWaiting.push(currentElem.left)
            if (currentElem.right) rightWaiting.push(currentElem.right)
            
        }

        return visited
    }

    dfsPreOrderRec() {
        const visited = []
        const traverse = (node) =>
        {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return visited
    }

    dfsPostOrderRec() {
        const visited = []
        const traverse = (node) =>
        {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }

        traverse(this.root)
        return visited
    }

    dfsInOrder() {
        const visited = []
        const traverse = (node) =>
        {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)

        }

        traverse(this.root)
        return visited
    }
}

const tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)



// console.log(tree.root.value) // 10
// console.log(tree.root.left.value) // 5 
// console.log(tree.root.left.left.value) //2
// console.log(tree.root.left.right.value) //7
// console.log(tree.root.right.value) //13
// console.log(tree.root.right.left.value) //11
// console.log(tree.root.right.right.value) //16

//      10
//   5     13
// 2  7  11  16

// console.log(tree.find(10))
// console.log(tree.find(16))
// console.log(tree.find(2))
// console.log(tree.find(4))

// console.log(tree.bfs())
// console.log(tree.dfsPreOrder())
console.log(tree.dfsPreOrderRec())
console.log(tree.dfsPostOrderRec())
console.log(tree.dfsInOrder())














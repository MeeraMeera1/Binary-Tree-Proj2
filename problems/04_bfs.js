function bfs(root) {
    if(!root) return [];

    let queue = [root];
    let array = [];

    while(queue.length){
        let currentNode = queue.shift();
        array.push(currentNode.val);

        if(currentNode.left) {
            queue.push(currentNode.left)
        }

        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return array;
}
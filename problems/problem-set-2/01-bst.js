class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = nulll;
    }
}

class BST{
    //initialize an empty binary search tree
    constructor(){
        this.root = null;
    }

    insert(val,currentNode = this.root){
        let newNode = new TreeNode(val);

        if(!this.root) {
            this.root = newNode;
            return;
        }

        if (val < currentNode.val){
            if(!currentNode.left){
                currentNode.left = newNode;
            } else {
                this.insert(val, currentNode.left);
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }


    // perform a recursive search through the binary search tree 
    searchRecur(val, currentNode = this.root) {
        if(!currentNode) return false;
        if(val<currentNode.val) {
            return this.searchRecur(val, currentNode.left)
        } else if (val > currentNode.val) {
            return this.searchRecur(val, currentNode.right)
        } else {
            return true;
        }
    }

    
    //perform an iterative search through the binary search tree
    searchIter(val){
        if(!this.root) return false; 

        let current = this.root;

        while(current !== null){
            if(val>current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            }else return true;
        }
        return false;
    }
}

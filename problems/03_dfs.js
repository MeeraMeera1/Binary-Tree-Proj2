function dfs1(root) {
  if (!root) return [];

  let array = [root.val, ...dfs1(root.left), ...dfs1(root.right)];

  return array;
}

//for some reason this works not quite sure why
//works because inorder.postorder and preorder are all types of dfs

//another way  to implement this regardless of the method

//I dont really like the way this code looks 
//sure there is a better way to do this

function dfs2(root) {
  let stack = [root];

  let seen = new Set();

  while (stack.length) {
    //implementing the way a stacj works
    let curr = stack[stack.length - 1];
    //current becomes the last item in the array

    if ((!curr.left && !curr.right) || seen.has(curr)) {
      console.log(stack.pop());
    }

    if (curr.right && !seen.has(curr.right)) {
      stack.push(curr.right);
    }

    if (curr.left && !seen.has(curr.left)) {
      stack.push(curr.left);
    }

    seen.add(curr);
  }
}


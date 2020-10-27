function preOrderArray(root){
    if (!root) return [];

    let array = [
        root.val,
        ...preOrderArray(root.left),
        ...preOrderArray(root.right)
    ]

    return array;
}


function preOrderArray(root) {
  if (!root) return [];

  let array = [
    root.val,
    ...preOrderArray(root.left),
    ...preOrderArray(root.right),
  ];

  return array;
}

function inOrderArray(root) {
  if (!root) return [];
  let array = [
    ...inOrderArray(root.left),
    root.val,
    ...inOrderArray(root.right),
  ];
  return array;
}

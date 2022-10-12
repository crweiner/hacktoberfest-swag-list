from typing import List

class TreeNode(object):
    """
    A binary tree node 
    """
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class BinaryTree:
    """
    Creates a binary tree and provides methods to traverse through and invert it.
    """
    def __init__(self, array: List[int]):
        self.data = array

    def create_tree(self) -> TreeNode:
        """
        Converts an array to tree and returns the root.
        """
        if not self.data:
            return None
        root = TreeNode(self.data[0])
        level = [root]
        
        i = 1
        while level:
            temp = []
            for node in level:
                if not node:
                    continue
                if self.data[i]:
                    left = TreeNode(self.data[i])
                    temp.append(left)
                    node.left = left
                else:
                    temp.append(None)
                if self.data[i+1]:
                    right = TreeNode(self.data[i+1])
                    temp.append(right)
                    node.right = right
                else:
                    temp.append(None)
                i += 2
            level = temp
        return root
    
    def _preorder_traversal(self, root: TreeNode) -> List[int]:
        """Traverses through a tree in the order: root node, left node, right node."""
        if root:
            return ([root.val] +
                    self._preorder_traversal(root.left) +
                    self._preorder_traversal(root.right))
        else:
            return []
    
    def _postorder_traversal(self, root: TreeNode) -> List[int]:
        """Traverses through a tree in the order: left node, right node, root node."""
        if root:
            return (self._postorder_traversal(root.left) +
                    self._postorder_traversal(root.right) +
                    [root.val])
        return []

    def _inorder_traversal(self, root: TreeNode) -> List[int]:
        """Traverses through a tree in the order: left node, root node, right node."""
        if root:
            return (self._inorder_traversal(root.left) +
                    [root.val] +
                    self._inorder_traversal(root.right))
        return []

    def _level_order(self, root: TreeNode) -> List[List[int]]:
        """Traverses through a tree by level from root to tree depth."""
        result = []
        
        if not root:
            return result
        
        level = [root]
        while level:
            temp = []
            values = []
            for node in level:
                values.append(node.val)
                if node.left:
                    temp.append(node.left)
                if node.right:
                    temp.append(node.right)
            level = temp
            result.append(values)
        return result
    
    def traverse_tree(self, root: TreeNode, how: str=None):
        """
        Traverse through tree in different ways.
        The parameter how can be:
        - preorder
        - postorder
        - inorder
        - levelorder
        """
        match how:
            case "preorder":
                return self._preorder_traversal(root)
            case "postorder":
                return self._postorder_traversal(root)
            case "inorder":
                return self._inorder_traversal(root)
            case "levelorder":
                return self._level_order(root)

            case _:
                return f"{how} is not a valid traversal method."

    def _switch_branches(self, root: TreeNode) -> TreeNode:
        """Switches the branches in any tree"""
        if root:
            root.left, root.right = root.right, root.left
            self.invert_tree(root.left)
            self.invert_tree(root.right)

    def invert_tree(self, root: TreeNode) -> TreeNode:
        """Inverts a binary tree."""
        self._switch_branches(root)
        return root

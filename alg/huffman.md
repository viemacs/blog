# Huffman Encoding

Shanno-Fano encoding goes from root to leaves, but Huffman encoding goes from leaves to root.

1. Create a leaf-node for every symbol, with the info of the symbol's frequency.
2. Loop through the nodes
    1. Use it as root of a weighted binary tree, with empty left and right sub-tree
    2. Choose 2 trees whose has the smallest root weight to build a new binary tree.
       The new root uses the sum of weight of the 2 root weight values.
    3. Remove 2 root nodes whose has the smallest root weight.
    4. Put the new binary tree into queue.
3. The last one node is the root.


```
count frequencies of single characters
print(frequencies using Fibonacci Codes of degree 2)
sort them to non-decreasing sequence
create a leaf node (character, frequency cc, left = NULL, right = NULL) of the tree for each character and put nodes into queue F

while(|F| >= 2) do
  pop the first two nodes(u1, u2) with the lowest frequencies from sorted queue
  create a node evaluated with sum of the chosen units, successors are chosen units (eps, c(u1) + c(u2), u1, u2)
  insert new code into queue
  
node evaluate with way from root to leaf node (left 1, right 0)
create output from coded input characters
```


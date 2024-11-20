# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Answer

For my algorithm the worst-case Big $\Theta$ time complexity is $\Theta(V!\cdot V^{2})$.

We can determine this by analysing the different parts of this algorithm's implementation.

- `are_isomorphic()`: Checks that both graphs have the same number of vertices and edges. Then starts the process of checking for isomorphism.
  - Vertex and edge comparison have a constant time complexity.
  - Calls `createAdjMatrix()` to convert graph1 to an adjacency matrix.
  - Then calls `checkPermutations()` To check all permutations of graph2.

- `checkPermutations()`: This function generates all permutations of the vertices in graph2 and compares the adjacency matrix of each permutation.
  - Calls `createAdjMatrix()`.
  - Calls `areMatricesEqual()`.
  - Iterates through all permutations which is $V!$.

- `swap()`: Swaps two vertices.
  - Takes constant time.

- `createAdjMatrix()`: Converts the graph into a adjacency matrix.
  - First we intialize the $V \times V$ matrix.
  - Then iterate through the edges and update the matrix.
  - This takes $O(V^{2} + E)$ time where $V$ is the number over vertices and $E$ is the number of edges.

- `areMatricesEqual()`: This function compares two matrices to check if they are equal.
  - Loops through each elements of the matrices which take $O(V^{2})$ time.

- Combining these steps gives us a time complexity of $O(V^{2} + E + V^{2})$ for each permutation.

- Giving us a total time complexity of $O(V! \cdot (V^{2} + E))$.

- Which can be simplified to $\Theta(V! \cdot V^{2})$.

## Plagiarism Acknowledgement

For this assignment I started off by trying to write the implementation on my own. After struggling with it. I looked at a few repositories from other students. I looked at these repositories to get an idea of how I want to implement my algorithm. I used similar logic from  my previous testing for the test code. I used some of the test cases from the other repositories test code.    

- https://github.com/COSC3020/detecting-isomorphism-cadenmcfate
- https://github.com/COSC3020/detecting-isomorphism-Maxie-M
- https://github.com/COSC3020/detecting-isomorphism-DJReflexive

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
     

function are_isomorphic(graph1, graph2) {

    // Check that both graphs have the same number vertices and edges
    if (graph1[0].length !== graph2[0].length || graph1[1].length !== graph2[1].length) return false;

    // Convert graph1 to an adj matrix
    const adjMatrix1 = createAdjMatrix(graph1);

    // Check permutations of graph2's vertices
    return checkPermutations(adjMatrix1, graph2, 0);
}

function checkPermutations(adjMatrix1, graph, index) {

    // Convert graph2 to an adj matrix
    const adjMatrix2 = createAdjMatrix(graph);
    
    // Check if matrices match
    if (areMatricesEqual(adjMatrix1, adjMatrix2)) return true;

    // Stop if all permutations have been tried 
    if (index >= graph[0].length - 1) return false;
    
    // Iterate through all possible vertex swaps
    for (let i = index; i < graph[0].length; i++) {
        swap(graph[0], index, i);

        if (checkPermutations(adjMatrix1, graph, index + 1)) return true;

        swap(graph[0], index, i);
    }
    
    return false;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function createAdjMatrix(graph) {
    // Extract vertices and edges from the graph 
    const [vertices, edges] = graph;
    const n = vertices.length;

    // Create an empty matrix
    const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    // Loop to fill the adj matrix based on edges
    for (const [u, v] of edges) {
        
        const i = vertices.indexOf(u);

        const j = vertices.indexOf(v);

        // Mark the edge in the matrix
        adjMatrix[i][j] = adjMatrix[j][i] = 1;
    }

    return adjMatrix;
}

// Checks if two matrices are equal
function areMatricesEqual(matrix1, matrix2) {

    // Loop through each row of the first matrix
    for (let i = 0; i < matrix1.length; i++) {
        
        // Loop through each column of the current row 
        for (let j = 0; j < matrix1[i].length; j++) {
            
            if (matrix1[i][j] !== matrix2[i][j]) return false;
        }
    }
    
    return true;
}

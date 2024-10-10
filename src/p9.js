let graph = {
    'A': ['B'],
    'B': ['A', 'C', 'D', 'E'],
    'C': ['F'],
    'D': ['E', 'G'],
    'E': ['F'],
    'F': ['B', 'G'],
    'G': [],
    'H': []
};

function findPath(graph, start, end) {
    let connected = new Set(); // To keep track of connected nodes
    let path = [];             // To store the current path

    function testing(node) {
        if (node === end) {  // check if the node is the end or not
            path.push(node);
            return true;
        }

        connected.add(node);   // Mark the node as connected
        path.push(node);     // Add node to the current path

        for (let connectedNode of (graph[node] || [])) { // Explore each connected node
            if (!connected.has(connectedNode)) {
                if (testing(connectedNode)) {  // If a valid path is found, return true
                    return true;
                }
            }
        }

        path.pop();  // Backtrack if no path is found
        return false;
    }

    if (testing(start)) {
        return "True(" + path.join(" --> ") + ")" ;
    } else {
        return "False";
    }
}

console.log(findPath(graph, 'D', 'B'));
console.log(findPath(graph, 'F', 'A'));
console.log(findPath(graph, 'G', 'C')); 
console.log(findPath(graph, 'E', 'D')); 

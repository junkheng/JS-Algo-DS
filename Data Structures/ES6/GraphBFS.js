class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex = []) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);  
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
      // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { // result: [ 'A', 'C', 'B', 'E', 'D', 'F' ]
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


console.log(g);
console.log(g.breadthFirst("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ] // .slice().reverse() gives [ 'A', 'C', 'B', 'E', 'D', 'F' ]
//        A
//       / \
//      B   C
//     /     \
//    D ----- E
//      \   /
//        F
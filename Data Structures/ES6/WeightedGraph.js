class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // checks if vertex is in adjacencyList, otherwise add it in and set to an empty array
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}

var wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");


wg.addEdge("A", "B", 9);
wg.addEdge("A", "C", 5);
wg.addEdge("B", "C", 7);


console.log(wg.adjacencyList);


import types from "./types/types";
import readline from 'readline';
let int = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let nodemap = types.weightedNodeMap.importPartialData(`{"keyedNodes":[{"x":214,"y":276,"key":"1"},{"x":262,"y":271,"key":"2"},{"x":321,"y":308,"key":"_h0"},{"x":325,"y":341,"key":"_h1"},{"x":236,"y":356,"key":"_h2"},{"x":238,"y":329,"key":"_h3"}],"flattenedEdges":[["2","1",48.25971404805461],["_h0","2",69.64194138592059],["_h1","_h0",33.24154027718932],["_h2","_h1",90.25519375637062],["_h3","_h2",27.073972741361768],["1","_h3",58.180752831155424]]}`);

console.log(nodemap.findPath("101","102"));

console.log('done running');

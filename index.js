// // A function that defines a node 
// function Node(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//     // A function that inserts a node as a child 
//     this.addChild = function(child) {
//         if (child.data >= this.data){
//             this.right = child
//         }
//         else {
//             this.left = child
//         }
//     }
// }

// // A function that must return 1 if the data is present in the BST, or 0 if it's not
// function isPresent(root, val){
//     // If the root doesn't exist, the `val` we are searching for is not in the BST: return 0
//     if (root === null) {
//         return 0;
//     }
//     // If the data of the node is equal to the `val` we are searching for: return 1
//     if (root.data === val){
//         return 1;
//     } 
//     // If the root data is greater than or equal to the `val` we are searching for, pass the left node child and the search `val` into the isPresent function recursively
//     if (root.data >= val){
//         return isPresent(root.left, val);
//     } 
//     // If the root data is less than the `val` we are searching for, pass the right node child and the search `val` into the isPresent function recursively
//     if (root.data < val){
//         return isPresent(root.right, val);
//     }
// }

// // Create Nodes
// n10 = new Node(10)
// n20 = new Node(20)
// n30 = new Node(30)
// n40 = new Node(40)
// n48 = new Node(48)
// n50 = new Node(50)
// n60 = new Node(60)
// n49 = new Node(49)

// // Binary Search Tree
// //      40
// //     /  \
// //   30    50
// //   /     / \
// //  20   48   60
// //  /      \
// // 10      49

// // Create Child Node Relationship
// n40.addChild(n50)
// n40.addChild(n30)
// n50.addChild(n60)
// n50.addChild(n48)
// n30.addChild(n20)
// n20.addChild(n10)
// n48.addChild(n49)

// // Test Cases
// // console.log(isPresent(n40, 10)) // returns 1 as expected
// // console.log(isPresent(n40, 500)) // returns 0 as expected
// // console.log(isPresent(n40, -500)) // returns 0 as expected
// // console.log(isPresent(n40, 20)) // returns 1 as expected
// // console.log(isPresent(n40, 40)) // returns 1 as expected
// // console.log(isPresent(n40, 50)) // returns 1 as expected
// // console.log(isPresent(n40, 60)) // returns 1 as expected
// // console.log(isPresent(n40, 70)) // returns 0 as expected
// // console.log(isPresent(n40, 48)) // returns 1 as expected
// // console.log(isPresent(n40, 49)) // returns 1 as expected

// For
// example, if arr = [3, 2, 1, 2, 7], then arr(unique) = [3, 2, 1, 4, 7] and its elements sum to a
// minimal value of 3 + 2 + 1 + 4 + 7 = 17.

function getMinimumUniqueSum(arr){
let len = arr.length;
let array = arr;
let num = 1; 
let uniqueArr = []; 
let sum = 0;
for (let i=0; i<len; i++){
    if(uniqueArr.indexOf(array[i]) === -1){
        uniqueArr.push(array[i]);
        sum += array[i];
    }
    else {
        while (uniqueArr.indexOf(num) !== -1){
            num ++;
        }
        uniqueArr.push(num);
        sum += num;
    }
}
console.log(sum);
}


getMinimumUniqueSum([3,2,1,2,7]) // retuns 17 as expected
getMinimumUniqueSum([2,2,2,2,2]) // returns 15 as expected
getMinimumUniqueSum([1,1,1,1,1]) // returns 15 as expected
getMinimumUniqueSum([10,9,8,8,8]) // returns 30 as expected


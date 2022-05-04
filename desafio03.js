function main(candidates, target) {
    var result = [];

    if(candidates == null || candidates.length == 0) return result;

    var current = [];
    candidates.sort();

    combinationSumHelper(candidates, target, 0, current, result);

    return result;
}

function combinationSumHelper(candidates, target, j, curr, result){
   if(target == 0){
       var temp = curr.slice();
       result.push(temp);
       return;
   }

   for(var i=j; i<candidates.length; i++){
       if(target < candidates[i])
            return;
       curr.push(candidates[i]);
       combinationSumHelper(candidates, target - candidates[i], i, curr, result);
       curr.pop();
   }
}

let lesserSum;
let arr = [1,2,3,4,5,6,7,8,9];
let target = 10;
const result = main(arr, target).map((x) => {
    if (lesserSum === undefined || x.length < lesserSum) {
        lesserSum = x.length;
    }
    return x;
}).filter(x => x.length == lesserSum)
console.log(lesserSum)
console.log(result);
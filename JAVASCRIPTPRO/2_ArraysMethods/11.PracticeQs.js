//Q.1 Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [2, 4, 3, 5, 6];

const square = arr.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / arr.length;
console.log(avg)


//Q.2 

let nums = [2, 4, 6, 7, 8];

const ans = nums.map((el) => (el + 5))
console.log(ans)

// Qs3.Createanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray.

//     Qs4.WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled.

//     Qs5.WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject

"use strict";
/*
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/

const sum1 = "9" - "5"; //4
const sum2 = "19" - "13" + "17"; //617
const sum3 = "19" - "13" + 17; //23
const sum4 = "123" < 57; // false
const sum5 = 5 + 6 + "4" + 9 - 4 - 2; // 1143

console.log(sum1, sum2, sum3, sum4, sum5);

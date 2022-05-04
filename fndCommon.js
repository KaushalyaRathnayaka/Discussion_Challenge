function getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}
var num1 = [1,2,2,1,8];
var num2 = [2,2,8];
var intersectingColors=getArraysIntersection(num1, num2); 
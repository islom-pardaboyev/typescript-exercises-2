"use strict";
// 1-masala
// let userName:string = "John Doe";
// let age:number = 30;
// let isStudent:boolean = true;
// let hobbies: string[] = ["Reading", "Gaming", "Coding"];
// type StringType = string;
// type NumberType = number;
// type BooleanType = boolean;
// function greet(person: StringType): string {
//   return `Hello, ${person}`;
// }
// function calculateSum(a: NumberType, b: NumberType): number {
//   return a + b;
// }
// function isAdult(personAge: NumberType): BooleanType {
//   return personAge >= 18;
// }
// 2-masala
// let array: number[] = [1, 2, -3, -4, 5, -6, -7];
// let countPositiveNumber: number = 0;
// function countPositiveNumberFn(arr: number[]): void {
//   arr.map((number: number) => {
//     if (number > 0) {
//       countPositiveNumber += 1;
//     }
//   });
//   console.log(countPositiveNumber);
// }
// countPositiveNumberFn(array);
// 3-masala
// let promptNumber = Number(prompt("Enter number")) as number;
// function fizzBuzz(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     }
//   }
// }
// fizzBuzz(promptNumber);
// 4-masala
// let arrayNumbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let sumArrayCount:number = 0
// function sumArr(array:number[]):number{
//     array.map((item:number) => {
//         sumArrayCount += item
//     })
//     return sumArrayCount
// }
// console.log(sumArr(arrayNumbers))
// 5-masala
// function countWord(str:string):number{
//     const arr = str.trim().split(" ")
//     return arr.length
// }
// console.log(countWord('assalom alaykum    '))
// 6-masala
// let array: number[] = [1, 2, 3, 10, 70, 4, 5, 6];
//   function findMax(arr: number[]): number {
//     return Math.max(...arr.map((item:number) => item))
//   }
// console.log(findMax(array));
// 7-masala
// let array: number[] = [10, 70, 6];
//   function findMin(arr: number[]): number {
//     return Math.min(...arr.map((item:number) => item))
//   }
// console.log(findMin(array));
// 8-masala
// let array: Array<any> = [1, 2, 3, 4, "5", "slaom", true, false, 6, 7, 8, 9, 10];
// let findendElement:any;
// function contains(arr: Array<any>, target: any):void {
//     arr.forEach((item:any) => {
//         if (item === target) {
//             findendElement = item;   
//         }
//     })
//     if(findendElement){
//         console.log(findendElement)
//     }else{
//         console.log("Not found")
//     }
// }
// contains(array, 'not');
// 9-masala
// let array:number[] = [1, 2, 11, 3, 4, 6, 7, 8]
// function reverseArray(arr: number[]): number[] {
//     return arr.reverse()
// }
// console.log(reverseArray(array))
// 10-masala
// function capitalizeWords(str:string){
//     const arr = str.trim().split(" ")
//     return arr.map((item:string) => item[0].toUpperCase() + item.slice(1)).join(" ")
// }
// console.log(capitalizeWords("assalom alaykum"))
// 11-masala
// let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// function average(arr:number []):number{
//     return arr.reduce((acc:number, item:number) => acc += item, 0) / arr.length
// }
// console.log(average(array))
// 12-masala
// function filterArr(arr: any[]): any[] {
//     let newArray: any[] = [];
//     let countMap: { [key: string]: number } = {};
//     arr.forEach(item => {
//         countMap[item] = (countMap[item] || 0) + 1;
//         if (countMap[item] > 1) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }
// const result = filterArr([1, 1, 1, 2, 2, true, true, true, 5, 5, 5, 5]);
// console.log(result); 

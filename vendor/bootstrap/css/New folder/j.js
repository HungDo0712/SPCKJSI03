const arr = [1,2,3,4,5,6,7];
const filter0dd = (arr) => {
   const arr1 = arr.filter(num => {
      return num % 2 != 0;
   });
}
const arr1 = filter0dd(arr);
console.log(arr1)
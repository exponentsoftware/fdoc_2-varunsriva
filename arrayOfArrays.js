const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  let array = [];
  createArrayOfArrays(countries);
function createArrayOfArrays(countries){
       countries.map((item,index) => {
           const start = item.split("").splice(0,3).join("");
           const countrieslength = item.length;

           return array.push([item + " " + start +" " + countrieslength])
       });
}
console.log(array);
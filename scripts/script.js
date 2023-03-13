/*Напишите цикл, который выводит в консоль числа от 1 до 10.*/
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/*Напишите цикл, 
который находит наименьшее число в массиве.*/
const array = [12, 33, 45, 8, 9, 25, 2, 111];
let smallest = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
        smallest = array[i]
    }
}
console.log(smallest)


/*
Напишите цикл, который считает сумму всех чисел от 1 до 100.*/
let sum3 = 0;
for (let i3 = 0; i3 < 100; i3++) {
    sum3 += i3;
}
console.log(sum3)


/*
Напишите цикл, который выводит в консоль каждый второй элемент массива.*/
const array4 = [12, 33, 45, 8, 9, 25, 2, 111];
for (let i4 = 1; i4 < array4.length; i4+=2) {
   console.log(i4) //вывел номер индекса
   console.log(array4[i4]) //значение индекса
}

/*
Напишите цикл, который находит наибольшее число в массиве.*/

const array5 = [12, -33, 45, 8, 9, 25, 2, 111];
let bigest = array[0]
for (let i5 = 0; i5 < array5.length; i5++) {
if (array[i5] > array[0]
){ bigest = array[i5] }
} console.log(bigest)
console.log("================================")


//==============================================
/*Напишите цикл, который выводит в консоль все простые числа от 2 до 100.*/ 

for (let i6 = 2; i6 <= 100; i6++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i6); j++) {
      if (i6 % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i6);
    }
  }
  

/*Напишите цикл, который находит среднее арифметическое всех чисел в массиве.*/
const numbers = [10, 20, 30, 40, 50];
let sum7 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum7 += numbers[i];
}
const average = sum7 / numbers.length;
console.log(`The average is ${average}`);



/*Напишите цикл, который выводит в консоль таблицу умножения на 5.*/
for (let i8 = 1; i8 <= 10; i8++) {
    const result8 = i8 * 5;
    console.log(`5 x ${i8} = ${result8}`);
    }


/*Напишите цикл, который переворачивает порядок элементов в массиве.*/
const arr9 = [10, 20, 30, 40, 50];
for (let i9 = 0; i9 < arr9.length / 2; i9++) {
  const temp = arr9[i9];
  arr9[i9] = arr9[arr9.length - 1 - i9];
  arr9[arr9.length - 1 - i9] = temp;
}
console.log(arr9); // [50, 40, 30, 20, 10]


/*Напишите цикл, который находит сумму элементов массива, кратных 3 или 5.*/

const arra = [10, 20, 30, 40, 50, 33, 55, 66, 9];
let summa = 0;

for (let i = 0; i < arra.length; i++) {
  if (arra[i] % 3 === 0 || arra[i] % 5 === 0) {
    summa += arra[i];
  }
}
console.log(summa); // 313

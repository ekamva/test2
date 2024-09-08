
//Составьте расчет среднего балла за домашние задания студента по модулям:
//- введение
//- git
//- js
//Для расчета создайте переменные, которые будут хранить баллы по каждому модулю, 
//переменную, которая будет рассчитывать среднее значение по всем модулям.


let introductionResults = 38;
let gitResults = 77;
let jsResults = 65;

let allRsults = (introductionResults + gitResults + jsResults);

let averageResult = (allRsults / 3);

console.log(`The avarage result is ${averageResult}.`);

//Добавьте переменные с именем и фамилией студента и также добавьте их в вывод к количеству баллов в консоли.

let studentName = "Ivan";
let studentSurname = "Petrov";
let shortstudentName = studentName.slice(0, 1);

console.log(`The avarage result for student ${studentName} ${studentSurname} is ${averageResult}.`);

//В выводе текста в предыдущем задании сократите имя студента до первой буквы, 
//применив метод slice() к переменной с  именем в команде вывода текста в консоль. 

console.log(`The avarage result for student ${shortstudentName}. ${studentSurname} is ${averageResult}.`);

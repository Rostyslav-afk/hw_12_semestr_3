//#1 Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
console.log("1 Завдання");

const user = {
    name: "Rostyslav",
    age: 12,
    hobby: "programing",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const key = Object.keys(user);

for (let i of key) {
    console.log(`${i} - ${user[i]}`);
};

// #2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
console.log("2 Завдання");

const information = {
    id: 1351943,
    name: "Developer",
    status: "Fullstack",
    wantsMoney: "6000$",
};

const countProps = function (obj) {
    const key = Object.keys(obj);
    return console.log(`Кількість властивостей в об'єкті: ${key.length}`);
};
countProps(information);

// #3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
console.log("3 Завдання");

const employeers = {
    brobDev: {
        name: "Andrii",
        tasks: 5,
    },
    justDev: {
        name: "Ivan",
        tasks: 10,
    },
    lazyDev: {
        name: "Svyatoslav",
        tasks: 4,
    },
    freelancerForLife: {
        name: "Zhenya",
        tasks: 15,
    },
};
const findBestEmployee = function(employees){
    const keys = Object.keys(employees);
    let maxTasks = 0;
    let bestEmployee = "";

    for (let key of keys){
        const worker = employees[key];  
        const tasks = worker.tasks;
        
        if (tasks > maxTasks){
            maxTasks = tasks;
            bestEmployee = worker.name;
        }
    }

    return  console.log(`Найкращий працівник ${bestEmployee}! Тому , що він виконав ${maxTasks} тасків`);
    
};
console.log(findBestEmployee(employeers));
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

//#4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
console.log("4 Завдання");

const salary = {
    interno: 400,
    trainee: 400,
    junior: 950,
    middle: 2350,
    senior: 4500,
    teamLead: 4275,
    techLead: 5700,
    staff: 6750,
}

const countTotalSalary = function(employees){
    let total = 0;
    for (let salary in employees){
        total += employees[salary];
    }
    return `Загальна сума зарплат дорівнює ${total}$`
};

console.log(countTotalSalary(salary));

//#5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
console.log("5 Завдання");

const getAllPropValues = function(arr, prop){
    let result = []
};

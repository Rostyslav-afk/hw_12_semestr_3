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

const products = [
    {
        name: "Far Cry 1",
        price: 150,
        count: 100300,
        weight: "4gb"
    },
    {
        name: "Far Cry 2",
        price: 150,
        count: 201251,
        weight: "3.5gb"
    },
    {
        name: "Far Cry 3",
        price: 299,
        count: 1013225,
        weight: "15gb"
    },
    {
        name: "Far Cry 4",
        price: 459,
        count: 9013225,
        weight: "30gb"
    },
    {
        name: "Far Cry 5",
        price: 915,
        count: 10578295,
        weight: "40gb"
    },
    {
        name: "Far Cry 6",
        price: 915,
        count: 9013225,
        weight: "30gb"
    },
]

const getAllPropValues = function(arr, prop){
    let result = [];
    for (let item of arr) {
        result.push(item[prop])
    }
    return result
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "count"));
console.log(getAllPropValues(products, "weight"));

//#6 Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
console.log("6 Завдання");

const games = [
    {
        name: "Far Cry 1",
        price: 150,
        count: 100300,
        weight: "4gb"
    },
    {
        name: "Far Cry 2",
        price: 150,
        count: 201251,
        weight: "3.5gb"
    },
    {
        name: "Far Cry 3",
        price: 299,
        count: 1013225,
        weight: "15gb"
    },
    {
        name: "Far Cry 4",
        price: 459,
        count: 9013225,
        weight: "30gb"
    },
    {
        name: "Far Cry 5",
        price: 915,
        count: 10578295,
        weight: "40gb"
    },
    {
        name: "Far Cry 6",
        price: 915,
        count: 9013225,
        weight: "30gb"
    },
]
const calculateTotalPrice = function(allProdcuts, productName){
    for (let i of allProdcuts){
        if (i.name === productName){
            const result = i.price * i.count;
            return `Загальна сума ${i.name} = ${result} грн`
        }
    }
};

console.log(calculateTotalPrice(games, "Far Cry 1"));
console.log(calculateTotalPrice(games, "Far Cry 2"));
console.log(calculateTotalPrice(games, "Far Cry 3"));
console.log(calculateTotalPrice(games, "Far Cry 4"));
console.log(calculateTotalPrice(games, "Far Cry 5"));
console.log(calculateTotalPrice(games, "Far Cry 6"));
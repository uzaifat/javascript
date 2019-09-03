var mates = [{
        name: "Oyekale Tosin",
        age: 16,
        address: "Faringada",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.55,
        department: "CSC",
        level: 400,
        grade: [60, 70, 90, 90, 100]
    },
    {
        name: "kaslong Kevin",
        age: 13,
        address: "Twad",
        tribe: "Yoruba",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 200,
        grade: [60, 70, 9, 90, 100]
    },
    {
        name: "Mark Adams",
        age: 20,
        address: "Rukuba Road",
        tribe: "Idoma",
        gender: "male",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [50, 70, 80, 90, 100]
    },
    {
        name: "Elizabeth John",
        age: 13,
        address: "Salama Hostel",
        tribe: "ibibo",
        gender: "female",
        Height: 1.50,
        department: "CSC",
        level: 400,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Susan Owoicho",
        age: 13,
        address: "Salama Hostel",
        tribe: "Idoma",
        gender: "female",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 90, 100]
    },
    {
        name: "Yada Martins",
        age: 21,
        address: "Village Hostel",
        tribe: "^Kagoro",
        Height: 1.75,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 80, 100]
    },
    {
        name: "Ifeoma Ibedu",
        age: 13,
        address: "Angwa Rukuba",
        tribe: "Igbo",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 50, 90, 100]
    },
    {
        name: "Peter Temitope Asalu",
        age: 20,
        address: "Celebridge",
        tribe: "Yagba",
        gender: "male",
        Height: 1.70,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 70, 100]
    },
    {
        name: "Awari Yohanna Duada",
        age: 22,
        address: "Angwa Rukuba",
        tribe: "Afizare",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 80, 90]
    },
    {
        name: "Josephine Sunday",
        age: 20,
        address: "Odus",
        tribe: "Eggon",
        gender: "female",
        Height: 1.50,
        department: "CSC",
        level: 300,
        grade: [30, 50, 50, 90, 100]
    },
    {
        name: "Nanbal Moses Kundam",
        age: 23,
        address: "Federal locust",
        tribe: "Mupun",
        gender: "male",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 100, 100]
    },
    {
        name: "Victoria Bok",
        age: 22,
        address: "Oduns",
        tribe: "Berom",
        gender: "female",
        Height: 1.50,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Yusuf Paul Osanga",
        age: 22,
        address: "Rayfield",
        tribe: "Berom",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 400,
        grade: [30, 70, 80, 90, 100]
    },
    {
        name: "Bamigboye Christiana Temitope",
        age: 25,
        address: "Village Hostel",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.62,
        department: "CSC",
        level: 300,
        grade: [30, 60, 80, 90, 100]
    },
    {
        name: "Job Gift Elejo",
        age: 22,
        address: "Village Hostel",
        tribe: "Igala",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 50, 90, 100]
    },
    {
        name: "Moses Deborah Kibba",
        age: 21,
        address: "Oduns",
        tribe: "Berom",
        gender: "female",
        Height: 1.55,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 80, 100]
    },
    {
        name: "Joy Ohue Osedebamen",
        age: 20,
        address: "Oduns",
        tribe: "Idoma",
        gender: "female",
        Height: 1.70,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 90, 100]
    },
    {
        name: "Ponfa Micheal",
        age: 22,
        address: "Oduns",
        tribe: "Tarok",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Mabas Maryam",
        age: 20,
        address: "PTS, Jos",
        tribe: "Challa",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 400,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Uzaifat Ibrahim",
        age: 24,
        address: "Dodo street Jos",
        tribe: "Magwavul",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    }
];

//get the miximum Height of the person
a = 0;
var students = mates.filter(function(values) {
    if (a < values.Height) {
        a = values.Height;
    }
});
console.log(a);
//get the full details of the person with max height
var result = mates.filter(function(data) {
    if (data.Height == a) {
        return data;
    }
});
console.log(result);

function avg(arr) {
    var num = 0;
    for (var index = 0; index < arr.length; index++) {
        num = num + arr[index];
    }
    return num / arr.length;
}

var b = 0;
var v;
mates.forEach(function(item, index, data) {

    if (b < avg(item.grade)){
        b = avg(item.grade);
        v = index;
       // console.log(data[index]);
    }


});
console.log(mates[v]);
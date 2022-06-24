let o = {
    name : "chan",
    dept : ["MECH", "Code"],
    age  : 25,
    clg  : "SKR",
}

// let a1 = o.dept
// console.log(a1);

for (let index = 0; index < o.dept.length; index++) {
    console.log(o.dept[index]);
}

// // below step helps to  conver the object in to STRING

// let a = JSON.stringify(o)
// console.log(a);

// // below step helps to convert the string in to object
// jsobj = JSON.parse(a)

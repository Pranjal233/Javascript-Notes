
const animals=['dog','cat','cow','horse','mouse']


// 1.for loop:
for(let i=0;i< animals.length;i++){
console.log(animals[i].toUppercase());
}


// 2.while loop:
let i=0;
while(i< animals.length){
console.log(animals[i].toUppercase());
i++;
}


// 3.foreach loop:
animals.forEach(element => {
    console.log(element.toUppercase());

});


// 4.map loop:
const newAnimals = animals.map(e1=>{
    const animalUpperCase = e1.toUppercase()
    console.log(animalUpperCase)
    return animalUpperCase

})



// 5.do while loop:
let j=0;
do{
console.log(animals[i].toUppercase());
j++;
}
while(j<animals.length)


// 6.for of loop:
for(const el of animals){
console.log(el.toUpperCase());
}

//for in
const animals1 ={
    1:'dog',
    2:'cat',
    3:'art',
    4:'rat',
    5:'mouse',

}
for(const key in animals1){
    console.log(animals1[key].toUppercase())
}
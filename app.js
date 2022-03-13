// function greet(name) {
//     console.log("Hello -", name)
// }
// const greet2 = function greet2(name) {
//     console.log('hello,' , name)
// }

// greet('World')
// greet2('World')
// console.log(typeof greet)
// console.dir(greet2)
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//     clearInterval(interval)
//     } else {
//     console.log(++counter)
// //     }

// // }, 1000)
// const arrow = (name, age) => {
//     console.log('hello,' , name, age)
// }
// const arrow2=name=>    console.log('hello,' , name)
// arrow("World",5)
// arrow2("world")
// const pow = num =>  num ** 2
// console.log(pow(5))

// const sum = (a, b) => a + b
// console.log(sum(4, 4))

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result+=num
//     }
//     return result
    
// }
// const res = sumAll(1, 4, 5, 7)
// console.log(res)

// function createMember(name) {
//     return function (lastName) {
//         console.log(name+lastName)
//     }
// }
// const logWithLastName = createMember("Hello ")
// console.log(logWithLastName)
// console.log(logWithLastName("World"))
// const cars = ["mazda", "ford", "bmw", "zaz"]
// const fib = [1, 2, 3, 5, 8, 13, 21]
// // console.log(cars, fib)

// cars.push("Porshe")
// cars.unshift("VW")
// const lastItem = cars.pop()
// console.log(cars)
// // console.log(firstItem)
// console.log(lastItem)


// const text = "Putin Hyulo"
// const rev = text.split("").reverse().join('')
// console.log(rev)
// const people = [
//     { name: 'putin', lastName: 'Huylo' },
//     { name: 'ZSU', lastName: 'Molodci' },
//     { name: 'russianWarship', lastName: 'idiNaHyu' }
// ]


//  const person = people.find (person=>{person.name === 'ZSU'})
// console.log(person)



// // const index1 = cars.indexOf("bmw")
// // const index = cars.findIndex("bmw")


// // cars[index] = "VW"
// // console.log(cars)
// for (const person of people) {
//     // console.log(person)
//     if (person.name === 'ZSU') {
//         findedPerson = person
//     }
// }
// console.log(findedPerson.lastName, findedPerson.name)
// console.log(cars.includes('bmw'))

// const uppCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(uppCaseCars)
// const pow2Fib = fib.map(num => num ** 2)
// const filterNumbers = pow2Fib.filter(num=>num>30)
// console.log(pow2Fib)
// // console.log(filterNumbers)
const person = {
    name: 'putin',
    age: 0,
    hyylo: true,
    // 'Complex key': 'Complex Value',
    // ['key_'+(1+3)] : 'Computed Key',
    greet () {
        console.log('greet')
    }
}
console.info("information adout", person.name)
// delete person['key_4']
// console.log(person.hyylo)
// console.log(person)

// const {name, age, hyylo } = person
// console.log(name, age, hyylo)

// for
//     (let key in person){
//     console.log(key)
//     console.log(person[key])
// }
// const keys = Object.keys(person)
// console.log(keys)
// const logger = {
//     keys() {
//         console.log('Object Keys', Object.keys(this))
//     },

//     // const bound = logger.keys.bind(person)
//     // bound()
//     // logger.keys.call(person)

//     keysAndValues() {
//         Object.keys(this).forEach(key => {
//             console.log(`"$(key)": ${this[key]}`)
//         })
    
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('__________________S__________')
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(`"${key}": ${this[key]}`)
//             if (between && index !== array.length - 1) {
//                 console.log('----------------------')
//             }
//         })
//         if (bottom) {
//             console.log('___________E________')
//         }
//     }
// }
// // logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])

// const timeout = setTimeout(() => {
//     console.log('After')
// }, 2500)
// clearTimeout(timeout)
//    let num = 1

// const interval = setInterval(()=> {
//     console.log(num)
//     num++
// }, 1000)

// const delay = (callback, wait=1000) => {
//     setTimeout(callback, delay)
// }
// delay(() => {
//     console.log('2')
// }, 2000)

// async
// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve()
//         }, wait)
//     })
//     return promise
// }
// delay(3000)
//     .then(() => {
//         console.log("after 3 sec")
//     })
//     .catch( err=>console.error(err))
//     .finally(()=>console.log('finally'))

// const getData = () => new Promise(resolve => resolve(
//     [1, 1, 2, 3, 5, 8, 13]
// ))
// getData().then(data => console.log(data))
    
// async function async() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log("data", data)
//     } catch (e) {
//     console.log(e)
//     }
//     finally
//     {
//         console.log("F")
//     }
//     }
// async()
// const h2 = document.getElementsByTagName('h2')[0]
const h1 = document.getElementById('hello')
const h2 = document.querySelector('h2')
const h22 = h2.nextElementSibling
setTimeout(() => {
    addStyleTo(h1, "Україна", 'yellow','blue')
    addStyleTo(h2, "Переможе", 'blue', 'yellow')
    addStyleTo(h22,'#stopWarInUkrine','red','black')
}, 5000)

function addStyleTo(node, text, colour, bgcolour) {
node.textContent = text
node.style.color = colour
node.style.textAlign = 'center'
node.style.background = bgcolour  
}
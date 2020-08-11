// Hey Danny and Yonatan - this is excersice 1 for day 3

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// const newGenes = [...genes]
// newGenes[4] = genes[2]
// newGenes[2] = genes[4]
// newGenes.splice(3, 1, genes[3], genes[3])
// newGenes.unshift("FXT")
// console.log(newGenes)
// console.log(genes)
// end of excersice 1



// spotcheck 1 - Objects
// let x
// let car = {
//     color: 'red',
//     type: 'jeep',
//     weight: x
// }
// console.log('the car is ' + car.color + ' of type ' + car.type + ' and its weight is ' + car.weight + '!!')
// end



// spotcheck 2 - Objects
// const object = {
//     item: 'woo',
//     toBeginning: true,
//     items: ['h', 'o', 'o']
// }
// if (object.toBeginning === true) {
//     object.items.unshift(object.item)
// } else {
//     object.items.push(object.item)
// }
// console.log(object.items)
// end


// spotcheck 3 + 4 - Objects
// const human = {
//     age: 0,
//     name: "Goojibear"
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// console.log(human)
// human.name = "Gilbert"
// end



// Hey Danny and Yonatan - this is Objects - excersices 1 - 5.2 for day 3
// Objects - ex2 - day3

// const p1 = {
//         name: 'Yonatan',
//         age: 23,
//         city: 'Nili'
//     }
// const p2 = {
//     name: 'eden',
//     age: 23,
//     city: 'kfar-saba'
// }
// if (p1.age === p2.age && p1.city === p2.city) {
//     console.log(p1.name + ' wanted to date ' + p2.name)
// } else if (p1.age === p2.age && p1.city !== p2.city) {
//     console.log(p1.name + ' wanted to date ' + p2.name + ' but couldn\'t')

// }
// end


// Objects - ex2 + 3 + 4 - day3

// let myList = ['nextTo', 'mask']
// myList.splice(1, 1)
// console.log(myList)
// let myArray = ['one', 'two ']
// myArray = myArray + [...myList]
// console.log(myArray)
// const library = {
//     books: [
//         { title: 'Narnia', author: 'luis' },
//         { title: 'winnieThePooh', author: 'allen' }
//     ]
// }
// myList.splice(1, 5, 'Title:' + library.books[0].title, 'Author:' + library.books[0].author, 'Title:' + library.books[1].title, 'Author:' + library.books[1].author)
// console.log(myList)
// end


// Objects - ex5 - day3

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
// }
// const name = prompt('Please enter the name for your reservation').toLowerCase();
// if (name == 'bob') {
//     console.log('Welcome, Bob')
// } else if (name == 'ted') {
//     console.log('sorry Ted, your seat is claimed')
// } else if (name != 'bob' || name != 'ted') {
//     reservations[name] = { claimed: true }
//     console.log('there is no reservation under your name, but we will have you seaten anyways!')
// }

// end


// Objects - extensions - day3

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true,
//     fridge: {
//         price: 500,
//         works: true,
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }
// if (kitchen.hasOven === true && kitchen.fridge.works === true) {
//     console.log('Geraldine\'s raddish expired ' + (date - kitchen.fridge.items[1].expiryDate) + ' day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.')
// }
// if (kitchen.hasOven === false && kitchen.fridge.works === true) {
//     console.log('Geraldine\'s raddish expired ' + (date - kitchen.fridge.items[1].expiryDate) + ' day ago. Weird, considering her fridge works. Too bad she doesn\'t have an oven to cook the raddish in.')
// }
// if (kitchen.hasOven === true && kitchen.fridge.works === false) {
//     console.log('Geraldine\'s raddish expired ' + (date - kitchen.fridge.items[1].expiryDate) + ' day ago. Probably because her fridge doesn\'t work. Luckily, she has an oven to cook the raddish in. And she\'ll have to pay ' + kitchen.fridge.price / 2 + ' to fix the fridge.')
// }
// if (kitchen.hasOven === false && kitchen.fridge.works === false) {
//     console.log('Geraldine\'s raddish expired ' + (date - kitchen.fridge.items[1].expiryDate) + ' day ago. Probably because her fridge doesn\'t work. Too bad she doesn\'t have an oven to cook the raddish in. And she\'ll have to pay ' + kitchen.fridge.price / 2 + ' to fix the fridge')
// }

// end


// Loops - Day3

// let companies = ["Tesla", "Amazon", "Google", "Microsoft", "Elevation!"]
// for (let work of companies) {
//     console.log("One day I will work for " + work)
// }

// Loops - Exersice1 - Day3

// let names = ['yonatan', 'gershon', 'ziv']
// let ages = [23, 25, 24]
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i] + ' ' + ages[i])
// }

// Loops - Exercise2 - Day3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//     console.log(sum)
// }

// end


// Loops - Exercise3 - Day3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum)
// console.log(sum / numbers.length)

// end


// Loops - Exercise4 - Day3

// let nums = []
// for (let i = 1; i <= 100; i++) {
//     nums.push(i)
// }
// console.log(nums)

// end

// Loops - Exercise5 - Day3

// let evenNums = []
// let nums = []
// for (let i = 1; i <= 100; i++) {
//     nums.push(i)
//     if (i % 2)
//         evenNums.push(i)
// }
// console.log(nums)
// console.log(evenNums)

// end

// Loops - Exercise6 - Day3

// let number = 0
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for (let i = 1; i <= nums.length; i++) {
//     number = nums[i]
//     if (number === 709) {
//         console.log(i)
//     }
// }

// end

// Loops - Exercise7 - Day3

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []


// for (let i = 0; i < names.length; i++) {
//     const obj = { name: names[i], age: ages[i] }
//     people.push(obj)
// }
// console.log(people)

// end

// Loops - Exercise8 - Day3

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i], ' is ', ages[i], 'Years old')
// }

// end

// Loops - Exercise8 - Day3

// const posts = [
//     { id: 1, text: "Love this product" },
//     { id: 2, text: "This is the worst. DON'T BUY!" },
//     { id: 3, text: "So glad I found this. Bought four already!" }
// ]
// for (let i in posts) {
//     if (posts[i].id === 2) {
//         posts.splice(i, 1)
//     }
// } console.log(posts)

// end

// Loops - Exercise8 - Day3

// const posts = [
//     {
//         id: 1,
//         text: "Love this product",
//         comments: []
//     },
//     {
//         id: 2,
//         text: "This is the worst. DON'T BUY!",
//         comments: [
//             { id: 1, text: "Idiot has no idea" },
//             { id: 2, text: "Fool!" },
//             { id: 3, text: "I agree!" }
//         ]
//     },
//     {
//         id: 3,
//         text: "So glad I found this. Bought four already!",
//         comments: []
//     }
// ]

// for (let i in posts) {
//     if (posts[i].id === 2) {
//         for (let x in posts[i].comments) {
//             if (posts[i].comments[x].id === 3) {
//                 posts[i].comments.splice(x, 1)
//             }
//         }
//     }
// }
// console.log(posts)

//end

// Loops - Exercise8 - Day3

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
// }

// const keys = Object.keys(dictionary)
// console.log(keys)
// for (const key of keys) {
//     console.log('words that start with ' + key)
// for (const x of dictionary[key]) {
// console.log(x)
// }
// }

// end
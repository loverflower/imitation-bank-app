'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// // //////slice
// let arrr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arrr2.slice(2)); ////  [c,d,e]
// console.log(arrr2.slice(-1)); ///  [e]
// console.log(arrr2.slice(1, 4)); //// [b,c,d]

// /////splice is  the same method like slice but splice change( mutade) privious massiv. slice ddoest change.
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(`----------------------------`);
// console.log(arr2.splice(3)); /// [d,e]

// console.log(arr2); /// [a,b,c]
// console.log(arr2.splice(1, 1)); //delete  [b] from arr2
// console.log(arr2); //[a,c]

// ///////////reverse

// const arr3 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr3.reverse()); ///change and arr3 too!!

// //////concat
// const arr4 = ['a', 'b', 'c', 'd', 'e'];
// const letters = arr3.concat(arr4); // the same like [...arr3, ...arr4]

// /// JOIN
// console.log(letters.join('---')); /// mas0siv turn into string using --- ( we see  e---d---c---b---a---a---b---c---d---e )

// const arey = [5, 7, -3, 2, -7];

// console.log('---------------------------');

// //// here i created my own function forech to understand how it works.
// const forechh = function (arr, fn) {
//   for (const [key, name] of arr.entries()) {
//     fn(name, key, arr);
//   }
// };

// forechh(arey, function (mov, index, arr) {
//   if (mov > 0) {
//     console.log(`positive ${index + 1}:  ${mov} all mass: ${arr}`);
//   } else {
//     console.log(`negative ${index + 1}:  ${mov} all mass: ${arr} `);
//   }
// });

// const arrrr = [1, 4, 5];
// console.log(arrrr);

// forechh([2, 4, 6, -2], function (mov, index, arr) {
//   console.log(`${mov} great its number ${index} great and ${arr} is biutiful`);
// });

// const mapy = new Map([
//   ['name', 'evgen'],
//   [true, 'yes'],
//   [false, 'no'],
// ]);

// console.log('----------');
// forechh(mapy, function (mov, index) {
//   console.log(`${mov} great its number ${index} great and `);
// });

// ////////Chalenge 1/////////

// const arrJulia = [3, 5, 5, 1, 7];
// const arrKate = [4, 1, 15, 8, 3];

// const arrJulia2 = [9, 16, 6, 8, 3];
// const arrKate2 = [10, 5, 6, 1, 4];

// const checkdogs = function (arr1, arr2) {
//   const arrNew = [...arr1.slice(1, arr1.length - 2), ...arr2];
//   arrNew.forEach(function (mov, i) {
//     const type = mov > 3 ? 'adult' : 'poppy';
//     console.log(`Dog N${i + 1} is ${type} a and is ${mov} years old `);
//   });
// };

// checkdogs(arrJulia, arrKate);

// /////////////Method MAPS
// const arrExample = [1, 1, 1, 1, 1, 1];
// const newArr = arrExample.map(function (mov, i) {
//   return mov * 2;
// });
// console.log(arrExample, newArr); ////maps create a new array and push there new elements, and donor massiv arrExaample doesnt change.
// ///resault is newArr = [2,2,2,2,2,2]/ its great to use arrow function. The code will be shorter/ see bellow
// const newArrr = arrExample.map(mov => mov * 2);

// /////////////Method Filter///////////////////////////
// ////////////////////////////////////////////////////

// const deposits = movements.filter(function (mov) {
//   return mov > 0; ////all elements with mov>0 will be includes in new arrray. Easy. movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; we got elemenst  deposits = [200, 450, 3000, 70, 1300]
// });
// const withdrawals = movements.filter(mov => mov < 0);

// ////////////Reduce Method///////////////////
// ///////////////////////////////////////////

// const balance = movements.reduce(function (acum, curr, i, arr) {
//   return acum + curr;
// }, 0);

// console.log(balance);

// //////////////////////////////////////
// ///////my own reduce method//////////
// /////////////////////////////////////

// const ownReduce = function (arr, fn, num = 0) {
//   let count = num;
//   for (const [key, name] of arr.entries()) {
//     count = fn(count, name);
//   }
//   return console.log(count);
// };

// ownReduce(movements, function (accum, mov) {
//   return accum + mov;
// });

// const lik = [1, 2, 8];
// ownReduce(
//   lik,
//   function (accum, mov) {
//     return mov + accum;
//   },
//   2
// );
/////////////////////////////////method SOME////////////
// currentAccount.movements.some(mov => mov / 10 > inputLoanAmount.value) retutn true if one of elements = mov / 10 > inputLoanAmount.value

/////////////////////////////////// method EVERY ///////////////////

// currentAccount.movements.some(mov => mov / 10 > inputLoanAmount.value) retutn true  only if all elements =  mov / 10 > inputLoanAmount.value

//////////////////////////////////// method flat //////////////////////
// const arr = [[1, 2, 3], [3, 4, 5], 7, 8]; ////just put all elements in one array
// console.log(arr.flat()); /// res [1, 2, 3, 3, 4, 5, 7, 8]

// const arrDeep = [
//   [[1, 2], 3],
//   [3, [4, 5]],
//   [7, 8],
// ];
// console.log(arrDeep.flat()); // res [Array(2), 3, 3, Array(2), 7, 8]
// console.log(arrDeep.flat(2)); // res  [1, 2, 3, 3, 4, 5, 7, 8]

// // intresting solving without any modern method

// const mo = function () {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// };

// const myFlat = function (acc) {
//   const m = [];
//   for (const h of acc) {
//     m.push(h.movements);
//   }

//   let common = 0;
//   for (const h of m) {
//     common += mo(...h);
//   }
//   console.log(`${common}!!!!!!?`);
// };
// myFlat(accounts);

// //// good way too. just native using without special methods.
// const oneMore = function (accounts) {
//   let sum = 0;
//   for (const h of accounts) {
//     for (let i = 0; i < h.movements.length; i++) {
//       sum += h.movements[i];
//     }
//   }
//   return sum;
// };
// console.log(`-----------`);
// console.log(oneMore(accounts));

// const res = accounts
//   .map(mov => mov.movements)
//   .flat()
//   .reduce(function (acum, mov) {
//     return acum + mov;
//   });
// console.log(res);

// ///////////////////////flatMap///////////////////
// const ser = accounts
//   .flatMap(mov => mov.movements) ////////just like flat and Map together
//   .reduce(function (acum, mov) {
//     return acum + mov;
//   });
// console.log(ser);

// //////////////////////////Sorting Arrays//////////////////////////////

// //////////////
// console.log(`!!!!!!!!!!!!!!!!!!!!sorting arrays!!!!!!!!!!!!!!!!!!!!!`);
// //////////method SORT///////////
// console.log(`!!!SORT Method!!!!!!`);
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// const owners2 = [-100, 200, 300, 70, -500, -200];
// console.log(owners.sort()); ///shows ["Adam", "Jonas", "Martha", "Zach"] alphabit. It mutates original array!!!VERY CAREFUL!
// console.log(owners2.sort()); ///[-100, -200, -500, 200, 300, 70] because of sort tranlate evrything to string -> and thats why resault like this.
// console.log(
//   owners2.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// ); //// if put return <0 order will be a,b. If put return >0 order will be b,a
// owners2.sort((a, b) => a - b); ////the same resault above.

// console.log(`----------Creating ARRAYS--------------`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////APPPP////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2021-01-06T09:15:04.904Z',
    '2021-01-07T10:17:24.185Z',
    '2021-01-08T14:11:59.604Z',
    '2021-01-11T17:01:17.194Z',
    '2021-01-11T23:36:17.929Z',
    '2021-01-13T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let dateNow = function (param = new Date(), tostring = false) {
  if (tostring == false) {
    let year = param.getUTCFullYear();
    let mounth = `${param.getMonth() + 1}`.padStart(2, '0');
    let day = `${param.getDate()}`.padStart(2, '0');
    return `${year}/${mounth}/${day}`;
  } else {
    const isostring = param.toISOString();

    return isostring;
  }
};

const dateofdates = function (date1) {
  const dateCurrent = (Date.now() - new Date(date1)) / 1000 / 60 / 60 / 24;
  return Math.trunc(dateCurrent);
};

const addMoventmets = function (obj, sort = false) {
  containerMovements.innerHTML = '';

  const chosemovement =
    sort == true
      ? currentAccount.movements.map(mov => mov).sort((a, b) => a - b)
      : obj.movements;

  let currentDatesrting;
  chosemovement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    if (sort == true) {
      currentDatesrting = '';
    } else if (dateofdates(obj.movementsDates[i]) <= 7) {
      if (dateofdates(obj.movementsDates[i]) == 0) {
        currentDatesrting = `today`;
      } else if (dateofdates(obj.movementsDates[i]) == 1) {
        currentDatesrting = `yesterday`;
      } else {
        currentDatesrting = `${dateofdates(obj.movementsDates[i])} days ago`;
      }
    } else {
      currentDatesrting = dateNow(new Date(obj.movementsDates[i]));
    }

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1}
     ${type}</div>
     <div class="movements__date">${currentDatesrting}</div>
       <div class="movements__value">${mov.toFixed(2)} EUR</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', `${html}`);
  });
};

const createUsername = function (acc) {
  acc.forEach(function (obj) {
    obj.username = obj.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
createUsername(accounts);

const displayBalance = function (arr) {
  arr.balance = arr.movements.reduce(function (acum, mov) {
    return acum + mov;
  });
  labelBalance.textContent = `${arr.balance.toFixed(2)} EUR`;
  labelDate.textContent = dateNow();
};

const euroToUsd = 1.1;
const balanceUsd = account1.movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acum, mov) => acum + mov);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes.toFixed(2)} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov);
  labelSumOut.textContent = `${out.toFixed(2)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(map => (map * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acum, mov) => acum + mov);
  console.log(interest);
  labelSumInterest.textContent = `${interest.toFixed(2)} EUR`;
};

//Login

let currentAccount, timer;

const updateUi = function (currentUser) {
  displayBalance(currentUser);
  addMoventmets(currentUser);
  calcDisplaySummary(currentUser);
};

// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = `1`;

const loginout = function () {
  if (currentAccount) {
    labelTimer.innerHTML = '';
    let time = 20;
    const func = function () {
      const min = String(Math.trunc(time / 60)).padStart(2, '0');
      const sec = String(Math.trunc(time % 60)).padStart(2, '0');

      labelTimer.textContent = `${min}:${sec}`;

      if (time == 0) {
        clearInterval(timer);
        containerApp.style.opacity = `0`;
        labelWelcome.textContent = 'Log in...';
      }
      time--;
    };
    func();
    timer = setInterval(func, 1000);
    return timer;
  }
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  currentAccount = accounts.find(
    obj =>
      obj.pin == inputLoginPin.value && obj.username == inputLoginUsername.value
  );
  currentAccount ? (containerApp.style.opacity = `1`) : -1;

  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur(); /// hide the cursor from input

  labelWelcome.textContent = `Welcome back, ${
    currentAccount?.owner.split(' ')[0]
  }`;
  clearInterval(timer);
  loginout();

  updateUi(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transfer = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    transfer &&
    inputTransferAmount.value > 0 &&
    transfer !== currentAccount &&
    currentAccount.balance >= +inputTransferAmount.value
  ) {
    transfer.movements.push(+inputTransferAmount.value);
    currentAccount.movements.push(-inputTransferAmount.value);
    currentAccount.movementsDates.push(dateNow(undefined, true));
    transfer.movementsDates.push(dateNow(undefined, true));

    updateUi(currentAccount);
  }

  if (timer) {
    clearInterval(timer);
    timer = loginout();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = inputCloseUsername.value;
  const checkPin = inputClosePin.value;
  if (currentAccount.username === userName && currentAccount.pin == checkPin) {
    const index = accounts.findIndex(mov => mov.username === userName);
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    inputCloseUsername.value = inputClosePin.value = '';
  }

  // my method
  // for (const [x, e] of accounts.entries()) {
  //   if (currentAccount == e) {
  //     accounts.splice(x, 1);
  //     containerApp.style.opacity = '0';
  //   }
  // }

  console.log(accounts);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.balance > 0 &&
    inputLoanAmount.value > 0 &&
    currentAccount.movements.some(mov => mov / 10 > inputLoanAmount.value)
  ) {
    const set = setTimeout(function () {
      currentAccount.movements.push(+inputLoanAmount.value);
      currentAccount.movementsDates.push(dateNow(undefined, true));
      updateUi(currentAccount);
    }, 5000);
  }
  if (timer) {
    clearInterval(timer);
    timer = loginout();
  }
  updateUi(currentAccount);
});

let changeSort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  addMoventmets(currentAccount, !changeSort);
  changeSort = changeSort == true ? false : true;
});
/////////////////////CHalenge 2//////

// const arrFirst = [5, 2, 4, 1, 15, 8, 3];
// const newFuncAverage = function (arr) {
//   const newArr = arr
//     .map(function (mov) {
//       return mov <= 2 ? mov * 2 : 16 + mov * 4;
//     })
//     .filter(function (mov) {
//       return mov >= 18;
//     });
//   console.log(newArr);

//   return (
//     newArr.reduce(function (accum, mov) {
//       return accum + mov;
//     }) / newArr.length
//   );
// };

// console.log(newFuncAverage(arrFirst));

// const newFuncAverageArrow = function (arr) {
//   const newArr = arr
//     .map(mov => {
//       return mov <= 2 ? mov * 2 : 16 + mov * 4;
//     })
//     .filter(mov => mov >= 18);
//   console.log(newArr);

//   return newArr.reduce((accum, mov) => accum + mov) / newArr.length;
// };

// console.log(newFuncAverageArrow(arrFirst));

// ///////////////method FIND////////////////

// const firstWithdral = movements.find(mov => mov < 0); /////Difrrent from filter method  olny on thing -> will return only the First element for witch mov< 0 will be truth.

// const account = accounts.find(acc => acc.owner === 'Jessica Davis'); ////will return to us the  first object with acc.owner === "Jessica Davis"
// const retutnObject = function (acc) {
//   for (const h of acc) {
//     if (h.owner === 'Jessica Davis') return h;
//   }
// };
// const findObgect = retutnObject(accounts);
// console.log(findObgect);

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/

// console.log(`-----------------------challenge 4----------------------`);
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// console.log(dogs);

// dogs.forEach(
//   mov => (mov.recommendedFood = Math.trunc(mov.weight ** 0.75 * 28))
// ); ///// 1
// const m = dogs.find(mov => mov.owners.includes('Sarah'));
// console.log(m);
// const condition = m.curFood > m.recommendedFood ? `too mush` : `too litle`;
// console.log(`Sarah dog eats ${condition}`); ////// 2

// const ownerEatTooMush = [];
// dogs
//   .filter(mov => mov.recommendedFood < mov.curFood)
//   .forEach(mov => ownerEatTooMush.push(mov.owners));

// console.log(ownerEatTooMush);

// const ownerEatTooLittle = [];
// dogs
//   .filter(mov => mov.recommendedFood > mov.curFood)
//   .forEach(mov => ownerEatTooLittle.push(mov.owners));
// console.log(ownerEatTooLittle); //////3

// console.log(`${ownerEatTooMush.flat().join(' and ')}'s dogs eats too mush`);
// console.log(`${ownerEatTooLittle.flat().join(' and ')}'s dogs eats too little`); //////4

// console.log(dogs.some(mov => mov.curFood === mov.recommendedFood)); //////5

// console.log(
//   dogs.some(
//     mov =>
//       mov.curFood > 0.9 * mov.recommendedFood &&
//       mov.curFood < 1.1 * mov.recommendedFood
//   )
// ); ////////6

// const okay = dogs.filter(
//   mov =>
//     mov.curFood > 0.9 * mov.recommendedFood &&
//     mov.curFood < 1.1 * mov.recommendedFood
// ); /////////7

// console.log(okay);

// const newDogs = Array.from(dogs); ////new array

// newDogs.sort((a, b) => a.recommendedFood - b.recommendedFood);

// console.log(dogs);
// console.log(newDogs); ///////

console.log(Date.now());
console.log(
  (Date.now() - new Date(account1.movementsDates[7])) / 1000 / 60 / 60 / 24
);

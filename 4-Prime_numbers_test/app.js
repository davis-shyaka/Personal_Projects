const addForm = document.querySelector('.add');
const addForm2 = document.querySelector('.addRange');
const list = document.querySelector('.primes');
const listRange = document.querySelector('.primes-range');

// add a prime number to the list
const generateTemplate = (num) => {
    const html = `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${num}: is a prime number</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

// add a number that is not prime to the list
const generateTemplate2 = (num) => {
    const html = `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${num}: is <span class="text-danger">NOT</span> a prime number</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

// add a list of prime numbers to the list
const generateTemplate3 = (limit, evens, odds) => {
    const html = `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>Between the numbers 1 - ${limit} </span>
            <i class="far fa-trash-alt delete"></i>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>EVEN prime numbers are: ${evens} </span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              >ODD prime numbers are: ${odds} </span>
          </li>
          <hr/>`;
    listRange.innerHTML += html;
}


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const number = addForm.add.value.trim();

    if(isPrime(number)){
        generateTemplate(number);
        addForm.reset();
    } else if(!isPrime(number)){
        generateTemplate2(number);
        addForm.reset();
    }
});

addForm2.addEventListener('submit', e => {
    e.preventDefault();

    const end = addForm2.add2.value.trim();
    let testing = test(end);
    // console.log("testing");
    // console.log(testing);
    let limit = testing[0];
    let evens = testing[1];
    let odds = testing[2];
    // console.log(evens);
    // console.log(odds);
    generateTemplate3(limit, evens, odds);
    addForm2.reset();
})

function isPrime(num) {
    let count = 0 ;

    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            count ++;
        }
    }

    if(count === 2){
        // return "This is a prime a number";
        return true;
    } else{
        // return "This is NOT a prime number";
        return false;
    }
}

function isEven(num){
    if(num % 2 === 0){
        return true;
    } else if(num % 2 !== 0){
        return false;
    }
}

function test(limit) {
    let evenNumbers = [];
    let evenIndex = 0;
    let evenPrimeNumbers = [];
    let evenPrimeIndex = 0;

    let oddNumbers = [];
    let oddIndex = 0;
    let oddPrimeNumbers = [];
    let oddPrimeIndex = 0;

    for(let i = 0; i < limit; i++){
        if(isEven(i) && isPrime(i)){
            evenPrimeNumbers[evenPrimeIndex] = i;
            evenPrimeIndex++;
        } else if(!isEven(i) && isPrime(i)){
            oddPrimeNumbers[oddPrimeIndex] = i;
            oddPrimeIndex++;
        }
    }

    // console.log(`Between the numbers 1 - ${limit}:`);
    // console.log("These are the even prime numbers: " + evenPrimeNumbers);
    // console.log("These are the odd prime numbers: " + oddPrimeNumbers);

    const evens = evenPrimeNumbers;
    const odds = oddPrimeNumbers;
    const end = new Array(limit);

    // console.log(evens);
    // console.log(odds);

    return [end, evens, odds];
}

// console.log(test());
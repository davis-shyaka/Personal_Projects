////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

/*

// 1. dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

*/

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// 2. timestamps and comparisons

/*

const before = new Date('April 22 2021 6:20 PM');
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(days);

console.log(`This blog was written ${days} days ago.`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));

const future = new Date(timestamp);

console.log(future.getFullYear());
console.log(future.toDateString());

*/

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Building a digital clock
const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const time1 = document.getElementsByClassName('display1')[0];
const time2 = document.getElementsByClassName('display2')[0];
const time3 = document.getElementsByClassName('display3')[0];
const time4 = document.getElementsByClassName('display4')[0];

const start = document.getElementsByClassName('start')[0];
const stop1 = document.getElementsByClassName('stop')[0];
const reset = document.getElementsByClassName('reset')[0];

time1.value = '0';
time2.value = '0';
time3.value = '0';
time4.value = '0';

let timer = null

let t4 = 0
let t3 = 0
let t2 = 0
let t1 = 0

start.addEventListener('click', () => {
    if (timer !== null) {
        start.disabled =true;
        return;
    } 

    timer = setInterval(() => {
        t4++;
        
        if (t4> 9) {
            t4 = 0;
            t3++;
        }
        
        if (t3 > 9) {
            t3 = 0;
            t2++;
        }
        
        if (t2 > 5) {
            t2 = 0;
            t1++;
        }

        time1.value = String(t1);
        time2.value = String(t2);    
        time3.value = String(t3);
        time4.value = String(t4);
    },100)        
});

stop1.addEventListener('click', () => {
    if (timer !== null) {
        clearInterval(timer);
        start.disabled = false;
        timer = null; /*startでsetIntervalに入るため */
    }
})

reset.addEventListener('click', () => {
    if (timer !== null) {
        return;
    }

    clearInterval(timer)
    timer = null;
    start.disabled = false;

    t1 = t2 = t3 = t4 = 0;

    time1.value = '0';
    time2.value = '0';
    time3.value = '0';
    time4.value = '0';
})

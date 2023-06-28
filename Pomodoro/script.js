const strbtn = document.querySelector('.start-button');
const str_min = document.querySelector('.minutes');
let started = true;

const countDown = () => {

    int_min = Number.parseInt(str_min.textContent);

    if(started){
        started = false;
        let totalSecends = int_min * 60;

        const upDateTime = () => {
            let secDev = document.querySelector('.seconds');
            let minLeft = Math.floor(totalSecends / 60);
            let secLeft = totalSecends % 60;
            totalSecends--;
            
            if(secLeft < 10){
                secDev.textContent = '0' + secLeft;
            }
            else{
                secDev.textContent = secLeft;
            }
            str_min.textContent = minLeft;
            
        }
        setInterval(upDateTime, 1000);
    }
    else {
        alert('Session has already started.');
    }


}

strbtn.addEventListener('click', countDown);
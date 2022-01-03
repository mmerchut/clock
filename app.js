
const result = document.querySelector('.result')

const monthS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const clock = () => {
    const date = new Date();
    const day = dayS[date.getDay()];
    const month = monthS[date.getMonth()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    result.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(clock, 1000)

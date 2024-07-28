const hour = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')

const setDate = () => {
    const now = new Date()
    const getSec = now.getSeconds()
    const getMin = now.getMinutes()
    const getHour = now.getHours()
    const secDeg = (getSec / 60) * 360
    const minDeg = (getMin / 60) * 360
    const hourDeg = (getHour / 12) * 360
    sec.style.transform = `rotate(${secDeg}deg)`
    min.style.transform = `rotate(${minDeg}deg)`
    hour.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)


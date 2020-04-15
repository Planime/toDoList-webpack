
export function showTime(el) {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hours = date.getHours();
    let minutes = date.getMinutes();


    if (month < 10) month = "0" + month;
    console.log(day);

    if (minutes < 10) minutes = "0" + minutes;

    el.innerHTML = `${day}.${month}.${year} <br> ${hours}:${minutes} min`
}

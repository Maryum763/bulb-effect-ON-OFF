const bulbEle = document.querySelector("#bulb")
const btnEle = document.querySelector("button")

var a = 0
btnEle.addEventListener("click", function () {
    if (a == 0) {
        bulbEle.src = "./assets/bulb_on-removebg-preview.png"
        // console.log("button is on")
        btnEle.innerHTML = "OFF"
        a = 1
        bulbEle.style.width = "250px";
    } else {
        bulbEle.src = "./assets/bulb_off-removebg-preview.png"
        // console.log("button is off")
        btnEle.innerHTML = "ON"
        bulbEle.style.width = "290px";
        a = 0
    }
})                 
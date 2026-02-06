let button = document.getElementById("btn")

button.addEventListener('dblclick', () => {
    document.querySelector('.box').innerHTML = `<b> Yayy you were clicked.</b> Enjoy your click!`
})

document.addEventListener('contextmenu', () => {
    alert("Dont try to hack us with right click please")
})

document.addEventListener('keydown', (e) => {
    console.log(e);

})
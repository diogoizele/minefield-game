let table = document.querySelector('[field]')
table.addEventListener('contextmenu', e => e.preventDefault())

document.querySelectorAll('td').forEach(td => {

    td.addEventListener('click', clickTableData)
    td.addEventListener('contextmenu', setFlagInTableData)
})


function clickTableData(event) {
    if (event.target.textContent === '*') {
        alert('perdeu playboy!')
        document.querySelectorAll('span').forEach(span => span.setAttribute('class', ''))
    } else {
        event.target.childNodes[0].setAttribute('class', '')
    }
}


function setFlagInTableData(event) {
    event.target.setAttribute('class', 'flag')
}
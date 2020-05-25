let table = document.querySelector('[field]')
table.addEventListener('contextmenu', e => e.preventDefault())
let rowsAndCollumnNumber = table.children.length

document.querySelectorAll('td').forEach(td => {

    td.addEventListener('click', clickTableData)
    td.addEventListener('contextmenu', setFlagInTableData)
})


function clickTableData(event) {
    const cell = event.target
    cell.classList.remove('flag')
    cell.style.backgroundColor = '#e3e3e3'
    if (cell.textContent === '*') {
        alert('Você Perdeu!')
        document.querySelectorAll('td').forEach(td => td.style.backgroundColor = '#e3e3e3')
        document.querySelectorAll('span').forEach(span => {
            span.classList.remove('invisible')
            if (span.textContent == '*') {

                span.parentElement.innerHTML = `<img src="source/img/bomb2.png">`
            }
        })
    } else if (cell.textContent == 0) {
        const rows = document.querySelectorAll('tr')
        rows.forEach(row =>
            row.onclick = (e) => {
                row.childNodes.forEach((td, index) => {
                    td.onclick = function () {
                        const previousRow = row.previousElementSibling
                        const nextRow = row.nextElementSibling
                        td.firstChild.classList.remove('invisible')
                        if (td.textContent == 0 && previousRow != undefined && nextRow != undefined) {
                            previousRow.children[index - 1].firstChild.classList.remove('invisible')
                            previousRow.children[index - 1].style.backgroundColor = '#e3e3e3'
                            previousRow.children[index].firstChild.classList.remove('invisible')
                            previousRow.children[index].style.backgroundColor = '#e3e3e3'
                            previousRow.children[index + 1].firstChild.classList.remove('invisible')
                            previousRow.children[index + 1].style.backgroundColor = '#e3e3e3'
                            row.children[index - 1].firstChild.classList.remove('invisible')
                            row.children[index - 1].style.backgroundColor = '#e3e3e3'
                            row.children[index + 1].firstChild.classList.remove('invisible')
                            row.children[index].style.backgroundColor = '#e3e3e3'
                            row.children[index + 1].style.backgroundColor = '#e3e3e3'
                            nextRow.children[index - 1].firstChild.classList.remove('invisible')
                            nextRow.children[index - 1].style.backgroundColor = '#e3e3e3'
                            nextRow.children[index].firstChild.classList.remove('invisible')
                            nextRow.children[index].style.backgroundColor = '#e3e3e3'
                            nextRow.children[index + 1].firstChild.classList.remove('invisible')
                            nextRow.children[index + 1].style.backgroundColor = '#e3e3e3'
                        }
                    }
                })
            })
    }
    else {
        cell.childNodes[0].classList.remove('invisible')
    }
}


function setFlagInTableData(event) {
    event.target.classList.add('flag')

}




const td = document.querySelectorAll('td').forEach(td => {
    const span = td.firstChild

    // if (span.textContent == 1) {

    // }

    switch (span.textContent) {
        case '0':
            span.style.display = 'none'
            break
        case '1':
            span.style.color = '#3356ff'
            break
        case '2':
            span.style.color = '#2d6a4f'
            break
        case '3':
            span.style.color = '#9e2a2b'
            break
        case '4':
            span.style.color = '#22223b'
            break
        case '5':
            span.style.color = '#540b0e'
            break
        case '6':
            span.style.color = '#fcca46'
            break
        case '7':
            span.style.color = '#ff5d8f'
            break
        default:
            span.style.color = '#6c757d'
    }


    // td.onclick = function() {
    //     td.style.backgroundColor = '#e3e3e3'
    // }
})
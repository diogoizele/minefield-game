(function () {
    let mines = createRandomValueToArray(18, 18, 100) //(row, column, bomb)

    renderGame(field(18, 18, mines))


    function field(rowsCount, colsCount, mine) {
        let array = []

        for (let row = 0; row < rowsCount; row++) {
            array[row] = []
            for (let column = 0; column < colsCount; column++) {
                if (mines.map(position => JSON.stringify(position)).includes(`[${row},${column}]`)) {
                    array[row][column] = '*'
                } else {
                    array[row][column] = 0
                }
            }
        }

        for (let row = 0; row < rowsCount; row++) {
            for (let column = 0; column < colsCount; column++) {
                if (array[row][column] != '*') {
                    if (array[row - 1] !== undefined && array[row - 1][column - 1] === '*') array[row][column]++
                    if (array[row - 1] !== undefined && array[row - 1][column] === '*') array[row][column]++
                    if (array[row - 1] !== undefined && array[row - 1][column + 1] === '*') array[row][column]++

                    if (array[row] !== undefined && array[row][column - 1] === '*') array[row][column]++
                    if (array[row] !== undefined && array[row][column + 1] === '*') array[row][column]++

                    if (array[row + 1] !== undefined && array[row + 1][column - 1] === '*') array[row][column]++
                    if (array[row + 1] !== undefined && array[row + 1][column] === '*') array[row][column]++
                    if (array[row + 1] !== undefined && array[row + 1][column + 1] === '*') array[row][column]++
                }
            }
        }
        return array
    }

    function renderGame(array) {
        let table = document.querySelector('[field]')
        for (let row of array) {
            let tr = document.createElement('tr')
            table.appendChild(tr)
            for (let column of row) {
                let td = document.createElement('td')
                let span = document.createElement('span')
                span.textContent = column
                span.setAttribute('class', 'invisible')
                td.appendChild(span)
                tr.appendChild(td)
            }
        }
    }

    function createRandomValueToArray(rows, columns, bombs) {
        let mines = []
        let row = rows
        let column = columns

        const getRandomRows = row => Math.floor(Math.random() * row)
        const getRandomColumns = column => Math.floor(Math.random() * column)

        for (i = 0; i < bombs; i++) {
            mines.push([getRandomRows(row), getRandomColumns(column)])
        }
        return mines
    }
})()

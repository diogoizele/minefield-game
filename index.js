function field(rowsCount, colsCount, mine) {
    let array = []

    for (let row = 0; row < rowsCount; row++) {
        array[row] = []
        for (let column = 0; column < colsCount; column++) {
            if (mines.map(position => console.log(`[${position.toString()}]`).includes(`[${row},${column}]`))) {
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
    for(let row of array) {
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for (let column of row) {
            let td = document.createElement('td')
            td.textContent = column
            tr.appendChild(td)
        }
    }
}


let mines = [[0, 7], [3, 3], [5, 2], [7, 7], [4, 2], [1, 2]]
// mines.map(x => console.log(`[${x.toString()}]`))
// mines.map(x => console.log(JSON.stringify(x)))
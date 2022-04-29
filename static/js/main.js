const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
const saveBtn = document.querySelector('.save')

let draw = false

var latest;

function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function () {
            if (!draw) return
            div.style.backgroundColor = latest
            latest = color.value
        })
        div.addEventListener('mousedown', function () {
            div.style.backgroundColor = latest
            latest = color.value
        })

        container.appendChild(div)
    }
}

window.addEventListener("mousedown", function () {
    draw = true
})
window.addEventListener("mouseup", function () {
    draw = false
})

function reset() {
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

// function save() {
//     const data = container.innerHTML
//     const blob = new Blob([data], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
//     const link = document.createElement('a')
//     link.setAttribute('href', url)
//     link.setAttribute('download', 'pixelart.txt')
//     link.click()
// }

// saveBtn.addEventListener('click', save)

sizeEl.addEventListener('keyup', function () {
    size = sizeEl.value
    reset()
})

populate(size)
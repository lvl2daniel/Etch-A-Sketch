const sizeChange = document.createElement('button');
const etch = document.createElement('h3');
const wrapper = document.createElement('div');
const color = document.createElement('button')
const body = document.querySelector('body');
const wrappah2 = document.createElement('div');
var r = 0;
var g = 0;
var b = 0;
var col = "rgb(" + r + "," + g + "," + b + ")";
wrappah2.id = 'changer';
sizeChange.textContent = 'Click to reset & set the size!';
sizeChange.id = 'input';
color.id = 'change';
etch.textContent = 'Etch-a-Sketch!'
etch.id = 'etch';
body.append(etch);
body.append(wrappah2)
wrappah2.append(color);
wrappah2.append(sizeChange);
wrapper.id = 'wrapper';
body.append(wrapper);
let i = 0;
let size = 16;
let height = (650/size);
let width = height;
createGrid(size, height, width, col);

sizeChange.addEventListener('click' , (event) => {
    deleteGrid(size);
    size = prompt("What size grid would you like to make? (Max 100 by 100)");
    if (size > 100)
    size = 100;
    size = parseInt(size);
    height = (650/size);
    width = height;
    createGrid(size, height, width, col);

});

color.addEventListener('click' , (e) =>{
    deleteGrid(size);
    col = randomizeColor();
    createGrid(size, height, width, col);

})

function randomizeColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function createGrid(size, height, width, colour){
    for (i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.id = 'row';
        wrapper.appendChild(row)
        for (let j = 0; j < size; j++)
        {
            const item = document.createElement('div');
            item.id = ('item');
            item.style.width = width + 'px';
            item.style.height = height + 'px';
            item.style.padding =
            item.addEventListener('mouseover', (event) => {
                console.log("hover works");
                item.style.backgroundColor = colour;
            })
            row.appendChild(item);
        }
    }
}

function deleteGrid(size) {
    for (i = 0; i < size; i++)
    {
        const row = document.getElementById('row');
        row.remove();
    }
}


function fill()
{
    this.style.backgroundColor = "black";
}


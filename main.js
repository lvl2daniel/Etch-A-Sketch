const sizeChange = document.createElement('button');
const etch = document.createElement('h3');
const wrapper = document.createElement('div');
const body = document.querySelector('body');
sizeChange.textContent = 'Click to reset & set the size!';
sizeChange.id = 'input';
etch.textContent = 'Etch-a-Sketch!'
etch.id = 'etch';
body.append(etch);
body.append(sizeChange);
wrapper.id = 'wrapper'
body.append(wrapper);
let i = 0;
let size = 16;
let height = (650/size);
let width = height;
createGrid(size, height, width);

sizeChange.addEventListener('click' , (event) => {
    deleteGrid(size);
    size = prompt("What size grid would you like to make? (Max 100 by 100)");
    if (size > 100)
    size = 100;
    size = parseInt(size);
    height = (650/size);
    width = height;
    createGrid(size, height, width);

});


function createGrid(size, height, width){
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
                item.style.backgroundColor = "black";
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


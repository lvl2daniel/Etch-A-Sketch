const wrapper = document.createElement('div');
const body = document.querySelector('body');
wrapper.classList = 'wrapper'
body.append(wrapper);


let i = 0;

for (i = 0; i < 16; i++)
{
    const row = document.createElement('div');
    row.classList = 'row';
    wrapper.appendChild(row)
    for (let j = 0; j < 16; j++)
    {
        const item = document.createElement('div');
        item.classList.add('item');
        item.addEventListener('mouseover', () => {
            item.fill();
        })
        row.appendChild(item);
    }
}


function fill()
{
    this.classList.add("filled");
}

const hover = document.getElementsByClassName('item');
hover.addEventListener('mouseover', (e) => {
    hover.classList.add("filled");
})
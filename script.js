let size = 10;
let count = 1;


const initiate = function () {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add');
    addBtn.textContent = 'Press me to add elements';
    document.body.appendChild(addBtn);
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset');
    resetBtn.textContent = 'Press me to reset list';
    document.body.appendChild(resetBtn);

    const list = document.createElement('ul');
    document.body.appendChild(list);

    addBtn.addEventListener('click', addLiElement)
    resetBtn.addEventListener('click', function () {
        list.innerHTML = '';
        size = 10;
        count = 1
    })
}

const addLiElement = function () {
    const list = document.querySelector('ul')
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = 'Element number ' + count++;
        liElement.style.fontSize = `${size++}px`
        list.appendChild(liElement)
    }
}

initiate(addLiElement)
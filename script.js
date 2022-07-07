let size = 10;
let count = 1;


const initiate = function () {
    const btn = document.createElement('button');
    btn.textContent = 'Press me'
    document.body.appendChild(btn);

    btn.addEventListener('click', addLiElement)
}

const addLiElement = function () {
    const list = document.createElement('ul');
    document.body.appendChild(list);
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = count;
        liElement.style.fontSize = `${size}px`
        list.appendChild(liElement)
        count++;
        size += 2
    }

}


initiate(addLiElement)
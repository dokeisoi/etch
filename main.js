function appendDiv(number) {
    for ( let i = 0; i < number; i++ ) {
        const div = document.createElement('div');

        div.classList.add(`blue${i}`)
        div.classList.add('upper');

        document.querySelector('.container').append(div);
    }
}

function appendAnotherDiv(number) {
    for ( let i = 0; i < number; i++ ) {        
        for ( let j = 0; j < number; j++ ) {
            const div = document.createElement('div');

            div.classList.add('lower');

            document.querySelector(`.blue${i}`).append(div);
        }
    }
}

function clickChoose() {
    const parentDiv = document.querySelector('.container');
    const childDivs = document.querySelectorAll('.upper');

    for ( i = 0; i < childDivs.length; i++ ) {
        parentDiv.removeChild(childDivs[i]);
    }

    let userChoice = prompt('choose', 5);
    appendDiv(userChoice);
    appendAnotherDiv(userChoice);
}

const choice = document.querySelector('.choice');

choice.addEventListener('click', clickChoose);
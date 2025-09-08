function appendDiv(number) {
    for (i = 0; i < number; i++) {
        const div = document.createElement('div');

        div.classList.add(`blue${i}`)
        div.classList.add('upper');

        document.querySelector('.container').append(div);
    }
}

function appendAnotherDiv(number) {
    for (i = 0; i < number; i++) {        
        for ( j = 0; j < number; j++) {
            const div = document.createElement('div');

            div.classList.add('lower');

            document.querySelector(`.blue${i}`).append(div);
        }
    }
}

appendDiv(50);
appendAnotherDiv(50);
function appendDiv(number) {
    for (i = 0; i < number; i++) {
        const div = document.createElement('div');
        document.querySelector('.container').append(div);
    }
}
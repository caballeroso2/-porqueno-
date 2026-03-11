function respond(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'sí') {
        responseElement.textContent = 'Mentira se que tienes a otro';
        responseElement.style.backgroundColor = '#0c550e';
        responseElement.style.color = '#fff';
    } else if (answer === 'no') {
        responseElement.textContent = 'Ya sabía que tienes a otros ';
        responseElement.style.backgroundColor = '#af4c4c';
        responseElement.style.color = '#fff';
    }
     else if (answer === 'nolose') {
        responseElement.textContent = 'Pues piénsalo bien... Lachosa  😒';
        responseElement.style.backgroundColor = '#c9a800';
        responseElement.style.color = '#000';
    }

}
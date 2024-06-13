// script del 4_colores
 // Cambiar color a negro al hacer clic
 document.getElementById('blue').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('red').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('green').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('yellow').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});

// Variable global para guardar el color
let color = '';

// Cambiar el color del div "key" según la tecla presionada
document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    if (event.key === 'a'|| event.key === "A") {
        color = 'pink';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 's'|| event.key === "S") {
        color = 'orange';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'd'|| event.key === "D") {
        color = 'lightblue';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'q'|| event.key === "Q") {
        color = 'purple';
        createColorBox(color);
    } else if (event.key === 'w'|| event.key === "W") {
        color = 'gray';
        createColorBox(color);
    } else if (event.key === 'e'|| event.key === "E") {
        color = 'brown';
        createColorBox(color);
    }
});

// Función para crear un nuevo div con el color especificado
function createColorBox(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '2px solid black';
    newDiv.style.marginTop = '20px';
    document.body.appendChild(newDiv);
}
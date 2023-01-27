//Initializing all the elements to a variable

let containers = document.querySelectorAll('.container');

let allProject = document.querySelectorAll('.allProject');
let arduino = document.querySelectorAll('.arduino');
let esp = document.querySelectorAll('.esp');

//For showing links on hover to each cards
containers.forEach(function (container) {
    container.addEventListener('mouseover', function (e) {
        let link = e.currentTarget.querySelector('.links');

        link.classList.remove('hidden');
    });
    container.addEventListener('mouseout', function (e) {
        let link = e.currentTarget.querySelector('.links');

        link.classList.add('hidden');
    });
});

// for filtering cards
allProject.forEach(function (e) {
    e.onclick = () => {
        console.log('Clcickck');
        containers.forEach(function (container) {
            container.parentElement.classList.remove('hide');
        });
    };
});
arduino.forEach(function (e) {
    e.onclick = () => {
        console.log('Clcickck');
        containers.forEach(function (container) {
            console.log('sdgasf');
            if (container.classList.contains('espCard')) {
                container.parentElement.classList.add('hide');
            }
            if (container.classList.contains('arduinoCard')) {
                container.parentElement.classList.remove('hide');
            }
        });
    };
});

esp.forEach(function (e) {
    e.onclick = () => {
        console.log('Clcickck');
        containers.forEach(function (container) {
            console.log('sdgasf');
            if (container.classList.contains('arduinoCard')) {
                container.parentElement.classList.add('hide');
            }
            if (container.classList.contains('espCard')) {
                container.parentElement.classList.remove('hide');
            }
        });
    };
});

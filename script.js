document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
        case 32: //space
            stop();
            break;
        default:
            break;
    }
});

document.querySelector("#flash").addEventListener("click", function() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://192.168.1.2:8080/enabletorch', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
});

document.querySelector("#flashoff").addEventListener("click", function() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://192.168.1.2:8080/disabletorch', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
});

function up() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:3001/robot/forward', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
}

function down() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:3001/robot/back', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
}

function left() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:3001/robot/left', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
}

function right() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:3001/robot/right', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
}

function stop() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:3001/robot/stop', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
}
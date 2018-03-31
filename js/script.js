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
is_bot_up();
document.body.querySelector('#up').addEventListener('click', () => {
    up();
});
document.body.querySelector('#left').addEventListener('click', () => {
    left();
});
document.body.querySelector('#right').addEventListener('click', () => {
    right();
});
document.body.querySelector('#down').addEventListener('click', () => {
    down();
});
document.querySelector("#flash").addEventListener("click", function() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:8080/enabletorch', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
});

document.querySelector("#flashoff").addEventListener("click", function() {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://sebastienmandaba.com:8080/disabletorch', false);
    req.send();
    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
});

function display_video(src) {
    let img = document.createElement('img');
    img.src = src;
    img.className = 'responsive-img';
    img.id = 'browser_video';
    document.querySelector('#video_pane').appendChild(img);
}

function is_bot_up() {
    var myInit = { method: 'GET' };
    fetch('http://sebastienmandaba.com:8080/video', myInit)
        .then(function(response) {
            if (response.ok) {
                remove_loading();
                display_video('http://sebastienmandaba.com:8080/video');
            } else {
                remove_loading();
                display_video('./img/offline.gif');
            }
        }).catch(function(error) {
            remove_loading();
            display_video('./img/offline.gif');
        });
}

function remove_loading() {
    circle = document.querySelector('#loading');
    circle.parentNode.removeChild(circle);
}

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
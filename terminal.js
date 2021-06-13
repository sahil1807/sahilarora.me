var captionLength = 0;
var caption = '';

$(document).ready(async function() {

    setInterval ('cursorAnimation()', 1000);
    captionEl = $('#caption');

    for (let el of consoleData){
        var id = '#console-pos-' + `${(el.id - 1)}`
        typeInput(el.text)
        await delay(2700)
        $(el.html).insertAfter(id)
        testErasingEffect()
        await delay(1200)
    }
});

function typeInput(string) {
    caption = string
    type()
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 25);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 5);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}
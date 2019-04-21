function getterElement(target, element) {
    return target.getElementById(element);
}

function addingDOMelement(target, newElement) {
    return target.appendChild(newElement);
}

function generateIndexNumb(playListValue, elementValue) {
    const indexNumb = playListValue.indexOf(elementValue);
    return indexNumb;
}

function generateRandomNumb (maxValue) {
    const maxNumber = maxValue;
    const indexNumb = parseInt(Math.random() * maxValue);
    return indexNumb;
}
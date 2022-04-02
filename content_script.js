let style = document.createElement('style');
document.body.appendChild(style);

browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'value' in changes) {
        update(changes.value.newValue);
    }
});

// browser.storage.onChanged.addListener((changes, area) => {
//     if (area === 'local' && 'rotation' in changes) {
//         update(changes.rotation.newRotation);
//     }
// });

function update(value){
    style.innerText = `html { filter: sepia(${value}%) !important }`;
}

// function update(rotation){
//     body.innerText = `html { transform: rotateZ(${rotation}%deg) !important }`;
// }
browser.storage.local.get('value').then(result => update(result.value));
// browser.storage.local.get('rotation').then(result => update(result.rotation));
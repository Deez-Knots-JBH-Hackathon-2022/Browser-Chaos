let input = document.querySelector('input');

input.addEventListener('change', e => setValue(e.target.value));
// input.addEventListener('change', e => setValue(e.target.rotation));

async function setValue(value) {
    await browser.storage.local.set({value});
}
// async function setRotation(rotation) {
//     await browser.storage.local.set({rotation});
// }

async function init() {
    let {value} = browser.local.storage.get('value');
    if(!value){
        value = 0;
    }
    input.value = value;
    setValue(value);

    // let {rotation} = browser.local.storage.get('rotation');
    // if(!rotation){
    //     rotation = 0;
    // }
    // input.rotation = rotation;
    // setRotation(rotation);
}
init().catch(e => console.error(e));
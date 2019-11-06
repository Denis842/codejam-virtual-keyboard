document.addEventListener('DOMContentLoaded', function () { 
    let body = document.querySelector("body");
    let valueEngUp = 0, valueEngDown = 0; valueRusUp = 0; valueRusDown = 0;
    /*Array of buttons on the keyboard */
    const key = [['~', '`', 'Ё', 'ё', 'Backquote'], ['!', '1', '!', '1', 'Digit1'], ['@', '2', '"', '2', 'Digit2'], ['#', '3', '№', '3', 'Digit3'], ['$', '4', ';', '4', 'Digit4'], ['%', '5', '%', '5', 'Digit5'], ['^', '6', ':', '6', 'Digit6'], ['&', '7', '?', '7', 'Digit7'], ['*', '8', '*', '8', 'Digit8'], ['(', '9', '(', '9', 'Digit9'], [')', '0', ')', '0', 'Digit0'], ['_', '-', '_', '-', 'Minus'], ['+', '=', '+', '=', 'Equal'], ['←Back', '←Back', '←Back', '←Back', 'Backspace', 'null'], ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'null'], ['Q', 'q', 'Й', 'й', 'KeyQ'], ['W', 'w', 'Ц', 'ц', 'KeyW'], ['E', 'e', 'У', 'у', 'KeyE'], ['R', 'r', 'К', 'к', 'KeyR'], ['T', 't', 'Е', 'е', 'KeyT'], ['Y', 'y', 'Н', 'н', 'KeyY'], ['U', 'u', 'Г', 'г', 'KeyU'], ['I', 'i', 'Ш', 'ш', 'KeyI'], ['O', 'o', 'Щ', 'щ', 'KeyO'], ['P', 'p', 'З', 'з', 'KeyP'], ['{', '[', 'Х', 'х', 'BracketLeft'], ['}', ']', 'Ъ', 'ъ', 'BracketRight'], ['Del', 'Del', 'Del', 'Del', 'Delete', 'null'], ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'null'], ['A', 'a', 'Ф', 'ф', 'KeyA'], ['S', 's', 'Ы', 'ы', 'KeyS'], ['D', 'd', 'В', 'в', 'KeyD'], ['F', 'f', 'А', 'а', 'KeyF'], ['G', 'g', 'П', 'п', 'KeyG'], ['H', 'h', 'Р', 'р', 'KeyH'], ['J', 'j', 'О', 'О', 'KeyJ'], ['K', 'k', 'Л', 'л', 'KeyK'], ['L', 'l', 'Д', 'д', 'KeyL'], [':', ';', 'Ж', 'ж', 'Semicolon'], ['"', `'`, 'Э', 'э', 'Quote'], ['Enter', `Enter`, 'Enter', 'Enter', 'Enter', '\r\n'], ['Shift', 'Shift', 'Shift', 'Shift', 'ShiftLeft', 'null'], ['Z', `z`, 'Я', 'я', 'KeyZ'], ['X', `x`, 'Ч', 'ч', 'KeyX'], ['C', `c`, 'С', 'с', 'KeyC'], ['V', `v`, 'М', 'м', 'KeyV'], ['B', `b`, 'И', 'и', 'KeyB'], ['N', `n`, 'Т', 'т', 'KeyN'], ['M', 'm', 'Ь', 'ь', 'KeyM'], ['<', ',', 'Б', 'б', 'Comma'], ['>', '.', 'Ю', 'ю', 'Period'], ['?', '/', ',', '.', 'Slash'], ['↑', '↑', '↑', '↑', 'ArrowUp', 'null'], ['Shift', 'Shift', 'Shift', 'Shift', 'ShiftRight', 'null'],  ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlLeft', 'null'], ['Win', 'Win', 'Win', 'Win', 'MetaLeft', 'null'], ['Alt', 'Alt', 'Alt', 'Alt', 'AltLeft', 'null'], ['Space', 'Space', 'Space', 'Space', 'Space', ' '], ['Alt', 'Alt', 'Alt', 'Alt', 'AltRight', 'null'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlRight', 'null'], ['←', '←', '←', '←', 'ArrowLeft', 'null'], ['↓', '↓', '↓', '↓', 'ArrowDown', 'null'], ['→', '→', '→', '→', 'ArrowRight', 'null']];
    body.innerHTML = '<textarea disabled></textarea><div class="keyboard eng up"></div>';
    let divKeyboard = document.querySelector(".keyboard");
    let textArea = document.querySelector("textarea");
    let langKeyStart;

    /*Add button keyboard*/
    for (i = 0; i < key.length; i++) {
        divKeyboard.innerHTML += `<input type="submit" class="change" value="">`;
        let btn = document.querySelector(".change");;
        for (j = 0; j < key[i].length; j++) {
            valueEngUp = key[i][0];
            valueEngDown = key[i][1];
            valueRusUp = key[i][2];
            valueRusDown = key[i][3];
            valueWhich = key[i][4];
            if (key[i].length > 4) {
                valueResult = key[i][5];
            }
        }
        btn.setAttribute('valueEngUp', `${valueEngUp}`);
        btn.setAttribute('valueEngDown', `${valueEngDown}`);
        btn.setAttribute('valueRusUp', `${valueRusUp}`);
        btn.setAttribute('valueRusDown', `${valueRusDown}`);
        if (valueResult) {
            btn.setAttribute('valueResult', `${valueResult}`);
        }
    
        btn.id = valueWhich;
        btn.value = langKeyStart;
        btn.classList.remove('change');
    }

    /*Check start language*/
    let array = document.cookie.split(';');

    for (j = 0; j < array.length; j++) {
        if (array[j].includes('Lang=EngUp')) {
            divKeyboard.classList.remove('rus');
            divKeyboard.classList.remove('down');
            divKeyboard.classList.add('eng');
            divKeyboard.classList.add('up');
            toggleKey()
        }

        else if (array[j].includes('Lang=EngDown')) {
            divKeyboard.classList.remove('rus');
            divKeyboard.classList.add('down');
            divKeyboard.classList.add('eng');
            divKeyboard.classList.remove('up');
            toggleKey()
        }

        else if (array[j].includes('Lang=RusUp')) {
            divKeyboard.classList.add('rus');
            divKeyboard.classList.remove('down');
            divKeyboard.classList.remove('eng');
            divKeyboard.classList.add('up');
            toggleKey()
        }
        
        else {
            divKeyboard.classList.add('rus');
            divKeyboard.classList.add('down');
            divKeyboard.classList.remove('eng');
            divKeyboard.classList.remove('up');
            toggleKey()
        }
    }


    /*Function change letters on keyboard*/
    function toggleKey() {
        if (divKeyboard.classList.contains('eng') && divKeyboard.classList.contains('up')) {       
            for (let node of divKeyboard.childNodes) {
                node.value = node.getAttribute('valueEngUp');
            }
            document.cookie = "Lang=EngUp";
        }
        else if (divKeyboard.classList.contains('eng') && divKeyboard.classList.contains('down')) {
            for (let node of divKeyboard.childNodes) {
                node.value = node.getAttribute('valueEngDown');
            }
            document.cookie = "Lang=EngDown";
        }

        else if (divKeyboard.classList.contains('rus') && divKeyboard.classList.contains('up')) {
            for (let node of divKeyboard.childNodes) {
                node.value = node.getAttribute('valueRusUp');
            }
            document.cookie = "Lang=RusUp";
        }

        else if (divKeyboard.classList.contains('rus') && divKeyboard.classList.contains('down')) {
            for (let node of divKeyboard.childNodes) {
                node.value = node.getAttribute('valueRusDown');
            }
            document.cookie = "Lang=RusDown";
        }
    }
    
    /*Function to change uppercase and uppercase letters*/
    function CapsLock() {
        if (divKeyboard.classList.contains('eng') && divKeyboard.classList.contains('up') || divKeyboard.classList.contains('rus') && divKeyboard.classList.contains('up')) {
            divKeyboard.classList.remove('up');
            divKeyboard.classList.add('down');
        }

        else {
            divKeyboard.classList.add('up');
            divKeyboard.classList.remove('down');
        }
        toggleKey()
    }

    /*Key down on keyboard or mouse*/

    document.addEventListener('keydown', keyDown);     
    divKeyboard.addEventListener('mousedown', keyDown) ;
    function keyDown(e) {
        let btnCheck = (document.getElementById(`${e.code}`) || e.target); 
        btnCheckId = btnCheck.id;
        if (e.repeat) {
            return
        }
        btnCheck.classList.add('active')
        if (btnCheckId === 'CapsLock') {
            CapsLock();
        }
        if (divKeyboard.querySelector('#AltLeft').classList.contains('active') && btnCheckId === 'ShiftLeft' || divKeyboard.querySelector('#AltRight').classList.contains('active') && btnCheckId === 'ShiftLeft') {
            if (divKeyboard.classList.contains('eng')) {
                divKeyboard.classList.add('rus')
                divKeyboard.classList.remove('eng');
            }
            else {
                divKeyboard.classList.add('eng');
                divKeyboard.classList.remove('rus');
            }        
            divKeyboard.querySelector('#AltLeft').classList.remove('active')
            divKeyboard.querySelector('#AltRight').classList.remove('active')
            divKeyboard.querySelector('#ShiftLeft').classList.remove('active')
            divKeyboard.querySelector('#ShiftRight').classList.remove('active')  
            toggleKey()
            return
        }

        if (divKeyboard.querySelector('#ShiftLeft').classList.contains('active') && e.code === 'ShiftLeft' || divKeyboard.querySelector('#ShiftRight').classList.contains('active')  && e.code === 'ShiftRight') {
            divKeyboard.classList.toggle('up');
            divKeyboard.classList.toggle('down');
            toggleKey()
        }
        if (btnCheckId == 'Backspace') {
            textArea.value = textArea.value.slice(0, -1);
        }
        result = (btnCheck.getAttribute('valueResult') || btnCheck.getAttribute('value'))
        if (result == null || result == 'null') {
            textArea.value += '';
        }
        else {
            textArea.value += result;
        }
        /*Key up on keyboard or mouse*/
        divKeyboard.addEventListener('mouseup', keyUp) ;
        document.addEventListener('keyup', keyUp)
        function keyUp(e) {
        let btnCheck = (document.getElementById(`${e.code}`)  || e.target); 
        if (e.code == 'ShiftLeft' && e.code != 'AltLeft' || e.code == 'ShiftRight') {
            if (divKeyboard.classList.contains === 'up') {
                divKeyboard.classList.remove('up');
                divKeyboard.classList.add('down');
            }
            else {
                divKeyboard.classList.add('up');
                divKeyboard.classList.remove('down');
            }
            toggleKey()
        }
        else if (e.target.id === 'AltLeft' || e.target.id === 'AltRight' || e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
            return
        }
        btnCheck.classList.remove('active')
        }
    }   
},
false);

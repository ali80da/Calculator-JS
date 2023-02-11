// START JS

// CLAC
function calc(val) {
    Form.resultInput.value += val;
}

// GET RESULT
function getResult() {
    let val = Form.resultInput.value;
    if(val) {
        Form.resultValue.value = eval(Form.resultInput.value);
    }
}

// CLEAN UP
function resetInput() {
    Form.resultInput.value = "";
    Form.resultValue.value = "";
}

// BACK 1 STEP
function handleBackspace() {
    let val = Form.resultInput.value;
    if(val) {
        val = val.substring(0, val.length - 1);
        Form.resultInput.value = val;
        Form.resultValue.value = "";
    }
}
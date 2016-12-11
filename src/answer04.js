/**
 * Created by bganguly on 12/10/16.
 */
"use strict";

function getInputElements() {
    return document.getElementsByTagName('input');
}

function getSpanElements() {
    return document.getElementsByTagName('span');
}

function cancelBtnHandler() {
    var idx;
    var inputEls = getInputElements();
    for ( idx=0; idx<inputEls.length;idx++) {
        inputEls[idx].value="";
    }
    var spanEls = getSpanElements();
    for ( idx=0; idx<inputEls.length;idx++) {
        spanEls[idx].textContent="";
    }
}

document.getElementById('cancel').addEventListener('click',cancelBtnHandler);

function getFieldValueById(Id) {
    return document.getElementById(Id).value;
}

function isAlpha(fieldValue) {
    return fieldValue.match(/^[a-z]+$/i);
}

function isAlphaNumeric(fieldValue) {
    return fieldValue.match(/^[a-z0-9]+$/i);
}

function isNumeric(fieldValue) {
    return fieldValue.match(/^[0-9]+$/i);
}

function validateInputsMapping() {
    var validationMap = {};
    validationMap['name']= 'isAlpha';
    validationMap['address1']= 'isAlphaNumeric';
    validationMap['address2']= 'isAlphaNumeric';
    validationMap['city']= 'isAlphaNumeric';
    validationMap['zip']= 'isNumeric';
    return validationMap;
}

function okBtnHandler() {
    var windowPropertyEvaluated;
    var validationMap = validateInputsMapping();

    for (var key in validationMap) {
        if (validationMap.hasOwnProperty(key)) {
            var windowProperty = window[validationMap[key]];
            if (typeof windowProperty === 'function') {
                windowPropertyEvaluated = windowProperty(getFieldValueById(key));
                if ( windowPropertyEvaluated === null || windowPropertyEvaluated === false) {
                    document.getElementById(key+'Errors').textContent = validationMap[key] +" validation failed ";
                } else {
                    document.getElementById(key+'Errors').textContent = "";
                }
            }
        }
    }
}

document.getElementById('ok').addEventListener('click',okBtnHandler);

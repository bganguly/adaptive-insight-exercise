/**
 * Created by bganguly on 12/10/16.
 */
"use strict";

/**
 * setup a promise object
 * @param url
 * @param responseTypeExpected
 * @returns {Promise}
 */
function getPromise(url, responseTypeExpected) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject("unable to complete xhr");
            }
        };
        request.onerror = function() {
            reject("unable to complete xhr");
        };
        request.send();
    });
}

/**
 * make the xhr call and process response
 */
var createObjFromResponse = function() {
    getPromise('answer01.json','json').then(function(response) {
        console.log(JSON.parse(response));
    }, function(msg) {
        console.error(msg);
    });
};

/**
 * call the main function
 */
createObjFromResponse();
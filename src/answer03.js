/**
 * Created by bganguly on 12/10/16.
 */
"use strict";

/**
 * copy over typical obhect hierarchy
  * @type {{ID: number, Label: string, childNodes: *[]}}
 */
var objToTraverse = {
    "ID":1,
    "Label":"A",
    "childNodes":[
        {
            "ID":2,
            "Label":"B",
            "childNodes":[
                {
                    "ID":5,
                    "Label":"E"
                },
                {
                    "ID":6,
                    "Label":"F"
                },
                {
                    "ID":7,
                    "Label":"G"
                }
            ]
        },
        {
            "ID":3,
            "Label":"C",
            "childNodes":null
        },
        {
            "ID":4,
            "Label":"D",
            "childNodes":[
                {
                    "ID":8,
                    "Label":"H"
                },
                {
                    "ID":9,
                    "Label":"I"
                }
            ]
        }
    ]
};

/**
 *  Given an id, print the corresponding label
 * @param obj
 * @param Id
 */
function getLabelById(obj, Id) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                getLabelById(obj[property],Id);
            } else if (property === 'ID' && obj[property] === Id){
                console.log('Label :'  + obj['Label']);
            }
        }
    }
}

/**
 * Typical call
 */
getLabelById(objToTraverse,9);
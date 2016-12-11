**Pre employment Technical Screening - Engineering**

Candidate Name:

Date sent to Candidate:

Return to Adaptive Insights by:

**Instructions**

Please write all answers in JavaScript. Algorithms should be entirely your own work, completed without help from anyone else or the use of reference materials other than standard JavaScript documentation. Include examples of reasonable test input and the corresponding result that your program would return.

Answers should be submitted before 5pm on the return by date above.  The test can be returned via email or fax.

**Problem 1**

Given the following tree, create a JSON representation of the structure. Each node has an id (an integer, required), a label (a string, optional), and an array of child nodes (optional).

 ![Image of json]
 (https://github.com/bganguly/adaptive-insight-exercise/blob/master/src/jsonStructure.png)


**Problem 2**

Write a JavaScript function that uses AJAX to retrieve the JSON string in Problem 1 and converts it to a JavaScript object. You can stub out or mock an imaginary server, the interest here is to see the response handler and AJAX code. Feel free to use vanilla JavaScript or your favorite framework for the AJAX function.

**Problem 3**

Using the object you created in Problem 2, write a recursive JavaScript function that, given a node id, returns the label string of the node with the matching id.

**Problem 4**

Create an HTML page with a form containing the following fields:

| Field | Element type | Required? | Minimum | Maximum | Data type |
| --- | --- | --- | --- | --- | --- |
| Name | Input | Yes | 1 | 100 | Alpha |
| Address 1 | Input | Yes | 1 | 100 | Alphanumeric |
| Address 2 | Input | No | 0 | 100 | Alphanumeric |
| City | Input | Yes | 1 | 50 | Alphanumeric |
| State | Select | Yes | 2 | 2 | Alpha |
| Zip Code | Input | Yes | 5 | 5 | Numeric |

Add OK and Cancel buttons to the bottom of the form. Clicking on the OK button validates the field values and displays any errors. Clicking on the Cancel button resets the form. Use CSS to nicely style the labels and layout, use JavaScript to handle the OK and Cancel button click events. When validating each field value, highlight all fields in error and display appropriate error messages in any way you wish.

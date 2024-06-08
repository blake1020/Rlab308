Introduction
This graded assignment will have you create two different data processing algorithms. The first stage will have you transform raw data into a formatted array of objects according to a specification. The second stage will have you use the output from the first stage to provide a textual report on the data.
Objectives
Use arrays to store ordered lists of data.
Use objects to store keyed lists of data.
Use conditional logic to process data.
Use loops to handle repetitive tasks.
Transform data according to specifications.
Submission
Submit your completed lab using the Start Assignment button on the assignment page in Canvas.
Your submission should include:
A GitHub link to your completed project repository.
Part 3: Transforming Data
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
For instance, the results of the example data above being passed through this step are as follows:
[["ID", "Name", "Occupation", "Age"],  ["42", "Bruce", "Knight", "41"],  ["57", "Bob", "Fry Cook", "19"],  ["63", "Blaine", "Quiz Master", "58"],  ["98", "Bill", "Doctor’s Assistant", "26"]]
becomes
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.
Part 4: Sorting and Manipulating Data
It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:

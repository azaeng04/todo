
# Defects

Based on the requirements specified the following defects have been logged against the Stitch API and application

|Test Description| Expected Result | Actual Result | Defect # |
|--|--|--|--|
|GIVEN an empty todo item WHEN  adding a todo THEN  an error message should be returned| A message indicating: "Todo payload is invalid. The following properties are allowed: id, todo and status" | An empty array | [1](#defect_1) |
|GIVEN a todo item only with the ID property WHEN  adding a todo THEN  an error message should be returned| A message indicating: "Todo payload is invalid. The following properties are allowed: id, todo and status" | `[{ id: 1 }]` | [1](#defect_1) |
|GIVEN a todo item only with the status property WHEN  adding a todo THEN  an error message should be returned| A message indicating: "Todo payload is invalid. The following properties are allowed: id, todo and status" | `[{"status": "inprogress"}]` | [1](#defect_1) |
|GIVEN a todo item only with the todo property WHEN  adding a todo THEN  an error message should be returned| A message indicating: "Todo payload is invalid. The following properties are allowed: id, todo and status" | `[{"todo": "My fake Todo"}]` | [1](#defect_1) |
|GIVEN a todo item with more than 100 characters WHEN  adding a todo THEN  an error message should be returned| A message indicating: "Todo item description length exceeds the maximum amount of 100 characters allowed" | `[{"id": 1, "status": "inprogress", "todo": "a"}]` a is repeated 101 times | [2](#defect_2) |
|GIVEN no todos were added WHEN  updating a todo THEN  an error message should be returned| A message indicating: "Todo item with ID: 1 could not be found" | `TypeError: Cannot set properties of undefined (setting 'todo')`| [3](#defect_3) |
|GIVEN a todo in the list WHEN  updating a todo with more than 100 characters THEN an error message should be returned| A message indicating: "Todo item description length exceeds the maximum amount of 100 characters allowed" | `[{"id": 1, "status": "inprogress", "todo": "a"}]` a is repeated 101 times | [4](#defect_4)|
|GIVEN an empty todo list WHEN  deleting a todo THEN  an error message should display| A message indicating: "Todo item with ID: 1 could not be found" | An empty array `[]` is returned | [5](#defect_5)|
|GIVEN the user visits the todo app WHEN the app attempts to retrieve the list of todos AND the request to retrieve the todos fails THEN an appropriate error message should be displayed| An appropriate error message is shown: "Server error occurred. Please try again later" | Fatal system error thrown | [6](#defect_6)|
|GIVEN a todo item in the list WHEN clicking the tick button AND the request to strike through the todo fails THEN an appropriate error message should be displayed| An appropriate error message is shown: "Server error occurred. Please try again later" | Fatal system error thrown | [6](#defect_6)|
GIVEN the user visits the todo app WHEN the app attempts to retrieve the list of todos AND the request to retrieve the todos fails THEN an appropriate error message should be displayed| An appropriate error message is shown: "Server error occurred. Please try again later" | Fatal system error thrown | [6](#defect_6)|
GIVEN a todo item in the list WHEN clicking the tick button AND the request to strike through the todo fails THEN an appropriate error message should be displayed| An appropriate error message is shown: "Server error occurred. Please try again later" | Fatal system error thrown | [6](#defect_6)|

|Defect #|Defect Description| Affected System | Severity |  Feature |
|--|--|--|--|--|
|<div id="defect_1" /> 1| Adding a todo without the necessary properties does not show a valid error message | Stitch API | High | Add Todo |
|<div id="defect_2" /> 2| Adding a todo with more than 100 characters | Stitch API | Medium | Add Todo |
|<div id="defect_3" /> 3| Updating a todo that does not exist | Stitch API |  Very High | Update Todo |
|<div id="defect_4" /> 4| Updating a todo with more than 100 characters | Stitch API | Medium | Update Todo |
|<div id="defect_5" /> 5| Deleting a todo that does not exist | Stitch API | Medium | Delete Todo |
|<div id="defect_6" /> 6| Adding, updating or deleting a todo or retrieving todos and a server error occurs | Stitch APP | High | Add, Update or Delete Todo |
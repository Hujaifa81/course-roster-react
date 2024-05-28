Project features:
1. Credit Limit Validation:Implementing a credit limit validation feature that keeps track of the total credits selected by the user. When a user selects a course, the system calculates the total credits and ensures that it does not exceed the maximum limit of 20 credits. If the user exceeds this limit, a toast notification is displayed, informing them that they have selected too many courses.
  
2. Course Duplication Prevention:Adding a feature that checks if a course has already been selected to prevent students from accidentally selecting the same course multiple times. If the user tries to select a course that is already in their roster, a toast notification is displayed, indicating that the course has already been added.
  
3. Roster Summary:Creating a section where the user can view their selected courses, the total number of credits they have taken, and the total price based on the selected courses. Including a running count of the credits as courses are added. This section provides a clear overview of the user's course selection, making it easy for them to track their progress and remaining credits.

Discussion of how I managed the state:

creditHour State (useState(0)):I initialized the creditHour state to 0. This state variable keeps track of the total credit hours selected by the user.

remainingCredit State (useState(20)):I initialized the remainingCredit state to 20. This state variable represents the remaining credits that the user can select. It is decremented as the user selects courses, and I checked its value to ensure the user does not exceed the maximum limit of 20 credits.

showCourses State (useState([])):I initialized the showCourses state as an empty array. This state keeps track of the courses that the user has selected. I added and removed course names from this array as the user interacts with the cards.

totalPrice State (useState(0)):I initialized the totalPrice state to 0. This state variable is used to calculate and display the total price of the selected courses.

handleSelect Function:Inside the handleSelect function, I performed various state updates based on the user's actions:
I checked if the selected course is already in the showCourses array to prevent duplication.
If the course is not already selected, I updated showCourses by adding the course name to it.
I updated creditHour by adding the credit hours of the selected course.
I updated remainingCredit by subtracting the credit hours of the selected course from the remaining credits, and I displayed a toast notification if the user exceeds the 20 credit limit.
I updated totalPrice by adding the price of the selected course.
If the course is already selected, I displayed a toast notification to inform the user that it's already in their selection.

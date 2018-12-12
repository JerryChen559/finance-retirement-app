// ** test end points in postman **
// 0. run Nodeman
// 1. import file inside postman_collection.
// 2. Find the file in collections.
// 3. click send button to see the data
// 4. click on the Tests tab
// 5. type out the tests you want to run and click send button again.
// 6. Test Results are displayed at the bottom.

//** test for GET - All Cards by User Id ** ------------------------------
// const response = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("All card objects from user with ID of 20 in response", function() {
//   pm.expect(response.length).to.eql(user20);
// });

// ** test for GET - Student by Id ** ------------------------------
// const response = pm.response.json();
// const student9 = {
//   id: 9,
//   student: "Patsy Daunay",
//   email_address: "pdaunay8@about.com",
//   phone: "(806) 2654555",
//   current_grade: "A"
// };

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("Correct object in response for ID 9", function() {
//   pm.expect(response).to.eql(student9);
// });

// ** test for GET - Student by Email ** ------------------------------
// let response = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("Gilbert's student object in response", function() {
//   pm.expect(response.email).to.eql("gdee@clickbank.net");
// });

// ** test for GET - Students by Name ** ------------------------------
// const res = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("Abey Laynard student object in response", function() {
//   const studentExists = response.some(
//     student => student.student === "Abey Laynard"
//   );
//   pm.expect(studentExists).to.be.true;
// });

// ** test for GET - Students by Grade ** ------------------------------
// const res = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test('Correct students returned for "C" grade', function() {
//   const correctGrades = response.every(
//     student => student.current_grade === "C"
//   );
//   pm.expect(correctGrades).to.be.true;
// });

// ** test for GET - Students by Phone ** ------------------------------
// const res = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("All objects contain '608'", function() {
//   const checkPhoneNumbers = response.every(student =>
//     student.phone.includes("608")
//   );
//   pm.expect(checkPhoneNumbers).to.be.true;
// });

// ** test for PUT - Update Grade ** ------------------------------
// const res = pm.response.json();

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("Returns student with correct Id", function() {
//   pm.expect(response.id).to.eql(15);
// });

// pm.test("Correctly updates grade to A-", function() {
//   pm.expect(response.current_grade).to.eql("A-");
// });

// ** test for POST - Add Student ** ------------------------------
// const res = pm.response.json();

// const schema = {
//   title: "Student",
//   type: "object",
//   properties: {
//     id: {
//       type: "integer"
//     },
//     student: {
//       type: "string"
//     },
//     email_address: {
//       type: "string"
//     },
//     phone: {
//       type: "string"
//     },
//     current_grade: {
//       type: "string"
//     }
//   },
//   required: ["id", "student", "email_address", "phone", "current_grade"]
// };

// pm.test("Status code is 200", function() {
//   pm.response.to.have.status(200);
// });

// pm.test("Student was created", function() {
//   pm.expect(response.id).to.exist;
// });

// pm.test("Student should match schema", function() {
//   pm.expect(tv4.validate(response, schema)).to.be.true;
// });

// pm.test("Student has correct information", function() {
//   pm.expect(res.student).to.eql("Tim Allen");
//   pm.expect(res.email_address).to.eql("tim@homeimprovement.com");
//   pm.expect(res.phone).to.eql("(408) 8674530");
// });

// ** test for Delete - Remove Card ** ------------------------------
// const res = pm.response.json();

pm.test("Status code is 200", function() {
  pm.response.to.have.status(200);
});

pm.test("Card w/ ID 8 removed", function() {
  pm.expect(res.id).to.eql(8);
});

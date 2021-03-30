function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    let distance = 5 - (grades[i] % 5);
    if (distance < 3 && grades[i] >= 38) {
      grades[i] = (Math.floor(grades[i] / 5) + 1) * 5;
    }
  }
  return grades;
}

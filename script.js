
const studentForm = document.getElementById("studentForm");
const studentRecords = document.getElementById("studentRecords");

let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    studentRecords.innerHTML = "";

    students.forEach(function(student) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const matricCell = document.createElement("td");
        matricCell.textContent = student.matricNumber;

        const programmeCell = document.createElement("td");
        programmeCell.textContent = student.programme;

        row.appendChild(nameCell);
        row.appendChild(matricCell);
        row.appendChild(programmeCell);

        studentRecords.appendChild(row);
    });
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const matricNumber = document.getElementById("matricNumber").value.trim();
    const programme = document.getElementById("programme").value.trim();

    if (name === "" || matricNumber === "" || programme === "") {
        alert("Please fill in all fields.");
        return;
    }

    const student = {
        name: name,
        matricNumber: matricNumber,
        programme: programme
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    studentForm.reset();

    alert("Student registered successfully.");
});

displayStudents();

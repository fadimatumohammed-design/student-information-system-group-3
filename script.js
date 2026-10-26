
const studentForm = document.getElementById("studentForm");
const studentRecords = document.getElementById("studentRecords");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const matricNumber = document.getElementById("matricNumber").value.trim();
    const programme = document.getElementById("programme").value.trim();

    if (name === "" || matricNumber === "" || programme === "") {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const matricCell = document.createElement("td");
    matricCell.textContent = matricNumber;

    const programmeCell = document.createElement("td");
    programmeCell.textContent = programme;

    row.appendChild(nameCell);
    row.appendChild(matricCell);
    row.appendChild(programmeCell);

    studentRecords.appendChild(row);

    studentForm.reset();
    alert("Student registered successfully.");
});




function addStudent(){
    var student = {};
    student.name = $("#txbName").val();
    student.birthDate = $("#txbBirthDay").val();

    $.ajax({
        url: "http://localhost:3000/api/v1/students",
        method: "POST",
        data: JSON.stringify(student),
        contentType: "application/json",
        dataType: "json"
    }).done(function (response) {
        alert("Add new student successfully");
        window.location.href = "index.html";
    }).fail(function (response) {
        alert("Some thing has not working");
    })
}



$(document).ready(function () {
    loadData();
})

function loadData(){
    $("#txbID").val(sessionStorage.getItem('studentID'));
    $("#txbName").val(sessionStorage.getItem('studentName'));
    $("#txbBirthDay").val(sessionStorage.getItem('studentBirthDate'));
}

function addStudent(){
    var method = "POST";
    var url = "http://localhost:3000/api/v1/students";
    
    var msg = "Add new student successfully";

    var student = {};
    
    if($("#txbID").val() != ''){
        method = "PUT";
        url = url + "/" + $("#txbID").val();
        msg = "Edit student successfully";
        student._id = $("#txbID").val();
    }

    student.name = $("#txbName").val();
    student.birthDate = $("#txbBirthDay").val();
    // debugger;
    $.ajax({
        url: url,
        method: method,
        data: JSON.stringify(student),
        contentType: "application/json",
        dataType: "json"
    }).done(function (response) {
        alert(msg);
        window.location.href = "index.html";
    }).fail(function (response) {
        alert("Some thing has not working");
        window.location.href = "index.html";
    })
}



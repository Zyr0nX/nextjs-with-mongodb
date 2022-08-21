$(document).ready(function () {
    loadData();
})

function loadData() {
    sessionStorage.setItem('studentID', "");
    sessionStorage.setItem('studentName', "");
    sessionStorage.setItem('studentBirthDate', "");

    var url = "http://localhost:3000/api/v1/students";
    if(sessionStorage.getItem('isFinding') != null && sessionStorage.getItem('isFinding') != ""){
        url = url + "/name/" + sessionStorage.getItem('isFinding');
    }

    $.ajax({
        url: url,
        method: "GET",
        // data: "",
        // contentType: "application/json",
        // dataType: ""
    }).done(function (response) {
        $('.grid-data').empty();
        $.each(response, function (index, item) {
            var trHTML = $(`<tr>
                                <th scope="row">${index + 1}</th>
                                <td>${item._id}</td>
                                <td>${item.name}</td>
                                <td>${item.birthDate}</td>
                                <td>
                                    <a onclick = "EditStudent(this)">Edit</a>
                                    <a onclick = "DeleteStudent(this)">Delete</a>
                                </td>
                            </tr>`)
            $('.grid-data').append(trHTML);
            sessionStorage.setItem('isFinding', "")
        })
    }).fail(function (response) {
        alert("Some errors caused when getting data");
    })
}

function EditStudent(item){
    sessionStorage.setItem('studentID', $(item).parent().parent().find("td:nth-child(2)").text());
    sessionStorage.setItem('studentName', $(item).parent().parent().find("td:nth-child(3)").text());
    sessionStorage.setItem('studentBirthDate', $(item).parent().parent().find("td:nth-child(4)").text());
    window.location.href = "update.html";
}

function DeleteStudent(item){
    var id = $(item).parent().parent().find("td:nth-child(2)").text();
    if (confirm("Want to delete?")) {
        $.ajax({
            url: "http://localhost:3000/api/v1/students/" + id,
            method: "DELETE"
        }).done(function () {
            $(item).parent().parent().remove();
        }).fail(function () {
            alert("Some errors caused when deleting");
        })
      }
}

function FindStudent(){
    sessionStorage.setItem('isFinding', $(".me-2").val().trim());
}




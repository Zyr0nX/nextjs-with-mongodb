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
        alert("error");
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
    $.ajax({
        url: "http://localhost:3000/api/v1/students/" + id,
        method: "DELETE"
    }).done(function () {
        $(item).parent().parent().remove();
    }).fail(function () {
        alert("error");
    })
}

function FindStudent(){
    sessionStorage.setItem('isFinding', $(".me-2").val().trim());
}


// function loadData(){
//     var request = new XMLHttpRequest();
//     var params = "action=something";
//     request.open('POST', 'http://localhost:3000/api/v1/students', true);
//     request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     request.setRequestHeader("Content-length", params.length);
//     request.setRequestHeader("Connection", "close");
//     request.send(params);
// }

// function loadData(){
//     const userAction = async () => {
//         const response = await fetch('http://localhost:3000/api/v1/students');
//         const myJson = await response.json(); //extract JSON from the http response
//         // do something with myJson
//       }
// }

// function loadData()  {
//     // Call fetch(url) with default options.
//     // It returns a Promise object:
//     var aPromise = fetch('http://localhost:3000/api/v1/students');
  
//     // Work with Promise object:
//     aPromise
//       .then(function(response) {
//           console.log("OK! Server returns a response object:");
//           console.log(response);
//           if(!response.ok) {
//              throw new Error("HTTP error, status = " + response.status);
//           }
//           // Get JSON Promise from response object:
//           var myJSON_promise = response.json();
  
//           // Work with Promise object:
//           myJSON_promise.then(function(myJSON)  {
//             console.log("OK! JSON:");
//             console.log(myJSON);
//           })
//       })
//       .catch(function(error)  {
//           console.log("Noooooo! Something error:");
//           console.log(error);
//       });
//   }




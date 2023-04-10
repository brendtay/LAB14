function reloadUsers() {

    // Remove/clean all rows in the table
    $("#usersTable > tbody").empty();
    
    $.get("/api/users", function (data) {
    for (i = 0; i < data.length; i++){  

        $("#usersTable > tbody").append("<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].email + "</td></tr>");
    }
    });
}

$(document).ready(function () {

    // Every time you open the webpage, 
    // the browser will retrieve the users from
    // the backend and update the table

    $("#btnClear").click(function () {
        $("#userId").val("");
        $("#userName").val("");
        $("#userEmail").val("");
    })

    $("form").submit(function () {

        const data = {
            id:  $("#userId").val(),
            name: $("#userName").val(),
            email:  $("#userEmail").val()
        }
        

        $.post("/api/users", data, function(data){
           console.log("done"); 
           reloadUsers();
        });
    
        console.log(data);
     
        return false; // Don't remove this line.
    });
    reloadUsers();
});
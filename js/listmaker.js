$(function () {
    var currentCount = 1;

    $("form").submit(function (e) {
        const firstname = $("#firstname").val();
        const lastname = $("#lastname").val();
        const age = $("#age").val();
        const gender = $("#gender").val();
        const note = $("#note").val();

        const selectId = $("#selectId");

        if (firstname === "" || lastname === "" || age === "") {
            $("#required").show("slow");
        } else {
            $("#required").hide("slow");
            selectId.prepend("<option class=" + currentCount + ">" + currentCount + "</option>");
            $("tbody").prepend("<tr id=" + currentCount + "><td>" + currentCount + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + age + "</td><td>" + gender + "</td><td>" + note + "</td></tr>");
            console.log(currentCount);
            currentCount++;
        }
        e.preventDefault(); 
    });

    $("#removeButton").click(function () {
        const idNumber = $("#selectId").val();
        $("tbody").find("tr" + "#" + idNumber).remove();
        $("#selectId").find("option" + "." + idNumber).remove();
        currentCount--;
    });

    $("#showButton").click(function () {
        const idNumber = $("#selectId").val();
        const info = $("tbody").find("tr" + "#" + idNumber).text();
        alert(info);
    });
});
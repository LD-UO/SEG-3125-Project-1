$('#appointment-info').on('submit', function (ev) {
    document.getElementById("nameModal").innerHTML = document.getElementById("name").value;
    document.getElementById("serviceModal").innerHTML = document.getElementById("service").value;
    document.getElementById("phoneModal").innerHTML = document.getElementById("phone").value;
    document.getElementById("expertModal").innerHTML = document.getElementById("expert").value;
    document.getElementById("patientsModal").innerHTML = document.getElementById("patient").value;
    document.getElementById("emailModal").innerHTML = document.getElementById("email").value;
    document.getElementById("dateTimeModal").innerHTML = document.getElementById("datetime").value;

    $('#myModal').modal('show');
    ev.preventDefault();
});
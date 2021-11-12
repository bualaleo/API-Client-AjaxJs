//POKEMON

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/",
    success: function (result) {
        console.log(result.results);
        var listTeserah = "";
        $.each(result.results, function (key, val) {
            listTeserah += `<tr>
                                <td>${key + 1}</td>
                                <td>${val.name}</td>
                                <td><button class="button btn-primary" onclick="launchModal('${val.url}')" data-toggle="modal" data-target="#exampleModal">Klik</button></td>
                            </tr>`;
        });
        $('#tableBebas').html(listTeserah);
    }
})

function launchModal(url) {
    console.log(url);
    listSerah = "";
    listAbil = "";
    listType = "";
    listSt = "";
    $.ajax({
        url: url,
        success: function (result) {
            let i = result.abilities;
            for (i = 0; i < result.abilities.length; i++) {
                listAbil += `<p>${result.abilities[i].ability.name}</p>`;
            }

            for (let i = 0; i < result.types.length; i++) {
                if (result.types[i].type.name == 'grass') {
                    listType += `
                    <span class="badge badge-success">Grass</span>`;
                }
                if (result.types[i].type.name == 'poison') {
                    listType += `
                    <span class="badge badge-dark">Poison</span>`;
                }
                if (result.types[i].type.name == 'fire') {
                    listType += `
                    <span class="badge badge-danger">Fire</span>`;
                }
                if (result.types[i].type.name == 'flying') {
                    listType += `
                    <span class="badge badge-warning">Flying</span>`;
                }
                if (result.types[i].type.name == 'water') {
                    listType += `
                    <span class="badge badge-primary">Water</span>`;
                }
                if (result.types[i].type.name == 'bug') {
                    listType += `
                    <span class="badge badge-secondary">Bug</span>`;
                }
                if (result.types[i].type.name == 'normal') {
                    listType += `
                    <span class="badge badge-light">Normal</span>`;
                }
            }

            for (a = 0; a < result.stats.length; a++) {
                listSt += `<p>${result.stats[a].stat.name}: ${result.stats[a].base_stat}</p>`;
            }

            listSerah += `  <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src='${result.sprites.other.dream_world.front_default}' class="mx-auto d-block">
                                        <table class="table">
                                            <tr>
                                                <td class="font-weight-bold" style="font-family:'Courier New'">Type</td>
                                                <td>${listType}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-md-4 ml-auto">
                                        <p style="text-align:center; font-family:'Courier New' " class="font-weight-bold">${result.name}</p>
                                        <table class="table table-bordered">
                                            <tr>
                                                <td class="font-weight-bold" style="font-family:'Courier New'">Ability</td>
                                                <td>${listAbil}</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold" style="font-family:'Courier New'">Stats</td>
                                                <td>${listSt}</td>
                                             </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                         `;
            $('.modal-body').html(listSerah);
        }
    })
}

//API CLIENT

$.ajax({
    url: "https://localhost:44335/API/Employees",
    success: function (result) {
        console.log(result);
    }
});

//dataTable
$(document).ready(function () {
    $('#tabelSW').DataTable({
        'ajax': {
            'url': "/Employees/GetAll",
            'dataType': 'json',
            'dataSrc': '',  
        },
        /*dom: 'Bfrtip',*/
        buttons: [{
            extend: 'excelHtml5',
            name: 'excel',
            title: 'List Employee',
            sheetName: 'Employee',
            text: '',
            className: 'buttonHide fa fa download btn-default',
            fileName: 'Data',
            autoFilter: true,
            exportOptions: {
                columns: [0, 1, 2, 3, 4, 5]
            }
        }],
        'columns': [
            {
                "data": "nik"
                
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    return row['firstName'] + ' ' + row['lastName'];
                }
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    if (row['phone'].search(0) == 0) {
                        return row['phone'].replace('0', '+62');
                    } else {
                        return row['phone'];
                    }
                }
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    var angka = row['salary'];
                    var reverse = angka.toString().split('').reverse().join(''),
                        ribuan = reverse.match(/\d{1,3}/g);
                    ribuan = ribuan.join('.').split('').reverse().join('');
                    return 'Rp. ' + ribuan;
                }
            },
            {
                "data": "email"

            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    if (row['gender'] == 0) {
                        return ("Male");
                    }
                    else {
                        return ("Female");
                    }
                }
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    var button = '<td> <button onclick="getByNIK(' + row['nik'] + ');" class="btn btn-primary btn-sm text-center" data-toggle="modal" data-target="#mModal"><i class="fa fa-edit"></i> </button> \ <button onclick="Delete(' + row['nik'] + ');" class="btn btn-danger btn-sm text-center" ><i class="fa fa-trash"></i></button></td>';
                    return button;
                }
            }
        ]
    });
    $("#EmployeeForm").validate({
        rules: {
            "nik": {
                required: true
            },
            "firstName": {
                required: true
            },
            "lastName": {
                required: true
            },
            "birthDate": {
                required: true
            },
            "phone": {
                required: true
            },
            "salary": {
                required: true
            },
            "email": {
                required: true,
                email: true
            },
            /*"gender": {
                required: true,
            },*/
            "degree": {
                required: true
            },
            "GPA": {
                required: true
            },
            "university": {
                required: true
            },
            "role": {
                required: true
            }
        },
        errorPlacement: function (error, element) { },
        highlight: function (element) {
            $(element).closest('.form-control').addClass('is-invalid');
        },
        unhighlight: function (element) {
            $(element).closest('.form-control').removeClass('is-invalid');
            $(element).closest('.form-control').addClass('is-valid ');
        }
    });
    $('#btnAdd').click(function (e) {
        e.preventDefault();
        if ($("#EmployeeForm").valid() == true) {
            Add();
        }
    });
});

function eExcel() {
    var dataEmployee = $('#tabelSW').DataTable();
    dataEmployee.buttons('excel:name').trigger();
}

//INSERT
function Add() {

    /*var res = validate();
    if (res == false) {
        return false;
    }*/

    var nik = $("#NIK").val();
    var obj = new Object();
    obj.NIK = $("#NIK").val();
    obj.FirstName = $("#FirstName").val();
    obj.LastName = $("#LastName").val();
    obj.Phone = $("#Phone").val();
    obj.BirthDate = $("#BirthDate").val();
    obj.Salary = $("#Salary").val();
    obj.Email = $("#Email").val();
    obj.Gender = $("#Gender").val();
    obj.Password = $("#Password").val();
    obj.Degree = $("#Degree").val();
    obj.GPA = $("#GPA").val();
    obj.IdUniversity = $("#IdUniversitas").val();
    obj.IdRole = $("#IdRole").val();

    console.log(obj);

    $.ajax({
        url: "/Employees/Registers",
        type: "POST",
        data: { id: nik, entity: obj }
    }).done((result) => {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        $('#tabelSW').DataTable().ajax.reload();
/*        $('#mModal').modal('hide');*/
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    })
}

//getNIK
function getByNIK(NIK) {
    $.ajax({
        url: "/Employees/Get/" + NIK,
        success: function (result) {
            console.log(result);

            $('#NIK').val(result.nik);
            $('#FirstName').val(result.firstName);
            $('#LastName').val(result.lastName);
            $('#Phone').val(result.phone);
            var tanggal = result.birthDate.substr(0,10);
            $('#BirthDate').val(tanggal);
            $('#Salary').val(result.salary);
            $('#Email').val(result.email);
            if (result.gender === "Male") {
                $('#Gender').val(0);
            } else {
                $('#Gender').val(1);
            };
            $('#Password').val(result.password);
            $('#Degree').val(result.degree);
            $('#GPA').val(result.gpa);
            $('#IdUniversitas').val(result.idUniversity);
            $('#IdRole').val(result.idRole);

            $('#btnUpdate').show();
            $('#btnAdd').hide();
            
            $('#form-2').hide();
            $('#form-3').hide();
            $('#form-pass').hide();
            /*$('#mModal').modal('show');*/
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

//UPDATE
function Update() {

    /*var res = validate();
    if (res == false) {
        return false;
    }*/
    var nik = $("#NIK").val();

    var obj = new Object();
    obj.NIK = $("#NIK").val();
    obj.FirstName = $("#FirstName").val();
    obj.LastName = $("#LastName").val();
    obj.Phone = $("#Phone").val();
    obj.BirthDate = $("#BirthDate").val();
    obj.Salary = $("#Salary").val();
    obj.Email = $("#Email").val();
    obj.Gender = $("#Gender").val();

    console.log("===========");
    console.log(obj);

    $.ajax({
        url: "/Employees/Put/",
        type: "PUT",
        data: { id: nik, entity: obj }
    }).done((result) => {
        console.log(result);
        $('#NIK').val("");
        $('#FirstName').val("");
        $('#LastName').val("");
        $('#Phone').val("");
        $('#BirthDate').val("");
        $('#Salary').val("");
        $('#Email').val("");
        $('#Gender').val("");
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        $('#tabelSW').DataTable().ajax.reload();
/*        $('#mModal').modal('hide');*/
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    })
}

//DELETE
function Delete(NIK) {
    var ans = confirm("Are you sure you want to delete this?");
    if (ans) {
        $.ajax({
            url: "/Employees/Delete/" + NIK,
            type: "DELETE",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
        }).done((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Data Telah Dihapus',
                showConfirmButton: false,
                timer: 1500
            })
            $('#tabelSW').DataTable().ajax.reload();
        }).fail((error) => {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        })
    }
}

//PASSWORD
$(function () {
    var $password = $(".form-control[type='password']");
    var $passwordAlert = $(".password-alert");
    var $requirements = $(".requirements");
    var leng, bigLetter, num, specialChar;
    var $leng = $(".leng");
    var $bigLetter = $(".big-letter");
    var $num = $(".num");
    var $specialChar = $(".special-char");
    var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";

    $requirements.addClass("wrong");
    $password.on("focus", function () { $passwordAlert.show(); });

    $password.on("input blur", function (e) {
        var el = $(this);
        var val = el.val();
        $passwordAlert.show();

        if (val.length < 8) {
            leng = false;
        }
        else if (val.length > 7) {
            leng = true;
        }

        if (val.toLowerCase() == val) {
            bigLetter = false;
        }
        else { bigLetter = true; }

        num = false;
        for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < numbers.length; j++) {
                if (val[i] == numbers[j]) {
                    num = true;
                }
            }
        }

        specialChar = false;
        for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < specialChars.length; j++) {
                if (val[i] == specialChars[j]) {
                    specialChar = true;
                }
            }
        }

        console.log(leng, bigLetter, num, specialChar);

        if (leng == true && bigLetter == true && num == true && specialChar == true) {
            $(this).addClass("valid").removeClass("invalid");
            $requirements.removeClass("wrong").addClass("good");
            $passwordAlert.removeClass("alert-warning").addClass("alert-success");
        }
        else {
            $(this).addClass("invalid").removeClass("valid");
            $passwordAlert.removeClass("alert-success").addClass("alert-warning");

            if (leng == false) { $leng.addClass("wrong").removeClass("good"); }
            else { $leng.addClass("good").removeClass("wrong"); }

            if (bigLetter == false) { $bigLetter.addClass("wrong").removeClass("good"); }
            else { $bigLetter.addClass("good").removeClass("wrong"); }

            if (num == false) { $num.addClass("wrong").removeClass("good"); }
            else { $num.addClass("good").removeClass("wrong"); }

            if (specialChar == false) { $specialChar.addClass("wrong").removeClass("good"); }
            else { $specialChar.addClass("good").removeClass("wrong"); }
        }


        if (e.type == "blur") {
            $passwordAlert.hide();
        }
    });
});

function clearForm() {
    $('#NIK').val("");
    $('#FirstName').val("");
    $('#LastName').val("");
    $('#Phone').val("");
    $('#BirthDate').val("");
    $('#Salary').val("");
    $('#Email').val("");
    $('#Gender').val("");
    $('#Password').val("");
    $('#Degree').val("");
    $('#GPA').val("");
    $('#IdUniversitas').val("");
    $('#IdRole').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
}

//GENDER CHART
$(document).ready(function () {
    var jumlah = [];
    var label = [];
    $.ajax({
        url: "https://localhost:44335/API/Employees/Gender/",
        success: function (result) {
            console.log(result.result);
            var data = result.result.length;
            for (var i = 0; i < data; i++) {
                jumlah.push(result.result[i].value);
                if (result.result[i].gender === 0) {
                    label.push("Male");
                }
                else {
                    label.push("Female");
                }
            }
        }
    })
    var options = {
        chart: {
            height : 200,
            type: 'donut'
        },
        series: jumlah,
        labels: label,
        theme: {
            palette: 'palette8'
        }
    }
    var chart = new ApexCharts(document.querySelector("#gChart"), options);
    chart.render();
});

//ROLE CHART
$(document).ready(function () {
    var jlh = [];
    var lbl = [];
    $.ajax({
        url: "https://localhost:44335/API/Employees/Rolee/",
        success: function (result) {
            console.log(result.result);
            var data = result.result.length;
            for (var i = 0; i < data; i++) {
                jlh.push(result.result[i].value);
                lbl.push(result.result[i].namaRole);
            }
        }
    })
    var options = {
        chart: {
            height: 200,
            type: 'pie'
        },
        series: jlh,
        labels: lbl,
        theme: {
            palette: 'palette8'
        }

    }
    var chart = new ApexCharts(document.querySelector("#rChart"), options);
    chart.render();
});

//SALARY CHART
$(document).ready(function () {
    var jlhh = [];
    var labil = [];
    $.ajax({
        url: "https://localhost:44335/API/Employees/Salary/",
        success: function (result) {
            console.log(result.result);
            var data = result.result.length;
            for (var i = 0; i < data; i++) {
                jlhh.push(result.result[i].value);
                labil.push(result.result[i].salary);
            }
        }
    })
    
    var options = {
        chart: {
            height: 200,
            type: 'bar',
            stacked : true
        },

        series: [{
            name: "value",
            data: jlhh
        }],

        dataLabels: {
            enabled: false
        },

        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },

        xaxis: {
            name: "salary",
            categories: labil
        },

        theme: {
            palette: 'palette8'
        }
    }    
    var chart = new ApexCharts(document.querySelector("#sChart"), options);
    chart.render();
});

/*function validate() {

    var isValid = true;
    if ($('#NIK').val().trim() == "") {
        $('#NIK').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#NIK').css('border-color', 'green');
    }

    if ($('#FirstName').val().trim() == "") {
        $('#FirstName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#FirstName').css('border-color', 'green');
    }

    if ($('#LastName').val().trim() == "") {
        $('#LastName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#LastName').css('border-color', 'green');
    }

    if ($('#Phone').val().trim() == "") {
        $('#Phone').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Phone').css('border-color', 'green');
    }

    if ($('#BirthDate').val().trim() == "") {
        $('#BirthDate').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Birthdate').css('border-color', 'green');
    }

    if ($('#Salary').val().trim() == "") {
        $('#Salary').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Salary').css('border-color', 'green');
    }

    if ($('#Email').val().trim() == "") {
        $('#Email').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Email').css('border-color', 'green');
    }

    if ($('#Degree').val().trim() == "") {
        $('#Degree').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Degree').css('border-color', 'green');
    }

    if ($('#GPA').val().trim() == "") {
        $('#GPA').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#GPA').css('border-color', 'green');
    }

    return isValid;
}*/
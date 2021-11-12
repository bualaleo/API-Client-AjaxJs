/*$(document).ready(function () {
    $(".btn-danger").click(function () {
        $(this).css("background-color", "green");
    });
});

document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction() {
    alert("https://www.w3schools.com/bootstrap4/default.asp");
}

let ubah = document.getElementById("a");
ubah.addEventListener("mouseleave", function () {
    ubah.style.backgroundColor = "red"
});
ubah.addEventListener("mouseenter", function () {
    ubah.style.backgroundColor = "orange"
});

$(document).ready(function () {
    $("button#a").click(function () {
        $("#a").css({ "font-size": "150%" });
    });
});

$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#myCarousel").carousel("next");
    });
});


const animals = [
    { name: 'Nemo', species: 'fish', class: { name: 'invertebrata' } },
    { name: 'Simba', species: 'cat', class: { name: 'mamalia' } },
    { name: 'Dory', species: 'fish', class: { name: 'invertebrata' } },
    { name: 'Panther', species: 'cat', class: { name: 'mamalia' } },
    { name: 'Budi', species: 'cat', class: { name: 'mamalia' } }
]

const onlyCat = [];
animals.forEach(aFungsi);

function aFungsi(item) {
    //tugas1
    if (item.species == "fish") {
        item.class.name = "non-mamalia";
    }
    //tugas2
    else if (item.species == "cat") {
        onlyCat.push(item);
    }
}
console.log(animals);
console.log(onlyCat);

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
}*/

/*$.ajax({
    url: "https://localhost:44335/API/Employees",
    success: function (result) {
        console.log(result);
    }
});

$(document).ready(function () {
    $('#tabelSW').DataTable({
        'ajax': {
            'url': "https://localhost:44335/API/Employees",
            'dataType': 'json',
            'dataSrc': ''
        },
        'columns': [
            {
                "data": "nik"
                
            },
            {
                "data": "firstName"
            },
            {
                "data": "lastName"

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
                "data": "gender"
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    var button = '<td> <button onclick="getByNIK(' + row['nik'] + ');" class="btn btn-primary btn-sm text-center" data-toggle="modal" data-target="#mModal"> Update </button> \ <button onclick="Delete(' + row['nik'] + ');" class="btn btn-success btn-sm text-center" > Delete </button></td>';
                    return button;
                }
            }
        ]
    });
});*/

//insert data
/*function Add() {

    var res = validate();
    if (res == false) {
        return false;
    }

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
        url: "https://localhost:44335/API/Employees/Register",
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json",
        dataType: "json",
    }).done((result) => {
        *//*loadData();
        $('#mModal').modal('hide');*//*
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        $('#tabelSW').DataTable().ajax.reload();
        $('#mModal').modal('hide');
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    })
}*/

/*function getByNIK(NIK) {
    $.ajax({
        url: "https://localhost:44335/API/Employees/Profile/" + NIK,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            var tanggal = result.result.birthDate.substr(0, 10);
            $('#NIK').val(result.result.nik);
            $('#FirstName').val(result.result.firstName);
            $('#LastName').val(result.result.lastName);
            $('#Phone').val(result.result.phone);
            $('#BirthDate').val(tanggal);
            $('#Salary').val(result.result.salary);
            $('#Email').val(result.result.email);
            if (result.result.gender === "Male") {
                $('#Gender').val(0);
            } else {
                $('#Gender').val(1);
            };
            $('#Password').val(result.result.password);
            $('#Degree').val(result.result.degree);
            $('#GPA').val(result.result.gpa);
            $('#IdUniversitas').val(result.result.idUniversity);
            $('#IdRole').val(result.result.idRole);

            $('#mModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
            $('#form-2').hide();
            $('#form-3').hide();
            $('#form-pass').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}*/

/*function Update(NIK) {

    var res = validate();
    if (res == false) {
        return false;
    }

    var obj = new Object();
    obj.NIK = $("#NIK").val();
    obj.FirstName = $("#FirstName").val();
    obj.LastName = $("#LastName").val();
    obj.Phone = $("#Phone").val();
    obj.BirthDate = $("#BirthDate").val();
    obj.Salary = $("#Salary").val();
    obj.Email = $("#Email").val();
    obj.Gender = $("#Gender").val();

    console.log(obj);

    $.ajax({
        url: "https://localhost:44335/API/Employees/" + NIK,
        data: JSON.stringify(obj),
        type: "PUT",
        contentType: "application/json",
        dataType: "json",
    }).done((result) => {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        $('#tabelSW').DataTable().ajax.reload();
        $('#mModal').modal('hide');
    }).fail((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    })
}*/

/*function Delete(NIK) {
    var ans = confirm("Are you sure you want to delete this?");
    if (ans) {
        $.ajax({
            url: "https://localhost:44335/API/Employees/" + NIK,
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
}*/

//Valdidation using jquery  
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


/*$(function () {
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
*/
//Load Data in Table when documents is ready  
/*$(document).ready(function () {
    loadData();
});*/

//Load Data function  
/*function loadData() {
    $.ajax({
        url: "https://localhost:44335/API/Employees/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.nik + '</td>';
                html += '<td>' + item.firstName + '</td>';
                html += '<td>' + item.lastName + '</td>';
                html += '<td>' + item.phone + '</td>';
                html += '<td>' + item.birthDate + '</td>';
                html += '<td>' + item.salary + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '<td>' + item.gender + '</td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
    });
}*/
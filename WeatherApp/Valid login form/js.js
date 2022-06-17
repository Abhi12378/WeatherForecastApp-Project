function formValidation() {
    var uname = document.registration.username;
    var uid = document.registration.userid;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var uosex = document.registration.osex;
    var udate = document.registration.date;
    var uemail = document.registration.email;
    var ucellnum = document.registration.cellnum;
    var uadd = document.registration.address;
    var uzip = document.registration.zip;
    if (allLetter(uname)) {
        if (userid_validation(uid, 8)) {
            if (validsex(umsex, ufsex, uosex)) {
                if (dateselect(udate)) {
                    if (ValidateEmail(uemail)) {
                        if (ValidateCellNum(ucellnum)) {
                            if (alphanumeric(uadd)) {
                                if (allnumeric(uzip)) {}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;

}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Name must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function userid_validation(uid, m) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len != m) {
        alert("Faculty Id should not be empty / length equals " + m);
        uid.focus();
        return false;
    }
    return true;
}

function validsex(umsex, ufsex, uosex) {
    x = 0;

    if (umsex.checked) {
        x++;
    }
    if (ufsex.checked) {
        x++;
    }
    if (uosex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female/Other');
        umsex.focus();
        return false;
    } else {
        return true;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function ValidateCellNum(ucellnum) {
    var phoneno = /^\(?([8-9]{1})\)?[]?([0-9]{9})$/;
    if (ucellnum.value.match(phoneno)) {
        return true;
    } else {
        alert("Not a valid Phone Number");
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert('Faculty address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function dateselect(udate) {
    if (udate.value == "Default") {
        alert('Select your date from the list');
        udate.focus();
        return false;
    } else {
        return true;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    } else {
        alert('Pin code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
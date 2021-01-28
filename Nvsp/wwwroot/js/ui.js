
//var iMaxFilesize = 1024 * 1024 * 2; // 100 KB
var iMaxFilesize = 1024 * 1024 * 5; //Max Size updated to 5Mb
//var iMinFileSize = 10*1024;

var unauthorizeCheckString = "unauthorized";


//Added by sayalir
function GetVillagesByStateDist(url, stateComboId, distComboId, city_villageComboId) {
    debugger;
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    var districtCode = $("#" + distComboId).val();
    $('#' + city_villageComboId).empty();

    if (stateCode == '0') {
        $('#ddError').empty();

        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode + "&distCode=" + districtCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#' + city_villageComboId).empty();
                $.each(data, function (value, key) {
                    // $('#' + city_villageComboId).append($("<option></option>").attr("value", key.Value).text(key.Text));

                    $('#' + city_villageComboId).append("<option value='" + key.Text + "' data-value='" + key.Value + "'></option>");
                });
                //$("#applicantCurrentVillage").editableSelect();

                ////for (var i = 0; i < data.length; i++) {
                //    $('#' + city_villageComboId).append("<option value='" +
                //    data[i].CompanyName + "'></option>");
                //}

            }
            else {
                window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}

function GetPostOfficeByCity_N_Village(url, stateComboId, distComboId, city_villageComboId, postOfficeComboId) {
    debugger;
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    var districtCode = $("#" + distComboId).val();
    //var selectedCityOrVillage = $("#" + city_villageComboId).val();



    $('#' + postOfficeComboId).empty();

    if (stateCode == '0') {
        $('#ddError').empty();

        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode + "&distCode=" + districtCode + "&cityOrvillageId=" + city_villageComboId,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#' + postOfficeComboId).empty();
                $.each(data, function (value, key) {
                    //$('#' + postOfficeComboId).append($("<option></option>").attr("value", key.Value).text(key.Text));
                    $('#' + postOfficeComboId).append("<option value='" + key.Text + "' data-value='" + key.Value + "'></option>");
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}

function GetPincodeByPostOffice(url, stateComboId, distComboId, postOfficeComboId, pinCodeTextboxId) {
    debugger;
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    var districtCode = $("#" + distComboId).val();
    //   var selectedPostOffice = $("#" + postOfficeComboId).val();

    $('#' + pinCodeTextboxId).empty();


    if (stateCode == '0') {
        $('#ddError').empty();

        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode + "&distCode=" + districtCode + "&postOfficeId=" + postOfficeComboId,
        contentType: "application/json",
        success: function (data) {
            $('#' + pinCodeTextboxId).empty();
            $('#' + pinCodeTextboxId).val(data);

            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}

//Added by sayalir


function GetDistListByState(url, stateComboId, distComboId) {
   
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    $('#' + distComboId).empty();
    if (stateCode == '0') {
        $('#ddError').empty();
        // $('#' + distComboId).append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#' + distComboId).empty();

                $.each(data, function (value, key) {
                    $('#' + distComboId).append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}
/*New code starst : Reena Rana To enable user to type Char only 30 Aug 2018 */
function isChar(evt) {   /*A-65 --90   , 97-122 Space 32*/
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //console.log("charCode  --> " + charCode);
    if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32))
        return true;   
    else       
        return false;
    
}
/*New code starst : Reena Rana To enable user to type Char only 30 Aug 2018 */
/*New code starst : Reena Rana To enable user to type Char only 31 Aug 2018 */
function isnumber(evt)
{
    /*0 -- 48 to allow */
    /*disalow the number  1-9   :  49-57*/
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 49 && charCode <= 57) )   
    {  // console.log("inside if");
        return false;
    }
    else 
    {
        //console.log("inside else ");
        return true;
    }
}


/*New code starst : Reena Rana To disble user to type numeric value 31 Aug 2018 */
function GetACListByState(url, stateComboId, acComboId, acno) {
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    $('#' + acComboId).empty();
    if (stateCode == '0') {
        $('#ddError').empty();
     //   $('#' + acComboId).append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async:false,
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#' + acComboId).empty();
                $.each(data, function (value, key) {
                    $('#' + acComboId).append($("<option></option>").attr("value", key.Value).text(key.Text));
                });
                $('#' + acComboId).val(acno);
            }
            else {
                window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}

function GetACByStateDist(url,stateComboId,distComboId,acComboId)
{
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    var districtCode=$("#" + distComboId).val();
    $('#' + acComboId).empty();
    if (stateCode == '0') {
        $('#ddError').empty();
        //   $('#' + acComboId).append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode + "&distCode=" + districtCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#' + acComboId).empty();
                $.each(data, function (value, key) {
                    $('#' + acComboId).append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}


function enableActiveMenu(id) {
   
    $('#menu li').each(function (i) {
        $(this).removeClass("active");
    });
    $("#" + id).addClass("active");
}


function validateAjaxRequest(data) {
    if (data.toLowerCase().indexOf(unauthorizeCheckString) >= 0) {
        return false;
    }
    else {
        return true;
    }
}


// Method to get ac
function ChangeStateGetAC(url) {
    var level = 0;
    showProgress();
    var stateCode = $("#stateList").val();
    $('#acList').empty();
    if (stateCode == '0') {
        $('#ddError').empty();
       // $('#acList').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#acList').empty();
                $.each(data, function (value, key) {
                    $('#acList').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

function ChangeStateGetAC_prevepic(url) {
    var level = 0;
    showProgress();
    var stateCode = $("#ddPrevState").val();
    $('#ddPrevac').empty();
    if (stateCode == '0') {
        $('#ddError').empty();
        //$('#ddPrevac').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        
        success: function (data) {
            if (typeof data == "object") {
                $('#ddPrevac').empty();
                $.each(data, function (value, key) {
                    $('#ddPrevac').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

function ChangeStateGetAC_GetPermanentAc(url) {
    var level = 0;
    showProgress();
    var stateCode = $("#ddPermanentST_CODE").val();
    $('#ddPermanentDist').empty();
    if (stateCode == '0') {
        $('#ddError').empty();
       // $('#ddPermanentDist').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#ddPermanentDist').empty();
                $.each(data, function (value, key) {
                    $('#ddPermanentDist').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

function ChangeStateGetAC_GetShiftingAc(url) {
    var level = 0;
    showProgress();
    var stateCode = $("#ShiftingST_CODE").val();
   // $('#ShiftingST_CODE').empty();
    if (stateCode == '0') {
        $('#ShiftingtDistNo').empty();
       // $('#ShiftingtDistNo').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#ShiftingtDistNo').empty();
                $.each(data, function (value, key) {
                    $('#ShiftingtDistNo').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}


function ChangeStateGetAC_GetCurrentAc(url) {
    var level = 0;
    showProgress();
    var stateCode = $("#ddCurrentST_CODE").val();
    $('#ddCurrrentDist').empty();
    if (stateCode == '0') {
        $('#ddCurrrentDist').empty();
       // $('#ddCurrrentDist').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#ddCurrrentDist').empty();
                $.each(data, function (value, key) {
                    $('#ddCurrrentDist').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

function ChangeStateGetDistrict_birth(url) {
    
    var level = 0;
    showProgress();
    var stateCode = $("#applicantBirthState").val();
    //$('#acList').empty();
    if (stateCode == '0') {
        $('#ddError').empty();
        //$('#applicantBirthDistrict').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#applicantBirthDistrict').empty();
                $.each(data, function (value, key) {
                    $('#applicantBirthDistrict').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}


function ChangeStateGetDistrict(url) {
    
    var level = 0;
    showProgress();
    var stateCode = $("#stateList").val();
    $('#distList').empty();
    if (stateCode == '0') {
        $('#ddError').empty();
       // $('#distList').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#distList').empty();
                $.each(data, function (value, key) {
                    $('#distList').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

// Method to get AC
function ChangeDist(URL) {
    showProgress();
    var level = 1;
    var stateCode = $("#stateList").val();
    var distCode = $("#distList").val();
    $('#acList').empty();

    if (distCode == '0') {
        $('#ddError').empty();
        //$('#acList').append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 2;

    $.ajax({
        type: "GET",
        url: URL + "?stateCode=" + stateCode + "&distCode=" + distCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $('#acList').empty();
                $.each(data, function (value, key) {

                    $('#acList').append($("<option></option>").attr("value", key.Value).text(key.Text));
                });
            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}

function ChangeAC() {
  
    var level = 2;
    var stateCode = $("#stateList").val();
    var distCode = $("#distList").val();
    var acCode = $("#acList").val();

    if (acCode == '0') {
        //hideProgress();
        return level;
    }
    level = 3;
    return level;
}

function updateSessionVariable(url, a, b) {
   
    var url = url;
    $.ajax({
        method: "POST",
        url: url,
        async: false,
        data: { key: a, value: b }
    })
                        .done(function (msg) {
                            if (a == 'currentLevel')
                                cwlevel = msg;
                            else if (a == 'loginLevel')
                                loglevel = msg;
                        });
}

// Method to show Dashboard Overview
function showOverview(url) {
    //$("#distDV").css("visibility", "visible");
    //$('#stateDV1 option:first-child').attr("selected", "selected");
    showProgress();

    var stateCode = $("#stateList").val();
    var distCode = $("#distList").val();
    var acCode = $("#acList").val();

    if (distCode == null) {
        distCode = "0";
    }
    if (acCode == null) {
        acCode = "0";
    }

    

    $('#ddError').empty();

    var jqxhr = $.ajax(url + "?stateCode=" + stateCode + "&distCode=" + distCode + "&acCode=" + acCode).done(function (partialView) {
        if (validateAjaxRequest(partialView)) {
            $('#dvDahsboard_content').html("");
            $('#dvDahsboard_content').html(partialView);
            hideProgress();
        }
        else {
            window.location = defaultWindowRedirectPage;
        }
    });
}

// To Change Div
function ChangeDiv(showDivId, hideDivId) {
    if (document.getElementById('loginDV').style.display == 'none') {
        $('#headerDV').text("Welcome to CEO/ DEO/ ERO Services");
        document.getElementById('loginDV').style.display = 'block';
        document.getElementById('forgotDV').style.display = 'none';
    }
    else {
        $('#headerDV').text("Forgot Password");
        document.getElementById('loginDV').style.display = 'none';
        document.getElementById('forgotDV').style.display = 'block';
    }
}


// To Show dropdown on mouse hover to menu
$(document).ready(function () {
    $('li.dropdown').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
});

//To apply active to selected menu
function SelectLink(id) {
    $("#index").removeClass("active");
    $("#aadhaar").removeClass("active");

    if (id == "aadhaar")
        showProgress();

    var d = document.getElementById(id);
    d.className = d.className + "active";
}


$(document).on('submit', 'form', function () {
   // alert('submit')
    showProgress();
    setTimeout(function () {
        $("#submit_button_store_id").prop("disabled", true).addClass("disabled");
    }, 0);

    ////var FormType = $('#stateList').val();
    //var st_code = $('#stateList').val();
    ////var ApplicantLastName = $("#applicantSurname_v1").val(); 
    ////var CoorectedLastName = $("#CORRECTED_applicantSurname_v1").val();
    ////var applicantSurname = document.forms["myForm"]["LASTNAME_V1"].value;
    ////var CoorectedLastName = document.forms["myForm"]["CORRECTED_LMNAME_V1"].value;
    //var applicantSurname = 'Model.LASTNAME_V1';
    //var CoorectedLastName = 'Model.CORRECTED_LMNAME_V1';
    //var letters = "/^[a-zA-Z]+$/";
    //if(st_code == 'S02'|| st_code != 'S15'|| st_code != 'S17')
    //{
    //    if (ApplicantLastName.value.match(letters)) {
    //        document.getElementsByName("LASTNAME_V1").value = "";
    //        //document.forms["myForm"][""].value = '';
    //    }
    //    if (CoorectedLastName.value.match(letters)) {
    //        document.getElementsByName("CORRECTED_LMNAME_V1").value = "";
    //       // document.forms["myForm"][""].value = '';
    //    }
    //}

    previewForm();
});



//$("form").submit(function () {
//    var v = $('#form');
//    v.validate();
//    alert('v')
//    //if ($(this).validate()) {
//    //    alert('');
//    //    $(this).submit(function () {
//    //        return false;
//    //    });
//    //    return true;
//    //}
//    //else {
//    //    return false;
//    //}
//});

var hideDiv = true;
function ClearDiv(targetId) {
    if (hideDiv) {
        $('#dvAadhaarFeedError').html("");
        //hideDiv = true;
    }
}


//To move cursor from current text box to next textbox
function Next(cId, nId) {
    if (cId.value.length >= cId.maxLength) {
        document.getElementById(nId).focus();
    }
}

//// Show Loading 
//var spinnerVisible = false;
//function showProgress() {
//    //alert('show')
//    if (!spinnerVisible) {
//        $('#dvLoading').fadeIn("fast");
//        spinnerVisible = true;
//    }
//}

//function Progress(id) {
//   // alert(id)
//    showProgress();
//    $(id).hide();

//}


//// Hide Loading
//function hideProgress() {
//    //alert('hide process')
//    if (spinnerVisible) {
//        var spinner = $('#dvLoading');
//        spinner.stop();
//        spinner.fadeOut("fast");
//        spinnerVisible = false;
//    }
//}


function moveScroll(targetDiv) {
    var window_offset = $(targetDiv).offset().top - $(targetDiv).scrollTop();
    $('body').animate({ scrollTop: window_offset + 'px' }, 900);
}


//function ChangeStateGetAC_Prev(url, stateDDID, acDDID) {
//    var level = 0;
//    showProgress();
//    var stateCode = $(stateDDID).val();
//    $(acDDID).empty();
//    if (stateCode == '0') {
//        $('#ddError').empty();
//        $(acDDID).append($("<option></option>").attr("value", 0).text("Select"));
//        hideProgress();
//        return level;
//    }
//    level = 1;

//    $.ajax({
//        type: "GET",
//        url: url + "?stateCode=" + stateCode,
//        contentType: "application/json",
//        success: function (data) {
//            if (typeof data == "object") {
//                $(acDDID).empty();
//                $.each(data, function (value, key) {
//                    $(acDDID).append($("<option></option>").attr("value", key.Value).text(key.Text));
//                });

//            }
//            else {
//                window.location = defaultWindowRedirectPage;
//            }
//            hideProgress();
//        },
//        error: function (XMLHttpRequest, textStatus, errorThrown) {
//        }
//    });
//    return level;
//}


function ChangePrevStateGetAC(url) {
    var level = 0;
    showProgress();
    var stateCode = $('#ddPrevState').val();
    $(ddPrevac).empty();
    if (stateCode == '0') {
        $('#ddError').empty();
      //  $(ddPrevac).append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            if (typeof data == "object") {
                $(ddPrevac).empty();
                $.each(data, function (value, key) {
                    $(ddPrevac).append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                window.location = defaultWindowRedirectPage;
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return level;
}


function ValidationforFile(fileID) {
    var file = document.getElementById(fileID).files[0];
    var filesize = document.getElementById(fileID).files[0].size;
    if (file != null) {
        //var extension = file.substr((file.lastIndexOf('.') + 1));
        var extension = file.type;
        // var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
        var rFilter = /^(image\/jpeg|image\/jpg)$/i;
        if (rFilter.test(extension)) {

            flag = true;
        }
        else
            flag = false;
    }



    if (flag == false) {
        alert("You can upload only jpg,jpeg,png,gif extension file");
        document.getElementById(fileID).value = '';
        return false;
    }
    //if (filesize > 102400) // 100 kb for bytes.
    if (filesize >= (1024 * 1024 * 2)) // 2 MB file
    {
        alert("File size must under 2 MB file");
        document.getElementById(fileID).value = '';
        return false; ;
    }
    if (flag == true) {
        
            if (typeof (FileReader) != "undefined") {
                $("#identityImageDiv").show();
                $("#identityImageDiv").append("<img />");
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#identityImageDiv img").attr("src", e.target.result);
                }
                reader.readAsDataURL(file);
            
        }
    }
    }

function btnReset() {
    location.reload();
}


//var spinnerVisible = false;
//function showProgress() {
//    if (!spinnerVisible) {
//        $('#dvLoading').fadeIn("fast");
//        spinnerVisible = true;
//    }
//}

//function hideProgress() {
//    if (spinnerVisible) {
//        var spinner = $('#dvLoading');
//        spinner.stop();
//        spinner.fadeOut("fast");
//        spinnerVisible = false;
//    }
//}



/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

//var iMaxFilesize = 1048576; // 1MB


/**
* Function to be called when photograph is uploaded 
* 
* @param {type} fileID
* @param {type} srcID
* @param {type} previewID
* @param {type} previewDiv
* @returns {undefined}
*/


/**
* 
* @param {type} fileID
* @param {type} srcID
* @param {type} previewID
* @param {type} previewDiv
* @returns {undefined}
*/
function removeImage(srcID, hdnstring, previewID, previewDiv) {

    if (document.getElementById(srcID) !== null) {
        document.getElementById(srcID).value = '';
    }
    $("#" + srcID).val("");
    $("#" + hdnstring).val("");
    var oImage = document.getElementById(previewID);
    if (oImage != null)
        oImage.src = "";
    $("#" + previewDiv).css("display", "none");
}

function GetRevisionYear(url, state, hdnDraftPublicationDate) {
        var level = 0;
        showProgress();
        var stateCode = $("#" + state).val();
        if (stateCode == '0') {
            hideProgress();
            return level;
        }
        level = 1;
        $.ajax({
            type: "GET",
            async: false,
            url: url + "?stateCode=" + stateCode,
            contentType: "application/json",
            success: function (data) {
                $("#" + hdnDraftPublicationDate).val(data.split(' ')[0]);
                hideProgress();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                hideProgress();
            }
        });
        return level;
}

function GetLanguageByState(url, state, hdnLanguageArray) {
    var level = 0;
    showProgress();
    var stateCode = $("#" + state).val();
    if (stateCode == '0') {
        hideProgress();
        return level;
    }
    level = 1;
    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            $("#" + hdnLanguageArray).val(JSON.stringify(data));

            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}


function GetLanguageByState(url, state, hdnLanguageArray) {
    var level = 0;
    showProgress();
    var stateCode = $("#" + state).val();
    if (stateCode == '0') {
        hideProgress();
        return level;
    }
    level = 1;
    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode,
        contentType: "application/json",
        success: function (data) {
            $("#" + hdnLanguageArray).val(JSON.stringify(data));

            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}


function translationInOtherLang(NameForTraslate, Name_v2) {
    var Name = $('#' + NameForTraslate).val();
    //// console.log(keyboardLanguage2);
    var state = $("#stateList").val();
    if (state == 'U03') {
        if (Name != '') {
            var url = "http://www.nvsp.in/transservice/Transliteration.aspx?itext=" + Name +
          "&transliteration=NAME&locale=" + keyboardLanguage2 + "&transRev=false";
            var text = "";
            $.ajax({
                url: url,
                contentType: 'application/json',
                success: function (result) {
                    //alert(result);
                    var r = result.split(';');
                    var x = r.length;
                    for (i = 0; i < x; i++) {
                        text += r[i].split('^')[0];
                    }
                    $('#' + Name_v2).val(text)
                },
                error: function (err) {
                    $('#' + Name_v2).val('');
                }
            });
        }
        else {
            $('#' + Name_v2).val('');
        }
    }
}


function uploadImage(fileID, srcID, previewID, previewDiv, hdnPhoto) {

  
    if (document.getElementById(fileID) !== null) {
        var oFile = document.getElementById(fileID).files[0];

        if (!oFile) {
            return;
        }
        /** filter for image files*/
     
     

        //===================Code Previously for Preview ========================
        /* * Prepare HTML5 FileReader*/
        var oReader = new FileReader();
        oReader.onload = function (e) {

            /* * Image preview element*/
            var oImage = document.getElementById(previewID);

            // e.target.result contains the DataURL which we will use as a source of the image
            oImage.src = e.target.result;
            var photoSRC = e.target.result;

            oImage.onload = function () {
                $("#" + previewDiv).css("display", "block");
                $("#" + previewID).css("border", "1px solid");
            };
        };
        // read selected file as DataURL
        oReader.readAsDataURL(oFile)
        //======================================================================
    }

}

//get Mime type

function CheckMimeType(first_five_char) {
   
    if (first_five_char != null || first_five_char != '' || first_five_char != 'undefined') {
        switch (first_five_char.toUpperCase()) {
            case "IVBOR":
            case "/9J/4":
                return true;
            default: return false;
        }
    }
    else
        return false;

}



//Image Compression
function GetCompressedApplicantPhoto(srcId, destId, previewID, previewDiv) {

    var oImage = document.getElementById(previewID);

    const file = document.getElementById(srcId).files[0];

    var blob = file; // See step 1 above
    var fileReader = new FileReader();
    fileReader.onloadend = function (e) {
        var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
        var header = "";
        for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
        }
        console.log(header);
        // Check the file signature against known types
    }

    var errormsg = "false";
    if (!file) {
        $("#" + srcId).val("");
        $("#" + previewDiv).css("display", "none");
        errormsg = "Not a file!"
        return errormsg;
    }

    if (file.size < 3000) {
        $('#' + srcId).val('');
        errormsg = "Minimum file size for documents is 3KB."
        return errormsg;
    }

    var type = file.type;
    // var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    var rFilter = /^(image\/jpeg|image\/jpg)$/i;
    if (!rFilter.test(file.type)) {
        removeImage(srcId, destId, previewID, previewDiv);
        errormsg = "Upload only image files";
        return errormsg;
    }
    if (file.size >= iMaxFilesize && errormsg == "false") {
        errormsg = "Size is greater than 5MB";
        // toastr.error("Size is greater than 2MB");
        $("#" + srcId).val("");
        $("#" + previewDiv).css("display", "none");
        return errormsg;
    }

    if (file.size < 100000) {

        var reader = new window.FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {

            /* * Image preview element*/

            // e.target.result contains the DataURL which we will use as a source of the image
            if (oImage != null)
                oImage.src = reader.result;
            //var photoSRC = reader.result;

            var base64_string = reader.result.substring(reader.result.indexOf(',') + 1);

            var base64_firstfivechars = base64_string.substring(0, 5);

            var valid_mime = CheckMimeType(base64_firstfivechars);

            if (valid_mime == false) {

                $("#" + srcId).val("");
                $("#" + previewDiv).css("display", "none");
                errormsg = "Image is not valid!";
                alert("Image is not valid!");
                return errormsg;
            }
            else {
                errormsg = false;
                document.getElementById(destId).setAttribute('value', base64_string);
                $("#" + previewDiv).css("display", "block");
                return errormsg;
            }

        }

        //document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));          
        //$("#" + previewDiv).css("display", "block");
        //$("#" + previewID).css("border", "1px solid");

    }
    else {
        new ImageCompressor(file, {
            quality: .9,
            width: 240, //Adjust Width here
            success(result) {

                var reader = new window.FileReader(); +

                reader.readAsDataURL(result);
                reader.onloadend = function () {

                    // e.target.result contains the DataURL which we will use as a source of the image
                    if (oImage != null)
                        oImage.src = reader.result;

                    var base64data = reader.result;
                    var base64_string = reader.result.substring(reader.result.indexOf(',') + 1);

                    var base64_firstfivechars = base64_string.substring(0, 5);

                    var valid_mime = CheckMimeType(base64_firstfivechars);

                    if (valid_mime == false) {

                        $("#" + srcId).val("");
                        $("#" + previewDiv).css("display", "none");
                        errormsg = "Image is not valid!";
                        alert("Image is not valid!");
                        return errormsg;
                    }
                    else {
                        errormsg = false;
                        document.getElementById(destId).setAttribute('value', base64_string);
                        $("#" + previewDiv).css("display", "block");
                        return errormsg;
                    }
                    document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));

                }

            },
            error(e) {
                console.log(e.message);
            },
        });
    }
}
        
  //  }
       
    //// console.log(file.size);
    //new ImageCompressor(file, {
    //    quality: .8,
    //    width: 240, //Adjust Width here
    //    //minHeight: 480,
    //    success(result) {

    //        var reader = new window.FileReader();
    //        reader.readAsDataURL(result);
    //        reader.onloadend = function () {
    //            var base64data = reader.result;
    //            document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));              
    //        }
           
    //       // return errormsg;
    //    },
    //    error(e) {
    //        errormsg = "Something went wrong.";
    //        // console.log(e.message);
    //    },
    //});
  //  return errormsg;

    //});
//}

    function GetCompressedAttachment(srcId, destId, previewID, previewDiv) {

        var oImage = document.getElementById(previewID);

        const file = document.getElementById(srcId).files[0];

        var blob = file; // See step 1 above
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
            var header = "";
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            console.log(header);
            // Check the file signature against known types
        }

        var errormsg = "false";
        if (!file) {
            $("#" + srcId).val("");
            $("#" + previewDiv).css("display", "none");
            errormsg = "Not a file!"
            return errormsg;
        }

        if (file.size < 3000) {
            $('#' + srcId).val('');
            errormsg = "Minimum file size for documents is 3KB."
            return errormsg;
        }

        var type = file.type;
        // var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
        var rFilter = /^(image\/jpeg|image\/jpg)$/i;
        if (!rFilter.test(file.type)) {
            removeImage(srcId, destId, previewID, previewDiv);
            errormsg = "Upload only image files";
            return errormsg;
        }
        if (file.size >= iMaxFilesize && errormsg == "false") {
            errormsg = "Size is greater than 5MB";
            // toastr.error("Size is greater than 2MB");
            $("#" + srcId).val("");
            $("#" + previewDiv).css("display", "none");
            return errormsg;
        }

        if (file.size < 100000) {

            var reader = new window.FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function () {

                /* * Image preview element*/

                // e.target.result contains the DataURL which we will use as a source of the image
                if (oImage != null)
                    oImage.src = reader.result;
                //var photoSRC = reader.result;

                var base64_string = reader.result.substring(reader.result.indexOf(',') + 1);

                var base64_firstfivechars = base64_string.substring(0, 5);

                var valid_mime = CheckMimeType(base64_firstfivechars);

                if (valid_mime == false) {

                    $("#" + srcId).val("");
                    $("#" + previewDiv).css("display", "none");
                    errormsg = "Image is not valid!";
                    alert("Image is not valid!");
                    return errormsg;
                }
                else {
                    errormsg = false;
                    document.getElementById(destId).setAttribute('value', base64_string);
                    $("#" + previewDiv).css("display", "block");
                    return errormsg;
                }

            }

            //document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));          
            //$("#" + previewDiv).css("display", "block");
            //$("#" + previewID).css("border", "1px solid");

        }
        else {
            new ImageCompressor(file, {
                quality: .9,
                width: 640, //Adjust Width here
                success(result) {

                    var reader = new window.FileReader();
                    reader.readAsDataURL(result);
                    reader.onloadend = function () {

                        // e.target.result contains the DataURL which we will use as a source of the image
                        if (oImage != null)
                            oImage.src = reader.result;

                        var base64data = reader.result;
                        var base64_string = reader.result.substring(reader.result.indexOf(',') + 1);

                        var base64_firstfivechars = base64_string.substring(0, 5);

                        var valid_mime = CheckMimeType(base64_firstfivechars);

                        if (valid_mime == false) {

                            $("#" + srcId).val("");
                            $("#" + previewDiv).css("display", "none");
                            errormsg = "Image is not valid!";
                            alert("Image is not valid!");
                            return errormsg;
                        }
                        else {
                            errormsg = false;
                            document.getElementById(destId).setAttribute('value', base64_string);
                            $("#" + previewDiv).css("display", "block");
                            return errormsg;
                        }
                        document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));

                    }

                },
                error(e) {
                    console.log(e.message);
                },
            });
        }
    }

//function GetCompressedAttachment(srcId, destId) {

//    const file = document.getElementById(srcId).files[0];
   
//    if (!file) {
//        return;
//    }

//    if (file.size < 100000) {

//        var blob = file;
     
//        var reader = new window.FileReader();
//        reader.readAsDataURL(file);
//        reader.onloadend = function () {
//            base64data = reader.result;
//            document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));
//        }
//        return;
//    }

//    //// console.log(file.size);
//    new ImageCompressor(file, {
//        quality: .8,
//        width: 640, //Adjust Width here
//        //minHeight: 480,
//        success(result) {

//            var reader = new window.FileReader();
//            reader.readAsDataURL(result);
//            reader.onloadend = function () {
//                var base64data = reader.result;



//                 //console.log(base64data);
//               document.getElementById(destId).setAttribute('value', base64data.substr(base64data.indexOf(',') + 1));
//            }
//        },
//        error(e) {
//            // console.log(e.message);
//        },
//    });
//}


function EnableEnglish() {
    $(".EnableEnglish").keydown(function (e) {
        //console.log(e.keyCode + "EnableEnglish ");
        //For English text
        if (!(e.keyCode >= 65 && e.keyCode <= 120) && (e.keyCode == 32 && e.keyCode != 0) && !(e.keyCode == 8 || e.keyCode == 9)) {
            e.preventDefault();
        }
    });
}
function DisableEnglish() {
    $(".DisableEnglish").keydown(function (e) {
        //console.log(e.keyCode + "DisableEnglish ");
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || e.keyCode != 8 || e.keyCode != 46) && (e.keyCode < 37 || e.keyCode > 40)) {
            e.preventDefault();
        }
    });
}


function previewForm() {

    var isValid = false;
    var regex = /^[a-zA-Z ]*$/;

    var st_code = $('#stateList').val();

    if (st_code == 'S02' || st_code == 'S15' || st_code == 'S17') {
        }
    else {
        $("div .dvRegional").find("input").each(function () {
            isValid = regex.test($(this).val());
            if (isValid)
            $(this).val('');
        });
    }
}


$(document).ready(function () {
    try {
        $("input[type='text']").each(function () {
            $(this).attr("autocomplete", "off");
        });
    }
    catch (e)
    { }
});


function GetPartListByState(url, stateComboId, acComboId, ddlPartNo) {
  
    var level = 0;
    showProgress();
    var stateCode = $("#" + stateComboId).val();
    var acCode = $("#" + acComboId).val();
    $('#' + ddlPartNo).empty();
    if (stateCode == '0') {
        $('#ddError').empty();
        // $('#' + distComboId).append($("<option></option>").attr("value", 0).text("Select"));
        hideProgress();
        return level;
    }
    level = 1;

    $.ajax({
        type: "GET",
        async: false,
        url: url + "?stateCode=" + stateCode + "&acNo=" + acCode,
        contentType: "application/json",
        success: function (data) {
           // console.log(data);
            if (typeof data == "object") {
                $('#' + ddlPartNo).empty();
                $.each(data, function (value, key) {
                    $('#' + ddlPartNo).append($("<option></option>").attr("value", key.Value).text(key.Text));
                });

            }
            else {
                //window.location = defaultWindowRedirectPage;
                hideProgress();
            }
            hideProgress();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            hideProgress();
        }
    });
    return level;
}

//changed by dnyaneshwar 11-10-2018 for solving the problem of applying font on varnacular fields on state change event.
function ChangeLang(LANGUAGE_CODE_V1) {

    switch (LANGUAGE_CODE_V1) {
        case 'hin':
            $('.isVarnac').css("font-family", 'gist_hindi_font');
            break;
        case 'urd':
            $('.isVarnac').css("font-family", 'gist_urdu_font');
            break;
        case 'mar':
            $('.isVarnac').css("font-family", 'gist_marathi_font');
            break;
        case 'guj':
            $('.isVarnac').css("font-family", 'gist_gujarati_font');
            break;
        case 'ben':
            $('.isVarnac').css("font-family", 'gist_bengali_font');
            break;
        case 'pan':
            $('.isVarnac').css("font-family", 'gist_punjabi_font');
            break;
        case 'mal':
            $('.isVarnac').css("font-family", 'gist_malayalam_font');
            break;
        case 'kan':
            $('.isVarnac').css("font-family", 'gist_kannada_font');
            break;
        case 'asm':
            $('.isVarnac').css("font-family", 'gist_assamese_font');
            break;
        case 'brx':
            $('.isVarnac').css("font-family", 'gist_bodo_font');
            break;
        case 'dgo':
            $('.isVarnac').css("font-family", 'gist_dogri_font');
            break;
        case 'kas':
            $('.isVarnac').css("font-family", 'gist_kashmiridev_font');
            break;
        case 'kok':
            $('.isVarnac').css("font-family", 'gist_konkani_font');
            break;
        case 'mai':
            $('.isVarnac').css("font-family", 'gist_maithili_font');
            break;
        case 'mni':
            $('.isVarnac').css("font-family", 'gist_manipuri_font');
            break;
        case 'met':
            $('.isVarnac').css("font-family", 'gist_meeteimayek_font');
            break;
        case 'nep':
            $('.isVarnac').css("font-family", 'gist_nepali_font');
            break;
        case 'olc':
            $('.isVarnac').css("font-family", 'gist_olchiki_font');
            break;
        case 'ori':
            $('.isVarnac').css("font-family", 'gist_oriya_font');
            break;
        case 'san':
            $('.isVarnac').css("font-family", 'gist_sanskrit_font');
            break;
        case 'sat':
            $('.isVarnac').css("font-family", 'gist_santhali_font');
            break;
        case 'snd':
            $('.isVarnac').css("font-family", 'gist_sindhidev_font');
            break;
            //case 'snd-arab':
            //$('.isVarnac').css("font-family", 'gist_sindhidev_font');
            // break;
        case 'tam':
            $('.isVarnac').css("font-family", 'gist_tamil_font');
            break;
        case 'tel':
            $('.isVarnac').css("font-family", 'gist_telugu_font');
            break;
            //case 'mod':
            //$('.isVarnac').css("font-family", 'gist_tamil_font');
            // break;

    }
 
}

function DisableTypingInVernac(statecode) {

    var state = $("#" + statecode).val();
    if (state == 'U03') {
        $("div .varnac_2").addClass("varnac_2visible");
        $.each($("div .varnac_2").children().find('input'), function (index, value) {
            $(value).removeAttr('disabled');
        });
    }
    else {
        $("div .varnac_2").removeClass("varnac_2visible");
        $.each($("div .varnac_2").children().find('input'), function (index, value) {
            $(value).attr('disabled', 'disabled');
        });
    }

    //code for English typing in Varnac field
    if (state == 'S02' || state == 'S15' || state == 'S17') {
        $(".isVarnac").removeClass("DisableEnglish");
        $(".isVarnac").addClass("EnableEnglish");
        $(".isVarnac").off("keydown");
        EnableEnglish();
    }
    else {
        $(".isVarnac").removeClass("EnableEnglish");
        $(".isVarnac").addClass("DisableEnglish");
        $(".isVarnac").off("keydown");
        DisableEnglish();
        //changed by dnyaneshwar 11-10-2018 for solving the problem of applying font on varnacular fields on state change event.
        ChangeLang(KeyboardLanguageCode);
    }

}

function Print() {
    var display_setting = "toolbar=yes,location=no,directories=yes,menubar=yes,";
    display_setting += "scrollbars=yes,width=750, height=600";
    var content_innerhtml = document.getElementById("printDiv").innerHTML;
    var document_print = window.open("", "", display_setting);
    document_print.document.open();
    document_print.document.write('<html><head><title>@ViewBag.Title</title></head>');
    document_print.document.write('<body onLoad="self.print();self.close();" >');
    document_print.document.write(content_innerhtml);
    document_print.document.write('</body></html>');
    document_print.print();
    document_print.document.close();
    return false;
}

//For Form Preview
function generatePreview(previewUrl) {
  debugger;
    var isValid = true;
    $('#form').validate({
        ignore: ".ignore"
    });
    if (!$('#form').valid()) {
      isValid = false;
      showErrorToast("Fill all required fields")
    }
    if (isValid) {
        loadFormPreview(previewUrl);
        //showpreview();
        //$("#secPreview").css("display", "block");
        //$("#FormCon").css("display", "none");
    }
};

function showForm() {
    $("#FormCon").css("display", "block");
    $("#secPreview").css("display", "none");
};

//function loadFormPreview(previewUrl) {
//  debugger;
//    var form6Model = new FormData($('#form').get(0));
//    showProgress();
//    $.ajax({
//        url: previewUrl,
//        type: 'POST',
//        data: form6Model,
//        contentType: false,
//        processData: false,
//        success: function (data) {
//            $('#previewForm').html(data);
//            // $('#secPreview').css("display", "block");
           
//            $("#secPreview").css("display", "block");
//            $("#FormCon").css("display", "none");
//            hideProgress();
//        },
//        error: function () {
//            hideProgress();
//        }
//    });
//}

//Added By Supriya for Forms 09-09-2020
// check if value contain english alphabet or special characters
function isValueContainEnglish(idArray) {
    var regex = /[a-zA-Z`~@#$%()_\\^]+/g;
    var isValidationError = false;
    for (var elemId of idArray) {
        let val = $('#' + elemId).val();
        if ((val != '' || val != '') && regex.test(val)) {
            isValidationError = true;
            $('#' + elemId).addClass('input-validation-error').val('');
            //var fieldName = $('#' + elemId).prop('name');
            //$('*[data-valmsg-for="' + fieldName + '"]').addClass('field-validation-error').removeClass('field-validation-field');
        }
    }

    return isValidationError;
}
function isValueSameasStatename(idArray, stateName) {

    var isValidationError = false;
    for (var elemId of idArray) {
        let val = $('#' + elemId).val();
        if (val != '' && val.toLowerCase() == stateName.toLowerCase()) {
            isValidationError = true;
            $('#' + elemId).addClass('input-validation-error').val('');
        }
    }
    return isValidationError;
}
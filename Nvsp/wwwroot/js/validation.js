/*
 * @author kapil Gupta
 * @LastModifiedOn 13-08-2015
 */


/*
 * 
 * @param {type} elementId
 * @param {type} fieldvalue
 * @param {type} vernacular
 * @param {type} en_lang
 * @param {type} errorId
 * @returns {Boolean.isSelectionValid}
 * @Description This function just check whether a option from select list
 * has been selected or not.
 */


function isSelectionValid(elementId, fieldvalue, vernacular, en_lang, errorId)
{
    $("#" + elementId + "_error").text("");
    var messageID = "";
    var isSelectionValid = false;
    if (fieldvalue === "" || fieldvalue.length === 0 || fieldvalue === 'undefined' || fieldvalue === undefined) {
        if (errorId !== "")
            messageID = errorId;
        else
            messageID = 'text_empty';
    }
    else
    {
        isSelectionValid = true;
    }

    if (messageID !== '')
        setErrorMessage(en_lang, vernacular, elementId, messageID);
    return isSelectionValid;

}




function isValidText(elementId, fieldvalue, vernacular, en_lang, pattern, errorMessageId)
{

    if (pattern === "" && pattern !== 'regional') {
        pattern = "^[A-Za-z ]{1,50}$";
    }
    $("#" + elementId + "_error").text("");
    var isValidText = false;
    var messageID = "";
    var regex = new RegExp(pattern, 'i');
    if (regex.test(fieldvalue)) {
        isValidText = true;
    }
    else {
        isValidText = false;
        if (errorMessageId !== '')
            messageID = errorMessageId;
        else
            messageID = 'text_invalid';
    }
    if (isValidText === false) {
        $("#elementId").focus();
    }
    if (messageID !== '')
        setErrorMessage(en_lang, vernacular, elementId, messageID);
    return isValidText;
}

function isValidTextAtRuntime(elementId, fieldvalue, pattern, errorMessageId)
{
    $("#" + elementId + "_error").text("");

    var displayErrorMessageInEnglishLanguageAtRunTime = false;
    var displayErrorMessageInRegionalLanguageAtRunTime = '';
    if ($('input[name=en_lang]').is(':checked')) {
        displayErrorMessageInEnglishLanguageAtRunTime = true;
    }
    displayErrorMessageInRegionalLanguageAtRunTime = $("#language option:selected").val().trim();
    if (displayErrorMessageInRegionalLanguageAtRunTime === '')
        displayErrorMessageInRegionalLanguageAtRunTime = 'eng';
    var isValid = isValidText(elementId, fieldvalue, displayErrorMessageInRegionalLanguageAtRunTime, displayErrorMessageInEnglishLanguageAtRunTime, pattern, errorMessageId);

    return isValid;
}

function isSelectionValidAtRuntime(elementId, fieldvalue, errorId)
{
    $("#" + elementId + "_error").text("");

    var displayErrorMessageInEnglishLanguageAtRunTime = false;
    var displayErrorMessageInRegionalLanguageAtRunTime = '';
    if ($('input[name=en_lang]').is(':checked')) {
        displayErrorMessageInEnglishLanguageAtRunTime = true;
    }
    displayErrorMessageInRegionalLanguageAtRunTime = $("#language option:selected").val().trim();
    if (displayErrorMessageInRegionalLanguageAtRunTime === '')
        displayErrorMessageInRegionalLanguageAtRunTime = 'eng';
    var isValid = isSelectionValid(elementId, fieldvalue, displayErrorMessageInRegionalLanguageAtRunTime, displayErrorMessageInEnglishLanguageAtRunTime, errorId);

    return isValid;

}
function isImageUploaded(elementId, fieldvalue, vernacular, en_lang, errorMessageId)
{

    $("#" + elementId + "_error").text("");
    var isValidImage = false;
    var messageID = "";
    if (fieldvalue !== undefined && fieldvalue.length > 0) {
        isValidImage = true;
    }
    else {
        isValidImage = false;
        if (errorMessageId !== '')
            messageID = errorMessageId;
        else
            messageID = 'image_not_uploaded';
    }

    if (messageID !== '')
        setErrorMessage(en_lang, vernacular, elementId, messageID);
    return isValidImage;
}
function isImageUploadedAtRuntime(elementId, fieldvalue, errorId)
{

    $("#" + elementId + "_error").text("");

    var displayErrorMessageInEnglishLanguageAtRunTime = false;
    var displayErrorMessageInRegionalLanguageAtRunTime = '';
    if ($('input[name=en_lang]').is(':checked')) {
        displayErrorMessageInEnglishLanguageAtRunTime = true;
    }
    displayErrorMessageInRegionalLanguageAtRunTime = $("#language option:selected").val().trim();
    if (displayErrorMessageInRegionalLanguageAtRunTime === '')
        displayErrorMessageInRegionalLanguageAtRunTime = 'eng';
    var isValid = isImageUploaded(elementId, fieldvalue, displayErrorMessageInRegionalLanguageAtRunTime, displayErrorMessageInEnglishLanguageAtRunTime, errorId);

    return isValid;

}
/* 
 * @param {srting} en_lang (true | false)
 * @param {string} vernacular -Name of vernacular language (eng | mar etc)
 * @param {string} elementId : Html Element ID  for which field error occurs.
 * @param {string} errorID : errorID.
 * @description  
 This methods display error message  for particular html element  after passing error ID to it.
 * @returns {nothing}
 */
function setErrorMessage(en_lang, vernacular, elementId, errorID)
{
    if ((en_lang === true && vernacular !== "eng"))
    {
        if (err_message[errorID][vernacular] !== undefined) {
            $("#" + elementId + "_error").text(err_message[errorID][vernacular] + "/" + err_message[errorID].eng);
        } else {
            $("#" + elementId + "_error").text(err_message[errorID].eng);
        }

    }
    else if ((en_lang === true && vernacular === "eng") || en_lang === false)
    {
        if (err_message[errorID][vernacular] !== undefined) {
            $("#" + elementId + "_error").text(err_message[errorID][vernacular]);
        } else {
            $("#" + elementId + "_error").text(err_message[errorID]['eng']);
        }


    }
}

function checkIfExistInSelectList(selectListId, searchKey) {
    var exists = false;

//    $('#' + selectListId + 'option').each(function () {
//      alert("kapil");;
//        if (this.value === searchKey) {
//            exists = true;
//            return exists;
//        }
//    });


    var x = document.getElementById(selectListId);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x.options[i].value === searchKey) {
            exists = true;
            return exists;
        }

    }
    return exists;
}

/*New code starts : Reena Rana 17-12-2018  reset the vernacular fields*/
function resetVernicularField(VernacFieldsArray,lang) {    
    try {
        /*Empty the vernacular fields */
       
        for (var i = 0; i < VernacFieldsArray.length; i++)
            $('#' + VernacFieldsArray[i]).val(""); 

        try {
            setLanguage(lang);
        }
        catch (err) {

        }

    }
    catch (err) {
        console.log(err);
    }
    }
/*New code ends : Reena Rana 17-12-2018 reset the vernacular fields*/




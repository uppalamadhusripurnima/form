var valid = 0;
$(function(){
    $("span").hide();

});
function addDetails()
{
    valid = 0;
    $("span").hide();
    var validate = validateDetails();
    if(validate)
    {
        postTheData();
    }
    
}
function validateDetails()
{
    validateFirstname();
    validateFullname();
    validateDesignation();
    validateEmployeeId();    
    validateReasonsforIssues();    
    validateEmployeeMobileNumber();
    validateEmployeeEmergencyNumber();
    validateEmailId();
    validateBloodGroup();
    if(valid == 1)
    {
        return false;
    }
    return true;
}
function validateFirstname()
{
   if(checkNull("firstname"))
   {
        valid = 1;
        showError("errorfirstname", "firstname");
   }
}
function validateFullname()
{
   if(checkNull("fullName"))
   {
       valid = 1;
       showError("errorfullname", "fullName");
      
   }
}
function validateDesignation()
{
    if(checkNull("designation"))
   {
       valid = 1;
       showError("errorfordesignation", "designation");
      
   }
}
function validateEmployeeId()
{
    if(checkNull("employee-Id"))
   {
       valid = 1;
       showError("errorforemployeeId", "employee-Id");
      
   }
     else if(checkNumbersOnly("employee-Id")) {
        valid = 1;
        showError("errorforemployeeId", "employee-Id");
    
      }
      else if(checkLength("employee-Id", 7)) {
        valid = 1;
        showError("errorforemployeeId", "employee-Id");
    
      }

}
function validateBloodGroup()
{   
    // const value = document.validation.blood;
    // for (var i=0; i<value.length; i++) {
    //     if (value[i].checked)
    //        return;
    //  }
    // valid = 1;
    // showError("errorEmployeeBloodGroup", "");
    if(checkNull("blood"))
    {
        valid = 1;
        showError("errorEmployeeBloodGroup", "blood");
       
    }  
}
 function validateReasonsforIssues()
{
    if(checkNull("issues"))
   {
       valid = 1;
       showError("errorMessageForReasonsforIssues", "issues");
      
   }
}
function validateEmailId()
{
    if(checkNull("email"))
   {
       valid = 1;
       showError("errorMessageEmailID", "email");
      
   }
   else if(checkEmail("email")) {
    valid = 1;
    showError("errorMessageEmailID", "email");
       
   }
}

function validateEmployeeMobileNumber()
{
    if(checkNull("mobile"))
   {
       valid = 1;
       showError("errorMessageForEmployeeMobileNumber", "mobile");
      
   }
     else if(checkLength("mobile", 10)) {
        valid = 1;
        showError("errorMessageForEmployeeMobileNumber", "mobile");
    
      }
}
function validateEmployeeEmergencyNumber()
{
    if(checkLength("emergency", 10)) 
    {
        valid = 1;
        showError("errorMessageForEmployeeEmergencyContactNumber", "emergency");
    
      }
}

function checkNull(id)
{
    const value = $(`#${id}`).val();
    if(value == null || value == '')
    {
        return true;
    }
    return false;
}
function checkNumbersOnly(id)
{
    const pattern="/^[0-9]+$/;"
    const value=$(`#${id}`).val();
    if(value.match(pattern))
    {
        return true;
    }
    return false;
    
}
function checkLength(id, length)
{
    const value=$(`#${id}`).val();
    if(value.length != length)
    {
        return true;
    }
    return false;
}
function checkEmail(id)  {
    
   const valid=$(`#${id}`).val();
    const valid="/^([A-Z]|[a-z])+\@virtusa.com$/";
    if(value.match(pattern))     {
        return true;
   }
    return false;
    }

function showError(spanId, inputId)
{
    $(`#${spanId}`).show();
    $(`#${inputId}`).addClass('error');
}

function postTheData()
{
    console.log("Finally inside posting the data");
    const firstName = $("#firstName").val();
    const fullName = $("#fullName").val();
    const formDetails = {
        "firstName" : firstName,
        "fullName" : fullName
    }
    const data = JSON.stringify(formDetails);
    $.ajax({
        type: "POST",
        url: "https://application-form-fd16d.firebaseio.com/ApplicationIds.json",
        data: data,
        success : function(data)
        {
            console.log("In success");
        },
        error : function(err)
        {
            console.log(err);
        }
      });
}

$(document).ready(function(){
    $('#container #form-part #sign-up-form h5').hide();
    $('#container #form-part #sign-up-form .icon-error').hide();
    $('#container #form-part #sign-up-form .fill-it').css('margin-bottom', '15px');
    let fNameError=true;
    $('#container #form-part #sign-up-form #f-name').keyup(function(){
        validateFName();
    });
    function validateFName(){
        let fNameValue=$('#container #form-part #sign-up-form #f-name').val();
        if (fNameValue==''){
            $('#container #form-part #sign-up-form #missing-message-1').show();
            $('#container #form-part #sign-up-form #error-1').show();
            $('#container #form-part #sign-up-form #f-name').attr('placeholder','');
            $('#container #form-part #sign-up-form #f-name').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-1').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #f-name').css('margin-bottom', '0px');
            fNameError=false;
            return false;
        }
        else{
            $('#container #form-part #sign-up-form #missing-message-1').hide();
            $('#container #form-part #sign-up-form #error-1').hide();
            $('#container #form-part #sign-up-form #f-name').attr('placeholder','First Name');
            $('#container #form-part #sign-up-form #f-name').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #f-name').css('border', '1px solid var(--dark-blue)');
        }
    }
    let lNameError=true;
    $('#container #form-part #sign-up-form #l-name').keyup(function(){
        validateLName();
    });
    function validateLName(){
        let lNameValue=$('#container #form-part #sign-up-form #l-name').val();
        if (lNameValue==''){
            $('#container #form-part #sign-up-form #missing-message-2').show();
            $('#container #form-part #sign-up-form #error-2').show();
            $('#container #form-part #sign-up-form #l-name').attr('placeholder','');
            $('#container #form-part #sign-up-form #l-name').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-2').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #l-name').css('margin-bottom', '0px');
            lNameError=false;
            return false;
        }
        else{
            $('#container #form-part #sign-up-form #missing-message-2').hide();
            $('#container #form-part #sign-up-form #error-2').hide();
            $('#container #form-part #sign-up-form #l-name').attr('placeholder','Last Name');
            $('#container #form-part #sign-up-form #l-name').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #l-name').css('border', '1px solid var(--dark-blue)');
        }
    }
    let passError=true;
    $('#container #form-part #sign-up-form #password').keyup(function(){
        validatePassword();
    });
    function validatePassword(){
        let passValue=$('#container #form-part #sign-up-form #password').val();
        if (passValue.length==0){
            $('#container #form-part #sign-up-form #missing-message-4').show();
            $('#container #form-part #sign-up-form #error-4').show();
            $('#container #form-part #sign-up-form #password').attr('placeholder','');
            $('#container #form-part #sign-up-form #password').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-4').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #password').css('margin-bottom', '0px');
            passError=false;
            return false;
        }
        else if ((passValue.length>0)&&(passValue.length<=5)){
            $('#container #form-part #sign-up-form #missing-message-4').text('Password is too short.')
            $('#container #form-part #sign-up-form #missing-message-4').show();
            $('#container #form-part #sign-up-form #password').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-4').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #password').css('margin-bottom', '0px');
            passError=false;
            return false;
        }
        else{
            $('#container #form-part #sign-up-form #missing-message-4').hide();
            $('#container #form-part #sign-up-form #error-4').hide();
            $('#container #form-part #sign-up-form #password').attr('placeholder','Password');
            $('#container #form-part #sign-up-form #password').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #password').css('border', '1px solid var(--dark-blue)');
        }
    }
    let emailError=true;
    $('#container #form-part #sign-up-form #email').keyup(function(){
        validateEmail();
    });
    function validateEmail(){
        let emailValue=$('#container #form-part #sign-up-form #email').val();
        let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (emailValue==''){
            $('#container #form-part #sign-up-form #missing-message-3').show();
            $('#container #form-part #sign-up-form #error-3').show();
            $('#container #form-part #sign-up-form #email').val('email@example/com');
            $('#container #form-part #sign-up-form #email').css('color', 'var(--red-color');
            $('#container #form-part #sign-up-form #email').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-3').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #email').css('margin-bottom', '0px');
            emailError=false;
            return false;
        }
        else if (!(regex.test(emailValue))){
            $('#container #form-part #sign-up-form #missing-message-3').show();
            $('#container #form-part #sign-up-form #error-3').show();
            $('#container #form-part #sign-up-form #email').css('border', '1px solid var(--red-color)');
            $('#container #form-part #sign-up-form #missing-message-3').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #email').css('margin-bottom', '0px');
            passError=false;
            return false;
        }
        else{
            $('#container #form-part #sign-up-form #missing-message-3').hide();
            $('#container #form-part #sign-up-form #error-3').hide();
            $('#container #form-part #sign-up-form #email').attr('placeholder','Email');
            $('#container #form-part #sign-up-form #email').css('color', 'var(--dark-blue');
            $('#container #form-part #sign-up-form #email').css('margin-bottom', '15px');
            $('#container #form-part #sign-up-form #email').css('border', '1px solid var(--dark-blue)');
        }
    }
    $('#container #form-part #sign-up-form #submit-btn').click(function(){
        validateFName();
        validateLName();
        validatePassword();
        validateEmail();
        if(fNameError&&lNameError&&passError&&emailError){
            return true;
        }
        else{
            return false;
        }
    });
});
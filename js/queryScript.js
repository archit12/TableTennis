$(document).ready(function(){
        $('#querySubmitButton').click(function(){
            var contact = document.getElementById('emailTextBox').value;
            var query = document.getElementById('queryTextArea').value;
            if(contact!=='' && query!=='')
                $('.query').html("Sending...Please Wait");
             $.ajax({
                type : 'post',
                url : './query.php',
                data : {
                    contact : contact,
                    query : query
                }
             }).done(function(message){
                $('.query').css('background-color','rgb(245, 245, 164)');
                $('.query').css('color','black');
                console.log(message);
                if (message == -1) {
                    alert("Enter valid contact details");
                }
                else if (message == -2) {
                    alert("Enter valid query");
                }
                else {
                    $('.query').html('Query Submitted!<br/> We will reach you shortly...');
                }
             });
        });
    });
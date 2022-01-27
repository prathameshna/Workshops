$(document).ready(()=>{

    $('input[type="button"]').click(()=>{
        var name=$("input[name='username']").val();
        var password=$("input[name='password']").val();

        if(name=='' && password==''){
            alert("username or password is not entered.");
        }
        else{
            $.ajax({
                url:"https://mocki.io/v1/bedd9c53-2861-4952-ad82-ec38656d4814",
                method:"GET",
                success:function(result){
                    
                    if(result.username==name && result.password==password){
                        $(location).attr('href',"../html/register.html")
                    }
                },
                error:(result)=>{
                    alert("Something went wrong");
                }
            });
        }
        
    });
    
})
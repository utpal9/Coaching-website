$(function () {

    $('#myform').submit(function(e){
        e.preventDefault();
        //alert($('.form-select').val())
        
        //alert($(this).children('option:selected').data('id'));

        if($('.form-select').val() != "select" ){

            let user = {                 

                "name":$('#name').val() ,
                "email":$('#email').val(),
                "phonenumber":$('#phonenumber').val(),
                "course":$('.form-select').val()
    
            }

            console.log(user);

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            }
            console.log(options);
            let fetchRes = fetch("http://localhost:3000/test/enrollment", options);
            fetchRes.then(res =>res.json()).then(d => {
                    console.log(d)
                })

        
        }
        
      });


            let loopInd  = 0 ;
            let fetchRes = fetch("http://localhost:3000/test/userEnroll");
            fetchRes.then(res =>res.json()).then(d => {
                    console.log(d)
                    // loopInd = d.total ;
                    // for(i = 1 ; i <= loopInd ; i++)
                    // {
                    //     $('.student').html(i)
                    // }

                    $('#student').html(d.total);

                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                })



               



           

            

      
    $("a[class='Update']").click(function () { // for enroll of course ...
        $("#mypopup").modal("show");
        return false;
    });


});
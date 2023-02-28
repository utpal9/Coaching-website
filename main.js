window.onload = function(){
    var myForm = document.getElementById("myform");
    myForm.onsubmit = function(e){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var course = document.getElementById("course").value;
        e.preventDefault();
        // alert('hddd');

        // console.log("name:",name);

        let user = {                 

            "name":name ,
            "email":email,
            "phonenumber":phonenumber,
            "course":course

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
        let fetchRes = fetch("http://localhost:3000/test/post-enquiry", options);
        fetchRes.then(res =>res.json()).then(d => {
                console.log(d)
            })


    }

   
}

// $(documnet).ready(function(){

//     let courseText = $(".form-select").text() ;
//     if(courseText === "select")
//     console.log("Yes it is");

// })



// $(function () {

//     // let courseText = $(".form-select").text() ;
//     // console.log(courseText[0]);

//     $('select').change(function(){
//         alert($(this).children('option:selected').data('id'));
//       });
      
//     $("a[class='Update']").click(function () { // for enroll of course ...
//         $("#mypopup").modal("show");
//         return false;
//     });
// });

// jQuery(document).ready(function() {
//     // executes when HTML-Document is loaded and DOM is ready
//    console.log("document is ready");
     
     
//      jQuery('.enroll[href^=#]').click(function(e){
//        e.preventDefault();
//        var href = jQuery(this).attr('href');
//        jQuery(href).modal('toggle');
//      });
   
     
   
//    });  

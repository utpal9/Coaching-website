$(function(){

    let fetchCourse = fetch("http://localhost:3000/faculty/show-faculty");
    fetchCourse.then(res =>res.json()).then((d)=>{
        for(f of d.data)
        {
  
            console.log(f);
            let faculty = `<div class="col-md-3 mb-3" data-aos="fade-up" >
            <div class="fac-card card py-4 border-0 shadow-lg" >
              <div class="fac-card-body card-body card-img-top align-items-center">
              <img class="fac-img" src="../assets/facultyImage.jpg" width="200">
                <h5 class="card-title" style="text-align: center; font-size:1.7rem">${f.facultyName}</h5>
                <hr>
                <p class="card-text">${f.facultyDescription}</p>
              </div>
            </div>
          </div>`

            $('.facultyRow').append(faculty);

        }
    });
})
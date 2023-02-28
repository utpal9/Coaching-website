$(function(){

    let fetchCourse = fetch("http://localhost:3000/courses/show-course");
    fetchCourse.then(res =>res.json()).then((d)=>{
        for(c of d.data)
        {
  
            let course = `<div class="col-md-4 mb-3" data-aos="fade-up" style="align-items:center">
            <div class="card courseCard">
            <img src="../assets/subject.jpg">
              <div class="card-body card-img-top" style="justify-content:center">
                <h5 class="card-title" style="text-align: center;">${c.courseName}</h5>
                <hr>
                <p class="card-text" style="text-align: center;">${c.courseDescription}</p>
              </div>
            </div>
          </div>`
            $('.courseRow').append(course);

        }
    });



});
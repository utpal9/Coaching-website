$(function () {
  
    let fetchImages = fetch("http://localhost:3000/test/images"); // fetching image from server ...
        fetchImages.then(res =>res.json()).then((d)=>{
            for(img of d.data)
            {
                let url = img.imageUrl.substring(3);
                let imgColumn = `<div class="col-md-4 mb-4">
                <a href="${url}"><img class="img-fluid" src="${img.imageUrl}" alt="img1" width="200" height="200"></a>
              </div>
              `;
              //console.log(imgColumn);
              $('.imgRow').append(imgColumn);
            }

           
        })


       $('#myform').submit(function(event){ // uploading image on server ...
            event.preventDefault() ;
            const data = new FormData(this);
            let options = {
                    method: 'POST',
                    body: data
                }
                
                let fetchRes = fetch("http://localhost:3000/test/uploadImages", options);
                fetchRes.then(res =>res.json()).then(d => {
                        console.log(d)
                })

       });

/*--------------------------------------------------------------------------------------------------------*/



$('#videoform').submit(function(event){ // uploading video on server ...
    event.preventDefault() ;

    const data = new FormData(this);
    let options = {
            method: 'POST',
            body: data
        }
        
        let fetchRes = fetch("http://localhost:3000/video/uploadVideos", options);
        fetchRes.then(res =>res.json()).then(d => {
                console.log(d)
        })

});

/*---------------------------------------------------------------------------------------------------------*/

let videoColumn ;

let fetchVideos = fetch("http://localhost:3000/video/videos"); // fetching image from server ...
fetchVideos.then(res =>res.json()).then((d)=>{
    for(video of d.data)
    {
        if(video.videoUrl[0] === '.')
        {
             videoColumn = `<div class="col-md-4 mb-3">
            <video class="video-col" width="400" height="400" controls>
            <source src="${video.videoUrl}" type="video/mp4">
            </video>`
        }
        else
        {
            videoColumn = `<div class="col-md-4 mb-3">
            <iframe src="${video.videoUrl}" width="400" height="400" scrolling="no"></iframe>
          </div>`;
          console.log(videoColumn);
        }
       
      $('.videorow').append(videoColumn);
    }

})


$('.imgRow').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{enabled:true}
   
});




});
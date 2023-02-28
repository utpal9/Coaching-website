$(function(){

    let fetchNotification = fetch("http://localhost:3000/notify/show-notification"); // fetching image from server ...
    fetchNotification.then(res =>res.json()).then((d)=>{
            for(img of d.data)
            {
            let notify = `<p>${img.notification}</p>`
            $('.notify').append(notify);
            }
        });
});
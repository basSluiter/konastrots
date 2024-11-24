function sendMail() {
    let params = {
        name : document.getElementById("fname").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("telefoonnummer").value,
        country : document.getElementById("land").value,
        city : document.getElementById("woonplaats").value,
        subject : document.getElementById("onderwerp").value,
        message : document.getElementById("bericht").value,
   
    }
    emailjs.send("service_q2nllnk","template_echqpmo", params).then(alert("Email Vertuurd!!"))
}
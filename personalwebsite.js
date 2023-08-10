function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };

const serviceId="service_yh8a0od";
const templateId="template_dts0p7a";
emailjs.send(serviceId,templateId,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully")
    }
)
.catch(err=>console.log(err));
}
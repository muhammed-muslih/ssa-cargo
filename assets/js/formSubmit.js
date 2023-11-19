const sendMail = () => {
    var isValid = false;
    var isNameValid = false;
    var isEmailValid = false;
    var isSubjectValid = false;
    var isMessageValid = false;
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    if(name !== '' && name.length > 3){
        isNameValid = true;
    }
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    if(email!= '' && isValidEmail(email)){
        isEmailValid = true;
    }
    if(subject!= '' && subject.length > 5){
        isSubjectValid = true;
    }
    if(message!= '' && message.length >8){
        isMessageValid = true;
    }

    if(isNameValid && isEmailValid && isSubjectValid && isMessageValid){
        document.querySelector('#error-message').textContent =''
        isValid = true
    }else{
        document.querySelector('#error-message').textContent ='please fill all fields'
    }

    var params = {
        name,
        email,
        subject,
        message 
    }
    const SERVICE_ID = "service_c6bzpg9"
    const TEMPLATE_ID = "template_mqs247m"
    isValid&&emailjs.send(SERVICE_ID,TEMPLATE_ID,params)
    .then((res)=> {
        console.log('response :',res);
        if(res.status === 200) {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            Toastify({
                text: "Your Email Sent Successfully",
                duration: 4000,
                close: true,
                gravity: "top",
                position: "right",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
        }else {
            Toastify({
                text: "Something went wrong! Email is not sent",
                duration: 4000,
                close: true,
                gravity: "top",
                position: "right",
                style: {
                  background: "linear-gradient(45deg, #ff5733, #ff0000);",
                },
              }).showToast();
        }
    })
    .catch((err) => {
        Toastify({
            text: "Something went wrong! Email is not sent",
            duration: 4000,
            close: true,
            gravity: "top", 
            position: "right", 
            style: {
              background: "linear-gradient(45deg, #ff5733, #ff0000);",
            },
        }).showToast();
    })
}
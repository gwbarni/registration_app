const password = document.getElementById("Password")
const password2 = document.getElementById("Password2")
const button = document.querySelector("button")

const controllpasswd = (v1, v2) =>{
    return v1===v2
}

button.addEventListener("click", (event)=>{
    if (controllpasswd(password.value, password2.value)) {
        alert("A jelszó nem egyezik")
    }
})
// Kullanıcı adı ve şifre yeri hareketi

const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
        parent.classList.remove('focus');
    }
    
}

inputs.forEach(inputs => {
    inputs.addEventListener('focus', focusFunc);
    inputs.addEventListener('blur', blurFunc);
})




// Şifreyi göster gizle

const passwordInput = document.getElementById("passwordInput");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        togglePassword.src = isPassword
            ? "design/image/eye-open.svg"
            : "design/image/eye-closed.svg";
    });
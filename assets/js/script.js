let loginBtn = document.getElementById("login")
let usernameEl = document.getElementById("username")
let passwordEl = document.getElementById("password")
document.title = ("login Page")

loginBtn.addEventListener("click", function(){
    // حطينا الفاليو كرمال يعطيني اللي كتبنا بقلبن بدال التاغ تبعن
    let accessUser = usernameEl.value 
    let accessPass = passwordEl.value
    console.log(accessUser)
    console.log(accessPass)
})
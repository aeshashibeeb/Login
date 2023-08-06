const accounts = [['admin01','123'],['admin02','234'],['admin03','345']]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = ("login Page")

loginBtn.addEventListener("click", function(){
    // حطينا الفاليو كرمال يعطيني اللي كتبنا بقلبن بدال التاغ تبعن
    let accessUser = usernameEl.value 
    let accessPass = passwordEl.value
    let found = false
    for(let i in accounts){
        if(accessUser == accounts[i][0] && accessPass == accounts[i][1]){
            alert(`welcome ${accessUser}`)
            found = true
        }
    }
    if(found == false){
        alert('invalid username or password')
    }
    // for(let i =0; i<=accounts.length;i++){
    //     if(accessUser == accounts[i][0] && accessPass == accounts[i][1]){
    //         console.log (`welcome ${accessUser}`)
    //     }
    // }

})
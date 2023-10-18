// if (localStorage.length == false) {
// --------------------------------------------------------
let USERS = ""

if (localStorage.length == false) {
    USERS = []

    USERS.push({
        id: USERS.length + 1,
        name: "erling",
        email: "erling@gmail.com",
        password: "1212",
        imgSrc: "https://cdn-sfo.socy.cloud/PRAS/v1/_20/p/202303/upload/PRAS/uf_16788785694KoOHBrCq7rr63TdyzAQnHGMzP.jpg"
    })

    USERS.push({
        id: USERS.length + 1,
        name: "bob",
        email: "bob@gmail.com",
        password: "1212",
        imgSrc: "https://images.sk-static.com/images/media/img/col4/20220822-131944-378138.jpg"
    })

    USERS.push({
        id: USERS.length + 1,
        name: "jack",
        email: "jack@gmail.com",
        password: "1212",
        imgSrc: "https://yt3.googleusercontent.com/ZJGwKd4H-lsmPo6cZ2WJ7aaU6uRJYOAmj-MDIDy_Se0sUu3iM41hG3KXgVz690DeEPRqxaKx=s900-c-k-c0x00ffffff-no-rj"
    })

    USERS.push({
        id: USERS.length + 1,
        name: "stasy",
        email: "stasy@gmail.com",
        password: "1212",
        imgSrc: "https://media.allure.com/photos/6226579dcdd50c95c4e744c5/4:3/w_1536,h_1152,c_limit/french%20bob.jpg"
    })

    USERS.push({
        id: USERS.length + 1,
        name: "robin",
        email: "robin@gmail.com",
        password: "1212",
        imgSrc: "https://flxt.tmsimg.com/assets/230638_v9_bb.jpg"
    })
} else {
    USERS = JSON.parse(localStorage.getItem("users"))
}

// -------------------------------------------------------

let reg = document.querySelector('.registrate')
let login = reg.querySelector('#logIn')
let registrate = reg.querySelector('#registrate')
let form = reg.querySelectorAll('#info input')
let forgot = reg.querySelector("#forgotPassword")

// ------------------------------------------------------

let regist = document.querySelector('.reg')
let reForm = regist.querySelectorAll("#info input")
let check = regist.querySelector("#registrate")

// ------------------------------------------------------------

forgot.onclick = (event) => {
    let a = prompt("Введите своё имя чтобы узнать пороль")
    let check = JSON.parse(localStorage.getItem("users"))
    check.forEach(item => {
        if (item.name == a) {
            alert(`Ваш пороль ${item.password}`)
        }
    })
    event.preventDefault()
}

login.onclick = () => {
    let a = []
    form.forEach(item => {
        if (item.value == "") {
            item.parentElement.classList.add("error")
        } else {
            a.push(item.value)
        }
    })
    if (a.length >= 2) {
        let check = JSON.parse(localStorage.getItem("users"))
        for (let key of check) {
            if (key.name == a[0] && key.password == a[1]) {
                localStorage.setItem("registeredUser", JSON.stringify(key.id))
                let a = JSON.parse(localStorage.getItem("users"))
                a.forEach(item => item.pin = 1212)
                localStorage.setItem("users", JSON.stringify(a))
                window.location = "./src/html/first.html"
            }
        }
    }
}

form.forEach(item => {
    item.oninput = () => {
        if (item.value != "") item.parentElement.classList.remove("error")
        else item.parentElement.classList.add("error")
    }
})

registrate.onclick = () => {
    reg.classList.add("none")
    regist.classList.remove("none")
}

// --------------------------------------------------------

check.onclick = () => {
    let a = []
    reForm.forEach(item => {
        if (item.value == "") {
            item.parentElement.classList.add("error")
        } else {
            a.push(item.value)
        }
    })
    if (a.length >= 4 && a[2] == a[3]) {
        USERS.push({
            id: USERS.length + 1,
            name: a[0],
            email: a[1],
            password: a[2],
        })
        localStorage.setItem("users", JSON.stringify(USERS))
        reg.classList.remove("none")
        regist.classList.add("none")
        reForm.forEach(item => item.value = "")
    }
}

reForm.forEach(item => {
    item.oninput = () => {
        if (item.value != "") {
            item.parentElement.classList.remove("error")
        }
    }
})

    // ---------------------------------------------------------


// } else {
    // window.location = "./src/html/first.html"
// }

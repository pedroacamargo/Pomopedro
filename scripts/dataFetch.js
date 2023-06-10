const profilePlace = document.querySelector(".profile-pic")
let idLogged = 1;

async function fetchUser() {
    let image;
    let user = {}
    const db = '../data/user.json'

    // This code will fetch the JSON file in /data and give an array of objects (all users information)
    await fetch(db)
    .then(res => {return res.json()})
    .then(data => {user = data})
    .catch(err => {console.error("An error was spotted: " + err)});

    console.log(user)
    image = user[idLogged - 1].profileImage
    profilePlace.innerHTML = `<img src="${image}">`

    return user;
}

fetchUser();
let url = 'https://api.github.com/users'

let arr = []
let fetchingUrl = fetch(url)
                    .then(res => res.json())
                    .then((data) => {
                        let myData = data  
                        gettingUser(myData)
                    })
                    
                    let main = document.getElementById('mainID')
                    let searchbutton = document.getElementById('searchID')
                    let searchValue = document.getElementById('searchInput')
                    
function gettingUser(myData){
    let users = myData.map(data =>
        ` <div class="cards">
        <div class="image">
            <img src="${data.avatar_url}" alt="">
        </div>
        <div class="name">
            <p class="userName"> ${data.login} </p>
            </div>
        <div class="idClass">
            <p class="id"> ${data.node_id} </p>
        </div>
            <div class="followers">
                <a href="${data.followers_url}"> Followers </p>
                <a href="${data.following_url}"> Following </a>
                <a href="${data.repos_url}"> Repos </a>  
            </div>

        </div>
    </div>`
    ).join('')
    main.innerHTML = users
}


function searchUser(){
    let paraElement = document.getElementsByClassName('userName')
    let getUser = url + `/${searchValue.value}`
    let searchUser = fetch(getUser)
    .then((res) => res.json())
    .then((data) =>{
        arr.push(data)
       gettingUser(arr)
       if (!data.login){
        main.innerHTML = `<img class="notFound" src="/assets/not found.png">`
    }
    })
}


searchbutton.addEventListener('click', searchUser)
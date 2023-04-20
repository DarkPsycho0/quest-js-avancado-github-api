document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData => {
        let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perfil do usuário">
        <div class"data">
            <h1>${userData.name ?? 'Não possui nome cadastrado'}</h1>
            <p>${userData.bio ?? 'Não possui bio cadastrado'}</p>
        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo
    })
}
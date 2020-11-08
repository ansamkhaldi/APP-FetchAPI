const url = 'https://randomuser.me/api/?nat=gb&results=20';
const users = document.querySelector('.users');
const userData = [];

    fetch(url,{
        method: 'GET',
        credentials: 'same-origin',    
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        userData.push(...data.results);
        const markup = userData.map(user => {
        return `
        <li class="users_item">
            <div class="user">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="user__avatar">
                
                    <p >${user.name.first} ${user.name.last}<span> / ${user.gender}</span></p>
                    
                    <address">
                        ${user.location.street.name}  ${user.location.street.number} <br>
                        ${user.location.city} <br>
                        ${user.location.state} <br>
                        ${user.location.postcode}
                    </address>
                    <a href="#" >
                    ${user.phone}
                    </a>
                    <br>
                    <a href="#">
                    ${user.email}
                    </a>
            
            </div>
        </li>
    `;
}).join('');

      users.innerHTML = markup;  
})

const inputSearch = document.querySelector("#search");
const submitBtn = document.querySelector('button[type="submit"]');
const Ul = document.querySelector(".list");

console.log(inputSearch, submitBtn);

submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    const searchVal = inputSearch.value;

    const url=`https://api.giphy.com/v1/gifs/search?api_key=BDINrHbi67yRErkQD3bbNeeIR2v0sR8L&q=${searchVal}&limit=24`;
    fetch(url,{
        method: 'GET',
        credentials: 'same-origin',    
    })
    .then(res => res.json())
    .then(res => {
        res.data.forEach(gif => {
            const  image = document.createElement('img');
            image.src=gif.images.fixed_width.url;
            image.alt=gif.images.title;
            image.style.border = "2px solid #000";
            image.width = '200';
            image.height = '150';
            image.style.margin="5px"
            Ul.appendChild(image);
            console.log('Success:', gif);
        });
        
    })
    .catch(Error=>{
        console.log(Error);
    })

 
})
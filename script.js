let text = document.getElementById('text'),
    enter = document.getElementById('enter'),
    audio = document.getElementById('audio');
    enter.addEventListener('click', ()=>{
        audio.setAttribute('src', `${text.value}`);
    });


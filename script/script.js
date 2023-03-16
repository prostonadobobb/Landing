for (i = 0; i < document.querySelectorAll('span').length; i++) {
    
    
    let el = document.querySelectorAll('span')[i];
    
    //setInterval
    setTimeout (() => {
        el.classList.add('active');
    }, i * 300)

    console.log(el)
}


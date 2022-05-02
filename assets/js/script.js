navigation = document.querySelector('.navigation').querySelectorAll('a');
navigation.forEach(element => {
    element.addEventListener('click', function() {
        navigation.forEach(navigation => navigation.classList.remove('active'))
        this.classList.add('active')
    })
})
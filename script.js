const click = document.querySelectorAll('.title_btn')



click.forEach(btn => {
    btn.addEventListener('click', () => {
        click.forEach(sub => {
            sub.classList.remove('active')
        })
        btn.classList.toggle('active')
    })
})



window.onscroll = function() {
    const navTitle = document.querySelector("nav h2");
    const nav = document.querySelector("header");
    const navHeight = window.getComputedStyle(nav).height.replace("px", "") / 1.5;

    if (document.documentElement.scrollTop > navHeight || document.body.scrollTop > navHeight) {
        navTitle.textContent = "Iwan Haryatno";
    } else {
        navTitle.textContent = "Portfolio";
    }
}

window.onload = function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwGX4MasyXxNOlNkJ4tSX8ZLdjnG8676fs9bTTkRyMno9f9Eo7fko9ZHHd8NsUilSyuew/exec'
    const form = document.forms['contact-form']
    const submitForm = document.getElementById('submit-contact');
    const contactInfo = document.getElementById('contact-info');

    form.addEventListener('submit', e => {
        contactInfo.style.display = 'none';
        e.preventDefault()
        submitForm.toggleAttribute('disabled');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                submitForm.toggleAttribute('disabled');
                contactInfo.classList.add('info-success');
                contactInfo.classList.remove('info-failed');
                contactInfo.innerHTML = 'Pesan anda <strong>Berhasil</strong> dikirim!';
                contactInfo.style.display = 'block';
                form.reset();
            })
            .catch(error => {
                submitForm.toggleAttribute('disabled');
                contactInfo.classList.add('info-failed');
                contactInfo.classList.remove('info-success');
                contactInfo.style.display = 'block';
                contactInfo.innerHTML = 'Pesan anda <strong>Gagal</strong> dikirim! Periksa koneksi internet anda dan coba lagi';
                contactInfo.style.display = 'block';
            })
    });
}

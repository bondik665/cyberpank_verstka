document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.file-input-wrapper');
    const texts = wrapper.querySelectorAll('.text');
    const content = "Прикрепить файл\A png/jpg/webp";
    const lines = content.split('\A');

    texts[0].textContent = lines[0];
    texts[1].textContent = lines[1];
});
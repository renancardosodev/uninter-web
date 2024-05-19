// Script para inserir o header e o footer em todas as páginas

document.addEventListener('DOMContentLoaded', function() {
    injectHeaderFooter();
});

function injectHeaderFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(content => {
            document.querySelector('#header').innerHTML = content;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(content => {
            document.querySelector('#footer').innerHTML = content;
        });
}

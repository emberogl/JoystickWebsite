document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.point').forEach(point => {
        point.addEventListener('mouseover', () => {
            document.querySelector(`#${point.getAttribute('data-content')}`).style.opacity = '1';
        });
        point.addEventListener('mouseout', () => {
            document.querySelector(`#${point.getAttribute('data-content')}`).style.opacity = '0';
        });
    });
});


function fetchAndUpdate() {
    fetch('/output.txt?' + new Date().getTime())
        .then(response => response.text())
        .then(data => {
            var textContent = document.getElementById('text-content');
            textContent.className = "prettyprint";
            textContent.innerText = data;
            PR.prettyPrint();
        })
        .catch(error => console.log("Error:", error));
};

setInterval(fetchAndUpdate, 10);
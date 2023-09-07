document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('mouseover', () => {
        document.querySelector(`#${point.getAttribute('data-content')}`).style.display = 'block';
    });
    point.addEventListener('mouseout', () => {
        document.querySelector(`#${point.getAttribute('data-content')}`).style.display = 'none';
    });
});

fetch('/output.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('text-content').innerText = data;
    })
    .catch(error => console.log("Error:", error));
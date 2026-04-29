function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'block';
    });
});

// Modal sluiten bij klikken op het kruisje
function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

    

    





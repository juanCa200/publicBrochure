document.addEventListener("mousemove", function(e) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Mapeamos la posición del cursor tomando como origen (0,0) el centro de la pantalla
    const mouseX = e.clientX - (width / 2);
    const mouseY = e.clientY - (height / 2);

    // Seleccionamos los paneles asignados para el movimiento técnico
    const panels = document.querySelectorAll('.tech-layer');

    panels.forEach(panel => {
        // Obtenemos el factor de velocidad/dirección individual de cada panel
        const speed = panel.getAttribute('data-speed');
        
        // Calculamos los pixeles exactos de desplazamiento (movimiento controlado y sutil)
        const x = (mouseX * speed) / 150;
        const y = (mouseY * speed) / 150;

        // Aplicamos la matriz de traslación fluida
        panel.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    });
});

 function switchMaterial(element) {
        document.querySelectorAll('.material-nav-card').forEach(card => card.classList.remove('active'));
        document.querySelectorAll('.spec-sheet-container').forEach(sheet => sheet.classList.remove('active-sheet'));
        
        element.classList.add('active');
        const targetId = element.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-sheet');
    }

    function filterCat(cat, event) {
        document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
        event.target.classList.add('active');
        
        document.querySelectorAll('.material-nav-card').forEach(card => {
            if(cat === 'all' || card.getAttribute('data-cat') === cat) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
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




    document.querySelectorAll('.index-item').forEach(item => {
        const trigger = item.querySelector('.index-item-trigger');
        
        trigger.addEventListener('click', (e) => {
            // 1. Manejo del Menú Desplegable (Acordeón)
            const isAlreadyOpen = item.classList.contains('menu-open');
            
            // Cerramos todos los otros menús abiertos
            document.querySelectorAll('.index-item').forEach(el => el.classList.remove('menu-open'));
            
            // Si no estaba abierto, lo abrimos
            if (!isAlreadyOpen) {
                item.classList.add('menu-open');
            }
            
            // 2. Manejo del Cambio de Imagen de Fondo (Lógica previa)
            const targetImageId = item.getAttribute('data-preview');
            if (targetImageId) {
                document.querySelectorAll('.machinery-img').forEach(img => img.classList.remove('active'));
                const activeImg = document.getElementById(targetImageId);
                if (activeImg) activeImg.classList.add('active');
            }
        });
    });

    function changeGalleryImage(thumbnailElement, newImageUrl) {
    // Localizar el contenedor "showcase" donde se hizo clic
    const showcase = thumbnailElement.closest('.sheet-visual-showcase');
    
    // Cambiar la imagen de fondo del contenedor principal con un ligero efecto de transición
    const mainDisplay = showcase.querySelector('.main-gallery-display');
    mainDisplay.style.backgroundImage = `url('${newImageUrl}')`;
    
    // Quitar la clase activa de las otras miniaturas de ESTA misma ficha
    showcase.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Añadir clase activa a la miniatura seleccionada
    thumbnailElement.classList.add('active');
}

function closeAnnouncement() {
    const overlay = document.getElementById('welcome-announcement-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        
        // Eliminamos el elemento después de la animación para optimizar rendimiento
        setTimeout(() => {
            overlay.remove();
        }, 400);
    }
}
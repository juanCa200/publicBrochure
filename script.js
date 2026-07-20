document.addEventListener("mousemove", function (e) {
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
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}




document.addEventListener("DOMContentLoaded", function() {
    const triggers = document.querySelectorAll('.index-item-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const parentItem = this.parentElement;
            
            // Opcional: Cerrar los demás si quieres que solo uno esté abierto a la vez
            document.querySelectorAll('.index-item').forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove('menu-open');
                }
            });

            // Abrir/cerrar el ítem actual
            parentItem.classList.toggle('menu-open');
        });
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


// Base de datos relacional para rellenar la tabla del modal dinámicamente
const databaseEspecificaciones = {
    'mat-weco': {
        titulo: "Tubería WECO® Diseño Integral",
        tabla: [
            { propiedad: "Presión de Trabajo (CWP)", valor: "6,000 a 20,000 PSI" },
            { propiedad: "Construcción", valor: "Forjada de Una Sola Pieza (Integral)" },
            { propiedad: "Extremos Disponibles", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Diámetros Nominales", valor: "1”, 1-1/2 Rastros, 2”, 3”, 4”" },
            { propiedad: "Tipo de Servicio", valor: "Estándar y Gas Agrio (NACE MR-01-75)" },
            { propiedad: "Longitudes Estándar", valor: "Desde 1 pie hasta 20 pies" }
        ]
    },
    'mat-coflexip': {
        titulo: "Tubería Weco® Diseño NPST®",
        tabla: [
            { propiedad: "Presión de Trabajo (CWP)", valor: "6,000 / 10,000 / 15,000 PSI" },
            { propiedad: "Construcción Estructural", valor: "Manufactura Compuesta No Integral" },
            { propiedad: "Fijación de Extremos", valor: "Roscados directamente al Tubo" },
            { propiedad: "Dimensiones", valor: "1” a 4” de diámetro" },
            { propiedad: "Rendimiento Relativo", valor: "Peso ligero, óptimo balance costo-beneficio" }
        ]
    },
    'mat-valves200': {
        titulo: "Juntas Giratorias Modelo LS",
        tabla: [
            { propiedad: "Rango de Tamaño", valor: "1” a 4” Flujo Completo" },
            { propiedad: "Presión Máxima Máxima", valor: "15,000 PSI CWP" },
            { propiedad: "Rodamientos", valor: "Doble Hilera de Bolas de Acero Endurecidas" },
            { propiedad: "Estilos de Configuración", valor: "Estilos 10, 20, 30, 40, 50, 60, 70, 80" },
            { propiedad: "Cualidad Dinámica", valor: "Rotación suave libre de 360 grados" },
            { propiedad: "Aplicación Crítica", valor: "Líneas de cementación, fracturamiento y pruebas" }
        ]
    },
    'mat-choke300': {
        titulo: "Juntas Giratorias Modelo Tsi",
        tabla: [
            { propiedad: "Rango de Diámetro", valor: "2”, 3” y 4”" },
            { propiedad: "Capacidad de Presión", valor: "10,000 a 20,000 PSI CWP" },
            { propiedad: "Sistemas de Aislamiento", valor: "Cámara estanca para protección de cojinetes" },
            { propiedad: "Conexiones de Entrada", valor: "Unión de Golpe Integral / Extremos Bridados" },
            { propiedad: "Fluido Operativo", valor: "Fluidos altamente abrasivos, lodos densos de perforación" }
        ]
    },
    'mat-manguerametalica': {
        titulo: "Especificaciones: LOOPS Modelos LS Weco® y Tsi Weco®",
        tabla: [
            { propiedad: "Tamaños", valor: "• Diseño LS en 2”<br>• Diseño TSi en 3”, 4”" },
            { propiedad: "Estilos", valor: "• 50-10, 50-50" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "• Tuerca Aleteada Weco Retirable" },
            { propiedad: "Otras Cualidades", valor: "• Muy Durable y de Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "• Procesos de Alta Presión y Abrasivos" }
        ]
    },
    "mat-coflexip-manguera": {
        titulo: "Especificaciones: MANGUERAS Coflexip®",
        tabla: [
            {
                propiedad: "Diámetros Internos (ID)",
                valor: "• 2”, 3”, 4” (Comúnmente utilizados)"
            },
            {
                propiedad: "Longitudes (Pies)",
                valor: "• 19’, 40’, 55’, 67’ y Mayores (Prefabricadas)"
            },
            {
                propiedad: "Tipos de Servicio",
                valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)"
            },
            {
                propiedad: "Rangos de Presión",
                valor: "5000, 10000, 15000, 20000 CWP"
            },
            {
                propiedad: "Extremos de Conexión",
                valor: "• Conexión Bridada API<br>• Conexión Roscada API<br>• Unión de Golpe (Weco)"
            },
            {
                propiedad: "Otras Cualidades",
                valor: "• Presenta estructura multicapa robusta<br>• Resistente a presiones y temperaturas extremas<br>• Su cubierta exterior termoplástica le ofrece alta protección química, térmica y contra el gas agrio<br>• No se expande, no se contrae, ni sufre latigazos (\"patadas\") al recibir golpes de ariete o flujos pulsantes<br>• Conformadas con revestimientos de Rilsan® (-20°C a 100°C) o Coflon® (130°C a 160°C continuos)<br>• Fabricadas según Estándar API 16C (para operaciones de Estrangulación y Ahogo)"
            },
            {
                propiedad: "Aplicación",
                valor: "• Líneas de control de pozos (estrangulación y ahogo)<br>• Pruebas de pozos superficiales<br>• Absorción de movimientos y vibraciones<br>• Operaciones de servicio extrapesado<br>• Conducción de fluidos abrasivos o corrosivos (lodos de perforación, cementación, inyección de nitrógeno y acidificación)"
            }
        ]
    },

    "mat-valvula-tapon": {
        titulo: "Especificaciones: Válvula de Tapón Modelo ULT Weco®",
        tabla: [
            { propiedad: "Tamaños", valor: "2”x1”, 2”x2”, 3”, 4”" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Otras Cualidades", valor: "• Última Generación en Válvulas de Tapón<br>• Reduce el Torque de Operación a cualquier Presión<br>• Posee Configuración Patentada de Tapón Flotante y Sello Dual con Carga Distribuida de manera Uniforme<br>• Muy Durable, Larga Vida Útil y de Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Procesos de Fractura, de Cementación y Altamente Abrasivos" }
        ]
    },

    "mat-valvula-tapon-dr": {
    titulo: "Especificaciones: Válvula de Tapón Modelo DR Weco®",
    tabla: [
        { propiedad: "Tamaños", valor: "2”, 3”" },
        { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
        { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
        { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
        { propiedad: "Otras Cualidades", valor: "• Provee Sello Dual Convencional a través de Configuración Simétrica de sus Componentes<br>• Funcionamiento Confiable y Seguro" },
        { propiedad: "Aplicación", valor: "Diversos Procesos Estándar de Alta Presión" }
    ]
}


};

function abrirModal() {
        document.getElementById('modalQuienes').style.display = 'flex';
    }

    function cerrarModal() {
        document.getElementById('modalQuienes').style.display = 'none';
    }

    // Cerrar si hacen clic fuera del contenido
    window.onclick = function(event) {
        const modal = document.getElementById('modalQuienes');
        if (event.target == modal) {
            cerrarModal();
        }
    }

function abrirModal3DSpecs(glbUrl, keyDatabase) {
    const modal = document.getElementById('modalSpecs3D');
    const title = document.getElementById('modalSpecsTitle');
    const tableBody = document.getElementById('modalSpecsTableBody');
    const contenedorVisor = document.getElementById('contenedorVisor3D');

    contenedorVisor.innerHTML = '<span class="pane-title-tag">VISTA INTERACTIVA 3D</span>';

    const datos = databaseEspecificaciones[keyDatabase];
    if (datos) {
        title.innerText = datos.titulo;
        tableBody.innerHTML = "";
        datos.tabla.forEach(fila => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${fila.propiedad}</td><td>${fila.valor}</td>`;
            tableBody.appendChild(tr);
        });
    }

    modal.classList.add('modal-active');

    // --- NUEVO: Configuración del Visor 3D con AR ---
    const nuevoViewer = document.createElement('model-viewer');
    nuevoViewer.id = "modalViewer3D";
    nuevoViewer.src = glbUrl;

    // Atributos de visualización
    nuevoViewer.setAttribute('camera-controls', '');
    nuevoViewer.setAttribute('auto-rotate', 'true');
    nuevoViewer.setAttribute('interaction-prompt', 'none');
    nuevoViewer.setAttribute('shadow-intensity', '1');
    nuevoViewer.setAttribute('bounds', 'tight');

    // Atributos de Realidad Aumentada
    nuevoViewer.setAttribute('ar', ''); // Habilita AR
    nuevoViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look'); // Compatibilidad total
    nuevoViewer.setAttribute('xr-environment', ''); // Mejora la iluminación en AR

    // Creamos el botón personalizado de AR dentro del visor
    const arButton = document.createElement('button');
    arButton.slot = "ar-button";
    arButton.innerText = "Ver en Realidad Aumentada";
    arButton.style.cssText = "background: var(--esip-orange); color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; position: absolute; bottom: 20px; left: 20px;";
    nuevoViewer.appendChild(arButton);

    nuevoViewer.style.width = "100%";
    nuevoViewer.style.height = "100%";
    nuevoViewer.style.display = "block";

    contenedorVisor.appendChild(nuevoViewer);
}

function cerrarModal3DSpecs() {
    const modal = document.getElementById('modalSpecs3D');
    const contenedorVisor = document.getElementById('contenedorVisor3D');

    modal.classList.remove('modal-active');

    // Destrucción total al cerrar para limpiar la memoria caché de WebGL
    if (contenedorVisor) {
        contenedorVisor.innerHTML = '<span class="pane-title-tag">VISTA INTERACTIVA 3D</span>';
    }
}

document.querySelectorAll('.index-item-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const submenu = trigger.nextElementSibling;
        // Alternar visibilidad (asegúrate de tener una clase .active con display: block)
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});


// Selecciona el ítem de "Quiénes somos" en tu HTML (debes ponerle una clase única 'trigger-quienes')
document.querySelector('.trigger-quienes').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modal-quienes-somos').style.display = 'flex';
});

// Cerrar modal
document.querySelector('.close-modal-btn').addEventListener('click', () => {
    document.getElementById('modal-quienes-somos').style.display = 'none';
});

// Cerrar si hacen clic fuera
window.onclick = (event) => {
    if (event.target == document.getElementById('modal-quienes-somos')) {
        event.target.style.display = 'none';
    }
}
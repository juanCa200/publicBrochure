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


const databaseEspecificaciones = {
    'mat-weco': {
        titulo: "Tubería WECO® Diseño Integral",
        tabla: [
            { propiedad: "Tamaños", valor: "1”, 1-1/2”, 2”, 3”, 4”" },
            { propiedad: "Longitudes", valor: "De 1 a 20 pies" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Otras Cualidades", valor: "• Tuerca Aleteada Weco Retirable<br>• Manufactura Integral Forjada de Una Sola Pieza<br>• Muy Durable y de Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Procesos de Alta Presión y Muy Abrasivos" }
        ]
    },
    'mat-npst': {
        titulo: "Tubería Weco® Diseño NPST®",
        tabla: [
            { propiedad: "Tamaños", valor: "1”, 1-1/2”, 2”, 3”, 4”" },
            { propiedad: "Longitudes", valor: "De 1 a 20 pies" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco No Retirable" },
            { propiedad: "Otras Cualidades", valor: "• Tuerca Aleteada Weco No Retirable<br>• Manufactura Compuesta No Integral<br>• Peso Ligero y Precio Económico" },
            { propiedad: "Aplicación", valor: "Procesos de Alta Presión No Tan Críticos" }
        ]
    },
    'mat-valves200': {
        titulo: "Juntas Giratorias Modelo LS Weco®",
        tabla: [
            { propiedad: "Tamaños", valor: "2”" },
            { propiedad: "Estilos", valor: "10, 20, 30, 40, 50, 60, 70, 80, 100" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable, Roscado y Soldadura a Tope (Butt Weld)" },
            { propiedad: "Otras Cualidades", valor: "• Configuración Convencional de Tres Pistas de Balines<br>• Codos de Barrido Largo para Minimizar Turbulencias, Restricciones de Flujo y Caídas de Presión<br>• Durable y de Funcionamiento Confiable" },
            { propiedad: "Aplicación", valor: "Diversos Procesos No Críticos" }
        ]
    },
    'mat-choke300': {
        titulo: "Juntas Giratorias Modelo Tsi Weco®",
        tabla: [
            { propiedad: "Tamaños", valor: "3”, 4”" },
            { propiedad: "Estilos", valor: "10, 20, 30, 40, 50, 60, 70, 80, 100" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable, Roscado y Soldadura a Tope (Butt Weld)" },
            { propiedad: "Otras Cualidades", valor: "• Diseño Cónico Patentado de Gran Grosor de Pistas de Balines<br>• Pistas de Balines Altamente Resistentes a la Corrosión<br>• Codos de Barrido Largo para Minimizar Turbulencias, Restricciones de Flujo y Caídas de Presión<br>• Mayor Capacidad de Carga en las Juntas de Giro<br>• Mayor Durabilidad y Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Procesos de Alta Presión y Abrasivos" }
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
            { propiedad: "Diámetros Internos (ID)", valor: "• 2”, 3”, 4” (Comúnmente utilizados)" },
            { propiedad: "Longitudes (Pies)", valor: "• 19’, 40’, 55’, 67’ y Mayores (Prefabricadas)" },
            { propiedad: "Tipos de Servicio", valor: "• Estándar<br>• Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "5000, 10000, 15000, 20000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "• Conexión Bridada API<br>• Conexión Roscada API<br>• Unión de Golpe (Weco)" },
            { propiedad: "Otras Cualidades", valor: "• Presenta estructura multicapa robusta<br>• Resistente a presiones y temperaturas extremas<br>• Su cubierta exterior termoplástica le ofrece alta protección química, térmica y contra el gas agrio<br>• No se expande, no se contrae, ni sufre latigazos (\"patadas\") al recibir golpes de ariete o flujos pulsantes<br>• Conformadas con revestimientos de Rilsan® (-20°C a 100°C) o Coflon® (130°C a 160°C continuos)<br>• Fabricadas según Estándar API 16C (para operaciones de Estrangulación y Ahogo)" },
            { propiedad: "Aplicación", valor: "• Líneas de control de pozos (estrangulación y ahogo)<br>• Pruebas de pozos superficiales<br>• Absorción de movimientos y vibraciones<br>• Operaciones de servicio extrapesado<br>• Conducción de fluidos abrasivos o corrosivos (lodos de perforación, cementación, inyección de nitrógeno y acidificación)" }
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
    },
    'mat-valvula-retencion-veleta': {
        titulo: "VÁLVULA DE RETENCIÓN Diseño Veleta Convencional",
        tabla: [
            { propiedad: "Presión de Trabajo (CWP)", valor: "Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Otras Cualidades", valor: "Empleada en el Manejo de Fluidos Viscosos. Disco Articulado Tradicional (Veleta) que se abre con el flujo y se cierra por gravedad o contrapresión. La Superficie de la Veleta de Nitrilo Carboxilado, diseñada para Máxima Resistencia a la Abrasión." },
            { propiedad: "Aplicación", valor: "Servicios Abrasivos de Alto Volumen, como Fractura Hidráulica, Bombeo de Arena y Lechada de Cemento" }
        ]
    },
    'mat-valvula-retencion-entrada-superior': {
        titulo: "VÁLVULA DE RETENCIÓN Veleta con Entrada Superior Weco®",
        tabla: [
            { propiedad: "Presión de Trabajo (CWP)", valor: "Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Otras Cualidades", valor: "Empleada en el Manejo de Fluidos Viscosos. Disco Articulado Tradicional (Veleta) que se abre con el flujo y se cierra por gravedad o contrapresión. La Superficie de la Veleta de Nitrilo Carboxilado, diseñada para Máxima Resistencia a la Abrasión. Fácil Mantenimiento sin Necesidad de Desmonte de la Línea. Larga Vida Útil Operativa" },
            { propiedad: "Aplicación", valor: "Operaciones de Fractura, Estimulación de Alta Presión y Altamente Abrasivos y Severos" }
        ]
    },
    'mat-valvula-retencion-dardo': {
        titulo: "VÁLVULA DE RETENCIÓN Dardo Weco®",
        tabla: [
            { propiedad: "Presión de Trabajo (CWP)", valor: "Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Otras Cualidades", valor: "Utilizado para el Manejo de Fluidos Gaseosos. Emplea un Émbolo de Movimiento Lineal (\"Dardo\") en lugar de una Aleta Oscilante como Elemento Obstructivo. Resiste la Descompresión Explosiva y los Flujos de Gas de Alta Velocidad. Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Control de Gases Extremos como Nitrógeno (N2), Dióxido de Carbono (CO2) / Flujos Gaseosos Secos o Húmedos No Erosivos de Alta Velocidad" }
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



window.addEventListener("click", function(event){

    const modal1 = document.getElementById("modalQuienes");
    if(event.target === modal1){
        cerrarModal();
    }

    const modal2 = document.getElementById("modal-quienes-somos");
    if(event.target === modal2){
        modal2.style.display="none";
    }

});


let comparisonList = [];

// Base de datos rápida extraída de tus elementos HTML para la comparación
const technicalDataDb = {
    'mat-weco': {
        title: 'Tubería WECO Integral',
        tamanios: '1", 1-1/2", 2", 3", 4"',
        longitudes: 'De 1 a 20 pies',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Procesos de Alta Presión y Muy Abrasivos'
    },
    'mat-npst': {
        title: 'Tubería Weco Diseño NPST®',
        tamanios: '1", 1-1/2", 2", 3", 4"',
        longitudes: 'De 1 a 20 pies',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco No Retirable',
        aplicacion: 'Procesos de Alta Presión No Tan Críticos'
    },
    'mat-valves200': {
        title: 'Junta Giratoria (Swivel Joint)',
        tamanios: '2"',
        estilos: '10, 20, 30, 40, 50, 60, 70, 80, 100',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable, Roscado y Soldadura a Tope (Butt Weld)',
        aplicacion: 'Diversos Procesos No Críticos'
    },
    'mat-choke300': {
        title: 'Junta Giratoria (Swivel Joint - Chiksan Weco®)',
        tamanios: '3", 4"',
        estilos: '10, 20, 30, 40, 50, 60, 70, 80, 100',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable, Roscado y Soldadura a Tope (Butt Weld)',
        aplicacion: 'Procesos de Alta Presión y Abrasivos'
    },
    'mat-manguerametalica': {
        title: 'LOOPS (Modelos LS Weco® y Tsi Weco®)',
        tamanios: 'Diseño LS en 2” / Diseño Tsi en 3”, 4”',
        estilos: '50-10, 50-50',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Procesos de Alta Presión y Abrasivos'
    },
    'mat-coflexip-manguera': {
        title: 'Mangueras Coflexip®',
        tamanios: '2”, 3”, 4” (Comúnmente utilizados)',
        longitudes: '19’, 40’, 55’, 67’ y Mayores (Prefabricadas)',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: '5000, 10000, 15000, 20000 CWP',
        conexion: 'Conexión Bridada API, Conexión Roscada API, Unión de Golpe (Weco)',
        aplicacion: 'Líneas de control de pozos (estrangulación y ahogo), Pruebas de pozos superficiales, Absorción de movimientos y vibraciones, Operaciones de servicio extrapesado, Conducción de fluidos abrasivos o corrosivos, tales como líneas para lodos de perforación, cementación, inyección de nitrógeno y operaciones de acidificación.'
    },
    'mat-valvula-tapon': {
        title: 'VÁLVULA DE TAPÓN ULT (Modelo ULT Weco®)',
        tamanios: '2“x1”, 2”x2”, 3”, 4”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Procesos de Fractura, de Cementación y Altamente Abrasivos'
    },
    'mat-valvula-tapon-dr': {
        title: 'VÁLVULA DE TAPÓN (Modelo DR Weco®)',
        tamanios: '2”, 3”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Diversos Procesos Estándar de Alta Presión'
    },
    'mat-valvula-retencion-veleta': {
        title: 'VÁLVULA DE RETENCIÓN (Diseño Veleta Convencional)',
        tamanios: '2”, 3”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Servicios Abrasivos de Alto Volumen, como Fractura Hidráulica, Bombeo de Arena y Lechada de Cemento'
    },
    'mat-valvula-retencion-veleta': {
        title: 'VÁLVULA DE RETENCIÓN (Diseño Veleta Convencional)',
        tamanios: '2”, 3”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Servicios Abrasivos de Alto Volumen, como Fractura Hidráulica, Bombeo de Arena y Lechada de Cemento'
    },
    'mat-valvula-retencion-entrada-superior': {
        title: 'VÁLVULA DE RETENCIÓN (Veleta con Entrada Superior Weco®)',
        tamanios: '2”, 3”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Operaciones de Fractura, Estimulación de Alta Presión y Altamente Abrasivos y Severos'
    },
    'mat-valvula-retencion-dardo': {
        title: 'VÁLVULA DE RETENCIÓN (Dardo Weco®)',
        tamanios: '2”, 3”',
        servicio: 'Estándar / Gas Agrio (NACE – API MR-01-75)',
        presion: 'Estándar: 6000, 10000, 15000, 20000 CWP / Gas Agrio: 10000, 15000 CWP',
        conexion: 'Tuerca Aleteada Weco Retirable',
        aplicacion: 'Control de Gases Extremos como Nitrógeno (N2), Dióxido de Carbono (CO2) / Flujos Gaseosos Secos o Húmedos No Erosivos de Alta Velocidad'
    }
};

function toggleCompare(id, name, event) {
    const index = comparisonList.indexOf(id);
    const btn = event.currentTarget;

    if (index > -1) {
        // Si ya estaba, lo quitamos
        comparisonList.splice(index, 1);
        btn.classList.remove('active');
        btn.innerText = '+ Añadir a comparar';
    } else {
        // Si no está, validamos el límite de 2 elementos
        if (comparisonList.length >= 2) {
            alert('Solo puedes comparar 2 productos simultáneamente.');
            return;
        }
        comparisonList.push(id);
        btn.classList.add('active');
        btn.innerText = '✓ En comparación';
    }

    updateComparisonTray();
}

function updateComparisonTray() {
    const tray = document.getElementById('comparisonTray');
    const countSpan = document.getElementById('selectedCount');
    const compareBtn = document.getElementById('btnCompareNow');

    countSpan.innerText = comparisonList.length;

    if (comparisonList.length > 0) {
        tray.classList.remove('hidden');
    } else {
        tray.classList.add('hidden');
    }

    if (comparisonList.length === 2) {
        compareBtn.removeAttribute('disabled');
    } else {
        compareBtn.setAttribute('disabled', 'true');
    }
}

function clearComparison() {
    comparisonList = [];
    document.querySelectorAll('.btn-toggle-compare').forEach(btn => {
        btn.classList.remove('active');
        btn.innerText = '+ Añadir a comparar';
    });
    updateComparisonTray();
}

function openComparisonModal() {
    if (comparisonList.length < 2) return;

    const modal = document.getElementById('comparisonModal');
    const container = document.getElementById('comparisonTableContent');

    const prod1 = technicalDataDb[comparisonList[0]];
    const prod2 = technicalDataDb[comparisonList[1]];

    container.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Característica</th>
                    <th>${prod1.title}</th>
                    <th>${prod2.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><strong>Tamaños</strong></td><td>${prod1.tamanios}</td><td>${prod2.tamanios}</td></tr>
                <tr><td><strong>Longitudes</strong></td><td>${prod1.longitudes}</td><td>${prod2.longitudes}</td></tr>
                <tr><td><strong>Tipo de Servicio</strong></td><td>${prod1.servicio}</td><td>${prod2.servicio}</td></tr>
                <tr><td><strong>Rangos de Presión</strong></td><td>${prod1.presion}</td><td>${prod2.presion}</td></tr>
                <tr><td><strong>Conexión / Extremos</strong></td><td>${prod1.conexion}</td><td>${prod2.conexion}</td></tr>
                <tr><td><strong>Aplicación Principal</strong></td><td>${prod1.aplicacion}</td><td>${prod2.aplicacion}</td></tr>
            </tbody>
        </table>
    `;

    modal.classList.remove('hidden');
}

function closeComparisonModal() {
    document.getElementById('comparisonModal').classList.add('hidden');
}




/**
 * Función auxiliar para cambiar directamente a una ficha técnica por su ID de contenedor,
 * reutilizando la lógica de la función switchMaterial existente.
 * @param {string} sheetId - El ID del contenedor de la ficha (ej. 'mat-weco').
 */
function switchMaterialById(sheetId) {
    const targetCard = document.querySelector(`.material-nav-card[data-target="${sheetId}"]`);
    if (targetCard) {
        switchMaterial(targetCard);
    } else {
        // Fallback directo si no encuentra la tarjeta de navegación asociada
        const specSheets = document.querySelectorAll('.spec-sheet-container');
        specSheets.forEach(sheet => sheet.classList.remove('active-sheet'));
        
        const targetSheet = document.getElementById(sheetId);
        if (targetSheet) {
            targetSheet.classList.add('active-sheet');
        }
    }
}
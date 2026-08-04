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




document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll('.index-item-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
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
            { propiedad: "Otras especificaciones", valor: "• Muy Durable y de Funcionamiento Confiable y Seguro" },
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
            { propiedad: "Otras especificaciones", valor: "• Presenta estructura multicapa robusta<br>• Resistente a presiones y temperaturas extremas<br>• Su cubierta exterior termoplástica le ofrece alta protección química, térmica y contra el gas agrio<br>• No se expande, no se contrae, ni sufre latigazos (\"patadas\") al recibir golpes de ariete o flujos pulsantes<br>• Conformadas con revestimientos de Rilsan® (-20°C a 100°C) o Coflon® (130°C a 160°C continuos)<br>• Fabricadas según Estándar API 16C (para operaciones de Estrangulación y Ahogo)" },
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
            { propiedad: "Otras especificaciones", valor: "• Última Generación en Válvulas de Tapón<br>• Reduce el Torque de Operación a cualquier Presión<br>• Posee Configuración Patentada de Tapón Flotante y Sello Dual con Carga Distribuida de manera Uniforme<br>• Muy Durable, Larga Vida Útil y de Funcionamiento Confiable y Seguro" },
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
            { propiedad: "Otras especificaciones", valor: "• Provee Sello Dual Convencional a través de Configuración Simétrica de sus Componentes<br>• Funcionamiento Confiable y Seguro" },
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
            { propiedad: "Otras especificaciones", valor: "Empleada en el Manejo de Fluidos Viscosos. Disco Articulado Tradicional (Veleta) que se abre con el flujo y se cierra por gravedad o contrapresión. La Superficie de la Veleta de Nitrilo Carboxilado, diseñada para Máxima Resistencia a la Abrasión." },
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
            { propiedad: "Otras especificaciones", valor: "Empleada en el Manejo de Fluidos Viscosos. Disco Articulado Tradicional (Veleta) que se abre con el flujo y se cierra por gravedad o contrapresión. La Superficie de la Veleta de Nitrilo Carboxilado, diseñada para Máxima Resistencia a la Abrasión. Fácil Mantenimiento sin Necesidad de Desmonte de la Línea. Larga Vida Útil Operativa" },
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
            { propiedad: "Otras especificaciones", valor: "Utilizado para el Manejo de Fluidos Gaseosos. Emplea un Émbolo de Movimiento Lineal (\"Dardo\") en lugar de una Aleta Oscilante como Elemento Obstructivo. Resiste la Descompresión Explosiva y los Flujos de Gas de Alta Velocidad. Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Control de Gases Extremos como Nitrógeno (N2), Dióxido de Carbono (CO2) / Flujos Gaseosos Secos o Húmedos No Erosivos de Alta Velocidad" }
        ]
    },
    'mat-valvula-alivio-mecanica': {
        titulo: "VÁLVULA DE ALIVIO DE PRESIÓN Diseño Mecánico Estándar de Acción Directa",
        tabla: [
            { propiedad: "Rangos de Presión", valor: "• De 100 a 1000 Psi para Tamaño 2” Fig. 1502<br>• De 1000 a 15000 Psi para Tamaños 2” y 3” Fig. 1502<br>• De 10000 a 20000 Psi para Tamaño 2” Fig. 1502" },
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Otras Cualidades", valor: "• Funcionamiento Estándar de Acción Directa<br>• Utiliza Un Conjunto de Resortes Belleville de Alta Resistencia junto a un Arreglo de Esfera y Asiento para Soportar la Presión del Fluido y Garantizar un Cierre Fiable.<br>• Un tornillo de Ajuste en la Parte Superior del Cuerpo de la Válvula permite Ajustar la Presión de Alivio.<br>• Durable y de Funcionamiento Confiable y Seguro" },
            { propiedad: "Aplicación", valor: "Procesos Diversos" }
        ]
    },
    'mat-valvula-alivio-electronica': {
        titulo: "VÁLVULA DE ALIVIO DE PRESIÓN Diseño Electrónico (ePRV Weco®)",
        tabla: [
            { propiedad: "Tamaños", valor: "3”" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "Hasta 15000 Psi" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable" },
            { propiedad: "Otras Cualidades", valor: "• Funcionamiento Electrónico<br>• Requiere señal de 24 voltios para su activación<br>• La Válvula Piloto controla la Apertura y el Cierre de la Válvula Principal<br>• La Válvula Principal se Abre Instantáneamente al Perderse la Señal Eléctrica<br>• Se Cierra Automáticamente una vez que se ha Liberado Completamente la Presión de la Línea o cuando la Presión es Inferior a 80-100 psi<br>• Un Indicador Visual permite ver si la Válvula está Abierta o Cerrada<br>• No requiere de Intervención Manual, Botellas de Gas ni Mangueras, por lo que Reduce Significantly la Exposición del Personal en Zonas de Alto Riesgo<br>• Más Fiable que otras Válvulas de Alivio" },
            { propiedad: "Aplicación", valor: "Operaciones de Fractura Hidráulica, Estimulación de Pozos, Líneas de Tratamiento de Alta Presión" }
        ]
    },
    'mat-estrangulador-fijo': {
        titulo: "ESTRANGULADOR FIJO (Positive Choke Weco® de Producción y Control) Serie 200P",
        tabla: [
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Diámetro Orificios", valor: "• Tamaño 2”: Insertos de 1/2” (32/64”) a 1” (64/64”)<br>• Tamaño 3”: Insertos de 1” (64/64”) a 2” (128/64”)<br>(Los Diámetros de los Orificios de los Insertos están calibrados en incrementos de 1/64” según Estándar API 6A)" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "Estándar: 5000, 10000, 15000 CWP<br>Gas Agrio: 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable (MxF, FxM)" },
            { propiedad: "Otras Cualidades", valor: "• Diseñado específicamente para alojar Insertos de estrangulación fijos<br>• Proporciona una restricción constante del flujo en operaciones estables<br>• Genera menor turbulencia interna de flujo, muy resistente a la erosión<br>• Utiliza insertos calibrados con diámetros de orificio fijos intercambiables<br>• Los insertos son reemplazables mediante el uso de herramientas convencionales, permitiendo variar el diámetro del flujo sin desmontar el cuerpo de la línea de tubería.<br>• Fabricado y certificado bajo Estándar API 6A<br>• Compatible con Niveles de Especificación de Producto (PSL) exigentes y con clases de materiales aptas para ambientes corrosivos" },
            { propiedad: "Aplicación", valor: "• Operaciones de Cementación, Fractura, Control de Flujo, Retorno de Fluidos, Inyección de Fluidos, Producción Estable a Largo Plazo." }
        ]
    },
    'mat-estrangulador-ajustable': {
        titulo: "ESTRANGULADOR AJUSTABLE (Adjustable Choke Weco®) Serie 200N",
        tabla: [
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Diámetro Orificios", valor: "• Tamaño 2”: Diámetro del Orificio regulable de 1/2” (32/64”) a 1” (64/64”)<br>• Tamaño 3”: Diámetro del Orificio regulable de 1” (64/64”) a 2” (128/64”)<br>(Los Diámetros de los Orificios se regulan en incrementos de 1/64” según Estándar API 6A)" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "Estándar: 6000, 10000, 15000 CWP<br>Gas Agrio: 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable (MxF)" },
            { propiedad: "Otras Cualidades", valor: "• Diseñado para ajustar de manera variable el orificio de estrangulación<br>• Opción con mecanismo de Volante Graduado con Indicador de Posición<br>• Opción con Actuador Neumático e Hidráulico para control remoto<br>• Las agujas, puntas y asientos críticos se suministran en carburo de tungsteno o cerámicas endurecidas<br>• Fabricado y certificado bajo Estándar API 6A<br>• Compatible con Niveles de Especificación de Producto (PSL) exigentes y con clases de materiales aptas para ambientes corrosivos" },
            { propiedad: "Aplicación", valor: "• Ideal para Servicios Generales de Estrangulación y de Control preciso de Fluidos, Caudales y Caídas de Presión Extrema<br>• Cementación, Fractura, Pruebas de Pozos, Retorno de Flujo, Inyección de Fluidos" }
        ]
    },
    'mat-valvula-estrangulacion-regulacion': {
        titulo: "VÁLVULA DE ESTRANGULACIÓN Y REGULACIÓN (Throttle Choke Valve®)",
        tabla: [
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Diámetro Nominal Interno", valor: "• Tamaño 2”: 1-1/2” a 2”<br>• Tamaño 3”: 2” a 3”" },
            { propiedad: "Tipo de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "Estándar: 5000, 10000, 15000, 20000 CWP<br>Gas Agrio: 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable (MxF)" },
            { propiedad: "Otras Cualidades", valor: "• Funciona simultáneamente como válvula de estrangulación y de tapón<br>• Operado manualmente (1/4” de vuelta) o a través de actuador automático<br>• Utiliza diseños internos de presión equilibrados y segmentos flotantes para reducir la fricción<br>• Su geometría interna aísla el desgaste severo por erosión<br>• Sus componentes internos cuentan con un revestimiento duro especializado de carburo de tungsteno sólido<br>• Cuenta con un indicador visual graduado que muestra el porcentaje de apertura en fracciones de pulgada (64avos) o milímetros<br>• Fabricado y certificado bajo Norma API 6A, API API 16C<br>• Compatible con niveles de especificación de producto (PSL) exigentes y con tipos de materiales aptos para ambientes corrosivos" },
            { propiedad: "Aplicación", valor: "• Operaciones de Fractura Hidráulica, Retorno de Flujo, Limpieza a Alta Presión, Control del Flujo" }
        ]
    },
    'mat-adaptador-estrangulacion': {
        titulo: "ADAPTADOR DE ESTRANGULACIÓN (Choke Saver®)",
        tabla: [
            { propiedad: "Tamaños", valor: "2”, 3”" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "Estándar: 6000, 10000, 15000 CWP<br>Gas Agrio: 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "Tuerca Aleteada Weco Retirable (MxF)" },
            { propiedad: "Otras Cualidades", valor: "• Diseñado para soportar la fuerza de flujos turbulentos y erosivos que impactan a la línea de flujo<br>• Absorbe la acción de desgaste y de deterioro intenso para proteger los Componentes Principales de la línea de flujo<br>• Como dispositivo protector del Estrangulador Principal, prolonga su vida útil de funcionamiento<br>• Fabricado con materiales extremadamente duros, tales como carburo de tungsteno o de cerámicas avanzadas<br>• Constituye una opción rápida y económica de reemplazo con relación al Estrangulador Principal al cual protege<br>• Se puede utilizar en una amplia gama de aplicaciones de alta presión" },
            { propiedad: "Aplicación", valor: "• Operaciones de Retorno de Flujo, Pruebas de Pozos, Limpieza con Tubería Flexible (Coiled Tubing), Manifolds de Estrangulación y Control, Líneas de Acidificación y Fractura Hidráulica" }
        ]
    },
    'mat-valvula-mariposa-modelo-12': {
        titulo: "Modelo 12",
        tabla: [
            { propiedad: "Tipo", valor: "Cuerpo Tipo Panqueca Weco® de Cuello Corto" },
            { propiedad: "Tamaños", valor: "2” a 16”" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• 175 Psi para Tamaños 2” a 12”<br>• 150 Psi para Tamaños 14” y 16”" },
            { propiedad: "Extremos de Conexión", valor: "Se Monta en Bridas de entre 125 Psi y 150 Psi" },
            { propiedad: "Otras Cualidades", valor: "• El Cuerpo de la Válvula se Centra fácilmente entre Bridas ANSI Estándar de 125 o 150 Psi<br>• Sistema de Triple Sello. Aísla los Vástagos Superior e Inferior del Fluido de la Línea<br>• Disco Autocentrante. Emplea un sistema de Doble Vástago con Pasadores Tangenciales Superior e Inferior<br>• Asiento con Respaldo Fenólico Rígido. Evita el Desplazamiento del Asiento<br>• Admite Manijas de Apertura/Cierre, de Operadores de Engranaje y Actuadores de Accionamiento Automático" },
            { propiedad: "Aplicación", valor: "Ideal para Servicios Industriales Cotidianos de Apertura/Cierre o de Regulación de Caudal desde 1 mm Hg hasta su Rango Máximo de Presión" }
        ]
    },
    'mat-valvula-mariposa-modelo-12n': {
        titulo: "Modelo 12N",
        tabla: [
            { propiedad: "Tipo", valor: "Cuerpo Tipo Panqueca Ranurado Weco® de Cuello Corto" },
            { propiedad: "Tamaños", valor: "2” a 6”" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• 175 Psi para Tamaños 2” a 6”" },
            { propiedad: "Extremos de Conexión", valor: "Se Monta entre Bridas de Tubería Ligeras" },
            { propiedad: "Otras Cualidades", valor: "• Cuerpo Ranurado para utilizarse con Bridas de Servicio Ligero<br>• Sistema de Triple Sello. Aísla los Vástagos Superior e Inferior del Fluido de la Línea<br>• Disco Autocentrante. Emplea un sistema de Doble Vástago con Pasadores Tangenciales Superior e Inferior<br>• Asiento con Respaldo Fenólico Rígido. Evita el Desplazamiento del Asiento<br>• Admite Manijas de Apertura/Cierre, de Operadores de Engranaje y Actuadores de Accionamiento Automático" },
            { propiedad: "Aplicación", valor: "Ideal para Servicios Industriales Cotidianos de Apertura/Cierre o de Regulación de Caudal desde 1 mm Hg hasta su Rango Máximo de Presión" }
        ]
    },
    'mat-valvula-mariposa-modelo-22': {
        titulo: "Modelo 22",
        tabla: [
            { propiedad: "Tipo", valor: "Cuerpo Tipo Panqueca Weco® de Cuello Largo" },
            { propiedad: "Tamaños", valor: "2” a 12”" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• 175 Psi para Tamaños 2” a 12”" },
            { propiedad: "Extremos de Conexión", valor: "Se Monta en Bridas de entre 125 Psi ó 150 Psi" },
            { propiedad: "Otras Cualidades", valor: "• El Cuerpo de la Válvula se Centra fácilmente entre Bridas Estándar de 125 o 150 Psi<br>• Diseño de Cuello Largo para Montaje en Tuberías Aisladas. El Operador o Manija de la Válvula no se obstruye por el Aislamiento<br>• Sistema de Triple Sello. Aísla los Vástagos Superior e Inferior del Fluido de la Línea<br>• Disco Autocentrante. Emplea un sistema de Doble Vástago con Pasadores Tangenciales Superior e Inferior<br>• Asiento con Respaldo Fenólico Rígido. Evita el Desplazamiento del Asiento<br>• Admite Manijas de Apertura/Cierre, de Operadores de Engranaje y Actuadores de Accionamiento Automático" },
            { propiedad: "Aplicación", valor: "Ideal para Servicios Industriales Cotidianos de Apertura/Cierre o de Regulación de Caudal desde 1 mm Hg hasta su Rango Máximo de Presión" }
        ]
    },
    'mat-valvula-mariposa-modelo-22l': {
        titulo: "Modelo 22L",
        tabla: [
            { propiedad: "Tipo", valor: "Cuerpo con Orejetas Roscadas Weco® de Cuello Largo" },
            { propiedad: "Tamaños", valor: "2” a 24”" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• 175 Psi para Tamaños 2” a 12”<br>• 150 Psi para Tamaños 14” a 24”" },
            { propiedad: "Extremos de Conexión", valor: "Se Atornilla en Bridas de entre 125 Psi ó 150 Psi" },
            { propiedad: "Otras Cualidades", valor: "• Cuerpo con Orejetas Roscadas para Conexión Independiente de la Tubería Aguas Arriba o Aguas Abajo<br>• Diseño de Cuello Largo para Montaje en Tuberías Aisladas. El Operador o Manija de la Válvula no se obstruye por el Aislamiento<br>• Sistema de Triple Sello. Aísla los Vástagos Superior e Inferior del Fluido de la Línea<br>• Disco Autocentrante. Emplea un sistema de Doble Vástago con Pasadores Tangenciales Superior e Inferior<br>• Asiento con Respaldo Fenólico Rígido. Evita el Desplazamiento del Asiento<br>• Admite Manijas de Apertura/Cierre, de Operadores de Engranaje y Actuadores de Accionamiento Automático" },
            { propiedad: "Aplicación", valor: "Ideal para Servicios Industriales Cotidianos de Apertura/Cierre o de Regulación de Caudal desde 1 mm Hg hasta su Rango Máximo de Presión" }
        ]
    },
    'mat-diseno-engranaje-helicoidal': {
        titulo: "Diseño de Engranaje Helicoidal Resiste a la Intemperie Weco®",
        tabla: [
            { propiedad: "Tipo", valor: "Engranaje Helicoidal Weco®" },
            { propiedad: "Compatibilidad", valor: "Compatible con Válvulas de todos los Tamaños" },
            { propiedad: "Aplicación Recomendada", valor: "Accionamiento Manual (Apertura/Cierre) o Regulación de Caudal" },
            { propiedad: "Especificaciones de Giro", valor: "Arco de 90 grados con Tornillos de Tope Internos para Ajuste de +/- 20 grados" },
            { propiedad: "Montaje", valor: "Se Monta en la Válvula en Cualquier Cuadrante" },
            { propiedad: "Accesorios Disponibles", valor: "• Extensiones de Eje para Volante disponibles<br>• Accesorio para Rueda Dentada disponible" }
        ]
    },
    'mat-actuador-veleta-modelo-200': {
        titulo: "Actuador de Veleta Modelo 200",
        tabla: [
            { propiedad: "Tipo", valor: "Actuador Neumático de Veleta de Doble Acción, Robusto y Compacto, de 1/4 de Vuelta Weco®" },
            { propiedad: "Tamaños", valor: "Disponible para Válvulas de 2” a 6”" },
            { propiedad: "Aplicación", valor: "Recomendado para el Funcionamiento de Válvulas de Apertura/Cierre" },
            { propiedad: "Mantenimiento", valor: "Diseño Sencillo que No Requiere Lubricación en Campo" },
            { propiedad: "Montaje", valor: "Se Monta Directamente en la Válvula en Cualquier Cuadrante" }
        ]
    },
    'mat-actuador-neumatico-doble-accion': {
        titulo: "Actuador Neumático Doble Acción / Retorno por Resorte",
        tabla: [
            { propiedad: "Tipo", valor: "Actuador Neumático de Doble Acción o con Retorno por Resorte Weco®" },
            { propiedad: "Tamaños", valor: "Compatible con Válvulas Mariposa de 2” a 12” y algunas Válvulas de Tapón" },
            { propiedad: "Aplicación", valor: "Recomendado para Operación de Apertura/Cierre" },
            { propiedad: "Presión Requerida", valor: "Algunos Modelos requieren una Presión de Aire Mínima de 30 Psi para su Funcionamiento" },
            { propiedad: "Montaje", valor: "Se Monta Directamente en la Válvula en Cualquier Cuadrante sin Adaptadores ni Accesorios Especiales" }
        ]
    },
    'mat-manija-estandar-weco': {
        titulo: "Manija Estándar Weco®",
        tabla: [
            { propiedad: "Tipo", valor: "Manija Manual Estándar de Bloqueo" },
            { propiedad: "Tamaños", valor: "Disponible para Tamaños de 2” a 12” (Recomendadas para Tamaños de 8” o menores)" },
            { propiedad: "Compatibilidad de Modelos", valor: "• Compatible con Válvulas Modelos 12 y 12N con Placas de Retención<br>• Compatible con Válvulas Modelos 22 y 22L" },
            { propiedad: "Instalación y Montaje", valor: "• Se Monta en Cualquier Cuadrante<br>• Se Monta Directamente en la Brida Superior Pre-ranurada del Cuerpo de la Válvula con Posiciones de Retención de Apertura/Cierre" }
        ]
    },
    'mat-palanca-regulacion-weco': {
        titulo: "Palanca de Regulación Weco®",
        tabla: [
            { propiedad: "Tipo", valor: "Palanca de Regulación con Placa de Retención con Muescas" },
            { propiedad: "Tamaños", valor: "Disponible para Tamaños de 2” a 12” (Recomendada para Tamaños de 8” o menores)" },
            { propiedad: "Sistema de Bloqueo", valor: "La Placa de Retención con Muescas y el Sistema de Sujeción Garantizan un Bloqueo Seguro en cualquiera de las 10 Posiciones, desde completamente abierto hasta completamente cerrado" },
            { propiedad: "Compatibilidad de Modelos", valor: "• Compatible con las Válvulas Modelos 12 y 12N con Placas de Retención<br>• Compatible con las Válvulas Modelos 22 y 22L" },
            { propiedad: "Instalación y Montaje", valor: "• Se Monta en Cualquier Cuadrante<br>• Se Monta Directamente en la Brida Superior con Muescas del Cuerpo de la Válvula con Posiciones de Retención de Apertura/Cierre" }
        ]
    },
    'mat-accesorios-conexion-weco': {
        titulo: "Accesorios de Conexión (Fittings Weco®)",
        tabla: [
            { propiedad: "Tamaños", valor: "1”, 1-1/2”, 2”, 3”, 4”" },
            { propiedad: "Tipos de Accesorio", valor: "• Codo<br>• Tee<br>• Cruz<br>• Lateral<br>• Yee" },
            { propiedad: "Tipos de Servicio", valor: "Estándar / Gas Agrio (NACE – API MR-01-75)" },
            { propiedad: "Rangos de Presión", valor: "• Estándar: 6000, 10000, 15000, 20000 CWP<br>• Gas Agrio: 10000, 15000 CWP" },
            { propiedad: "Extremos de Conexión", valor: "• Tuerca aleteada retirable Weco<br>• Roscado<br>• Soldadura a Tope (Butt Weld)" },
            { propiedad: "Otras Cualidades", valor: "• Desvían, dividen, convergen, divergen o adaptan el flujo de los fluidos de trabajo<br>• Construcción forjada<br>• Disponibles en diseños compactos y no compactos<br>• Disponibles en múltiples arreglos de conexión<br>• Altamente durables y de funcionamiento confiable y seguro" },
            { propiedad: "Aplicación", valor: "• Líneas de Fractura<br>• Líneas de Prueba<br>• Líneas de Circulación, Cementación y Estimulación<br>• Operaciones de Alta Presión y Altamente Abrasivas" }
        ]
    },

    'mat-crossover': {
        titulo: "Crossovers (X-Overs)",
        tabla: [
            { propiedad: "Características Generales", valor: "• Están diseñados para hacer la transición entre diferentes diámetros nominales o clasificaciones de presión en la misma línea de flujo.<br>• Su función es el de permitir que el fluido pase de una línea de alta presión con un diámetro grande a una de menor diámetro y de menor presión, asegurando la integridad estructural.<br>• La presión máxima de trabajo de todo el sistema queda limitada a la clasificación del componente de más baja tolerancia de presión o integrado en el Crossover.<br>• Se emplean tanto para Servicio Estándar como de Gas Agrio (H2S)<br>• Los tamaños, tipos de conexión y material de fabricación varían de acuerdo al requerimiento operativo.<br>• Se fabrican bajo previo pedido." }
        ]
    },
    'mat-changeover': {
        titulo: "Changeovers (X-Overs)",
        tabla: [
            { propiedad: "Características Generales", valor: "• Son piezas de acoplamiento utilizadas comúnmente para modificar el género de conexión o tipo de rosca dentro de la misma familia de conexiones (LP, EUE, NPT, WECO, etc.).<br>• Su función es la de facilitar la continuidad cuando se encuentran dos extremos incompatibles del mismo tipo.<br>• La presión máxima de trabajo de todo el sistema queda limitada a la clasificación del componente de más baja tolerancia de presión o integrado en el Changeover.<br>• Se emplean tanto para Servicio Estándar como de Gas Agrio (H2S)<br>• Los tamaños, tipos de conexión y material de fabricación varían de acuerdo al requerimiento operativo.<br>• Se fabrican bajo previo pedido." }
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
window.onclick = function (event) {
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

    // --- Creación del Visor 3D ---
    const nuevoViewer = document.createElement('model-viewer');
    nuevoViewer.id = "modalViewer3D";
    nuevoViewer.src = glbUrl;

    nuevoViewer.setAttribute('camera-controls', '');
    nuevoViewer.setAttribute('auto-rotate', 'true');
    nuevoViewer.setAttribute('interaction-prompt', 'none');
    nuevoViewer.setAttribute('shadow-intensity', '1');
    nuevoViewer.setAttribute('bounds', 'tight');
    nuevoViewer.setAttribute('ar', '');
    nuevoViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
    nuevoViewer.setAttribute('xr-environment', '');

    nuevoViewer.style.width = "100%";
    nuevoViewer.style.height = "100%";
    nuevoViewer.style.display = "block";

    // --- NUEVO: CONDICIONAL PARA AÑADIR LOS PUNTOS/ESTRELLAS SOLO A ESTE MODELO ---
    if (keyDatabase === 'mat-valvula-tapon') {
        // Coordenadas (data-position) de ejemplo: deberás ajustarlas según la posición 
        // exacta de cada tamaño dentro de tu archivo .glb
        nuevoViewer.innerHTML = `
            <button class="hotspot-punto" slot="hotspot-1" data-position="0.4m 0.9m 0m" data-normal="0m 0m 1m">
                <div class="punto-star">★</div>
                <div class="hotspot-tooltip">Tamaño: 2”x1”</div>
            </button>
            <button class="hotspot-punto" slot="hotspot-2" data-position="0.4m 0.5m 0m" data-normal="0m 0m 1m">
                <div class="punto-star">★</div>
                <div class="hotspot-tooltip">Tamaño: 2”x2”</div>
            </button>
            <button class="hotspot-punto" slot="hotspot-3" data-position="0.4m 0.1m 0m" data-normal="0m 0m 1m">
                <div class="punto-star">★</div>
                <div class="hotspot-tooltip">Tamaño: 3” y4”</div>
            </button>
        `;
    }

    // Botón de AR
    const arButton = document.createElement('button');
    arButton.slot = "ar-button";
    arButton.innerText = "Ver en Realidad Aumentada";
    arButton.style.cssText = "background: var(--esip-orange, #ea580c); color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; position: absolute; bottom: 20px; left: 20px; z-index: 10;";
    nuevoViewer.appendChild(arButton);

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
document.querySelector('.trigger-quienes').addEventListener('click', function (e) {
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



window.addEventListener("click", function (event) {

    const modal1 = document.getElementById("modalQuienes");
    if (event.target === modal1) {
        cerrarModal();
    }

    const modal2 = document.getElementById("modal-quienes-somos");
    if (event.target === modal2) {
        modal2.style.display = "none";
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


function cerrarVideoIntro() {
    const overlay = document.getElementById('intro-video-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        // Opcional: Si quieres detener el video de YouTube por completo al cerrarlo
        overlay.innerHTML = '';
    }, 500);
}



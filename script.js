document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('slider');
    const images = slider.getElementsByTagName('img');
    const logoContainer = document.getElementById('logo-container');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 3000);

    const map = L.map('map').setView([-31.66, -68.58], 11.2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Iconos 
    const vinoIcon = L.icon({
        iconUrl: "/popup/Bodegas.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    const olivoIcon = L.icon({
        iconUrl: "/popup/Aceiteras.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    const alojamientoIcon = L.icon({
        iconUrl: '/popup/Alojamiento.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    const gastronomiaIcon = L.icon({
        iconUrl: '/popup/Gastronomia.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    const AgenciaIcon = L.icon({
        iconUrl: '/popup/AgenciadeViajes.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    const gastronomia = [
        { nombre: "La 14 Gourmet", coords: [-31.6905886, -68.5859846], descripcion: "Teléfono: <a href='tel:2644624777'>2644624777</a><br>Instagram: <a href='https://www.instagram.com/la14gourmet/?hl=es'>@la14gourmet</a>" },
        { nombre: "La Salmuera", coords: [-31.5957119, -68.6041221], descripcion: "Teléfono: <a href='tel:2644988604'>2644988604</a><br>Instagram: <a href='https://www.instagram.com/lasalmuerasanjuan/?hl=es'>@lasalmuerasanjuan</a>" },
        { nombre: "Tierras Negras", coords: [-31.6648729, -68.5404433], descripcion: "Teléfono: <a href='tel:+54 9 264 5656584 / +54 9 264 4890263'>+54 9 264 5656584 / +54 9 264 4890263</a><br>Instagram: <a href='https://www.instagram.com/tneventosyresto/'>@tneventosyresto</a>" },
        { nombre: "Del Parque Heladería y Confitería", coords: [-31.6584155, -68.5789342], descripcion: "Teléfono: <a href='tel:2646716329'>2646716329</a><br>Descripción del restaurante." }
    ];

    const bodegas = [
        { nombre: "Viñas de Segisa", coords: [-31.701604, -68.5901271], descripcion: "Teléfono: <a href='tel:2644578366'>2644578366</a><br>Instagram: <a href='https://www.instagram.com/bodega_segisa/?hl=es'>@bodega_segisa</a>" },
        { nombre: "Bodega Fabril Alto Verde", coords: [-31.6909003, -68.5500587], descripcion: "Teléfono: <a href='tel:2644697839'>2644697839</a> / <a href='tel:2646779294'>2646779294</a><br>Instagram: <a href='https://www.instagram.com/bodegafabrilaltoverde/?hl=es'>@bodegafabrilaltoverde</a>" },
        { nombre: "Champañera Miguel Mas", coords: [-31.6643529, -68.5357054], descripcion: "Teléfono: <a href='tel:2646604901'>2646604901</a><br>Instagram: <a href='https://www.instagram.com/champaneramas/?hl=es'>@champaneramas</a>" }

    ];

    const aceiteras = [
        { nombre: "Finca Tutuna", coords: [-31.6933871, -68.5693175], descripcion: "Teléfono: <a href='tel:2644070766'>2644070766</a> / <a href='tel:2645810022'>2645810022</a><br>Instagram: <a href='https://www.instagram.com/tutuna_san_juan/?hl=es'>@tutuna_san_juan</a>" },
        { nombre: "La Pocitana", coords: [-31.6909003, -68.5460007], descripcion: "Instagram: <a href='https://www.instagram.com/lapocitanasanjuan/?hl=es'>@lapocitanasanjuan</a>" },
        { nombre: "La Salmuera", coords: [-31.5957119, -68.6041221], descripcion: "Teléfono: <a href='tel:2644988604'>2644988604</a><br>Instagram: <a href='https://www.instagram.com/lasalmuerasanjuan/?hl=es'>@lasalmuerasanjuan</a>" },
        { nombre: "Seis Marías", coords: [-31.8065694, -68.5421459], descripcion: "Teléfono: <a href='tel:2645421096'>2645421096</a> / <a href='tel:2645046812'>2645046812</a><br>Instagram: <a href='https://www.instagram.com/seismariasoliva/?hl=es'>@seismariasoliva</a>" }
    ];

    const alojamientos = [
        { nombre: "Cabañas de Olga", coords: [-31.6354047, -68.5340102], descripcion: "Teléfono: <a href='tel:2645271477'>2645271477</a><br>Instagram: <a href='https://www.instagram.com/cabanasdeolga/?hl=es'>@cabanasdeolga</a>" },
        { nombre: "Finca Don Elias", coords: [-31.7231445, -68.5604074], descripcion: "Teléfono: <a href='tel:2644418500'>2644418500</a><br>Instagram: <a href='https://www.instagram.com/fincadonelias.sj/?hl=es'>@fincadonelias.sj</a>" },
        { nombre: "Finca Tutuna", coords: [-31.6933871, -68.5693175], descripcion: "Teléfono: <a href='tel:2644070766'>2644070766</a> / <a href='tel:2645810022'>2645810022</a><br>Instagram: <a href='https://www.instagram.com/tutuna_san_juan/?hl=es'>@tutuna_san_juan</a>" },
        { nombre: "Olivos del Sol", coords: [-31.6354047, -68.5350302], descripcion: "Teléfono: <a href='tel:264444000'>264444000</a><br>Instagram: <a href='https://www.instagram.com/hotel_olivosdelsol/?hl=es'>@hotel_olivosdelsol</a>" },
        { nombre: "Viñas de Segisa", coords: [-31.701604, -68.5901271], descripcion: "Teléfono: <a href='tel:2644578366'>2644578366</a><br>Instagram: <a href='https://www.instagram.com/bodega_segisa/?hl=es'>@bodega_segisa</a>" },
        { nombre: "Quinta La Pintada", coords: [-31.6859466, -68.5662414], descripcion: "Teléfono: <a href='tel:2644145701'>2644145701</a><br>Instagram: <a href='https://www.instagram.com/quintalapintada/?hl=es'>@quintalapintada</a>" },
        { nombre: "Casona del Cerro", coords: [-31.6476277, -68.6100204], descripcion: "Teléfono: <a href='tel:2645041720'>2645041720</a><br>Instagram: <a href='https://www.instagram.com/casonas_del_cerro/?hl=es'>@casonas_del_cerro</a>" }
    ];

    const agencias = [
        { nombre: "Elisan y Compañia Viajes", coords: [-31.6628729, -68.5404433], descripcion: "Teléfono: <a href='tel:264154106300'>264154106300</a>" }
    ];


    // Función para agregar puntos al mapa con imágenes en los popups
    const addPointsWithPopupImage = (data, icon) => {
        return data.map(punto => {
            return L.marker(punto.coords, { icon: icon }).addTo(map)
                .bindPopup(`<b>${punto.nombre}</b><br><img src="${icon.options.iconUrl}" alt="${punto.nombre}" style="width: 32px; height: 32px;"><br>${punto.descripcion}`);
        });
    };

    // Crear capas
    const capaGastronomia = L.layerGroup(addPointsWithPopupImage(gastronomia, gastronomiaIcon));
    const capaBodegas = L.layerGroup(addPointsWithPopupImage(bodegas, vinoIcon));
    const capaAceiteras = L.layerGroup(addPointsWithPopupImage(aceiteras, olivoIcon));
    const capaAlojamientos = L.layerGroup(addPointsWithPopupImage(alojamientos, alojamientoIcon));
    const capaAgencias = L.layerGroup(addPointsWithPopupImage(agencias, AgenciaIcon));

    // Agregar las capas al mapa por defecto
    capaGastronomia.addTo(map);
    capaBodegas.addTo(map);
    capaAceiteras.addTo(map);
    capaAlojamientos.addTo(map);
    capaAgencias.addTo(map);

    // Agregar control de capas
    L.control.layers(null, {
        'Gastronomía': capaGastronomia,
        'Bodegas': capaBodegas,
        'Aceiteras': capaAceiteras,
        'Alojamientos': capaAlojamientos,
        'Agencias de Viajes': capaAgencias
    }, { collapsed: true }).addTo(map);

    // Agregar iconos a las capas del control
    const layerControl = document.getElementsByClassName('leaflet-control-layers-selector');
    Array.from(layerControl).forEach((control, index) => {
        const icon = document.createElement('img');
        icon.src = index === 0 ? gastronomiaIcon.options.iconUrl :
            index === 1 ? vinoIcon.options.iconUrl :
                index === 2 ? olivoIcon.options.iconUrl :
                    index === 3 ? alojamientoIcon.options.iconUrl :
                        AgenciaIcon.options.iconUrl;
        icon.style.width = '16px';
        icon.style.height = '16px';
        control.parentNode.insertBefore(icon, control.nextSibling);
    });

});

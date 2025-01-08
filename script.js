document.addEventListener("DOMContentLoaded", () => {

    function a() {
        o[r].style.display = "none";
        r = (r + 1) % o.length;
        o[r].style.display = "block";
    }

    const e = document.getElementById("slider");
    const o = e.getElementsByTagName("img");
    let r = 0;

    setInterval(a, 3000);

    const n = L.map("map").setView([-31.66, -68.58], 11.2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(n);

    const s = L.icon({
        iconUrl: "popup/Bodegas.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const t = L.icon({
        iconUrl: "popup/Aceiteras.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const i = L.icon({
        iconUrl: "popup/Alojamiento.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const c = L.icon({
        iconUrl: "popup/Gastronomia.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const l = L.icon({
        iconUrl: "popup/AgenciadeViajes.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const m = [
        {
            nombre: "La 14 Gourmet",
            coords: [-31.6905886, -68.5859846],
            descripcion:
                "Teléfono: <a href='tel:2644624777'>2644624777</a><br>Instagram: <a href='https://www.instagram.com/la14gourmet/?hl=es'>@la14gourmet</a>",
        },
        {
            nombre: "La Salmuera",
            coords: [-31.5957119, -68.6041221],
            descripcion:
                "Teléfono: <a href='tel:2644988604'>2644988604</a><br>Instagram: <a href='https://www.instagram.com/lasalmuerasanjuan/?hl=es'>@lasalmuerasanjuan</a>",
        },
        {
            nombre: "Tierras Negras",
            coords: [-31.6648729, -68.5404433],
            descripcion:
                "Teléfono: <a href='tel:+54 9 264 5656584 / +54 9 264 4890263'>+54 9 264 5656584 / +54 9 264 4890263</a><br>Instagram: <a href='https://www.instagram.com/tneventosyresto/'>@tneventosyresto</a>",
        },
        {
            nombre: "Del Parque Heladería y Confitería",
            coords: [-31.6584155, -68.5789342],
            descripcion:
                "Teléfono: <a href='tel:2646716329'>2646716329</a><br>Descripción del restaurante.",
        },
    ];

    const d = [
        {
            nombre: "Viñas de Segisa",
            coords: [-31.701604, -68.5901271],
            descripcion:
                "Teléfono: <a href='tel:2644578366'>2644578366</a><br>Instagram: <a href='https://www.instagram.com/bodega_segisa/?hl=es'>@bodega_segisa</a>",
        },
        {
            nombre: "Bodega Fabril Alto Verde",
            coords: [-31.6909003, -68.5498987],
            descripcion:
                "Teléfono: <a href='tel:2644697839'>2644697839</a> / <a href='tel:2646779294'>2646779294</a><br>Instagram: <a href='https://www.instagram.com/bodegafabrilaltoverde/?hl=es'>@bodegafabrilaltoverde</a>",
        },
        {
            nombre: "Champañera Miguel Mas",
            coords: [-31.6643529, -68.5357054],
            descripcion:
                "Teléfono: <a href='tel:2646604901'>2646604901</a><br>Instagram: <a href='https://www.instagram.com/champaneramas/?hl=es'>@champaneramas</a>",
        },
    ];

    const p = [
        {
            nombre: "Finca Tutuna",
            coords: [-31.6933871, -68.5693175],
            descripcion:
                "Teléfono: <a href='tel:2644070766'>2644070766</a> / <a href='tel:2645810022'>2645810022</a><br>Instagram: <a href='https://www.instagram.com/tutuna_san_juan/?hl=es'>@tutuna_san_juan</a>",
        },
        {
            nombre: "La Pocitana",
            coords: [-31.6903003, -68.5489780],
            descripcion:
                "Instagram: <a href='https://www.instagram.com/lapocitanasanjuan/?hl=es'>@lapocitanasanjuan</a>",
        },
        {
            nombre: "La Salmuera",
            coords: [-31.5957119, -68.6041221],
            descripcion:
                "Teléfono: <a href='tel:2644988604'>2644988604</a><br>Instagram: <a href='https://www.instagram.com/lasalmuerasanjuan/?hl=es'>@lasalmuerasanjuan</a>",
        },
        {
            nombre: "Seis Marías",
            coords: [-31.8065694, -68.5421459],
            descripcion:
                "Teléfono: <a href='tel:2645421096'>2645421096</a> / <a href='tel:2645046812'>2645046812</a><br>Instagram: <a href='https://www.instagram.com/seismariasoliva/?hl=es'>@seismariasoliva</a>",
        },
    ];

    const h = [
        {
            nombre: "Cabañas de Olga",
            coords: [-31.6367047, -68.5355302],
            descripcion:
                "Teléfono: <a href='tel:2645271477'>2645271477</a><br>Instagram: <a href='https://www.instagram.com/cabanasdeolga/?hl=es'>@cabanasdeolga</a>",
        },
        {
            nombre: "Finca Don Elias",
            coords: [-31.7231445, -68.5604074],
            descripcion:
                "Teléfono: <a href='tel:2644418500'>2644418500</a><br>Instagram: <a href='https://www.instagram.com/fincadonelias.sj/?hl=es'>@fincadonelias.sj</a>",
        },
        {
            nombre: "Finca Tutuna",
            coords: [-31.6933871, -68.5693175],
            descripcion:
                "Teléfono: <a href='tel:2644070766'>2644070766</a> / <a href='tel:2645810022'>2645810022</a><br>Instagram: <a href='https://www.instagram.com/tutuna_san_juan/?hl=es'>@tutuna_san_juan</a>",
        },
        {
            nombre: "Olivos del Sol",
            coords: [-31.6354047, -68.5350302],
            descripcion:
                "Teléfono: <a href='tel:264444000'>264444000</a><br>Instagram: <a href='https://www.instagram.com/hotel_olivosdelsol/?hl=es'>@hotel_olivosdelsol</a>",
        },
        {
            nombre: "El Rosario",
            coords: [-31.6898651, -68.5906105],
            descripcion:
                "Teléfono: <a href='tel: 2644773612'>2644773612</a><br></a>",
        },
        {
            nombre: "Viñas de Segisa",
            coords: [-31.701604, -68.5901271],
            descripcion:
                "Teléfono: <a href='tel:2644578366'>2644578366</a><br>Instagram: <a href='https://www.instagram.com/bodega_segisa/?hl=es'>@bodega_segisa</a>",
        },
        {
            nombre: "Quinta La Pintada",
            coords: [-31.6859466, -68.5662414],
            descripcion:
                "Teléfono: <a href='tel:2644145701'>2644145701</a><br>Instagram: <a href='https://www.instagram.com/quintalapintada/?hl=es'>@quintalapintada</a>",
        },
        {
            nombre: "Casona del Cerro",
            coords: [-31.6476277, -68.6100204],
            descripcion:
                "Teléfono: <a href='tel:2645041720'>2645041720</a><br>Instagram: <a href='https://www.instagram.com/casonas_del_cerro/?hl=es'>@casonas_del_cerro</a>",
        },
    ];

    const g = [
        {
            nombre: "Elisan y Compañia Viajes",
            coords: [-31.6628729, -68.5404433],
            descripcion:
                "Teléfono: <a href='tel:264154106300'>264154106300</a>",
        },
        {
            nombre: "Aeroclub San Juan",
            coords: [-31.61, -68.54701],
            descripcion:
                "Teléfono: <a href='tel:2644240219'>2644240219</a><br>Instagram: <a href='https://www.instagram.com/aeroclubsanjuan/?hl=es'>@aeroclubsanjuan</a>",
        },
    ];

    const f = (a, e) =>
        a.map((a) =>
            L.marker(a.coords, { icon: e })
                .addTo(n)
                .bindPopup(
                    `<b>${a.nombre}</b><br><img src="${e.options.iconUrl}" alt="${a.nombre}" style="width: 32px; height: 32px;"><br>${a.descripcion}`
                )
        );

    const b = L.layerGroup(f(m, c));
    const u = L.layerGroup(f(d, s));
    const w = L.layerGroup(f(p, t));
    const T = L.layerGroup(f(h, i));
    const y = L.layerGroup(f(g, l));

    b.addTo(n);
    u.addTo(n);
    w.addTo(n);
    T.addTo(n);
    y.addTo(n);

    L.control.layers(null, {
        "Gastronomía": b,
        Bodegas: u,
        Aceiteras: w,
        Alojamientos: T,
        Actividades: y,
    }, { collapsed: true }).addTo(n);

    const I = document.getElementsByClassName("leaflet-control-layers-selector");
    Array.from(I).forEach((a, e) => {
        const o = document.createElement("img");
        o.src =
            e === 0
                ? c.options.iconUrl
                : e === 1
                    ? s.options.iconUrl
                    : e === 2
                        ? t.options.iconUrl
                        : e === 3
                            ? i.options.iconUrl
                            : l.options.iconUrl;
        o.style.width = "16px";
        o.style.height = "16px";
        a.parentNode.insertBefore(o, a.nextSibling);
    });

    L.control
        .locate({
            position: "topleft",
            strings: { title: "Mostrar mi ubicación" },
            locateOptions: { maxZoom: 13, enableHighAccuracy: true },
        })
        .addTo(n);

});
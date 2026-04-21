const products = [
    {
        id: "pure-mini-auto",
        name: "FreshVita Pure Mini Auto",
        category: "purificador",
        promo: "Mas vendido",
        image: "/images/user-products/pure-mini-auto.webp",
        price: 69,
        oldPrice: 84,
        description: "Modelo portatil para auto con filtro HEPA compacto y bajo consumo.",
        specs: [
            ["Cobertura", "Vehiculos y taxis"],
            ["Filtro", "HEPA + carbon"],
            ["Ruido", "28 dB"],
            ["Entrega", "Express en ciudad"]
        ]
    },
    {
        id: "home-balance-pro",
        name: "FreshVita Home Balance",
        category: "purificador",
        promo: "Hogar",
        image: "/images/user-products/home-balance.jpg",
        price: 149,
        oldPrice: 169,
        description: "Purificador silencioso para dormitorios, apartamentos y salas pequenas.",
        specs: [
            ["Cobertura", "Hasta 35 m2"],
            ["Filtro", "HEPA H13"],
            ["Ruido", "24 dB"],
            ["Ideal", "Alergias y polvo"]
        ]
    },
    {
        id: "office-protect-x",
        name: "FreshVita Office Protect X",
        category: "purificador",
        promo: "Premium",
        image: "/images/user-products/office-protect-x.webp",
        price: 249,
        oldPrice: 279,
        description: "Equipo para oficinas y consultorios con sensor inteligente y panel digital.",
        specs: [
            ["Cobertura", "Hasta 55 m2"],
            ["Filtro", "HEPA + carbon activado"],
            ["Ruido", "30 dB"],
            ["Modo", "Automatico"]
        ]
    },
    {
        id: "metro-clinic-air",
        name: "FreshVita Metro Clinic",
        category: "purificador",
        promo: "Salud",
        image: "/images/user-products/metro-clinic.png",
        price: 329,
        oldPrice: 359,
        description: "Disenado para recepciones, clinicas y areas con alta exigencia de aire limpio.",
        specs: [
            ["Cobertura", "Hasta 70 m2"],
            ["Filtro", "HEPA H14"],
            ["Ruido", "33 dB"],
            ["Extra", "Sensor PM2.5"]
        ]
    },
    {
        id: "filter-hepa-replacement",
        name: "Filtro HEPA FreshVita",
        category: "accesorio",
        promo: "Repuesto",
        image: "/images/user-products/filtro-hepa-industrial.jpeg",
        price: 29,
        oldPrice: 35,
        description: "Repuesto para linea hogar y oficina con instalacion sencilla.",
        specs: [
            ["Compatibilidad", "Home y Office"],
            ["Duracion", "6 a 8 meses"],
            ["Uso", "Particulas finas"],
            ["Entrega", "Nacional"]
        ]
    },
    {
        id: "carbon-pack",
        name: "Pack Carbon Active Duo",
        category: "accesorio",
        promo: "Complemento",
        image: "/images/user-products/carbon-pack.webp",
        price: 18,
        oldPrice: 22,
        description: "Cartuchos para control de olores y apoyo al sistema de filtrado principal.",
        specs: [
            ["Contenido", "2 unidades"],
            ["Compatibilidad", "Linea hogar"],
            ["Funcion", "Olores y humo"],
            ["Instalacion", "Rapida"]
        ]
    },
    {
        id: "clean-kit",
        name: "Kit de limpieza FreshVita",
        category: "accesorio",
        promo: "Cuidado",
        image: "/images/user-products/clean-kit.webp",
        price: 15,
        oldPrice: 19,
        description: "Set para limpieza externa, rejillas, sensores y mantenimiento preventivo.",
        specs: [
            ["Incluye", "Cepillo, pano y spray"],
            ["Uso", "Mensual"],
            ["Aplicacion", "Manual"],
            ["Ideal", "Todos los modelos"]
        ]
    },
    {
        id: "air-sensor",
        name: "Sensor AirCheck WiFi",
        category: "accesorio",
        promo: "Smart",
        image: "/images/real/air-monitor.jpg",
        price: 42,
        oldPrice: 49,
        description: "Sensor adicional para monitorear calidad del aire y humedad en tiempo real.",
        specs: [
            ["Conexion", "WiFi"],
            ["Lectura", "PM2.5 y humedad"],
            ["Uso", "Hogar u oficina"],
            ["Vista", "App"]
        ]
    },
    {
        id: "service-essential",
        name: "FreshCare Essential",
        category: "mantenimiento",
        promo: "Servicio",
        image: "/images/product-maintenance.svg",
        price: 25,
        oldPrice: null,
        description: "Revision general y limpieza preventiva para mantener el flujo de aire optimo.",
        specs: [
            ["Nivel", "Basico"],
            ["Duracion", "30 min"],
            ["Incluye", "Chequeo general"],
            ["Atencion", "Por cita"]
        ]
    },
    {
        id: "service-plus",
        name: "FreshCare Plus",
        category: "mantenimiento",
        promo: "Servicio",
        image: "/images/product-maintenance.svg",
        price: 45,
        oldPrice: null,
        description: "Limpieza profunda, desinfeccion y revision de sensores y filtros.",
        specs: [
            ["Nivel", "Intermedio"],
            ["Duracion", "50 min"],
            ["Incluye", "Calibracion"],
            ["Atencion", "Domicilio o taller"]
        ]
    },
    {
        id: "service-total",
        name: "FreshCare Total",
        category: "mantenimiento",
        promo: "Servicio",
        image: "/images/product-maintenance.svg",
        price: 79,
        oldPrice: null,
        description: "Plan premium con cambio de filtro preinstalado y reporte tecnico completo.",
        specs: [
            ["Nivel", "Premium"],
            ["Duracion", "90 min"],
            ["Incluye", "Filtro y reporte"],
            ["Atencion", "Prioritaria"]
        ]
    }
];

const cart = [];
let selectedFilter = "all";
let searchTerm = "";

function currency(value) {
    return `$${value.toFixed(2)}`;
}

function renderProducts() {
    const container = document.getElementById("products");
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const visibleProducts = products.filter((product) => {
        const matchesFilter = selectedFilter === "all" || product.category === selectedFilter;
        const haystack = `${product.name} ${product.category} ${product.description} ${product.specs.flat().join(" ")}`.toLowerCase();
        const matchesSearch = normalizedSearch === "" || haystack.includes(normalizedSearch);
        return matchesFilter && matchesSearch;
    });

    if (visibleProducts.length === 0) {
        container.innerHTML = `<div class="empty-state">No encontramos resultados con ese filtro. Prueba otra palabra o cambia la categoria.</div>`;
        return;
    }

    container.innerHTML = visibleProducts.map((product) => `
        <article class="card">
            <img class="card-image" src="${product.image}" alt="${product.name}">
            <div class="card-top">
                <span class="card-tag">${product.category}</span>
                <span class="promo-badge">${product.promo}</span>
            </div>
            <div>
                <h3>${product.name}</h3>
                <p class="card-description">${product.description}</p>
            </div>
            <div class="spec-list">
                ${product.specs.map(([label, value]) => `<div class="spec"><span>${label}</span><strong>${value}</strong></div>`).join("")}
            </div>
            <div class="card-footer">
                <div class="price-block">
                    ${product.oldPrice ? `<span class="old-price">${currency(product.oldPrice)}</span>` : ""}
                    <span class="price">${currency(product.price)}</span>
                </div>
                <button type="button" onclick="addToCartById('${product.id}')">Anadir</button>
            </div>
        </article>
    `).join("");
}

function setFilter(filter) {
    selectedFilter = filter;
    document.querySelectorAll(".filter-chip").forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === filter);
    });
    renderProducts();
}

function handleSearch(event) {
    searchTerm = event.target.value;
    renderProducts();
}

function addToCartById(id) {
    const product = products.find((item) => item.id === id);
    if (!product) {
        return;
    }

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    syncCartCount();
    updateCart();
    toggleCart(true);
    showToast(`${product.name} agregado al carrito`);
}

function updateQuantity(id, delta) {
    const item = cart.find((product) => product.id === id);
    if (!item) {
        return;
    }

    item.quantity += delta;
    if (item.quantity <= 0) {
        const index = cart.findIndex((product) => product.id === id);
        cart.splice(index, 1);
    }

    syncCartCount();
    updateCart();
}

function syncCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = Number(document.getElementById("zone").value || 0);
    return {
        subtotal,
        shipping,
        total: subtotal + shipping
    };
}

function updateCart() {
    const emptyState = document.getElementById("cart-empty");
    const content = document.getElementById("cart-content");
    const items = document.getElementById("cart-items");

    if (cart.length === 0) {
        emptyState.classList.remove("hidden");
        content.classList.add("hidden");
        items.innerHTML = "";
        document.getElementById("subtotal").textContent = currency(0);
        document.getElementById("shipping").textContent = currency(0);
        document.getElementById("total").textContent = currency(0);
        return;
    }

    emptyState.classList.add("hidden");
    content.classList.remove("hidden");

    items.innerHTML = cart.map((item) => `
        <article class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>${item.category} · ${currency(item.price)} c/u</p>
            </div>
            <div>
                <strong>${currency(item.price * item.quantity)}</strong>
                <div class="cart-item-controls">
                    <button type="button" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
        </article>
    `).join("");

    const totals = calculateTotals();
    document.getElementById("subtotal").textContent = currency(totals.subtotal);
    document.getElementById("shipping").textContent = currency(totals.shipping);
    document.getElementById("total").textContent = currency(totals.total);
}

function toggleCart(forceOpen) {
    const panel = document.getElementById("cart-panel");
    const overlay = document.getElementById("overlay");
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : panel.classList.contains("hidden");

    panel.classList.toggle("hidden", !shouldOpen);
    overlay.classList.toggle("hidden", !shouldOpen);

    if (shouldOpen) {
        closeCheckout();
        updateCart();
    }
}

function openCheckout() {
    if (cart.length === 0) {
        showToast("Agrega un producto antes de continuar");
        return;
    }

    document.getElementById("checkout-modal").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");
}

function closeCheckout() {
    document.getElementById("checkout-modal").classList.add("hidden");
}

function closeOverlay() {
    toggleCart(false);
    closeCheckout();
    document.getElementById("overlay").classList.add("hidden");
}

function pay(method) {
    const totals = calculateTotals();
    showToast(`Pago simulado con ${method}. Total ${currency(totals.total)}`);
    cart.splice(0, cart.length);
    syncCartCount();
    updateCart();
    closeCheckout();
    toggleCart(false);
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
        toast.classList.add("hidden");
    }, 2400);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeOverlay();
    }
});

renderProducts();
syncCartCount();
updateCart();

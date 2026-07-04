// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ──
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// ── AUDIENCE CAROUSEL (mobile) ──
let audienceIndex = 0;

function initAudienceCarousel() {
    const cards = document.querySelectorAll('#audience-grid .audience-card');
    cards.forEach((c, i) => c.classList.toggle('active', i === 0));
}

function shiftAudience(dir) {
    const cards = document.querySelectorAll('#audience-grid .audience-card');
    if (!cards.length) return;
    cards[audienceIndex].classList.remove('active');
    audienceIndex = (audienceIndex + dir + cards.length) % cards.length;
    cards[audienceIndex].classList.add('active');
}

// ── UNITS DATA ──
const units = [
    {
        id: 'deluxe-double-twin',
        type: 'DOUBLE',
        name: 'Deluxe Double Room – Twin Beds',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        price: 50,
        guests: 2,
        tags: ['WiFi', 'Kitchenette', 'AC', 'TV'],
        images: [
            'images/DeluxeDoubleRoom (3).jpeg',
            'images/DeluxeDoubleRoom (1).jpeg',
            'images/DeluxeDoubleRoom (2).jpeg',
            'images/DeluxeDoubleRoom (5).jpeg',
            'images/DeluxeDoubleRoom (6).jpeg'
        ]
    },
    {
        id: 'deluxe-double-king',
        type: 'DOUBLE',
        name: 'Deluxe Double Room – Big Bed',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        price: 50,
        guests: 2,
        tags: ['WiFi', 'Kitchenette', 'AC', 'TV'],
        images: [
            'images/DeluxeDoubleRoom (4).jpeg',
            'images/DeluxeDoubleRoom (1).jpeg',
            'images/DeluxeDoubleRoom (2).jpeg',
            'images/DeluxeDoubleRoom (5).jpeg',
            'images/DeluxeDoubleRoom (6).jpeg'
        ]
    },
    {
        id: 'deluxe-triple',
        type: 'TRIPLE',
        name: 'Deluxe Triple Room',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        price: 65,
        guests: 3,
        tags: ['WiFi', 'Kitchenette', 'AC', 'TV'],
        images: [
            'images/DeluxeTripleRoom (1).jpeg',
            'images/DeluxeTripleRoom (2).jpeg',
            'images/DeluxeTripleRoom (3).jpeg',
            'images/DeluxeTripleRoom (4).jpeg'
        ]
    },
    {
        id: 'deluxe-family-suite',
        type: 'FAMILY',
        name: 'Deluxe Family Suite',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        price: 85,
        guests: 4,
        tags: ['WiFi', 'Kitchenette', 'AC', 'TV'],
        images: [
            'images/DeluxeFamilySuite (3).jpeg',
            'images/DeluxeFamilySuite (1).jpeg',
            'images/DeluxeFamilySuite (2).jpeg',
            'images/DeluxeFamilySuite (4).jpeg',
            'images/DeluxeFamilySuite (5).jpeg',
            'images/DeluxeFamilySuite (6).jpeg',
            'images/DeluxeFamilySuite (7).jpeg',
            'images/DeluxeFamilySuite (8).jpeg'
        ],
        video: 'images/DeluxeFamilySuite.mp4'
    },
];

let currentType = '';
let currentGuests = '';
let currentMin = 50;
let currentMax = 100;

const PRICE_MIN = 50;
const PRICE_MAX = 100;

// ── PRICE SLIDER ──
function updatePriceSlider(evt) {
    const minEl = document.getElementById('price-min');
    const maxEl = document.getElementById('price-max');
    const fill  = document.getElementById('price-range-fill');

    let min = parseInt(minEl.value);
    let max = parseInt(maxEl.value);

    if (min >= max) {
        if (evt && evt.target === minEl) min = max - 5;
        else max = min + 5;
        minEl.value = min;
        maxEl.value = max;
    }

    currentMin = min;
    currentMax = max;

    document.getElementById('price-min-val').textContent = '$' + min;
    document.getElementById('price-max-val').textContent = '$' + max;

    const span = PRICE_MAX - PRICE_MIN;
    const pct1 = ((min - PRICE_MIN) / span) * 100;
    const pct2 = ((max - PRICE_MIN) / span) * 100;
    fill.style.left  = pct1 + '%';
    fill.style.width = (pct2 - pct1) + '%';

    applyFilters();
}

// Add pointer-events to slider thumbs via JS
window.addEventListener('load', () => {
    document.querySelectorAll('input[type="range"]').forEach(r => {
        r.style.pointerEvents = 'none';
        r.style.setProperty('--thumb-pointer', 'all');
    });

    // Init fill bar
    const fill = document.getElementById('price-range-fill');
    if (fill) { fill.style.left = '0%'; fill.style.width = '100%'; }

    // Add CSS for thumb pointer-events
    const style = document.createElement('style');
    style.textContent = `
        input[type="range"]::-webkit-slider-thumb { pointer-events: all; touch-action: none; }
        input[type="range"]::-moz-range-thumb { pointer-events: all; touch-action: none; }
    `;
    document.head.appendChild(style);

    renderUnits(units);
    animateCounters();
    initAudienceCarousel();
});

// ── FILTERS ──
function applyFilters() {
    currentType   = document.getElementById('filter-type').value;
    currentGuests = document.getElementById('filter-guests').value;

    let filtered = [...units];

    if (currentType)
        filtered = filtered.filter(u => u.type === currentType);

    if (currentGuests)
        filtered = filtered.filter(u => u.guests >= parseInt(currentGuests));

    filtered = filtered.filter(u =>
        u.price >= currentMin && u.price <= currentMax
    );

    renderUnits(filtered);
}

function clearFilters() {
    document.getElementById('filter-type').value   = '';
    document.getElementById('filter-guests').value = '';
    document.getElementById('price-min').value = 50;
    document.getElementById('price-max').value = 100;
    currentMin = 50;
    currentMax = 100;
    document.getElementById('price-min-val').textContent = '$50';
    document.getElementById('price-max-val').textContent = '$100';
    const fill = document.getElementById('price-range-fill');
    fill.style.left = '0%';
    fill.style.width = '100%';
    renderUnits(units);
}

// ── UNIT IMAGE CAROUSEL STATE ──
const unitImageIndex = {};

function getUnitMedia(unit) {
    const media = (unit.images || []).map(src => ({ type: 'image', src }));
    if (unit.video) media.push({ type: 'video', src: unit.video });
    return media;
}

function renderMediaTag(id, slide) {
    return slide.type === 'video'
        ? `<video id="media-${id}" class="unit-img" src="${slide.src}" controls></video>`
        : `<img id="media-${id}" class="unit-img" src="${slide.src}" style="object-fit:cover">`;
}

function changeUnitImage(id, dir) {
    const unit = units.find(u => u.id === id);
    if (!unit) return;
    const media = getUnitMedia(unit);
    if (media.length < 2) return;

    const len = media.length;
    let idx = unitImageIndex[id] || 0;
    idx = (idx + dir + len) % len;
    unitImageIndex[id] = idx;

    const mediaEl = document.getElementById(`media-${id}`);
    if (mediaEl) mediaEl.outerHTML = renderMediaTag(id, media[idx]);

    const dotsEl = document.getElementById(`dots-${id}`);
    if (dotsEl) {
        [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === idx));
    }
}

// ── RENDER UNITS ──
function renderUnits(list) {
    const grid = document.getElementById('units-grid');

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="icon">🏠</div>
                <p>No apartments match your filters.</p>
            </div>`;
        return;
    }

    grid.innerHTML = list.map(u => {
        const media = getUnitMedia(u);
        const hasMedia = media.length > 0;
        const idx = unitImageIndex[u.id] || 0;

        let mediaBlock;
        if (hasMedia) {
            const arrows = media.length > 1 ? `
                <button class="img-arrow img-arrow-prev" onclick="changeUnitImage('${u.id}', -1)" aria-label="Previous">&#10094;</button>
                <button class="img-arrow img-arrow-next" onclick="changeUnitImage('${u.id}', 1)" aria-label="Next">&#10095;</button>
                <div class="img-dots" id="dots-${u.id}">
                    ${media.map((m, i) => `<span class="img-dot ${i === idx ? 'active' : ''}"></span>`).join('')}
                </div>` : '';
            mediaBlock = `
                <div class="unit-img-wrapper">
                    ${renderMediaTag(u.id, media[idx])}
                    ${arrows}
                </div>`;
        } else {
            mediaBlock = `<div class="unit-img">🏠</div>`;
        }

        return `
        <div class="unit-card">
            ${mediaBlock}
            <div class="unit-body">
                <div class="unit-type">${u.type}</div>
                <h3 class="unit-name">${u.name}</h3>
                <p class="unit-desc">${u.desc}</p>
                <div class="unit-tags">
                    ${u.tags.map(t => `<span class="unit-tag">${t}</span>`).join('')}
                </div>
                <div class="unit-footer">
                    <div class="unit-price">$${u.price} <span>/ night</span></div>
                    <a href="https://wa.me/96103755409?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(u.name)}."
                       class="btn btn-primary" target="_blank"
                       style="padding:8px 18px;font-size:0.85rem">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    `}).join('');
}

// ── COUNTER ANIMATION ──
function animateCounters() {
    document.querySelectorAll('.num[data-target]').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        const step   = target / (2000 / 16);
        let current  = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target + '+';
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ── SMOOTH SCROLL ──
document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const id = href.substring(1);
    const target = document.getElementById(id);
    
    if (target) {
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.remove('open');
});
// ── TRANSLATIONS ──
const translations = {
    en: {
        nav: { apartments: 'Apartments', amenities: 'Amenities', services: 'Services', contact: 'Contact', bookNow: '📞 Book Now', bookWhatsapp: '📞 Book on WhatsApp' },
        hero: {
            eyebrow: 'Hamra, Beirut · Fully Furnished',
            title: 'Feel at Home<br>in the Heart of Beirut',
            sub: '48 fully furnished suites walking steps away from AUBMC, Hamra Street,<br>and the Mediterranean. Your home away from home.',
            renovated: {
                title: 'Recently Renovated',
                sub: 'Every unit refreshed with modern finishes — top to bottom.',
                tag1: '🎨 Fresh Paint & Flooring',
                tag2: '🛋️ New Furnishings',
                tag3: '🍳 Modern Kitchens'
            }
        },
        stats: { suites: 'Furnished Suites', years: 'Years in Hamra', electricity: 'Hour Electricity', guests: 'Happy Guests' },
        audience: {
            label: 'Who We Welcome', title: 'A Home for Everyone',
            sub: "Whether you're a student, a family, or a business traveler — our apartments are designed for your lifestyle.",
            students: { title: 'University Students', desc: 'Steps from AUB and AUBMC. Fast WiFi, quiet environment, and all the comforts of home.' },
            families: { title: 'Families', desc: 'Spacious suites with full kitchenettes. Cook your own meals and enjoy Beirut at your pace.' },
            business: { title: 'Business Travelers', desc: 'Prime Hamra location, stable electricity, and a comfortable workspace in every unit.' },
            patients: { title: 'AUB Patients', desc: 'Close to AUBMC for treatment stays and follow-ups. A calm, comfortable base near the hospital.' },
            longstay: { title: 'Long-Stay Guests', desc: 'Weekly and monthly rates available. Settle in and experience Beirut like a local.' }
        },
        units: { label: 'Our Apartments', title: 'Find Your Perfect Unit', sub: 'Every apartment is fully furnished and equipped — just bring your suitcase.' },
        filters: {
            typeLabel: 'Type', guestsLabel: 'Guests', priceRange: 'Price range / night', clear: 'Clear',
            type: { all: 'All types', double: 'Deluxe Double Room', triple: 'Deluxe Triple Room', family: 'Deluxe Family Suite' },
            guests: { any: 'Any', '1': '1 guest', '2': '2 guests', '3': '3 guests', '4': '4+ guests' }
        },
        amenities: {
            label: "What's Included", title: 'Everything You Need', sub: 'Every apartment comes fully equipped — no hidden extras, no surprises.',
            electricity: { title: '24/7 Electricity', desc: 'Uninterrupted power around the clock' },
            wifi: { title: 'High-Speed WiFi', desc: 'Fast and reliable internet in every unit' },
            kitchenette: { title: 'Full Kitchenette', desc: 'Fridge, electric stove, and kitchenware' },
            parking: { title: 'Free Parking', desc: 'On-site private parking for guests' },
            tv: { title: 'Smart TV', desc: 'Stay entertained with your favorite streaming platforms' },
            ac: { title: 'Air Conditioning', desc: 'Climate control in every room' },
            elevator: { title: 'Elevator', desc: 'Easy access to all floors' },
            security: { title: '24/7 Security', desc: 'Safe and secure building at all times' },
            housekeeping: { title: 'Housekeeping', desc: 'Regular cleaning and fresh linen' },
            sea: { title: 'Near the Sea', desc: '1.2 km from AUB Beach Resort' },
            aub: { title: 'Near AUB & AUBMC', desc: 'Walking distance from major universities' }
        },
        services: {
            label: 'Optional Add-ons', title: 'Laundry & Ironing Services', sub: 'Available on request, priced per item.',
            laundry: { title: 'Laundry (per item)' }, ironing: { title: 'Ironing (per item)' },
            standardItem: 'Standard item', abaya: 'Abaya / Dishdasha', undergarments: 'Undergarments'
        },
        contact: {
            label: 'Get In Touch', title: 'Contact Us', sub: 'Ready to book or have questions? Reach out — we respond fast on WhatsApp.',
            reachOut: 'Reach Out', address: 'Address', addressValue: 'Hamra, near AUBMC', openMaps: '↗ Open in Google Maps',
            whatsappPhone: 'WhatsApp & Phone', email: 'Email', checkTimes: 'Check-in / Check-out',
            checkTimesValue: 'Check-in from 14:00<br>Check-out by 12:00', whatsappBtn: '💬 Message Us on WhatsApp'
        },
        social: { title: 'Stay Connected', sub: 'Follow us for availability updates, special offers, and a glimpse of life in Hamra' },
        footer: { tail: 'Hamra, Beirut, Lebanon. All rights reserved.' },
        unitTypeLabels: { DOUBLE: 'DOUBLE', TRIPLE: 'TRIPLE', FAMILY: 'FAMILY' },
        unitTags: { WiFi: 'WiFi', Kitchenette: 'Kitchenette', AC: 'AC', TV: 'TV' },
        unitCard: { night: '/ night', bookNow: 'Book Now' },
        emptyState: 'No apartments match your filters.'
    },
    ar: {
        nav: { apartments: 'الشقق', amenities: 'المرافق', services: 'الخدمات', contact: 'تواصل معنا', bookNow: '📞 احجز الآن', bookWhatsapp: '📞 احجز عبر واتساب' },
        hero: {
            eyebrow: 'الحمرا، بيروت · مفروشة بالكامل',
            title: 'اشعر أنك في بيتك<br>في قلب بيروت',
            sub: '48 جناحًا مفروشًا بالكامل على بعد خطوات من AUBMC وشارع الحمرا،<br>والبحر المتوسط. بيتك بعيدًا عن بيتك.',
            renovated: {
                title: 'تم تجديدها مؤخرًا',
                sub: 'كل وحدة تم تجديدها بلمسات عصرية — من الألف إلى الياء.',
                tag1: '🎨 دهان وأرضيات جديدة',
                tag2: '🛋️ أثاث جديد',
                tag3: '🍳 مطابخ عصرية'
            }
        },
        stats: { suites: 'جناح مفروش', years: 'سنة في الحمرا', electricity: 'ساعة كهرباء', guests: 'ضيف سعيد' },
        audience: {
            label: 'نرحب بـ', title: 'بيت لكل شخص',
            sub: 'سواء كنت طالبًا أو عائلة أو مسافر عمل — شققنا مصممة لتناسب أسلوب حياتك.',
            students: { title: 'طلاب الجامعة', desc: 'على بعد خطوات من AUB وAUBMC. واي فاي سريع، بيئة هادئة، وكل وسائل الراحة المنزلية.' },
            families: { title: 'العائلات', desc: 'أجنحة واسعة مع مطابخ كاملة. اطبخوا وجباتكم واستمتعوا ببيروت بالسرعة التي تناسبكم.' },
            business: { title: 'مسافرو الأعمال', desc: 'موقع متميز في الحمرا، كهرباء مستقرة، ومساحة عمل مريحة في كل وحدة.' },
            patients: { title: 'مرضى AUB', desc: 'قريب من AUBMC للإقامة أثناء العلاج والمتابعة. قاعدة هادئة ومريحة قرب المستشفى.' },
            longstay: { title: 'ضيوف الإقامة الطويلة', desc: 'أسعار أسبوعية وشهرية متوفرة. استقر واستمتع ببيروت كأهلها.' }
        },
        units: { label: 'شققنا', title: 'اعثر على وحدتك المثالية', sub: 'كل شقة مفروشة ومجهزة بالكامل — فقط أحضر حقيبتك.' },
        filters: {
            typeLabel: 'النوع', guestsLabel: 'الضيوف', priceRange: 'نطاق السعر / الليلة', clear: 'مسح',
            type: { all: 'كل الأنواع', double: 'غرفة ديلوكس مزدوجة', triple: 'غرفة ديلوكس ثلاثية', family: 'جناح ديلوكس عائلي' },
            guests: { any: 'أي عدد', '1': 'ضيف واحد', '2': 'ضيفان', '3': '3 ضيوف', '4': '4 ضيوف فأكثر' }
        },
        amenities: {
            label: 'ما يشمله الحجز', title: 'كل ما تحتاجه', sub: 'كل شقة مجهزة بالكامل — بلا رسوم إضافية مخفية، بلا مفاجآت.',
            electricity: { title: 'كهرباء 24/7', desc: 'طاقة مستمرة على مدار الساعة' },
            wifi: { title: 'واي فاي عالي السرعة', desc: 'إنترنت سريع وموثوق في كل وحدة' },
            kitchenette: { title: 'مطبخ صغير كامل', desc: 'ثلاجة، موقد كهربائي، وأدوات مطبخ' },
            parking: { title: 'موقف سيارات مجاني', desc: 'موقف خاص في الموقع للضيوف' },
            tv: { title: 'تلفزيون ذكي', desc: 'استمتع بمنصات البث المفضلة لديك' },
            ac: { title: 'تكييف هواء', desc: 'تحكم بدرجة الحرارة في كل غرفة' },
            elevator: { title: 'مصعد', desc: 'وصول سهل إلى جميع الطوابق' },
            security: { title: 'أمن على مدار الساعة', desc: 'مبنى آمن ومحمي في جميع الأوقات' },
            housekeeping: { title: 'خدمة تنظيف الغرف', desc: 'تنظيف دوري وأغطية أسرّة نظيفة' },
            sea: { title: 'قريب من البحر', desc: '1.2 كم من منتجع AUB الشاطئي' },
            aub: { title: 'قريب من AUB وAUBMC', desc: 'على مسافة قريبة من الجامعات الكبرى' }
        },
        services: {
            label: 'خدمات إضافية اختيارية', title: 'خدمات الغسيل والكوي', sub: 'متوفرة عند الطلب، بسعر لكل قطعة.',
            laundry: { title: 'الغسيل (لكل قطعة)' }, ironing: { title: 'الكوي (لكل قطعة)' },
            standardItem: 'قطعة عادية', abaya: 'عباية / دشداشة', undergarments: 'ملابس داخلية'
        },
        contact: {
            label: 'تواصل معنا', title: 'اتصل بنا', sub: 'جاهز للحجز أو لديك أسئلة؟ تواصل معنا — نرد بسرعة على واتساب.',
            reachOut: 'تواصل معنا', address: 'العنوان', addressValue: 'الحمرا، بالقرب من AUBMC', openMaps: '↗ افتح في خرائط جوجل',
            whatsappPhone: 'واتساب والهاتف', email: 'البريد الإلكتروني', checkTimes: 'تسجيل الدخول / المغادرة',
            checkTimesValue: 'تسجيل الدخول من الساعة 14:00<br>المغادرة حتى الساعة 12:00', whatsappBtn: '💬 راسلنا عبر واتساب'
        },
        social: { title: 'ابق على تواصل', sub: 'تابعنا لمعرفة التوفر والعروض الخاصة ولمحة عن الحياة في الحمرا' },
        footer: { tail: 'الحمرا، بيروت، لبنان. جميع الحقوق محفوظة.' },
        unitTypeLabels: { DOUBLE: 'مزدوجة', TRIPLE: 'ثلاثية', FAMILY: 'عائلية' },
        unitTags: { WiFi: 'واي فاي', Kitchenette: 'مطبخ صغير', AC: 'تكييف', TV: 'تلفزيون' },
        unitCard: { night: '/ الليلة', bookNow: 'احجز الآن' },
        emptyState: 'لا توجد شقق مطابقة لبحثك.'
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

function applyTranslations() {
    const dict = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : undefined), dict);
        if (value !== undefined) el.innerHTML = value;
    });

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
        btn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    });

    // Re-render dynamic content in the new language
    if (typeof renderUnits === 'function') renderUnits(units);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('siteLang', currentLang);
    applyTranslations();
}

function initLanguage() {
    applyTranslations();
}

// ── NAVBAR SCROLL ──
let navIsScrolled = false;
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const y = window.scrollY;

    // Hysteresis: different enter/exit thresholds prevent flicker
    // when mobile momentum scrolling bounces right at the edge.
    if (!navIsScrolled && y > 60) {
        navIsScrolled = true;
        nav.classList.add('scrolled');
    } else if (navIsScrolled && y < 30) {
        navIsScrolled = false;
        nav.classList.remove('scrolled');
    }
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
        name: 'Deluxe Room – Twin Beds',
        name_ar: 'غرفة ديلوكس – سريرين منفصلين',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        desc_ar: 'غرفة ديلوكس مفروشة بالكامل بتصميم عصري وحمام خاص وكل وسائل الراحة الأساسية لإقامة مريحة في قلب الحمرا.',
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
        name: 'Deluxe Double Room – King Size',
        name_ar: 'غرفة ديلوكس مزدوجة – سرير كينغ',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        desc_ar: 'غرفة ديلوكس مفروشة بالكامل بتصميم عصري وحمام خاص وكل وسائل الراحة الأساسية لإقامة مريحة في قلب الحمرا.',
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
        name_ar: 'غرفة ديلوكس ثلاثية',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        desc_ar: 'غرفة ديلوكس مفروشة بالكامل بتصميم عصري وحمام خاص وكل وسائل الراحة الأساسية لإقامة مريحة في قلب الحمرا.',
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
        name_ar: 'جناح ديلوكس عائلي',
        desc: 'A deluxe fully furnished room featuring modern décor, a private bathroom, and all essential amenities for a comfortable stay in the heart of Hamra.',
        desc_ar: 'جناح ديلوكس مفروش بالكامل بتصميم عصري وحمام خاص وكل وسائل الراحة الأساسية لإقامة مريحة في قلب الحمرا.',
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
    initLanguage();
    initLangPopup();
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
    const t = translations[currentLang];

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="icon">🏠</div>
                <p>${t.emptyState}</p>
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

        const displayName = currentLang === 'ar' && u.name_ar ? u.name_ar : u.name;
        const displayDesc = currentLang === 'ar' && u.desc_ar ? u.desc_ar : u.desc;
        const typeLabel = t.unitTypeLabels[u.type] || u.type;

        return `
        <div class="unit-card">
            ${mediaBlock}
            <div class="unit-body">
                <div class="unit-type">${typeLabel}</div>
                <h3 class="unit-name">${displayName}</h3>
                <p class="unit-desc">${displayDesc}</p>
                <div class="unit-tags">
                    ${u.tags.map(tag => `<span class="unit-tag">${t.unitTags[tag] || tag}</span>`).join('')}
                </div>
                <div class="unit-footer">
                    <div class="unit-price">$${u.price} <span>${t.unitCard.night}</span></div>
                    <a href="https://wa.me/96103755409?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(u.name)}."
                       class="btn btn-primary" target="_blank"
                       style="padding:8px 18px;font-size:0.85rem">
                        ${t.unitCard.bookNow}
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

// ── LANGUAGE POPUP ──
// Shown once per browser session to every visitor (not based on browser language).
function initLangPopup() {
    if (sessionStorage.getItem('langPromptShown')) return;
    sessionStorage.setItem('langPromptShown', '1');

    const popup = document.getElementById('lang-popup');
    if (popup) popup.classList.add('open');
}

function answerLangPopup(wantsArabic) {
    const popup = document.getElementById('lang-popup');
    if (popup) popup.classList.remove('open');

    if (wantsArabic && currentLang !== 'ar') {
        toggleLanguage();
    }
}
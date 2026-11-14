document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ضع روابط الصور الـ 11 هنا (استبدل الروابط دي بروابطك)
    const images = [
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/2ssxeWPjQjErHxGnybUl8JUUMfQeJkRgIf7K1jiM.jpg",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/CJZlA0GsOcxMkCJ3cdz9Q7KbtUywnUgNdDVXJNBm.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/qRFSNGvR8qrqMI1pyCFGgTZhmfl9Z3crHVx64Xa5.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/76DdZ9H5CuPZcfaRiA7cFsf5XxLcHSibRwxApA9U.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/dwU0H7JhOqxQx4RRDXK7LpaLOgdFtplmq7lfRSdQ.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/BLVekEVSrV1gcXMH3YohDPYJZ6yRhEipmoRJu2eZ.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/FBDqAzhcto1nddyyNLa9Xja9pOr0CvkMTD8jGXm9.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/ORhXIghq9TTQXHbSBF6A2I1P0QRZ9SNrHRCx0zzX.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/OXXa4kL2bBynRMDaGo9MsekAAckN3bF1ONxCd3Gy.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/rkDifu4AF7qXxN5GPPIQh712oWegc799N4fBvSFU.png",
        "https://cdn.chefaa.com/filters:format(webp)/fit-in/1256x522/public/uploads/sliders/images/0ozp8ZTrkZAZz4zEs5UjK07HerYrSGEfZaJiQbOV.png"
    ];

    const sliderWrapper = document.getElementById('slider');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    let autoPlayInterval;

    // 2. بناء السلايدر والنقاط
    images.forEach((imgSrc, index) => {
        // إنشاء الصور
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide-item');
        slideDiv.innerHTML = `<img src="${imgSrc}" alt="Slide ${index + 1}">`;
        sliderWrapper.appendChild(slideDiv);

        // إنشاء النقاط
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // 3. وظيفة الانتقال لصورة معينة
    function goToSlide(index) {
        currentIndex = index;
        
        // تحريك السلايدر
        sliderWrapper.style.transform = `translateX(${currentIndex * 100}%)`; 
        // ملاحظة: لأن الاتجاه rtl، الـ translateX بيكون بالموجب
        
        // تحديث النقاط
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        resetInterval(); // إعادة تصفير المؤقت
    }

    // 4. التالي والسابق
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(currentIndex);
    }

    // 5. المؤقت التلقائي (5 ثواني)
    function startInterval() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(autoPlayInterval);
        startInterval();
    }

    // ربط الأزرار
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // إيقاف المؤقت عند الوقوف بالماوس
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    sliderWrapper.addEventListener('mouseleave', startInterval);

    // بدء التشغيل
    startInterval();
});


// دالة عشان ترجع للرئيسية
// function showHome() {
//     document.getElementById('medications-content').classList.add('d-none');
//     document.getElementById('homepage-content').style.display = 'block';
// }

function showHome() {
    document.getElementById('medications-content').classList.add('d-none');
    document.getElementById('hair-content').classList.add('d-none');
    document.getElementById('skin-content').classList.add('d-none');
    document.getElementById('daily-content').classList.add('d-none');
    document.getElementById('makeup-content').classList.add('d-none');
    document.getElementById('medical-content').classList.add('d-none');
    document.getElementById('vitamins-content').classList.add('d-none');
    document.getElementById('searchInput').value = '';

    document.getElementById('homepage-content').style.display = 'block';
}

function showCategory(categoryId) {
    document.getElementById('homepage-content').style.display = 'none';


    document.getElementById('medications-content').classList.add('d-none');
    document.getElementById('hair-content').classList.add('d-none');
    document.getElementById('skin-content').classList.add('d-none');
    document.getElementById('daily-content').classList.add('d-none');
    document.getElementById('makeup-content').classList.add('d-none');
    document.getElementById('medical-content').classList.add('d-none');
    document.getElementById('vitamins-content').classList.add('d-none');


    let targetCategory = document.getElementById(categoryId + '-content');
    if (targetCategory) {
        targetCategory.classList.remove('d-none');
    }
}


// دالة تحريك سلايدر الأدوية المسكنة
function movePainkillers(direction) {
    const track = document.getElementById('painkillersTrack');
    
    // بنجيب أول كارت عشان نعرف عرضه إيه
    const firstCard = track.querySelector('.mini-product-card');
    if (!firstCard) return;

    // عرض الكارت + المسافة بين الكروت (15px)
    const scrollAmount = firstCard.offsetWidth + 15;

    if (direction === 'next') {
        // تحريك لليسار (عشان العربية من اليمين للشمال)
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'prev') {
        // تحريك لليمين
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// دالة تشغيل وإطفاء الوضع الليلي
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // بنحفظ اختيار المستخدم عشان ميروحش مع الريفريش
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        document.getElementById('themeIcon').className = 'fa-solid fa-sun'; // تغيير الأيقونة لشمس
    } else {
        localStorage.setItem('theme', 'light');
        document.getElementById('themeIcon').className = 'fa-solid fa-moon'; // تغيير الأيقونة لقمر
    }
}

// أول ما الصفحة تحمل، بنشوف إيه الوضع اللي كان متحفظ
document.addEventListener('DOMContentLoaded', function() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        // نتأكد إن زرار الوضع الليلي موجود قبل ما نغير الأيقونة
        let themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    }
});
 

function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let allProducts = document.querySelectorAll('.product-card, .mini-product-card');
    
    // لو المستخدم مسح الكلام من خانة البحث، نرجع الرئيسية زي ما كانت
    if (input === "") {
        showHome(); // نستخدم دالة الرجوع للرئيسية اللي إحنا عملناها
        return; 
    }

    // 1. نخفي الصفحة الرئيسية (السلايدر والبانرات)
    document.getElementById('homepage-content').style.display = 'none';
    
    // 2. نجيب كل الأقسام
    let allSections = ['medications-content', 'hair-content', 'skin-content', 'daily-content', 'makeup-content', 'medical-content', 'vitamins-content'];
    
    let foundAnyMatch = false;

    // 3. نلف على كل قسم
    allSections.forEach(sectionId => {
        let section = document.getElementById(sectionId);
        if (!section) return;

        // نظهر القسم مؤقتاً عشان نقدر نقرا المنتجات اللي جواه
        section.classList.remove('d-none');
        
        let sectionProducts = section.querySelectorAll('.product-card, .mini-product-card');
        let sectionHasMatch = false;

        // نلف على منتجات القسم ده
        sectionProducts.forEach(product => {
            let productName = product.querySelector('h4').innerText.toLowerCase();
            
            if (productName.includes(input)) {
                product.style.display = 'flex'; // لو موجود نظهره
                sectionHasMatch = true;
                foundAnyMatch = true;
            } else {
                product.style.display = 'none'; // لو مش موجود نخفيه
            }
        });

        // لو القسم ده مفيش فيه ولا منتج اتطابق، نخفي القسم كله تاني
        if (!sectionHasMatch) {
            section.classList.add('d-none');
        }
    });

    // 4. لو مفيش أي نتائج خالص في الموقع كله
    let noResultsMsg = document.getElementById('noResultsMsg');
    if(noResultsMsg) {
        if (!foundAnyMatch) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }
}

// دالة فتح وقفل القائمة الفرعية
function toggleSubMenu(element) {
    let subMenu = element.nextElementSibling; // بيجيب الـ ul اللي تحتيه
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
        element.classList.add("closed");
    } else {
        subMenu.style.display = "block";
        element.classList.remove("closed");
    }
}

// ==========================================
// 1. قاعدة بيانات المنتجات (الـ 20 منتج بتوع الحالة الصحية)
// ==========================================
const productsData = {
    'medications-default': [
        { name: "بانادول كولد اند فلو علاج فعال لأعراض البرد و الإنفلونزا", desc: "", price: "76", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-cold-and-flu-day-01757586304.png" },
        { name: "اقراص دوليبران 1000 باراسيتامول 10 | doliprane", desc: "", price: "48", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/novaldol-analgesic-and-pain-killer-1000-mg-15-tablets-01754834008.png" },
        { name: "دوليبران 1000 مجم باراسيتامول مسكن للصداع", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/novaldol-analgesic-and-pain-killer-1000-mg-15-tablets-duypvp2r-duzdvqep-01754833691.png" },
        { name: "بانادول اكسترا اونيتشوب لتخفيف إضافي مسكن فعال", desc: "", price: "58", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-extra-tab-01762260859.png" },
        { name: "بخاخ نازاكورت للانف للحساسية واحتقان الانف 55 ميكجم |", desc: "", price: "151", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nasacort-aq-allergy-nasal-spray-suspension-55-microgramsdose-24-hours-relief-of-nasal-congestion-sneezing-runny-nose-itchy-nose-01742217532.png" },
        { name: "تلفاست مضاده للحساسية ولا تسبب النعاس 120مجم |", desc: "", price: "116", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/telfast-antihistamine-allergy-tablets-120-mg-20-tablets-01742218104.png" },
        { name: "نازونيكس 0.05% بخاخ للأنف موميتازون فيورات", desc: "", price: "157", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nasonex-005-mometasone-furoate-monohydrate-aqueous-nasal-spray-scent-free-18-grw0tq-01744709642.png" },
        { name: "ايريوس أقراص لحساسية الانف والارتيكاريا 5 مجم | 20", desc: "", price: "118", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aerius-5mg-30-tab-01744709703.png" },
        { name: "انتوبال ٢٠ مجم حبوب المعدة لعلاج الحموضة", desc: "", price: "88", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/antopral-20-mg-14-tab-djij-01732106352.png" },
        { name: "لينكس للبالغين | 14 كبسولة", desc: "", price: "260", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/linex-adults-14-capsules-zkse-01724148665.png" },
        { name: "دواء برونشيكم شراب للكبار والاطفال للكحة", desc: "", price: "78", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bronchicum-s-elixir-anti-cough-elixir-100-ml-01742214935.png" },
        { name: "انتروجيرمينا امبول بروبيوتيك للقولون للاطفال والكبار 2", desc: "", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/enterogermina-oral-suspension-2-billion-5ml-20-vials-fvga-01742215810.png" },
        { name: "بانادول لعلاج نزلات البرد الحادة (كومتركس أقراص)", desc: "", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/comtrex-tabs-01749548675.png" },
        { name: "روتاهيلكس اكسترا اقراص استحلاب بنكهة العسل", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/rotahelex-extra-with-lemon-honey-flavor-24-lozenges-9kxt-01744121556.png" },
        { name: "روتادايجست | 30 كبسولة", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/rotadigest-30-caps-2pg9-01744115078.png" },
        { name: "تلفاست اقراص لحساسية الانف والارتيكاريا 180مجم |", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/telfast-antihistamine-allergy-tablets-180-mg-20-tablets-01742218244.png" },
        { name: "برشام فياجرا 100 للرجال للانتصاب (سيلدينافيل 100)", desc: "", price: "144", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/viagra-100-mg-01721401458.png" },
        { name: "شامبو نيزابكس للقشرة والفطريات nizapex", desc: "", price: "68", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nizapex-shampoo-80-ml-01719728731.png" },
        { name: "اقراص كونجستال للبرد ٢٠ قرص | congestal tab", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/congestal-tab-01668935220.png" },
        { name: "قطرة أوتريفين للكبار نقط للانف للاحتقان", desc: "", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otrivin-nasal-drops-adult-15-ml-01757586554.png" }
    ],
    'health-condition': [
        { name: "فياجرا 100 للرجال", desc: "للانتصاب (سيلدينافيل100)", price: "144", img: "https://cdn.chefaa.com/public/uploads/products/viagra-100-mg-01721401458.png" },
        { name: "مانوفيركين بلس سراي", desc: "مخدر موضعي 15 مل", price: "56", img: "https://cdn.chefaa.com/public/uploads/products/manovipercaine-10-spray-15-ml-4l49-01699276439.png" },
        { name: "التراكايين جل مخدر موضعي", desc: "٣٠ جم | ultracaine gel", price: "31", img: "https://cdn.chefaa.com/public/uploads/products/ultracaine-gel-5-30gm-mlrv-01666136042.png" },
        { name: "حبوب فياجرا ٥٠ للرجال", desc: "سيلدينافيل 50", price: "112", img: "https://cdn.chefaa.com/public/uploads/products/viagra-50-mg-01686657145.png" },
        { name: "الفينترن مضاد للالتهابات", desc: "30 قرص", price: "87", img: "https://tse4.mm.bing.net/th/id/OIP.v42C6PQX2iGpILm8m0onBgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", badge: "يلزم وصفة طبية" },
        { name: "اقراص ماغنسيوم بلس", desc: "للنوم والتخسيس magnesium", price: "45", img: "https://cdn.chefaa.com/public/uploads/products/%D9%85%D8%A7%D8%BA%D9%86%D9%8A%D8%B3%D9%88%D9%85-%D8%A8%D9%84%D8%B3-30-%D9%82%D8%B1%D8%B5-0m2k-01676200884.png" },
        { name: "بانثينول كريم 2%", desc: "20جم", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panthenol-cream-2-20gm-dfsk-01765723500.png" },
        { name: "ليدوكايين سراي بنج", desc: "مخدر موضعي", price: "38", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lidocaine-spray10-15ml-urwb-01690293358.png" },
        { name: "ابيلبفاي مضاد للذهان 5 مج", desc: "10 اقراص", price: "134.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/abilify-antipsychotic-5mg-10tab-ogv8-01670340054.png", badge: "يلزم وصفة طبية" },
        { name: "ابيلبفاي مضاد للذهان 15 مج", desc: "10 اقراص", price: "330.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/abilify-antipsychotic-15mg-10tab-d6qn-01665935688.png", badge: "يلزم وصفة طبية" },
        { name: "برشام ميلجا ادفانس", desc: "للرجال والنساء للأعصاب", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/milga-advance-30tab-wqzn-11690285660.png" },
        { name: "ميباكو برشام فوليك اسيد", desc: "500 للحامل وصحة الشعر | 20", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/folic-acid-mepaco-500-mcg-20-tabs-52ks-01736413470.png" },
        { name: "اسيكلوفير مضاد للفيروسات", desc: "400مج | 35 قرص", price: "210", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acyclovir-antivirus-400mg-35tab-d5sj-01736339928.png", badge: "يلزم وصفة طبية" },
        { name: "أكتي كولا أدفانس 30 كيس", desc: "مكمل غذائي للعظام", price: "990", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acticolla-advance-30-sachetstc3l-01747663968.png" },
        { name: "أكتي كولا أدفانس 10 كيس", desc: "مكمل غذائي للعظام", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acti-colla-advance-10-sachets-lqkw-01668950055.png" },
        { name: "اكتينون مضاد لشلل الرعاش", desc: "2مج | 30 قرص", price: "51", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/achtenon-anti-parkinsons-2mg-20tab-gasv-01696416066.png", badge: "يلزم وصفة طبية" },
        { name: "ايرونيل شراب", desc: "120 مل", price: "29", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aironyl-1-5-mg-5-ml-syrup-120-ml-bnp7-01668014347.png", badge: "يلزم وصفة طبية" },
        { name: "اجركس للوقاية من التجلط", desc: "75مج | 60 قرص", price: "27", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aggrex-to-prevent-thrombosis-75mg-60tab-l730-01666103385.png", badge: "يلزم وصفة طبية" },
        { name: "أجرا كريم لحب الشباب", desc: "50جم", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/agera-acne-cream-50gm-xwfu-01721294925.png" },
        { name: "ادول 500 مجم", desc: "24 كبسولة", price: "32", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/adol-sinus-24-caplets-4zti-01678612271.png" }
    ],
    
    // باقي الأقسام (فاضية لحد ما نملأها)
    'cough-cold': [
        { name: "بانادول كولد اند فلو (كومتركس)", desc: "اقراص | ٢٠ قرص", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-cold-and-flu-day-01757586304.png" },
        { name: "روتاهيلكس اكسترا اقراص", desc: "استحلاب بنكهة العسل", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/rotahelex-extra-with-lemon-honey-flavor-24-lozenges-9kxt-01744121556.png" },
        { name: "دواء برونشيكم شراب للكبار", desc: "والاطفال للكحة", price: "78", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bronchicum-s-elixir-anti-cough-elixir-100-ml-01742214935.png" },
        { name: "بانادول (كومتركس أقراص comtrex )", desc: "اقراص | 20قرص", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/comtrex-tabs-01749548675.png" },
        { name: "دواء لاري برو استحلاب", desc: "للزور والحلق للاحتقان والالتهاب", price: "44", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lary-pro-20-lozenges-01686654584.png" },
        { name: "أوبلكس - إن شراب", desc: "للكحة وطارد للبلغم ١٢٥ مل", price: "31", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/oplex-n-syup-01736859156.png" },
        { name: "اقراص كونجستال للبرد", desc: "٢٠ قرص | congestal tab", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/congestal-tab-01668935220.png" },
        { name: "قطرة أوتريفين للكبار", desc: "للانف Otrivin للاحتقان", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otrivin-nasal-drops-adult-15-ml-01757586554.png" },
        { name: "ألكا مصر", desc: "٥ جم | ١٢ كيس", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/alka-misr-new-pricetwxd-01736082317.png" },
        { name: "وان تو ثري اقراص 123", desc: "للكبار للبرد والانفلونزا | ٢٠ قرص", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/16309226631-2-3-cold-and-flu-20-tabsjpg" },
        { name: "فوار استيل سيستايين", desc: "٦٠٠ مذيب وطارد للبلغم | ١٠", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1630999764acetylcistein-to-treat-bronchitis-effervescent-bags-600mljpg" },
        { name: "أولفنت شراب", desc: "للكحة للاطفال والكبار | ١٢٠", price: "34", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1630931095all-vent-syrup-to-cough-125-mljpg" },
        { name: "بروفين", desc: "٢٠٠ مجم | ٣٠ قرص", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-200-mg-30-tablet-w7lw-01723982787.png" },
        { name: "دواء بيسلفون أقراص", desc: "مذية للبلغم والكحة والسعال ٨ مجم", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bisolvon-cough-sedative-8mg-10-tabs-syi3-01742214438.png" },
        { name: "دواء بيسلفون شراب", desc: "للكحة والسعال للاطفال ٤ مجم/٥ مل", price: "35", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bisolvon-syrup-01742214324.png" },
        { name: "بلسم شراب علاج الكحة", desc: "عند الاطفال والكبار | ١٢٠ مل", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1631456349balsam-supplmentjpg" },
        { name: "بروفين شراب", desc: "١٠٠ مجم | ١٥٠ مل", price: "44", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-100-mg-5-ml-syrup-igrk-01721234428.png" },
        { name: "بروفين مسكن للالم", desc: "٦٠٠ مجم | ٣٠ قرص", price: "99", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-600-mg-30-tabs-qycp-01670874549.png" },
        { name: "بروفين فوي مسكن", desc: "٦٠٠ ملجم | ٢٠ كيس", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-600-mg-20-effer-granules-in-sachets-ykcs-01721233609.png" },
        { name: "بروفين مسكن", desc: "٤٠٠ ملجم ومضاد للالتهاب فوي | ٣٠", price: "78", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-400mg-30-tablets-x0m6-01721234522.png" }
    ],
    'eye-ear': [
        { name: "كونجي كلير 0.1%", desc: "محلول معقم للعين | 5 مل", price: "22", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1626262181conjyclear-eye-drops-5ml-chefaajpeg" },
        { name: "سيبروسين 0.3%", desc: "قطرة للعين / الأذن | 5 مل", price: "21", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/ciprocin-0-3-eye-drops-5-ml-b1vc-01667746449.png", badge: "يلزم وصفة طبية" },
        { name: "بلينك قطرة", desc: "غسول للعين للجفاف | 10 مل", price: "320", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/blink-intensive-tears-eye-drops-10ml-01720625021.png", badge: "يلزم وصفة طبية" },
        { name: "ألفا نوفا 0.15%", desc: "قطرة للعين | 5 مل", price: "57", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/alphanova-015-5-ml-drop-nybo-01672671852.png", badge: "يلزم وصفة طبية" },
        { name: "إفيميو قطرات", desc: "قطرات للعين | 10 مل", price: "44", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/efemyo-eye-drops-10-ml-ijvs-01667393153.png", badge: "يلزم وصفة طبية" },
        { name: "ديكساترول قطرة", desc: "قطرة عين / أذن | 5 مل", price: "27", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dexatrol-eye-ear-drops-5-ml-cmgx-01667400579.png", badge: "يلزم وصفة طبية" },
        { name: "قطرة كورنيتيرز", desc: "جل للعين لعلاج الجفاف | 10", price: "41", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cornetears-eye-gel-10-gm-wfag-01667234939.png" },
        { name: "كونجي كلير فورت 0.2%", desc: "محلول معقم للعين", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/conjyclear-forte-0-2-eye-drops-5-ml-o9pc-01667480238.png" },
        { name: "قطرة هاي فريش", desc: "مرطبة لعلاج hyfresh", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hyfresh-02-eye-drops-10ml-01724152128.png" },
        { name: "هياكارينول قطرة عين", desc: "10 مل", price: "56", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hyfresh-02-eye-drops-10ml-01724152128.png" },
        { name: "جاتيستار 0.5%", desc: "قطرة مضاد حيوي للعين | 5 مل", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/gatistar-05-eye-drops-dzas-01677172557.png" },
        { name: "إبيفيناك قطرة", desc: "للالتهابات العين | 5 مل", price: "20", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/epifenac-eye-drops-5-ml-01720960972.png" },
        { name: "نوستامين نقط", desc: "لعلاج حساسية العين والانف | 15 مل", price: "22", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nostamine-eye-drops-15-ml-01719765818.png" },
        { name: "نورمو تيرز قطرة", desc: "لالتهاب العين والاحمرار | 15 مل", price: "26", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/normo-tears-eye-drops-15-ml-01719729491.png" },
        { name: "لوبريفيسك قطرة", desc: "معقمة ومرطبة للعين", price: "32", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lubrivisc-0-1-eye-drops-10-ml-954f-01667237229.png" },
        { name: "قطرة لوبريسترا", desc: "مرطب للعين | 10 مل", price: "83", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lubristira-eye-lubricant-drops-15ml-j75n-01725969137.png" },
        { name: "أوتوكورت قطرة", desc: "قطرة للاذن | 10 مل", price: "26", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otocort-10-ml-ear-drops-ikob-01760254312.png" },
        { name: "اوتال قطرة", desc: "لالتهابات الاذن | 5 مل", price: "19", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otocort-10-ml-ear-drops-ikob-01760254312.png" },
        { name: "اوركازيد قطرة", desc: "قطرة للعين للحساسية", price: "31", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1627209431orchazid-eye-drops-10ml-chefaajpeg" },
        { name: "اوبتيجارد قطرة", desc: "لحرقان العين والدموع | 10 مل", price: "28", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1626263898optiguard-eye-drops-15ml-chefaajpeg" }
    ],
    'kids': [
        { name: "زيرتك نقط للرضع والاطفال", desc: "للحساسية | 10 مل", price: "43", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1623456264ml-oral-drops-10ml-chefaapng" },
        { name: "ليمتلس بيبي نقط فيتامين د", desc: "10 | limitless baby d drops", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-baby-d-drops-1600-iu-ml-15-ml-6ldy-01729670749.png" },
        { name: "كالوبين | نقط بالفم", desc: "20 مل", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kalobin-20-ml-oral-dropmfn3-01734890935.png" },
        { name: "بيبي ناديف سراي الأنف", desc: "والبلعوم الأنفية للاطفال |", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/baby-nadif-nasal-spray-50-ml-21744196348.png" },
        { name: "نينو سرينو سراي ماء البحر", desc: "للانف للاطفال | 60 مل", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nino-sereno-sea-water-baby-nasal-spray-60ml-6p3v-01762074170.png" },
        { name: "بارامول | لبوس اطفال", desc: "125 مجم | 5 أقماع", price: "36", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/paramol-baby-suppositories-ozwg-01721736318.png" },
        { name: "ماء غريب سيميل محلول", desc: "بالفم | 120 مل", price: "48", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/gripe-water-smile-syrup-120-ml-fhm6-01727591773.png" },
        { name: "بانادول | للأطفال والرضع", desc: "معلق للشرب ابتداء من", price: "53", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-baby-infant-oral-suspension-wyll-01788178382.png" },
        { name: "سانسو | ماء للببي لعلاج", desc: "المغص والانتفاخ | 100 مل", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sanso-baby-water-syrup-100ml-6qkm-01686932788.png" },
        { name: "كوليتركس", desc: "فيتامين د٣ قطرات عن طريق الفم للرضع", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/choletrix-400-iu-vitamin-d3-oral-supplement-drops-for-infants-30-mlyh5c-01733735039.png" },
        { name: "كيدز ابيتايت فيتامين شراب", desc: "125 مل", price: "110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kids-appetite-daily-vitamin-syrup-125ml-k3zb-01725887409.png" }
        // لو في منتجات تانية في الصور مش باينة، ضيفها هنا بنفس الشكل
    ],
    'stomach': [
        { name: "روتادايجيست", desc: "30 كبسولة", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/rotadigest-30-caps-2pg9-01744115078.png" },
        { name: "انتوبرال ٢٠ مجم حبوب", desc: "المعدة لعلاج الحموضة", price: "88", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/antopral-20-mg-14-tab-djij-01732106352.png" },
        { name: "لينكس للبالغين", desc: "14 كبسولة", price: "260", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/linex-adults-14-capsules-zkse-01724148665.png" },
        { name: "انتروجرمينا امبول بروبيوتيك", desc: "للقولون للاطفال والكبار 2", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/enterogermina-oral-suspension-2-billion-5ml-20-vials-fvga-01742215810.png" },
        { name: "أجيولاكس حبيبات ملين", desc: "طبيعي | 12 كيس", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/agiolax-sachets-01675954686.png" },
        { name: "برونشيكم أقراص استحلاب", desc: "بنكهة النعناع لتخفيف أعراض", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bronchicum-anti-cough-100mg-20-lozenges-wn0x-01742214835.png" },
        { name: "برشام فلاجيل 500", desc: "للالتهابات ومظهر معوي flagyl tablet", price: "34", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/flagyl-500-tablet-01721656290.png" },
        { name: "زيثرون مضاد حيوي 500 مجم", desc: "5 اقراص", price: "86", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/xithrone-antibiotic-500mg-5tab-2rdg-1641396051.png", badge: "يلزم وصفة طبية" },
        { name: "بسكوبان حقن مضاد للتقلصات", desc: "ومسكن للآلم | 20", price: "66", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/buscopan-6-ampoules-1mg-fmsv-01742215231.png" },
        { name: "انتينال لعلاج الاسهال", desc: "200 مجم | 24 كبسولة", price: "52", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/antinal-tablet-01668934670.png" },
        { name: "أمريزول لعلاج العدوى", desc: "البكتيرية | 500 مجم | 20 قرص", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1631527984amrizole-to-treat-bacterial-infection-500mg-20tabsjpg", badge: "يلزم وصفة طبية" },
        { name: "اميبازول اقراص للاسهال", desc: "والاميبا والتهابات المهبل", price: "27", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1631531221amebazole-to-treat-acute-amebiasis-1gm-2-tabsjpg", badge: "يلزم وصفة طبية" },
        { name: "امبوالات انتروجرمينا للكبار", desc: "والاطفال بروبيوتيك للقولون", price: "260", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/enterogermina-oral-suspension-4-billion-5-ml-oral-10-vials-f9yk-11742216138.png" },
        { name: "ملين دوفلاك شراب للامساك", desc: "200 مل | duphalac syrup", price: "143", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/duphalac-syrup-01720893370.png" },
        { name: "داجينورم فاتح للشهية", desc: "120 مل شراب", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/digenorm-appetite-stimulant-120ml-syrup-rhvj-1641334905.png" },
        { name: "دواء بسكوبان للمغص والقولون", desc: "والدورة | 10 مجم", price: "56", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/buscopan-10mg-20-tab-01742215095.png" },
        { name: "جاناتون لعلاج اضطرابات المعدة", desc: "50 مجم | 30 قرص", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1633442713ganaton-50mgjpg" },
        { name: "فلاتيديل أقراص للقولون", desc: "والغازات | 30 قرص للمضغ", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/flatidyl-40mg-30chewable-tabs-mmhq-1641152602.png" },
        { name: "اقراص اوكاربون بالفحم", desc: "للقولون العصبي eucarbon", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eucarbon-30-tab-01721405589.png" },
        { name: "ايزوميبرازول 40 مجم", desc: "20 قرص", price: "116", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/esomeprazole-eva-pharma-40mg-20tab-ijnv-01693474329.png" }
    ],
    'painkillers': [
        { name: "بانادول اكسترا اوبتيزورب", desc: "لتخفيف إضافي مسكن فعال", price: "58", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-extra-tab-01762260859.png" },
        { name: "دوليبران 1000 مجم", desc: "باراسيتامول مسكن للصداع", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/novaldol-analgesic-and-pain-killer-1000-mg-15-tablets-duypvp2r-duzdvqep-01754833691.png" },
        { name: "اقراص دوليبران 1000", desc: "باراسيتامول 10 | doliprane", price: "48", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/novaldol-analgesic-and-pain-killer-1000-mg-15-tablets-01754834008.png" },
        { name: "اميجراوست 2.5 برشام", desc: "amigrawest tab", price: "56", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/amigrawest-25mg-4tabs-qfxf-1641156776.png" },
        { name: "بانادول ادفانس 500 مجم", desc: "باراسيتامول مسكن للآلم", price: "92", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/panadol-advance-24-tablet-01757585228.png" },
        { name: "اقراص كتافلام 50 مسكن", desc: "للالاسنان والصداع | cataflam", price: "86", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cataflam-50-mg-tab-01723552610.png" },
        { name: "أبيمول مسكن وخافض", desc: "للحرارة 500 مجم | 20 قرص", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1621861754abimol-analgesic-antipyretic-500mg-20-tab-chefaapng" },
        { name: "أبيمول أكسترا | مسكن", desc: "وخافض للحرارة 30/500 مجم |", price: "28", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/abimol-extra-01675347350.png" },
        { name: "اكتي كولا سي لعلاج التهاب", desc: "وخشونة المفاصل | 10 أكياس", price: "295", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acti-colla-c-10-sachets-viws-01686656088.png" },
        { name: "أكياس اكتي كولا سي لعلاج", desc: "التهاب وخشونة المفاصل |", price: "765", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acti-colla-c-30-sachets-skkt-1643207790.png" },
        { name: "أناسيزياجو كريم مخدر", desc: "موضعي لتسكين الألم |", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/anaseziago-cream-30gm-fl5v-01726575704.png" },
        { name: "انسيلاكوكس 120مجم | 10 أقراص", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/anselacox-120mg-10-tablet3-xuf9-01736098490.png", badge: "يلزم وصفة طبية" },
        { name: "بروفين | 200 مجم | 30", desc: "قرص", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-200-mg-30-tablet-w7lw-01723982787.png" },
        { name: "بروفين 400 ملجم مسكن", desc: "ومضاد للالتهاب قوي | 30", price: "78", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-400mg-30-tablets-x0m6-01721234522.png" },
        { name: "بروفين 600 ملجم مسكن", desc: "قوي | 20 كيس", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-600-mg-20-effer-granules-in-sachets-ykcs-01721233609.png" },
        { name: "بروفين مسكن للالم 600", desc: "مجم | 30قرص", price: "99", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-600-mg-30-tabs-qycp-01670874549.png" },
        { name: "بروفين | شراب 100 مجم |", desc: "150 مل", price: "44", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-100-mg-5-ml-syrup-igrk-01721234428.png" },
        { name: "بروفين كولد | 20 أقراص", desc: "", price: "146", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-cold-20tab-nh1a-01721234613.png" },
        { name: "بروفين كولد دواء للزكام", desc: "والرشح والاحتقان", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-cold-tab-01721234762.png" },
        { name: "بروفين فلو شراب | 60 مل", desc: "", price: "34", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/brufen-flu-syrp-01668935743.png" }
    ],
    'skin': [
        { name: "شامبو نيزابكس للقشرة والفطريات", desc: "nizapex", price: "68", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nizapex-shampoo-80-ml-01719728731.png" },
        { name: "كريم كارباميد للوجه", desc: "والمنطقة الحساسة والقدم", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/carbamide-cream-50-gm-01792065665.png" },
        { name: "كريم بانثينول للوجه والشعر", desc: "مرطب فعال | panthenol", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1594655177panthenol-cream-50gmjpg" },
        { name: "إكتوميثرين 5 (بيرمثرين 5%)", desc: "للبالغين | 50 مل", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628512021%D8%A7%D9%83%D8%AA%D9%88%D9%85%D9%8A%D8%AB%D8%B1%D9%8A%D9%86-5-%D8%A8%D9%8A%D8%B1%D9%85%D9%8A%D8%AB%D8%B1%D9%8A%D9%86-5-%D9%84%D9%84%D8%A8%D8%A7%D9%84%D8%BA%D9%8A%D9%86-50%D9%85%D9%84png" },
        { name: "بريدوكايين كريم | 30 جم", desc: "", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/pridocaine-cream-30-gm-7wg0-01720229894.png" },
        { name: "مرهم ميبو للحروق والجروح", desc: "| 10 جم | mebo", price: "109", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628668245mebo-15gmjpeg" },
        { name: "ماكرو بانثينول كريم للبشرة", desc: "الدهنية والجافة | macro", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/macro-panthenol-cream-50-gm-01680176758.png" },
        { name: "بيتادين | محلول مطهر للجروح", desc: "والحروق الطفيفة | 60 مل", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/betadine-antisepic-solution-60-ml-01674814080.png" },
        { name: "بيفاتراسين بخاخ للحروق", desc: "| 10 مل | bivatracin", price: "83", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bivatracin-spary-150-ml-01720447471.png" },
        { name: "كونتراكتبس جل لإزالة الحفر", desc: "وآثار حب الشباب | 20 جم", price: "66", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628508057contractubex-wound-treatment-gel-20gm-chefaajpeg" },
        { name: "إيمو سوفت كريم مرطب", desc: "للبشرة الجافة | 15 جم", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/emo-soft-15-gm-cream-t1u5-01720951793.png" },
        { name: "اكستروما فورت جيل للكدمات", desc: "والتورم والتجلطات | 25 جم", price: "41", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628513777extrauma-forte-dna-420-iu-gel-25mg-chefaajpg" },
        { name: "اكستراوما فورت جيل للكدمات", desc: "والتورم | 40 جم", price: "58", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628514322extrauma-forte-dna-420-iu-gel-40mg-chefaajpg" },
        { name: "كريم فيوسيكورت مضاد", desc: "حيوي للدمامل والالتهابات |", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fucicort-15gm-01722772435.png" },
        { name: "كريم فيوسيكورت مضاد", desc: "حيوي للدمامل والالتهابات |", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628518208fucicort-antimicrobial-cream-20gm-chefaajpeg" },
        { name: "كريم فيوسيكورت مضاد", desc: "حيوي للدمامل والالتهابات |", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fucicort-30gm-01722772503.png" },
        { name: "هير باك | بلسم 2% لوشن |", desc: "100 مل", price: "164", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hair-black-pius-2-sclap-lotion-100ml-01723112309.png" },
        { name: "هيلوسول سبراي لتحسين", desc: "التئام وتعافي الجروح | 150", price: "87", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hair-black-pius-2-sclap-lotion-100ml-01723112309.png" },
        { name: "هاي ديرم لوشن للالتهابات", desc: "والتسلخات والحكة | 100 مل", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1588062168hiderm-topical-solution-100-ml.jpg" },
        { name: "هاي بانثين بلس كريم لترطيب", desc: "للبشرة وعلاج الجفاف | 30", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1628581838hipanthen-plus-cream-30gm-chefaajpeg" }
    ],
    'allergy': [
        { name: "ايريوس أقراص لحساسية الانف", desc: "والارتيكاريا 5 مجم | 20", price: "118", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aerius-5mg-30-tab-01744709703.png" },
        { name: "نازونيكس 0.05% بخاخ للأنف", desc: "موميتازون فيورات", price: "157", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nasonex-005-mometasone-furoate-monohydrate-aqueous-nasal-spray-scent-free-18-grw0tq-01744709642.png" },
        { name: "تلفاست مضاده للحساسية", desc: "ولا تسبب النعاس 120مجم |", price: "116", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/telfast-antihistamine-allergy-tablets-120-mg-20-tablets-01742218104.png" },
        { name: "تلفاست اقراص لحساسية", desc: "الانف والارتيكاريا 180مجم |", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/telfast-antihistamine-allergy-tablets-180-mg-20-tablets-01742218244.png" },
        { name: "تلفاست شراب للاطفال", desc: "لأعراض البرد والحساسية", price: "63", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/telfast-30mg-5ml-susp-100ml--01742218560.png" },
        { name: "اليريد لعلاج الحساسية", desc: "5مج/5مل | 100مل شراب", price: "33", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/alerid-anti-allergic-10mg-20tab-qtvf-01665594307.png" },
        { name: "الليربان مضاد للحساسية", desc: "10مج | 30 قرص", price: "93", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/allerban-allergies-1mg5ml-100ml-susp-megz-01665594259.png" },
        { name: "أليرفين 180مجم اقراص", desc: "لعلاج أعراض الحساسية | 20", price: "84", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/allerfen-cough-and-allergies-180mg-20tab-qc10-01692087701.png" },
        { name: "ايفاستين مضاد للحساسية", desc: "للاطفال 10 مجم | 20 قرص", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/evastine-antihistamines-children-10mg-20tab-0cfn-01721494755.png" },
        { name: "ديكسافين | شراب لعلاج", desc: "الحساسية | 120مل", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dexaphen-allergies-120ml-susp-mbtw-01720599819.png" },
        { name: "ايبيدون شراب مضاد", desc: "للحساسية والالتهابات | 125مل", price: "35", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/apidone-anti-allergic-125ml-susp-eolb-01675345257.png" },
        { name: "اناللرج للحساسية", desc: "4 مجم | 60 قرص", price: "30", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/anallerge-shortness-of-breath-4mg-60tab-xolz-01670424770.png" },
        { name: "موسيدين مضاد للحساسية", desc: "10مجم | 20 قرص", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mosedin-anti-allergic-10mg-20tab-5ye1-01665594378.png" },
        { name: "ليفوهيستام معلق مضاد", desc: "للحساسية 5مجم/10مل |", price: "39", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/levohistam-anti-allergic-5mg10ml-120ml-susp-j5qv-01670423791.png" },
        { name: "دواء ليفوهستام نقط", desc: "للاطفال للبرد", price: "46", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/levohistam-anti-allergic-5mg-20ml-drops-2tkz-01670422480.png" },
        { name: "بخاخ فليكس للانف", desc: "للحساسية 0.05 مجم | flix nasal spray", price: "76", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/flix-nasal-spray-01721721345.png" },
        { name: "بريدسول فورت لعلاج", desc: "الحساسية 15مجم/5مل | 60", price: "52", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/predsol-forte-to-treat-allergies-15mg5ml-60ml-susp-uteb-01666533428.png", badge: "كمية محدودة" },
        { name: "أوتريفين | نقط للأنف", desc: "علاج موضعي فعال 0.05%", price: "20", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otrivin-nasal-drops-children-15-ml-01757587078.png" },
        { name: "أوتريفين | بيبي سالين", desc: "نقط للانف 0.74% كلوريد", price: "20", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otrivin-baby-saline-15ml-01757586448.png" },
        { name: "أوتري ناتشورال بلس الو فيرا", desc: "بخاخ الأنف اليومي | 50 مل", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/otrinatural-plus-aloe-vera-daily-nasal-spray-50ml-a6vj-01749548106.png" }
    ],
};


// ==========================================
// قسم العناية بالشعر (بيانات المنتجات)
// ==========================================
const hairProductsData = {
    // المنتجات الافتراضية للشعر (اللي هتظهر أول ما تفتح القسم)
    'hair-default': [
        { name: "إيفا | باوتش الو ايفا حمام كريم لتقوية الشعر بالصبار و", desc: "", price: "85", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-aloe-eva-hair-mask-pouch-with-aloe-vera-silk-proteins-250gm-1dhx-01671390126.png" },
        { name: "إيفا | أدفانسد كير كلينك جل للشعر الكيرلي بزبدة الشيا", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-advance-care-clinic-curls-angel-gel-230rsso-01734397362.png" },
        { name: "جاستن بلو | شامبو لصحة وكثافة الشعر ومضاد للقشرة", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-rtvs-01744115679.png" },
        { name: "جاستن بلو | شامبو لصحة وكثافة الشعر ومضاد للقشرة", desc: "", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-175ml-jzsi-01744116152.png" },
        { name: "إيفا | اوبتيموم كير ريسي هايدرينتج بلند شامبو برائحة", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-hydrating-blend-conditioner-berries-scent-350ml-8jum-du1crenw-01718181691.png" },
        { name: "إيفا | اوبتيموم كير ريسي هايدرينتج بلند بلسم برائحة", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-hydrating-blend-conditioner-berries-scent-350ml-tz1c-01718181307.png" },
        { name: "إيفا هير كلينك | كيرلي ليف ان | 200 مل", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-hair-clinic-curls-leave-in-cream-200ml-4a7s-01785068756.png" },
        { name: "ماسك الو ايفا بالصبار وبوتينات الزبادي للشعر | 250", desc: "", price: "85", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-aloe-eva-hair-mask-pouch-with-aloe-vera-yoghurt-proteins-250gm-0bbq-dutiedan-01721646393.png" },
        { name: "إيفا | اوبتيموم كير ريسي سترينث بوست بلند بلسم", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-strength-booster-blend-conditioner-mocha-scent-350ml-eczi-01718184510.png" },
        { name: "إيفا | اوبتيموم كير ريسي سيلك أند شاين بلند بلسم", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-silk-shine-blend-conditioner-marshmallow-scent-350ml-x28q-01718183692.png" },
        { name: "إيفا | اوبتيموم كير ريسي نوريشينج بلند شامبو برائحة", desc: "", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-nourishing-blend-conditioner-coconut-scent-350ml-aaoa-dubq7c5v-01718184289.png" },
        { name: "إيفا | اوبتيموم كير ريسي نوريشينج بلند بلسم برائحة جوز", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-nourishing-blend-conditioner-coconut-scent-350ml-jud1-01718184139.png" },
        { name: "شامبو سيلينجينا selengena - شامبو للقشرة", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/selengena-anti-dandruff-shampoo-01675777218.png" },
        { name: "ديرما اكتيف | تريكو اكت هير ماسك | 150 مل", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-tricho-act-hair-repairing-mask-150ml-wuc8-01708426429.png" },
        { name: "ديرما اكتيف | تريكو اكت لوشن تساقط | 120 مل", desc: "", price: "299", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-tricho-act-anti-hair-loss-lotion-concentrate-120ml-gzgl-01708426050.png" },
        { name: "إيفا | اوبتيموم كير ريسي سترينث بوست بلند شامبو", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-strength-booster-blend-conditioner-mocha-scent-350ml-gxfw-du0sg14e-01718184779.png" },
        { name: "صبغة لوريال اكسلانس اش سوبريم 8.12 أشقر لؤلؤي", desc: "", price: "327", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-excellence-crm-8-12-ash-supreme-light-blond-2-vk68-01656446304.png" },
        { name: "لوريال | الفيف إكستراوردينري اويل زيت المغذي | 300 مل", desc: "", price: "435", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-elvive-nourishing-extraordinary-oil-mask-300ml-wa68-01697204615.png" },
        { name: "لوريال | بلسم الفيف هيالورون مويستشر 72 ساعة | 360 مل", desc: "", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-elvive-hyaluron-moisture-72h-moisture-sealing-conditioner-with-hyaluronic-acid-360ml-sehr-01701259962.png" },
        { name: "سيلينجينا | شامبو ضد القشرة | 220 مل", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/selengena-shampoo-120ml-hglu-duddxrsw-01701179508.png" }
    ], // قسم العناية بالشعر
    
    // الأقسام الفرعية (فاضية دلوقتي مستنية صورك)
    'shampoo': [
        { name: "إيفا اوبتيموم كير ريسي هايدرينتج بلند شامبو برائحةالتوت", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-hydrating-blend-conditioner-berries-scent-350ml-8jum-du1crenw-01718181691.png" },
        { name: "إيفا اوبتيموم كير ريسي هايدرينتج بلند بلسم برائحة التوت", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-hydrating-blend-conditioner-berries-scent-350ml-tz1c-01718181307.png" },
        { name: "جاستن بلو شامبو لصحة وكثافة الشعر", desc: "ومضاد للقشرة", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-rtvs-01744115679.png" },
        { name: "جاستن بلو شامبو لصحة وكثافة الشعر", desc: "ومضاد للقشرة", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-175ml-jzsi-01744116152.png" },
        { name: "إيفا اوبتيموم كير ريسي سترينث بوست بلند بلسم", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-strength-booster-blend-conditioner-mocha-scent-350ml-eczi-01718184510.png" },
        { name: "إيفا اوبتيموم كير ريسي سيلك أند شاين بلند بلسم", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-silk-shine-blend-conditioner-marshmallow-scent-350ml-x28q-01718183692.png" },
        { name: "إيفا اوبتيموم كير ريسي نوريشينج بلند شامبو برائحة", desc: "", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-nourishing-blend-conditioner-coconut-scent-350ml-aaoa-dubq7c5v-01718184289.png" },
        { name: "إيفا اوبتيموم كير ريسي نوريشينج بلند بلسم برائحة جوز", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-nourishing-blend-conditioner-coconut-scent-350ml-jud1-01718184139.png" },
        { name: "لوريال الفيف | بيور هيالورون شامبو للشعر الدهني", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lor%C3%A9al-elvive-hyaluron-pure-purifying-shampoo-for-oily-hair-200ml-ldya-01734855597.png" },
        { name: "لوريال | بلسم الفيف هيالورون مويستشر", desc: "72 ساعة | 360 مل", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-elvive-hyaluron-moisture-72h-moisture-sealing-conditioner-with-hyaluronic-acid-360ml-sehr-01701259962.png" },
        { name: "سيلينجينا | شامبو ضد القشرة", desc: "220 مل", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/selengena-shampoo-120ml-hglu-duddxrsw-01701179508.png" },
        { name: "إيفا | اوبتيموم كير ريسي سترينث بوست بلند شامبو", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-optimum-care-recipe-strength-booster-blend-conditioner-mocha-scent-350ml-gxfw-du0sg14e-01718184779.png" },
        { name: "لوريال باريس الفيف هيالورون بيور بلسم لإعادة الترطيب", desc: "", price: "187", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-elvive-hyaluron-pure-rehydrating-conditioner-for-oily-hair-360ml-nyks-01734855820.png" },
        { name: "لوريال باريس الفيف هيالورون شامبو مرطب للشعر الجاف", desc: "", price: "275", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lor%C3%A9al-paris-elvive-hydra-hyaluronic-shampoo-600ml-z8gz-01691481554.png" },
        { name: "لوريال باريس | بلسم مقاوم للتكسر الفيف فل زيسيت", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-elvive-full-resist-breakage-fighter-conditioner-200ml-bcg1-01727093776.png" },
        { name: "لوريال باريس | الفيف شامبو بالزيوت الثمينة للشعر", desc: "شديد الجفاف", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-elvive-extraordinary-oil-very-dry-hair-shampoo-200ml-727-oyaq-dubmclyd-01727098013.png" },
        { name: "دوف | شامبو المغذي للعناية بالزيت للنساء", desc: "180 مل", price: "103", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dove-nourishing-oil-care-shampoo-for-women-200ml-dv1z-duijhbqg-01737550423.png" },
        { name: "بالمرز | بلسم مرطب بتركيبة زيت جوز الهند", desc: "150 جم", price: "155", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/palmers-coconut-oil-formula-cream-150ml-fgq6-01653237369.png" },
        { name: "تريشوب | شامبو لمنع تساقط الشعر", desc: "200 مل", price: "82", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/trichup-hair-fall-control-shampoo-200ml-kwln-01657115516.pngE" },
        { name: "بلسم لوريال الفيف هيالورون البنفسجي للشعر الجاف", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-elvive-hyaluron-moisture-72h-moisture-sealing-conditioner-with-hyaluronic-acid-200ml-b4hp-01726684142.png" }
    ],
    'treatment': [
        { name: "ديرما اكتيف | تريكو اكت لوشن تساقط | 120 مل", desc: "", price: "299", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-tricho-act-anti-hair-loss-lotion-concentrate-120ml-gzgl-01708426050.png" },
        { name: "إيفا هير كلينك | كيرلي ليف ان | 200 مل", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-hair-clinic-curls-leave-in-cream-200ml-4a7s-01785068756.png" },
        { name: "جاستن بلو | شامبو لصحة وكثافة الشعر ومضاد للقشرة", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-rtvs-01744115679.png" },
        { name: "جاستن بلو | شامبو لصحة وكثافة الشعر ومضاد للقشرة", desc: "", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-shampoo-175ml-jzsi-01744116152.png" },
        { name: "لوريال باريس | الفيف كريم ايلفيف مغذي للشعر شديد الجفاف", desc: "", price: "234", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-elvive-extraordinary-oil-amla-nutrition-booster-cream-200ml-gtsl-01697210078.png" },
        { name: "لوريال | الفيف إكستراوردينري اويل زيت المغذي | 300 مل", desc: "", price: "435", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-elvive-nourishing-extraordinary-oil-mask-300ml-wa68-01697204615.png" },
        { name: "شامبو سيلينجينا selengena - شامبو للقشرة", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/selengena-anti-dandruff-shampoo-01675777218.png" },
        { name: "ديرما اكتيف | تريكو اكت هير ماسك | 150 مل", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-tricho-act-hair-repairing-mask-150ml-wuc8-01708426429.png" },
        { name: "سترونج فيل سراي للرجال لتساقط الشعر | 100 مل", desc: "", price: "295", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/strongville-hair-lotion-men-100ml-mp3i-01686675671.png" },
        { name: "ليسيد لوشن للقضاء علي القمل | 30 مل", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/licid-lotion-against-lice-30ml-j3sw-01732539637.png" },
        { name: "كومبليت | زيت شعر | 120 مل", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/complete-hair-oil-120ml-b11qzj7-01736690936.png" },
        { name: "كلير | كريم تصفيف كول سبورت | 210 مل", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/clear-styling-cream-cool-sport-210ml-iibm-01696261776.png" },
        { name: "سترونج فيل | زيت لترطيب الشعر وعلاج التساقط |", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/strongville-extra-advanced-hair-oil-01678634651.png" },
        { name: "بلبس | ليف ان كريم مع فيتامين هـ | 250 مل", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bless-leave-in-cream-with-vitamin-e-250m-sejx-01782147303.png" },
        { name: "بلبس | كريم ليف ان زيت جوز الهند | 250 مل", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bless-leave-in-cream-with-coconut-oil-250ml-f4no-01709411266.png" },
        { name: "ألو إيفا | بديل الزيت المقوي للشعر بالصبار وزيت الأرجان |", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aloe-eva-strenghthening-hair-oil-replacement-with-aloe-vera-and-argan-oil-250ml-9pbl-01701701792.png" },
        { name: "فاتيكا | زيت الشعر الحبة السوداء | 180 مل", desc: "", price: "47", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vatika-hair-oil-black-seed-180ml-bu7m-01730636485.png" },
        { name: "فاتيكا ناتشورالز | سيروم اصلاح وترميم الشعر | 47 مل", desc: "", price: "185", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vatika-naturals-hair-serum-repair-restore-47ml-fc2h-01654005429.png" },
        { name: "فاتيكا | حمام كريم بذور الحبة السوداء | 250 جم", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vatika-hammam-cream-habba-souda-250gm-2iye-01691321251.png" },
        { name: "اوبيدال | سيرم سراي للشعر | 60 مل", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/o-pedal-hair-serum-spray-60ml-56ft-01773748907.png" }
    ],
    'styling': [
        
    ], // ده اللي إنت قلت عليه هيبقى فيه صورة بس
    'dyes': [
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 3.0", desc: "", price: "450", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-30-brown-kohl-brown-black-01650704903.png" },
        { name: "لوريال باريس | صبغة شعر أحمر عميق بدون أمونيا", desc: "", price: "470", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1588150608casting-creme-gloss-hair-color-360-dark-red.jpeg" },
        { name: "لوريال باريس | صبغة لوريال باريس كاستينج كريم اللامعة", desc: "", price: "460", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1588149391casting-creme-gloss-hair-color-300-darkest-brown.jpg" },
        { name: "لوريال باريس | صبغة كريم لشعر لامع وبراق 513 بني", desc: "", price: "460", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-casting-cr%C3%A8me-gloss-513-ashy-nude-brown-xqd1-01682711122.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 6.32", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-632-pearl-brown-dark-golden-blonde-01650675601.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 5.30", desc: "", price: "392", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-prodigy-ammonia-free-hair-color-530-light-golden-brown-01650676523.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 5.0 بني", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-paris-prodigy-ammonia-free-hair-color-50-light-brown-3hna-01656207363.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 4.0 بني", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-40-brown-sepia-01650677516.png" },
        { name: "لوريال باريس | صبغة الشعر الرائعة إكسلانس كريم | 7.1", desc: "", price: "277.7", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/MFxq3ixc3ba1x531C5At5t4fHKBLBCkOhkazNx4B.jpeg" },
        { name: "لونا | ماء اكسجين حجم 10 | 80 مل", desc: "", price: "19", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-hydrogen-peroxide-10-vol-b7zg-01684600645.png" },
        { name: "فاتيكا | حناء للشعر أسود طبيعي 60جم | 6 أكياس", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vatika-henna-hair-natural-black-60g-6-sachhuxj-01735068191.png" },
        { name: "لوريال باريس | صبغة شعر كريم برودجي إكسلانس 10.1", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/loreal-pro-di-gy-101-super-light-ash-blondedwvo-01735222624.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 7.0", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-70-blonde-almond-01650674870.png" },
        { name: "صبغة لوريال باريس برودجي بدون أمونيا | صبغة شعر", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-660-intense-red-01650675207.png" },
        { name: "جودريج نوبور | حناء لون الشعر | 150جم", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/godrej-nupur-henna-hair-color-25-extra-150-grqjxl-01733315671.png" },
        { name: "بايجن سيدي | صبغة شعر بني غامق مائل للاسود | 882", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bigen-speedy-hair-color-conditioner-with-natural-herbs-no-882-kyeh-01683988842.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 7.10", desc: "", price: "392", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-71-ash-blonde-01650706351.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 1.0", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-10-noir-01650705341.png" },
        { name: "لوريال باريس | صبغة شعر برودجي بدون أمونيا | 8.0", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/prodigy-ammonia-free-hair-color-80-light-blonde-dune-01650705687.png" },
        { name: "لوريال باريس | صبغة الشعر الرائعة إكسلانس كريم | 8", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/excellence-creme-hair-color-8-blonde-clar-01650803599.png" }
    ],
};

// دالة عرض منتجات العناية بالشعر
function loadHairProducts(categoryId) {
    // 1. كود تلوين الزرار اللي إحنا دوسنا عليه
    // بنحدد البحث جوه قسم الشعر بس عشان منلخبطش قسم الأدوية
    let hairSection = document.getElementById('hair-content');
    hairSection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = hairSection.querySelector(`[onclick*="loadHairProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    // 2. عرض المنتجات
    const container = document.getElementById('hair-products-container');
    container.innerHTML = ''; 
    
    const products = hairProductsData[categoryId];
    
    // لو القسم فاضي (زي أجهزة تصفيف الشعر)
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
                
                <button style="background-color: #34a853; color: #fff; border: none; padding: 15px 0; width: 100%; max-width: 400px; border-radius: 8px; font-size: 18px; font-family: 'Tajawal', sans-serif; font-weight: bold; cursor: pointer; margin: 0 auto 20px; display: block; transition: background 0.3s;">
                    الروشتة
                </button>
                
                <a href="javascript:void(0)" style="color: #777; text-decoration: none; font-size: 16px; font-weight: 500;">اسال صيدلي</a>
            </div>
        `;
        return;
    }
    
    // لو في منتجات، هنعمل كارت لكل واحد
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// 2. دالة عرض المنتجات
// ==========================================
function loadProducts(categoryId) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; 
    
    const products = productsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fa-solid fa-box-open" style="font-size: 50px; color: #ccc; margin-bottom: 15px;"></i>
                <h3 style="color: #777;">لا توجد منتجات في هذا القسم حالياً.</h3>
            </div>
        `;
        return;
    }
    
    // لو في منتجات، هنعمل كارت لكل واحد
    products.forEach(prod => {
        // شكل الشارة الحمراء (لو موجودة)
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// قسم العناية بالبشرة (بيانات المنتجات)
// ==========================================
const skinProductsData = {
    'skin-default': [
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 200مل", desc: "", price: "145", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-200ml-01655030643.png" },
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 100مل", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-100ml-01655030204.png" },
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 50مل", desc: "", price: "48", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-50ml-01655029300.png" },
        { name: "بيبانثين كريم مرطب للوجه | 30 جم | bepanthen cream", desc: "", price: "225", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1629382950moisturizing-creamjpg" },
        { name: "إيفا | مرطب لجميع انواع البشرة | 45جم", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-moisturizers-all-skin-type-45gm-b5qt-01696366498.png" },
        { name: "إيفا | مقشر لليد جولد سيل | 50مل", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-hand-scrub-gold-spell-50-mlhmm7-01733082879.png" },
        { name: "إيفا | صابون جلسرين بالعسل | 100جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-glycerin-soap-with-honey-100gm-gga8-01721411048.png" },
        { name: "إيفا | نياسيناميد مضاد للشيخوخة | 30 مل", desc: "", price: "270", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-niacinamide-facial-serum-30-ml-glxu-01730723545.png" },
        { name: "إيفا | ماسك الكولاجين من سكين كلينيك", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-collagen-sheet-mask-3-fqb0-duhng0jr-01737645563.png" },
        { name: "إيفا | كريم الاستحمام سكين كير باشون | 250مل", desc: "", price: "110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-shower-cream-passion-250ml-0aex-01721406147.png" },
        { name: "إيفا | كريم نهاري للعناية بالبشرة بعامل حماية من", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-natural-glow-day-cream-spf-30-50gm-xbgl-01707992133.png" },
        { name: "إيفا | ناتشورال جلو كريم لتفتيح وترطيب منطقة حول", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-natural-glow-eye-contor-lightening-cream-15mlq8yh-01733093840.png" },
        { name: "ستارفيل غسول جل للبشرة الدهنية والمعرضة للحبوب |", desc: "", price: "225", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-facial-cleanser-gel-400ml-ejeh-01703074220.png" },
        { name: "غسول ستارفيل للحبوب starville غسول للبشرة", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/star-ville-facial-cleanser-01674476919.png" },
        { name: "ستارفيل غسول جل للبشرة الدهنية والمعرضة للحبوب |", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-facial-cleanser-100ml-fcq8-01703061854.png" },
        { name: "إيفا | كريم الوجه الخالي من البقع | 18 جرام", desc: "", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619719352spotless-face-cream-18gm-chefaajpg" },
        { name: "ستارفيل | اي كونتور للعين للهالات السوداء | 30جم", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-eye-contour-811-3rnn-01719818563.png" },
        { name: "ستارفيل | ماسك ورقي للبشرة المعرضة للحبوب | 1 كيس", desc: "", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-face-mask-ukbf-01708451510.png" },
        { name: "صابونة ستارفيل للحبوب للبشرة الدهنية | 100جم", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-soap-100gm-aoue-01657115806.png" },
        { name: "ستارفيل | جل مرطب للبشرة الدهنية | 100جم", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-hydrating-gel-with-tea-tree-100ml-kqae-01716308999.png" }
    ],     // قسم العناية بالبشرة
    'cleanser': [
        { name: "صابونة ستارفيل للحبوب للبشرة الدهنية | 100جم", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-soap-100gm-aoue-01657115806.png" },
        { name: "ستارفيل غسول جل للبشرة الدهنية والمعرضة للحبوب |", desc: "", price: "225", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-facial-cleanser-gel-400ml-ejeh-01703074220.png" },
        { name: "غسول ستارفيل للحبوب starville غسول للبشرة", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/star-ville-facial-cleanser-01674476919.png" },
        { name: "ستارفيل غسول جل للبشرة الدهنية والمعرضة للحبوب |", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-facial-cleanser-100ml-fcq8-01703061854.png" },
        { name: "ستارفيل | صابونة للتفتيح 100جم", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1600856252star-ville-whitening-soapjpeg" },
        { name: "غسول ستارفيل للتفتيح starville ابيض", desc: "", price: "180", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-whitening-cleanser-200ml-ufo5-01719819488.png" },
        { name: "ستارفيل | مناديل ميسيلار المبللة لإزالة المكياج |", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-micellar-water-makeup-remover-wipes-50wipes-n5cx-01716308533.png" },
        { name: "ستارفيل | ماء ميسيلار تريبل اكشن لجميع انواع البشرة |", desc: "", price: "130", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-micellar-water-200ml-u8ct-01719822018.png" },
        { name: "ديرما اكتيف | اكتي كلير غسول جل | 200مل", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-clear-gentle-cleansing-gel-200ml-ewhy-01708422885.png" },
        { name: "غسول ديرما اكتيف للتفتيح اكتي وايت جل رغوة | 200", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-clear-gentle-cleasnsing-foaming-gel-200ml-oljl-01708424736.png" },
        { name: "ديرما اكتيف | اكتي ريبر جل التنظيف المهدئ | 200مل", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-repair-soothing-cleansing-gel-200ml-96zv-01724850258.png" },
        { name: "غسول شان للبشرة الجافة والمختلطة shaan cleanser", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-facial-cleanser-post-laser-01745332210.png" },
        { name: "سينوبار | غسول للبشرة | 50مل", desc: "", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/synobar-skin-foaming-cleanser250-ml-11730886012.png" },
        { name: "سينوبار-اس صابونة للبشرة الدهنية للتفتيح والحبوب |", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/synobar-soap-to-treat-acne-and-get-rid-of-pimples-100gm-zjag-01724611764.png" },
        { name: "ايه سي ام جل منظف سيبونيكس | 200 مل", desc: "", price: "459", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acm-sebionex-cleaning-gel-200-ml-yk5i-01698141223.png" },
        { name: "لونا | صابون جلسرين شفاف برائحة النوت | 100جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-glycerin-soap-twist-berries-100gm-sieg-01701772407.png" },
        { name: "ايفا غسول للبشرة الدهنية وحب الشباب فريش ستارت |", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-acne-prone-skin-facial-wash-150ml-zejo-01702472062.png" },
        { name: "ايفا سكين كلينك | غسول الوجه بفيتامين سي | 150مل", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-vitamin-c-facial-wash-150ml-elfn-01752925693.png" },
        { name: "غسول سباكلار للبشرة الدهنية والمختلطة sebaclar", desc: "", price: "264", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sebaclar-cleansing-gel-200ml-rhkh-01753082077.png" },
        { name: "بوبانا | غسول الوجه بفيتامين سي | 50 مل", desc: "", price: "35", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobana-bobana-vitamin-c-face-wash-50ml-7jfy-01721144616.png" }
    ], // الغسول
    'moisturizer': [
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 200مل", desc: "", price: "145", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-200ml-01655030643.png" },
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 100مل", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-100ml-01655030204.png" },
        { name: "نيفيا | سوفت كريم مرطب ومنعش للجسم | 50مل", desc: "", price: "48", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-soft-moisturizing-cream-refreshingly-soft-50ml-01655029300.png" },
        { name: "بيبانثين كريم مرطب للوجه | 30 جم | bepanthen cream", desc: "", price: "225", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1629382950moisturizing-creamjpg" },
        { name: "مرطب شان كريم للبشرة الجافة والحساسة shaan", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-skin-rejuvenation-cream-01674479136.png" },
        { name: "شان ليب بالم | مرطب شفاه شبرى كرز | 5 جم", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-lip-balm-cherry-delight-spf30-5gm-0epg-01708385304.png" },
        { name: "ستارفيل | جل مرطب للبشرة الدهنية | 100جم", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-hydrating-gel-with-tea-tree-100ml-kqae-01716308999.png" },
        { name: "إيفا | كريم نهاري للعناية بالبشرة بعامل حماية من", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-natural-glow-day-cream-spf-30-50gm-xbgl-01707992133.png" },
        { name: "ديرما اكتيف | اكتي كلير هيدرا كريم جل | 50مل", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-clear-hydra-mattifying-gel-50ml-kys1-01708423522.png" },
        { name: "ديرما اكتيف | اكتي كلير جلوبال كريم جل | 50مل", desc: "", price: "239", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-clear-global-ac-cream-50ml-3m98-01708421875.png" },
        { name: "ديرما اكتيف كريم للتفتيح اكتي وايت | 50 مل", desc: "", price: "239", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acti-white-anti-spot-and-pigmentation-cream-50ml-wyew-01724236494.png" },
        { name: "شان مرطب جل للبشرة الدهنية والمختلطة | 60 جم", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-soothing-gel-aloe-vera-extract-60gm-mtkf-01692319371.png" },
        { name: "هيبينا كريم كاراباميد لوشن كريم مرطب عميق مع 20%", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hepta-carbamide-twenty-cream-20-urea-for-very-dry-rough-skin-50-gm-z6fe-01775994173.png" },
        { name: "جليسوليد | كريم مرطب بالجلسرين لجميع أنواع البشرة", desc: "", price: "22", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/glysolid-soft-cream-with-glycerin-for-all-skin-types-20ml-xema-01721545814.png" },
        { name: "مرطب لونا للشفايف ليب ايراى ايمولينت | 10 جم", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-lip-therapy-shea-butter-10g-9yld-01655351590.png" },
        { name: "ديرما اكتيف اكتي ريبر جل للبشرة الجافة والحساسة | 50", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-repair-hydro-gel-for-dry-sensitive-skin-50ml-spin-01717504589.png" },
        { name: "هيبينا | بينا بانثينول كريم | 50جم", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hepta-panthenol-beta-cream-50gm-o4kg-01750764333.png" },
        { name: "يوسيرين | كريم ليلي ايفن بيجمينت ريفيكتور لبشرة", desc: "", price: "1755", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eucerin-even-pigment-perfector-night-cream-for-even-radiant-skinfdzp-01735028562.png" },
        { name: "كريم ميلانثينول مرطب للوجه | 40 | melanthenol cream", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/melano-pharma-melanthenol-moisturising-cream-40gm-rt3s-dusjynbi-01734870324.png" },
        { name: "ميلاكين | كريم 5% | 15 جم", desc: "", price: "36.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/melacaine-cream-5-15gm-vfof-01726572170.png" }
    ], // الترطيب
    'serum': [
        { name: "سيروم ديرما اكتيف اكثي وايت لتفتيح البشرة", desc: "", price: "269", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-white-brightening-correcting-serum-30ml-hft2-dumlssio-01736409641.png" },
        { name: "سيروم ديرما اكتيف للبشرة الدهنية اكثي كلير | 30 مل", desc: "", price: "269", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-clear-correcting-serum-30ml-2o0o-01708422311.png" },
        { name: "سيروم ستارفيل هيالورونيك اسيد مرطب وموحد لون البقع |", desc: "", price: "320", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-hyaluronic-acid-serum-30ml-2g1v-01708452168.png" },
        { name: "إيفا | كريم الوجه الخالي من البقع | 18 جرام", desc: "", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619719352spotless-face-cream-18gm-chefaajpg" },
        { name: "ذا اورديناري | سيروم اي بي يو بتركيز 10% | 30 مل", desc: "", price: "400", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/the-ordinary-euk-134-serum-01-30ml-x4nt-01793536992.png" },
        { name: "فيشي | ليفت اكتيف كولاجين سيبسيلاست كريم للجلد |", desc: "", price: "1700", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vichy-liftactiv-collagen-specialist-anti-aging-cream-50ml-2cwa-01690353070.png" },
        { name: "فير آند لافلي | جلو & لافلي كريم تفتيح للوجه | 40 جم", desc: "", price: "42", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fair-lovely-glow-lovely-face-cream-40gm-xmci-01756721682.png" },
        { name: "ذا اورديناري | سيروم الفا اربوتين 2% + حمض", desc: "", price: "650", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/the-ordinary-alpha-arbutin-2-ha-serum-30ml-yabi-01693999710.png" },
        { name: "لاروش بوزيه ريتينول ب3 سيروم مضاد للتجاعيد ومجدد", desc: "", price: "1590", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/la-roche-posay-retinol-b3-anti-wrinkle-serum-30ml-kll4-01655899527.png" },
        { name: "ليلاك | سيروم وحمض الهيالورونيك وفيتامين سي", desc: "", price: "389", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/leylak-hyaluronic-acidvit-c-10-serum-30ml-yo8j-01756078762.png" },
        { name: "لاروش بوزيه هيالو ب5 سيروم مضاد للتجاعيد |", desc: "", price: "1430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/la-roche-hyalu-serum-b5-30ml-r580-01655899267.png" },
        { name: "انفينيتي | سيرم ريتينول ب3 | 30 مل", desc: "", price: "450", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/infinity-retinol-b3-serum-30ml-jmd6-01722760588.png" },
        { name: "ايفا | كريم اكسبريس مرطب بالكولاجين لمقاومة تقدم", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-collagen-anti-sagging-express-moisturizing-cream-50-50ml-otz3-01737644164.png" },
        { name: "ايفا سكين كلينك | سيروم فيتامين ايه للوجه | 30 مل", desc: "", price: "230", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-vitamin-a-facial-serum-30ml-cofw-01721493150.png" },
        { name: "بيزلين | سيروم متوازن للتحكم في افراز الدهون | 30 مل", desc: "", price: "920", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/beesline-sebum-control-balancing-serum-30m-9ag2-01774366425.png" },
        { name: "بيزلين | سيروم للوجه لإنارة فورية | 30 مل", desc: "", price: "999", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/beesline-instant-bright-glow-serum-30ml-qxuj-01700504655.png" },
        { name: "كولاجرا | سيرم فيتامين سي بتكنولوجيا الليبوسوم | 30 مل", desc: "", price: "334", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-vitamin-c-serum-facial-wash-200ml-1mgn-01705246864.png" },
        { name: "كولاجرا نياسيناميد سيروم لتفتيح وتعزيز نضارة البشرة |", desc: "", price: "310", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-niacinamide-10-zinc-pca-1-serum-30ml-9u8s-01700394610.png" },
        { name: "1+1 ازهي | سيروم الريتينول لتقليل تجاعيد البشرة | 30 مل", desc: "", price: "345", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/azha-retinol-serum-30-ml-offer-11-iguj-01755772106.png" },
        { name: "1+1 كولاجرا | سيروم الهيالورونيك | 30 مل", desc: "", price: "290", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-hyaluronic-acid-serum-30ml-11ylku-01733213811.png" }
    ], // السيروم
    'mask': [
        { name: "إيفا | ماسك الكولاجين من سكين كلينيك", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobana-brightening-radiance-milk-mask-250gm-kvqz-01766062456.png" },
        { name: "ستارفيل | ماسك ورقي للبشرة المعرضة للحبوب | 1 كيس", desc: "", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-face-mask-k4e3-duvtuvkn-01713296675.png" },
        { name: "ستارفيل | ماسك ورقي للبشرة للتفتيح", desc: "", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-acne-prone-skin-face-mask-ukbf-01708451510.png" },
        { name: "ماسك بوبانا بالحليب للتفتيح والنضارة | 250جم", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-collagen-sheet-mask-3-fqb0-duhng0jr-01737645563.png" },
        { name: "إيفا | قناع حمض الهيالورونيك", desc: "", price: "105", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bubblzz-strawberry-lip-scrub-stick-35gm-nqfg-01701014074.png" },
        { name: "بوبانا | قناع الذهب لتقشير الوجه | 120 جرام", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starky-mask-rose-100-ml-r7me-01755911798.png" },
        { name: "ستاركي | ماسك الورد للوجه | 100مل", desc: "", price: "15", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobana-gold-peel-off-face-mask-120-gm-01738261995.png" },
        { name: "بايلر | مقشر شفاه فراولة | 3.5 جم", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hyaluronic-acid-mask-q7ju-01721408938.png" }
    ], // الماسك
    'sun-protection': [
        { name: "بوباي ا صن سكرين +SPF50 اكسترا جل - تينتد | 50جم", desc: "", price: "325", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobai-sunscreen-spf50-extra-gel-tinted-50gm-h7hg-01752133587.png" },
        { name: "ميلاتكس | كريم لتفتيح البقع الداكنة وتوحيد لون البشرة |", desc: "", price: "307", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/melatex-lightening-cream-50ml-4igr-01749975902.png" },
        { name: "بوباي صن سكرين جل SPF+ 50 للبشرة الدهنية", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobai-hydrocare-sunscreen-gel-tinted-spf-50-50gm-upbk-01720628970.png" },
        { name: "صن بلوك ميلاتايم جل melatime sunscreen", desc: "", price: "550", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/melatime-sunscreen-gel-spf50-50gm-kqso-01685272896.png" },
        { name: "ليلاك | بخاخ سائل أكوا لمسة جافة بمعامل حماية 50+ |", desc: "", price: "329", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/leylak-spray-dry-touch-fluid-spf50-75ml-21pg-01756079216.png" },
        { name: "نيفيا صن بلوك لوشن واقي الشمس للحماية والترطيب |", desc: "", price: "950", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-sun-lotion-protect-moisture-lock-spf50-01655373873.png" },
        { name: "صن بلوك لاروش بالفاونديشن أنثيليوس بوفي ميون", desc: "", price: "1070", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/la-roche-posay-anthelios-xl-tinted-dry-touch-gel-cream-spf-50-50-ml-01746687373.png" },
        { name: "بوباي | جل واقي من الشمس كريستال كلير بعامل حماية", desc: "", price: "500", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobai-sun-screen-hydrocare-gel-spf50-60gm-ia6p-duuggtab-01752151640.png" },
        { name: "نيفيا صن بلوك سراي مرطب وواقي من الشمس | 200", desc: "", price: "440", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-protect-moisture-sun-spray-spf-30-200-ml-01655374491.png" },
        { name: "لاروش بوزيه | انثيليوس يو في ميون 400 سائل مضاد للبقع", desc: "", price: "1070", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/la-roche-posay-anthelios-uvmune-400-anti-dark-spots-fluid-spf50-50ml-b1c7-01773180700.png" },
        { name: "صن بلوك لاروش للبشرة الدهنية والمختلطة انثيليوس", desc: "", price: "1070", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/la-roche-posay-anthelios-xl-spf-50-anti-brilliance-gel-50ml-3m0b-01716198570.png" },
        { name: "فيشي | كابيتال سوليل دراي تاتش تنيت كريم الحماية من", desc: "", price: "1110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vichy-ideal-creme-bb-spf-50-for-dry-skin-50ml-utlr-01701111945.png" },
        { name: "1+1 انفينيتي | جل واقي من الشمس بعامل حماية 50", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/infinity-care-hydro-boost-gel-spf-50-anti-shine-offer-60ml-qmhh-01722687949.png" },
        { name: "بوبانا | صن بلوك جيل واقي من الشمس ومرطب |", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobana-sunscreen-gel-150ml-92ba-dup1ve7i-01720975939.png" },
        { name: "لونا | زيت التسمير | 200مل", desc: "", price: "240", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-sun-tanning-oil-spf-15-130ml-01689000056.png" },
        { name: "نيفيا | صن بخاخ زيت التسمير الذهبي مع الكاروتين تان اويل", desc: "", price: "450", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-sun-tan-bronze-oil-200ml-hwee-01772625086.png" },
        { name: "ميلاتكس | كريم لتفتيح البشرة والوقاية من أشعة الشمس |", desc: "", price: "307", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/melatex-cream-spf5050ml-be0c-01668911656.png" },
        { name: "بوباي | جيل حمايه من الشمس | 60مل", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bobai-hydrocare-sunscreen-gel-spf-60gm-evuv-01752133697.png" },
        { name: "صن سكرين كولاجرا جل ارخص صن بلوك للبشرة المختلطة", desc: "", price: "309", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-sunscreen-50ml-duudarex-duzvudmc-01719828571.png" },
        { name: "1+1 إنفينيتي | صن سكرين لوشن واقي من الشمس", desc: "", price: "285", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/infinity-care-water-resistant-sunscreen-spf50-lotion-60ml-aerf-01722689789.png" }
    ], // الوقاية من الشمس
    'devices': [
        { name: "رچتس | ديرما رول ذهبي معقمة بير 0.75 ملم | 1", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/zgts-sterile-gold-derma-roller-with-075mm-needles-1-pcsw9mm-01735039881.png" }
    ], // أجهزة البشرة
    'eye-care': [
        { name: "ديسيو | محلول لتنظيف وتعقيم وترطيب العدسات", desc: "", price: "270", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/desio-solution-all-in-one-solution-100-ml-7ebq-01653992690.png" },
        { name: "إيه سي إم | جل كونتور للعين ديبيوات | 15مل", desc: "", price: "399", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/acm-depiwhite-eye-contour-gel-15ml-mbn1-01653495205.png" },
        { name: "ديرما اكتيف | اي كونتور كريم جل | 15مل", desc: "", price: "209", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-white-eye-contour-15ml-ub66-01708425106.png" },
        { name: "ستارفيل | اي كونتور للعين للهالات السوداء | 30جم", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-eye-contour-811-3rnn-01719818563.png" },
        { name: "دوليس | كريم كونتور العين | 15مل", desc: "", price: "399", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/duolys-eye-contour-15ml-log8-01720893282.png" },
        { name: "كريم لاروش بوزيه للعين بيجمينتكلر للهالات السوداء", desc: "", price: "1020", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1608640049-0000s-0019-3337872414152png" },
        { name: "سيروبايب | سيروم تطويل الرموش | 10مل", desc: "", price: "330", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/seropipe-extreme-lashes-serum-10ml-ps5o-duthi0ux-01769438734.png" },
        { name: "نيفيا | مزيل مكياج العيون من ناتشورال فيرنيس | 125مل", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-natural-fairness-double-effect-eye-makeup-remover-125ml-s2qh-01655301449.png" },
        { name: "ذا اورديناري | محلول الكافين | 30مل", desc: "", price: "500", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1635943794the-ordinary-caffeine-solution-5-egcg-30mljpg" },
        { name: "رينو | محلول مالتي بلس | 360 مل", desc: "", price: "580", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/renu-multi-plus-solution-360ml-zksq-01755426514.png" },
        { name: "رينو | محلول عدسات لاصقة | 120 مل", desc: "", price: "355", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1627208390renu-solution-for-contact-lens-120ml-chefaajpeg" },
        { name: "يوسيرين | ايفن بيجمينت بريفيكتور كريم تفتيح وتصحيح", desc: "", price: "1650", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eucerin-even-pigment-dark-circle-corrector-15ml-pnyr-01755159602.png" },
        { name: "نانو تريت | كريم عين بجزيئات الذهب عيار 24 | 15 مل", desc: "", price: "449", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nano-treat-24k-gold-eye-cream-15ml-hjis-01669202601.png" },
        { name: "جلامي لاب | كريم محيط العين | 30جم", desc: "", price: "450", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/glamy-lab-beautifying-eye-contour-filler-30gm-7q7r-01709064762.png" },
        { name: "بيرفكت كير | محلول متعدد الاغراض للعناية بالعدسات", desc: "", price: "130", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/perfect-care-lenses-solution-120-ml-y0h5-01721739368.png" }
    ], // العناية بالعيون
};

// دالة عرض منتجات العناية بالبشرة
function loadSkinProducts(categoryId) {
    let skinSection = document.getElementById('skin-content');
    skinSection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = skinSection.querySelector(`[onclick*="loadSkinProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    const container = document.getElementById('skin-products-container');
    container.innerHTML = ''; 
    
    const products = skinProductsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
                <button style="background-color: #34a853; color: #fff; border: none; padding: 15px 0; width: 100%; max-width: 400px; border-radius: 8px; font-size: 18px; font-family: 'Tajawal', sans-serif; font-weight: bold; cursor: pointer; margin: 0 auto 20px; display: block; transition: background 0.3s;">
                    الروشتة
                </button>
                <a href="javascript:void(0)" style="color: #777; text-decoration: none; font-size: 16px; font-weight: 500;">اسال صيدلي</a>
            </div>
        `;
        return;
    }
    
    // عرض المنتجات
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}


// ==========================================
// قسم العناية اليومية (بيانات المنتجات)
// ==========================================
const dailyProductsData = {
    'daily-default':[
        { name: "نيفيا | مزيل العرق بروتكت اند كير ستيبك للنساء | 40 مل", desc: "", price: "170", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-anti-perspirant-protect-and-care-deodorant-stick-40-ml-01655297494.png" },
        { name: "نيفيا | ستيبك مزيل عرق للنساء بيرل آند بيوتي خلاصة اللؤلؤ |", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-pearl-and-beauty-deodorant-roll-on-stick-for-women-40ml-01708610493.png" },
        { name: "نيفيا | ستيبك مزيل عرق للرجال انغريزيل اوريجنال للملابس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-men-invisible-black-and-white-antiperspirant-40ml-ao0y-01708607045.png" },
        { name: "نيفيا ستيبك مزيل عرق للنساء انغريزيل اوريجنال للملابس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-invisible-black-and-white-deodorant-stick-for-women-40ml-01708604736.png" },
        { name: "إيفا سكين كير | رول أون مزيل العرق لتفتيح البشرة باودر", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-natural-glow-lightening-roll-on-deodorant-powder-soft-60gm-wklf-01709069397.png" },
        { name: "إيفا | بودرة قدم بالصبار | 50جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619193926eva-foot-powder-deodorant-with-aloe-vera-50gm-chefaajpg" },
        { name: "إيفا | بودرة للقدمين بالنعناع | 50جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619194666eva-foot-powder-deodorant-with-menthol-50gm-chefaajpg" },
        { name: "سنسوداين | معجون عناية متعددة + تبييض الأسنان |", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sensodyne-multi-care-and-whitening-toothpaste-for-sensitive-teeth-100ml-4ztd-01751890215.png" },
        { name: "إيفا | بادي سبلاش - نبات اوت | 240 مل", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-du0pw3ub-01714291918.png" },
        { name: "إيفا | بادي سبلاش - مسك وياسمين | 240 مل", desc: "", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-duzn8pbh-01714290229.png" },
        { name: "إيفا | بادي سبلاش موريننج بلوسوم | 240 مل", desc: "", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-duzn8pbh-du6vcux8-01714290386.png" },
        { name: "مقشر القدمين من ايفا سكين كير - تروبيكال | 60 مل", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-foot-scrub-tropical-60ml-digc-01687286389.png" },
        { name: "إيفا | غسول الفم للمدخنين لمستخدمي السجائر", desc: "", price: "110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-e-line-mouthwash-with-menthol-for-e-cigarette-users-250ml-gbjk-01730201645.png" },
        { name: "إيفا | معجون أسنان سموكرز اي لابن بالمنثول | 50جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-e-line-toothpaste-with-menthol-50gm-vyik-01696694259.png" },
        { name: "إيفا | سموكرز بودرة تنظيف الأسنان بالفحم | 40جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-dental-flosser-40gm-zwok-01686841085.png" },
        { name: "إيفا | سكين كير بادي سبلاش ريد جلامور | 240 مل", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-red-glamour-240ml-ifqm-01730196643.png" },
        { name: "شان | كريم مرطب لليدين | 60جم", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-hand-cream-50gm-ilr3-01711027103.png" },
        { name: "ستارفيل | وايتبج رول أون مضاد للتعرق فريش بريز |", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-whitening-roll-on-antiperspirant-fresh-breeze-60ml-9j0q-01719819389.png" },
        { name: "إيفا بي وابت | كريم لتفتيح المناطق الحساسة | 50جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-b-white-whitening-cream-for-sensitive-areas-50gm-urib-01721410025.png" }
    ], // قسم العناية اليومية
    'body-bath': [
        { name: "إيفا | بادي سبلاش موريننج بلوسوم | 240 مل", desc: "", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-duzn8pbh-du6vcux8-01714290386.png" },
        { name: "مقشر القدمين من ايفا سكين كير - تروبيكال | 60 مل", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-foot-scrub-tropical-60ml-digc-01687286389.png" },
        { name: "إيفا سكين كير | رول أون مزيل العرق لتفتيح البشرة باودر", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-natural-glow-lightening-roll-on-deodorant-powder-soft-60gm-wklf-01709069397.png" },
        { name: "نيفيا | مزيل العرق بروتكت اند كير ستيبك للنساء | 40 مل", desc: "", price: "170", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-anti-perspirant-protect-and-care-deodorant-stick-40-ml-01655297494.png" },
        { name: "ستارفيل | وايتنج رول أون مضاد للتعرق فريش بريز |", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/starville-whitening-roll-on-antiperspirant-fresh-breeze-60ml-9j0q-01719819389.png" },
        { name: "إيفا | سكين كير بادي سبلاش ريد جلامور | 240 مل", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-red-glamour-240ml-ifqm-01730196643.png" },
        { name: "إيفا | بادي سبلاش - نبات اوت | 240 مل", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-du0pw3ub-01714291918.png" },
        { name: "إيفا | بادي سبلاش - مسك وياسمين | 240 مل", desc: "", price: "220", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-care-senses-body-splash-spring-lilies-240ml-tvyr-duc51pxm-duzn8pbh-01714290229.png" },
        { name: "ديرما اكتيف | اكتي وايت بادي لوشن | 200 مل", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dermactive-acti-white-2in1-body-milk-200ml-ne5q-01708423941.png" },
        { name: "افوفا | عجينة سكر الدلكة السودانية للوجه والجسم |", desc: "", price: "37", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-sudanese-dalka-sugar-paste-for-face-body-100gm-5qzb-01704025580.png" },
        { name: "شان مرطب جل للبشرة الدهنية والمختلطة | 200 جم", desc: "", price: "240", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-soothing-face-and-body-moisturizer-gel-200gm-8zmm-01683710092.png" },
        { name: "شان | كريم مرطب لليدين | 60جم", desc: "", price: "100", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-hand-cream-50gm-ilr3-01711027103.png" },
        { name: "مبشرة كعب بالمبرد", desc: "", price: "15", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/heel-grater-with-cooler-7lq2-01684238068.png" },
        { name: "لونا | كريم إمولاينت كريم مرطب ناعم بالجليسرين وزيت", desc: "", price: "32", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-emollient-soft-cream-glycerin-jojoba-oil-160gm-wjha-01701770505.png" },
        { name: "لونا | كريم إمولاينت كريم مرطب ناعم بالجليسيرين وزيت", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-emollient-soft-cream-glycerin-jojoba-oil-160gm-wjha-01701770505.png" },
        { name: "لونا | إمولاينت كريم فيتامين هـ والكولاجين | 160جم", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-emollient-cream-vitamin-e-and-collagen-160gm-zkbn-01712070947.png" },
        { name: "نيفيا | فريش بيور جل الاستحمام بالمعادن البحرية", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-fresh-pure-shower-gel-sea-minerals-aquatic-scent-250ml-0pkj-01655381678.png" },
        { name: "نيفيا | جل استحمام حريري ألو فريش بالصبار | 250 مل", desc: "", price: "130", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-fresh-aloe-shower-gel-natural-aloe-vera-fresh-scent-250ml-tmsh-01655382285.png" },
        { name: "نيفيا | شاور جل فريش باور فروت برائحة النوت البري |", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-fresh-powerfruit-shower-gel-blueberry-scent-250ml-dwmh-01722158734.png" },
        { name: "لونا | صابون جلسرين | 115جم", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-glycerin-soap-115g-kfm8-01655505985.png" }
    ], // العناية بالجسم والاستحمام   
    'oral-care': [
        { name: "إيفا | غسول الفم للمدخنين لمستخدمي السجائر", desc: "", price: "110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-e-line-mouthwash-with-menthol-for-e-cigarette-users-250ml-gbjk-01730201645.png" },
        { name: "إيفا | معجون أسنان سموكرز اي لابن بالمنثول | 50جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-e-line-toothpaste-with-menthol-50gm-vyik-01696694259.png" },
        { name: "إيفا | سموكرز بودرة تنظيف الأسنان بالفحم | 40جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-smokers-dental-flosser-40gm-zwok-01686841085.png" },
        { name: "سنسوداين | معجون عناية متعددة + تبييض الأسنان |", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sensodyne-multi-care-and-whitening-toothpaste-for-sensitive-teeth-100ml-4ztd-01751890215.png" },
        { name: "كوريجا | سوبر كريم مثبت لأطقم الأسنان بنكهة النعناع |", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/corega-super-cream-denture-fixative-mint-40ml-xfwj-ki2a-duqivodv-01757587800.png" },
        { name: "دابر هيربال | معجون اسنان بالقرنفل العشبي | 140جم +", desc: "", price: "55", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dabur-herbl-cavity-protection-clove-toothpaste-140g-toothbrush-vlox-01715519207.png" },
        { name: "فوكس | فرشاة أسنان توتال أكشن سوفت | 1 قطعة", desc: "", price: "58", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fuchs-toothbrush-total-action-plussoft1bbl-01737031761.png" },
        { name: "سنسوداين | معجون جل عميق التنظيف | 50 مل", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sensodyne-deep-clean-gel-toothpaste-50ml-0awl-01657116459.png" },
        { name: "المسواك دابر | معجون اسنان عشبي بخلاصة | 50جم +", desc: "", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dabur-miswak-toothpaste-50gm-10gm-free-m4pi-01709656490.png" },
        { name: "مضمضة اوروفكس اش لالتهاب الفم والآلام orovex h", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/generic-orovex-h-mouthwash-150-ml-01664286635.png" },
        { name: "سنسوداين | معجون عناية متعددة + تبييض الأسنان |", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sensodyne-multi-care-with-whitening-toothpaste-50-ml-01751890363.png" },
        { name: "كلوس اب | معجون أسنان أخضر بالنعناع المنعش |", desc: "", price: "20", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/closeup-toothpaste-menthol-fresh-25ml-01653294370.png" },
        { name: "معجون اسنان ديپودنت للتبييض والتلميع وإزالة البقع", desc: "", price: "52", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/depurdent-polishing-toothpaste-13m-3wdf-01663349812.png" },
        { name: "فريش اب | اورال كير خيط تنظيف الاسنان النعناع", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fresh-up-mint-dental-floss-50m-nva8-01751988884.png" },
        { name: "فرشاة اسنان فوكس ارتو | تنظيف تقويم الاسنان | هارد", desc: "", price: "66", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fuchs-ortho-toothbrush-orthodontic-cleaning-hard-lyif-01655343512.png" },
        { name: "بيتادين | غسول الفم وغرغرة 1% بوفيدون أيودين | 120 مل", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/betadine-1-mouth-wash-gargle-120ml-tsfx-01738237985.png" },
        { name: "سنسوداين | معجون اسنان انتعاش زائد | 50 مل", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sensodyne-extra-fresh-toothpaste-50ml-plvt-01751889904.png" },
        { name: "اورال بي | فرشاة اسنان فريش تري دي وايت | وسط", desc: "", price: "165", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/oral-b-toothbrush-fresh-3d-white-medium-gdzm-01785185772.png" },
        { name: "بارودونتاكس | معجون أسنان بالفلورايد لوقف نزيف اللثة |", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/parodontax-extra-fresh-toothpaste-for-bleeding-gums-01751888900.png" },
        { name: "سيجنال | معجون اسنان وايتنج وسط | 50 مل", desc: "", price: "39", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/signal-whitening-medium-wucv-01655819154.png" }
    ], // العناية بالفم والاسنان     
    'feminine-care': [
        { name: "افوفا | عجينة أسود أفريقي لإزالة الشعر بالفحم للوجه", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-african-black-paste-100ml-30k1-01656438650.png" },
        { name: "إيفا بي وايت | كريم لتفتيح المناطق الحساسة | 50جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-b-white-whitening-cream-for-sensitive-areas-50gm-urib-01721410025.png" },
        { name: "نيفيا | ستيبك مزيل عرق للنساء بيرل آند بيوتي خلاصة اللؤلؤ |", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-pearl-and-beauty-deodorant-roll-on-stick-for-women-40ml-01708610493.png" },
        { name: "نيفيا ستيبك مزيل عرق للنساء انغريزيل اوريجنال للملابس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-invisible-black-and-white-deodorant-stick-for-women-40ml-01708604736.png" },
        { name: "أفوفا | ماكينة حلاقة لإزالة الشعر للنساء | قطعة واحدة", desc: "", price: "18", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-feminine-disposable-razor-1-piece-etdg-01687170754.png" },
        { name: "افوفا | سبلاش للجسم بالفانيليا وجوز الهند | 55مل", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-body-splash-vanilla-coconut-55ml-if1j-01708178764.png" },
        { name: "افوفا | بودي سبلاش للجسم برائحة باشن فروت | 253مل", desc: "", price: "175", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-body-splash-passion-fruit-253ml-r6nt-01680996026.png", badge: "كمية محدودة" },
        { name: "افوفا | سبلاش للجسم برائحة مانجو خوخي | 55مل", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-body-splash-mango-peach-55ml-bd14-01694986273.png", badge: "كمية محدودة" },
        { name: "افوفا | سويت للمناطق الحساسة والجسم لازالة الشعر", desc: "", price: "37", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-white-paste-hair-removal-cherry-01672909521.png" },
        { name: "افوفا | العجينة الحمراء المخملية للوجه", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-red-paste-red-velvet-for-face-sensitive-areas-100gm-iz6s-01694988133.png" },
        { name: "افوفا | معجون ذهبي لإزالة الشعر | 100جم", desc: "", price: "36", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-gold-paste-hair-removal-100gm-urnn-01704025794.png" },
        { name: "افوفا شفرات للجسم - أفضل شفرات حلاقة للنساء | 5 قطع", desc: "", price: "90", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-feminine-disposable-razors-5-pcs-klvf-01702383569.png" },
        { name: "فوط صحية سوفي بالمسك فوط نسائية لا تسبب حساسية", desc: "", price: "105", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sofy-pads-soft-lump-free-musk-thick-long-16-pads-4fch-01665575025.png" },
        { name: "سوفي | فوط ليلية صحية ماكسي بالمسك - طويلة جدا", desc: "", price: "118", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sofy-maxi-sanitary-napkins-with-musk-extra-long-12-pads-12-pads-free-nxwm-01712151327.png" },
        { name: "سوفي | فوط صحية طويلة جدا ماكسي سميكة بالمسك |", desc: "", price: "105", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sofy-maxi-lump-free-ex-long-bundle-musk-14pads-2pcs-5nxy-01703535486.png" },
        { name: "افوفا | عجينة بيضاء لازاله الشعر باشن فروت | 100جم", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/avuva-white-paste-hair-removal-passion-fruit-100gm-pipf-01656344215.png" },
        { name: "اولويز | ماكسي سميكة طويلة جدا | 14 + 2 مجانا", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/always-maxi-thick-extra-long-14-2-free-pads-9wau-01713278230.png" },
        { name: "أولويز | نعومة القطن ماكسي سميكة فوط صحية طويلة", desc: "", price: "35", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1616585747item-xl-33112716-9557d6ec4a1e5-1jpg" },
        { name: "أولويز | ماكسي سميكة بنعومة القطن فوط صحية", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/always-cotton-soft-maxi-thick-long-sanitary-pads-with-wings-8-pads-01743948121.png" },
        { name: "اولويز | فوط صحية كول & دراي مغشس احساس بالكمية", desc: "", price: "33", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/always-super-8pads-romw-dup7zxwo-01729686358.png" }
    ], // العناية النسائية
    'masculine-care': [
        { name: "مان لوك | كريم حلاقة بالنعناع لجميع انواع البشرة | 90جم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/man-look-cream-shaving-90-qaph-01665310483.png" },
        { name: "فوج | برفان سراي ماركو للرجال | 120مل", desc: "", price: "132", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fogg-marco-perfume-spray-for-men-120ml-hvqx-01738274440.png" },
        { name: "نيفيا | ستيبك مزيل عرق للرجال انغريزيل اوريجنال للملابس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-men-invisible-black-and-white-antiperspirant-40ml-ao0y-01708607045.png" },
        { name: "مزيل عرق نيفيا للرجال سراي ديب دراي اند كلين | 150 مل", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-deep-anti-perspirant-for-men-150ml-01668074861.png" },
        { name: "مزيل عرق نيفيا للرجال اون الازرق فريش باور | 50 مل", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-deo-fresh-power-roll-on-for-men-50ml-vqxq-01655208116.png" },
        { name: "نيفيا | ديب بلات كربون هارك وود سراي للرجال | 150مل", desc: "", price: "192", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-deep-black-carbon-dark-wood-spray-for-men-150ml-ddxx-01697382178.png" },
        { name: "مينوكسيديل بخاخ منبت للشعر للرجال |", desc: "", price: "144", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/minoxilook-minoxidil-anti-hair-loss-01719597504.png" },
        { name: "فيبكس | كريم مزيل عرق للرجال صغير | 10جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vebix-mini-cream-blue-10g-wned-01655606122.png" },
        { name: "فوج | برفان سراي رويال للرجال | 120مل", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fogg-royal-perfume-spray-for-men-120ml-ehma-01722766099.png" },
        { name: "شفرة جيليت بلو 2 بلس blue gillete افضل شفرة", desc: "", price: "17.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/gillette-blue-ii-plus-yqul-01653319154.png" },
        { name: "وان بوند | غسول المناطق الحساسة للرجال | 300مل", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/one-bond-sensitive-area-wash-for-men-300ml-4f9h-01739531100.png" },
        { name: "شيف كود | جل الحلاقة للبشرة الحساسة | 150مل", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shave-code-gel-150-ml-421p-01655643992.png" },
        { name: "اكس ال | اسبراي للجسم للرجال اسود | 150مل", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/xl-body-spray-for-men-black-150ml-4o3s-01658159028.png" },
        { name: "سراي زاك zak برفان بولد | 175 مل", desc: "", price: "265", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/zac-p-bold-175-ml-qnf5-01653911768.png" },
        { name: "نيفيا | غسول الوجه واللحية للرجال | 100 مل", desc: "", price: "320", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-men-deep-face-and-beard-wash-100ml-01668076549.png" },
        { name: "اكس | بيتشارج سراي مزيل العرق | 150مل", desc: "", price: "195", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/axe-recharge-deo-spray-150ml-gkhg-01656252014.png" },
        { name: "اكس ال | بخاخ للجسم برائحة العود الملكي للرجال | 150مل", desc: "", price: "140", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/xl-body-spray-royal-oud-scent-for-men-150ml-2ych-01783252313.png" },
        { name: "نيفيا | مزيل للعرق ديب بلات كاربون إسبرسو للرجال رول", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-men-deep-black-carbon-espresso-antiperspirant-for-men-antibacterial-roll-on-50ml-irbr-01655212190.png" },
        { name: "مزيل عرق نيفيا للرجال رول اون الازرق فريش اكتيف |", desc: "", price: "96", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nivea-fresh-active-deodorant-roll-on-for-men-50ml-q1r7-01655205277.png" }
    ], // العناية الرجالية
    'protection': [
        { name: "وايت | مناديل منعشة برائحة العود | 10 مناديل", desc: "", price: "10", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/white-oud-wipes-10wipes-dztf-01751312552.png" },
        { name: "فيونا قطن ازالة المكياج 100% قطن طبيعي | 50", desc: "", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/viona-makeup-cotton-50-pcs-mvfz-01683987464.png" },
        { name: "إيفا | بودرة قدم بالصبار | 50جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619193926eva-foot-powder-deodorant-with-aloe-vera-50gm-chefaajpg" },
        { name: "إيفا | بودرة للقدمين بالنعناع | 50جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1619194666eva-foot-powder-deodorant-with-menthol-50gm-chefaajpg" },
        { name: "وايت | بينك مناديل مبللة للاطفال | 10 منديل", desc: "", price: "8", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/white-pink-wipes-for-kids-10-wipes-4nkl-01793714578.png" },
        { name: "وايت | مناديل مبللة ضد البكتيريا برائحة الليمون | 15", desc: "", price: "10", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/white-anti-bacterial-wipes-lemon-scent-15-pcs-dx4s-01793714812.png" },
        { name: "تراي تكت | صابون طبي مطهر مكيو | 100جم", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/macro-tritect-antiseptic-medicated-soap-100gm-vgw6-01740223195.png", badge: "يلزم وصفة طبية" },
        { name: "نابلسي شاهين | صابونه | 80جم", desc: "", price: "7", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nabolsy-shaheen-soap-120gm-npgw-01655655992.png" },
        { name: "لوكس | صابونة الورد لبشرة منوهجة | 165جم", desc: "", price: "45", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/lux-glowing-skin-rose-soap-165gm-2pk9-01751362517.png" },
        { name: "زينة | مناديل ورقية | 500 قطعة", desc: "", price: "31", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/zeina-classic-tissues-500-pcs-rijy-01793647665.png" },
        { name: "وايت | علبة مناديل ميجا | 550 منديل", desc: "", price: "32", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/white-mega-tissue-550sheets-7owa-01656432037.png" },
        { name: "كوردو | بلس اسبراي | 60مل", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cordo-vascular-protector-spray-60ml-1yoh-01664355427.png" },
        { name: "بيرفكت أكتيف | 70% كحول | 1000مل", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/perfect-pure-alchol-70-1000-mle5wh-01736525686.png" },
        { name: "دوف | بتني كريم صابونة | 90جم", desc: "", price: "51", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dove-fore-soft-smooth-skin-blue-soap-90-gzixy-01736938721.png" },
        { name: "فيونا تاج | مناديل مبللة بالصبار | 15 منديل", desc: "", price: "8", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vionatag-pocket-wet-wipes-with-aloe-vera-15-pcs-ajsb-01793434726.png" },
        { name: "آفاق | كحول إيثيلي 70% | 1 لتر", desc: "", price: "85", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/afak-ethyl-alcohol-1-liter-dxa0-01653904367.png" },
        { name: "دوف | بينك صابونة قالب كريم الجمال بكريم مرطب |", desc: "", price: "40", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dove-soap-bar-beauty-cream-pink-100gm-ifhj-01790205332.png" },
        { name: "بيروسول | مبيد الحشرات الطائرة | 300مل", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/pyrosol-flying-insects-killer-300ml-upc0-01721212120.png" },
        { name: "سيلك بلاست | شريط لاصق | 2سم", desc: "", price: "18", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silk-plast-adhesive-tape-2cm-5nre-01655655836.png" },
        { name: "آفاق | كحول اسبراي صغير | 70مل", desc: "", price: "23", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/afak-hand-sanitizer-gel-70ml-v3se-dumopthk-01724835127.png" }
    ], // الحماية  
    'herbs-vitamins': [
        { name: "سيكم | اعشاب للكلى | 15فلتر", desc: "", price: "28", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sekem-renal-herbs-15-envelopesemhx-01733180250.png" },
        { name: "جونميرا ثمر الورد | 10 أكياس", desc: "", price: "295", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/jonmera-joint-health-support-supplement-sachets-pineapple-flavor-with-rosehip982s-01732737829.png" },
        { name: "امتنان | شاي بالقرفة والزنجبيل | 18 كيس", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/imtenan-tea-cinnamon-ginger-18-bags-ddgp-01788737548.png" }
    ] // الأعشاب والفيتامينات
};

// دالة عرض منتجات العناية اليومية
function loadDailyProducts(categoryId) {
    let dailySection = document.getElementById('daily-content');
    dailySection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = dailySection.querySelector(`[onclick*="loadDailyProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    const container = document.getElementById('daily-products-container');
    container.innerHTML = ''; 
    
    const products = dailyProductsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
            </div>
        `;
        return;
    }
    
    // عرض المنتجات
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// قسم المكياج والاكسسوارات (بيانات المنتجات)
// ==========================================
const makeupProductsData = {
    'makeup-default': [
        { name: "لونا | مرطب الشفاه الخاص برائحة جوز الهند | 3.5جم", desc: "", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-special-lip-moisturizer-coconut-35gm-nuvy-01697479534.png" },
        { name: "لونا | مرطب الشفاه بالفراولة | 3.5جم", desc: "", price: "20", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-lip-moisturizer-strawberry-35gm-teur-01697479409.png" },
        { name: "شان | للعناية بالاظافر | 4مل", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-nail-care-4ml-vmnm-duaes5lb-01732709792.png" },
        { name: "إيفا | سكين كلينيك للبشرة المعرضة لحب الشباب مصحح", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-acne-prone-corrector-concealer-2-6ml-rzhr-01702472426.png" },
        { name: "لونا | بلسم الشفاه المرطب بالفانيليا | 3.5جم", desc: "", price: "32.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/luna-lip-moisturizer-vanilla-35gm-38sz-01697479836.png" },
        { name: "نيل 15 | لوشن للعناية بصحة الأظافر | 15مل", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nail-15-lotion-for-nail-health-15ml-yeog-01675177554.png" },
        { name: "موود | جل استحمام ليلي | 750 مل", desc: "", price: "89", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mood-night-shower-gel-750-gmvhf5-01733693438.png" },
        { name: "دراكون | كونسيلر كونتور لتصحيح وتفتيح العين ميديم", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/drakon-whitening-eye-contour-concealer-medium-beige-10ml-ie2d-01731832250.png" },
        { name: "ايسنس | ماسكارا جيت بيج لاش فوليوم بوست أسود", desc: "", price: "255", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/essence-get-big-lashes-volume-boost-mascara-black-01-1-pcschb5-01735510390.png" },
        { name: "ايسنس | ماسكارا اي لوف اكستريم كريزي فوليوم | 12مل", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/essence-i-love-extreme-crazy-volume-mascara-12ml-m9wm-01693998817.png" },
        { name: "إيزابيلا | قطن لإزالة المكياج | 50 قطعة", desc: "", price: "42", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/ezabilla-cotton-pads-lint-freeklrc-01736689610.png" },
        { name: "جولي إيفا | كريم تشقير | 40جم", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/jolieva-bleaching-cream-40gm-mxrb-01774340298.png" },
        { name: "يولو | طلاء أظافر | 228 | 10 مل", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/yolo-nail-polish-228-10mlmyri-01737390315.png" },
        { name: "يولو | طلاء اظافر | 227 | 10 مل", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/yolo-nail-polish-227-10-mlsdyv-01733692861.png" },
        { name: "يولو | نيل كير تيرابي | 12", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/yolo-nail-care-therapy-128azb-01733693296.png" },
        { name: "كافلون | فاشون سينس حلق طبى ألوان", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/caflon-fashion-sense-sterile-red-diamond-silver-stud-earrings-for-sensitive-ears-1-pairyg0h-01735081591.png" },
        { name: "إيزابيلا | وسادات قطنية لإزالة المكياج | 120 قطعة", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/ezabilla-cotton-pads-lint-freeffbb-01733639386.png" },
        { name: "يولو | مزيل طلاء الأظافر بنكهة آيس كريم التوت |", desc: "", price: "35", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/yolo-acetone-raspberry-ice-cream-135-mlh3zf-01736679394.png" },
        { name: "1+1 كولاجرا | بريفكتينج كونسيلر درجة متوسطة", desc: "", price: "320", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-perfecting-concealer-medium-sfqa-01683540400.png" },
        { name: "كولاجرا | ميكب كريم اساس طبي مرطب بمعامل حماية", desc: "", price: "365", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-makeup-foundation-spf30-medium-30ml-tf0l-duarnt4h-01700390311.png" }
    ], // قسم المكياج والاكسسوارات
    'face': [
        { name: "ديزار | فيتامين سي فونداشن للتفتيح ضد المياه | 50جم", desc: "", price: "180", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/disaar-vitamin-c-waterproof-whitening-foundation-50gm-oekw-01713787569.png" },
        { name: "كولاجرا | ميكب كريم اساس طبي مرطب بمعامل حماية", desc: "", price: "365", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/kolagra-makeup-foundation-spf30-medium-30ml-tf0l-duarnt4h-01700390311.png" },
        { name: "دراكون | كونسيلر كونتور لتصحيح وتفتيح العين ميديم", desc: "", price: "199", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/drakon-whitening-eye-contour-concealer-medium-beige-10ml-ie2d-01731832250.png" },
        { name: "إيفا | سكين كلينيك للبشرة المعرضة لحب الشباب مصحح", desc: "", price: "200", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/eva-skin-clinic-acne-prone-corrector-concealer-2-6ml-rzhr-01702472426.png" },
        { name: "بوليليك | ملقط من الفولاذ المقاوم للصدأ للحواجب | 1", desc: "", price: "18", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/polilike-stainless-steel-tweezers-for-eyebrows-1-pc-dej1-01774640444.png" }
    ], // الوجه
    'eyes': [
        { name: "ليلاك | سيروم هيالو سيكا | 30مل", desc: "", price: "389", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/leylak-hyalu-cica-serum-30ml-t3qx-01756078545.png" },
        { name: "رو افريكان للحواجب فوليكل بوست | زيت لإنبات شعر", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/raw-african-follicle-booster-eye-brows-edition-15ml-bi8j-01722421212.png" },
        { name: "ايسنس | ماسكارا اي لوف اكستريم كريزي فوليوم | 12مل", desc: "", price: "280", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/essence-i-love-extreme-crazy-volume-mascara-12ml-m9wm-01693998817.png" }
    ], // العيون
    'eyelashes': [
        { name: "كابيكسي | سيرم لعلاج وتقوية الرموش | 10 مل", desc: "", price: "550", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/capixy-l-ashes-treatment-serum-10ml-18fq-01702455240.png" }
    ], // الرموش
    'lips': [
        { name: "ليبي | مرطب شفاه لامع بنكهة النوت البري للعناية", desc: "", price: "99", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/liply-lip-balm-wild-berries-10-gm-323-qbqn-01756081196.png" }
    ], // الشفاه
    'nails': [
        { name: "مافالا | سيروم مافالا ساينتيفيك لتقوية الأظافر", desc: "", price: "500", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mavala-nail-serum-a-native-slos-01683772329.png" },
        { name: "يولو | طلاء أظافر | 228 | 10 مل", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/yolo-nail-polish-228-10mlmyri-01737390315.png" },
        { name: "بيل 15 | لوشن للعناية بصحة الأظافر | 15مل", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nail-15-lotion-for-nail-health-15ml-yeog-01675177554.png" },
        { name: "شان | للعناية بالاظافر | 4مل", desc: "", price: "160", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/shaan-nail-care-4ml-vmnm-duaes5lb-01732709792.png" }
    ], // الاظافر
};

// دالة عرض منتجات المكياج
function loadMakeupProducts(categoryId) {
    let makeupSection = document.getElementById('makeup-content');
    makeupSection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = makeupSection.querySelector(`[onclick*="loadMakeupProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    const container = document.getElementById('makeup-products-container');
    container.innerHTML = ''; 
    
    const products = makeupProductsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
            </div>
        `;
        return;
    }
    
    // عرض المنتجات
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// قسم المستلزمات الطبية (بيانات المنتجات)
// ==========================================
const medicalProductsData = {
    'medical-default': [
        { name: "سيلك بلاست | شريط لاصق طبي حرير 7.5 سم * 5م", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-75-cm-01654709857.png" },
        { name: "ساند اكير | أذوا شرائط اختبار السكر بالدم | 50 شريط", desc: "", price: "525", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sandacare-adura-test-strips-blood-glucose-50-strips-fs8n-01700987354.png" },
        { name: "سيلك بلاست | بلاستر 2.5 سم | 5 قطع", desc: "", price: "33", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-plaster-25cm-5pcs-vuuq-01720454051.png" },
        { name: "روماكس | ترمومتر ديجيتال لقياس درجة الحرارة", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fLjVTbZ3BvPCyhBwPYdFvycpK6LUGoUvTZse6u3y.jpeg" },
        { name: "سيلك بلاست | شريط حرير طبي لاصق 5 سم * 5م", desc: "", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-5-cm-01720453999.png" },
        { name: "اكيو تشيك اكتيف شرائط لقياس السكر في الدم | 50", desc: "", price: "605", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/u8mSTt6wH0P9RJgJGwdQLYpVyyRzcWWoqS6tWWnv.jpeg" },
        { name: "سيلك بلاست | شريط حرير طبي لاصق 25 سم * 2م", desc: "", price: "15", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-125cm-2m-gjk0-01688458186.png" },
        { name: "فارماباك | ماء نقي للمضاد الحيوي", desc: "", price: "2", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/pharmapack-antibiotic-purified-water-9m0k-01729501247.png" },
        { name: "هاي ميديك | رباط ضاغط | 10 سم", desc: "", price: "22", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hi-medic-compression-bandage-10cm-ygfl-01752149443.png" },
        { name: "اسيل | قطن طبي | 50جم", desc: "", price: "15", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aseel-cotton-50gm-6gxl-01774821128.png" },
        { name: "محلول ملح صوديوم كلوريد 0.9% | 500 مل", desc: "", price: "29.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sodium-chloride-09-7har-01720373116.png" },
        { name: "كور يد | شرائط طبية مرنة | 10 قطع", desc: "", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cure-aid-elastic-adhesive-plaster-10-pcs-ad4s-01776256221.png" },
        { name: "بريس تشيك | شرائط قياس نسبة السكر في الدم | 50", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/precicheck-blood-glucose-test-strips-50-pcs-ry3o-01688457932.png" },
        { name: "كير سينس اس | شرائط قياس نسبة السكر | 50 شريط", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/caresens-s-blood-glucose-test-strips-50-strips-2tja-01750668104.png" },
        { name: "قسطرة كاندم ديبلومات مقاس اكس لارج", desc: "", price: "27", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/catheter-condom-diplomat-x-largzums-01733319705.png" },
        { name: "ساني | بنطلون حساس كبير نمبر 3 بالغين | 24 قطعة", desc: "", price: "760", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sani-sensitive-pants-large-no3-enilikon-24-o2xs-01655981246.png" },
        { name: "تامباكس سدادات قطنية للعناية الشخصية | 10 قطع", desc: "", price: "359.9", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/tampax-super-tampons-10pcs-pvwk-01724677506.png" },
        { name: "قربة الماء الساخن", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hot-water-bag-pxbt-01657039114.png" },
        { name: "كيور ايد | بلاستر كالو | 17 شريط", desc: "", price: "67", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cure-aid-cure-aid-corn-cushions-qzxv-01729160587.png" },
        { name: "اكيو شيك | جايد شرائط قياس السكر | 50 شريط", desc: "", price: "670", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/accu-chek-guide-test-strips-50-strips-0ivo-01730539099.png" }
    ], // قسم المستلزمات الطبية
    'pain-management': [
        { name: "هاي ميديك | دعامة للمعصم لليد اليسري مقاس 24", desc: "", price: "65", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hi-medic-wrist-brace-left-xl-6hrj-01777224443.png" }
    ], // ادارة الالم
    'respiratory': [
        { name: "جراتزيا | بيور جهاز الاستنشاق بالبخار", desc: "", price: "1480", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/pure-steam-inhaler-euay-01699351563.png" }
    ], // اجهزة مساعدات التنفس
'first-aid': [
    { name: "محلول ملح صوديوم كلوريد 0.9% | 500 مل", desc: "", price: "29.5", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sodium-chloride-09-7har-01720373116.png" },
    { name: "سيلك بلاست | شريط حرير طبي لاصق 5 سم * 5م", desc: "", price: "62", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-5-cm-01720453999.png" },
    { name: "فارماباك | ماء نقي للمضاد الحيوي", desc: "", price: "2", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/pharmapack-antibiotic-purified-water-9m0k-01729501247.png" },
    { name: "سيلك بلاست | شريط حرير طبي لاصق 7.5 سم * 5م", desc: "", price: "75", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-75-cm-01654709857.png" },
    { name: "تامباكس سدادات قطنية للعناية الشخصية | 10 قطع", desc: "", price: "359.9", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/tampax-super-tampons-10pcs-pvwk-01724677506.png" },
    { name: "كيور ايد | بلاستر كالو | 17 شريط", desc: "", price: "67", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/cure-aid-cure-aid-corn-cushions-qzxv-01729160587.png" },
    { name: "هاي ميديك | رباط ضاغط | 10 سم", desc: "", price: "22", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hi-medic-compression-bandage-10cm-ygfl-01752149443.png" },
    { name: "اسيل | قطن طبي | 50جم", desc: "", price: "15", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aseel-cotton-50gm-6gxl-01774821128.png" },
    { name: "أيشيلي | ملقط", desc: "", price: "25", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/aishili-tweezers-w8zl-01751380465.png" },
    { name: "هاي ميديك | رباط ضاغط | 12 سم", desc: "", price: "24", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/hi-medic-compression-bandage-12cm-klw2-01752149309.png" },
    { name: "سيلك بلاست | شريط حرير طبي لاصق 10 سم * 5م", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/silkplast-adhesive-tape-10cm-01654709487.png" },
    { name: "قفازات لاتكس مقاس وسط | 100 قطعة", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/medium-latex-gloves4b0p-01737368239.png" },
    { name: "ليبراديكلان 140 مجم | 7 لاصق طبي", desc: "", price: "210", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/libradiclan-140-mg-7-medicated-patches-ql49-01690463134.png" }
], // الاسعافات الاولية
    'diabetes': [
        { name: "بريس تشيك | شرائط قياس نسبة السكر في الدم | 50", desc: "", price: "430", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/precicheck-blood-glucose-test-strips-50-pcs-ry3o-01688457932.png" },
        { name: "كير سينس اس | شرائط قياس نسبة السكر | 50 شريط", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/caresens-s-blood-glucose-test-strips-50-strips-2tja-01750668104.png" },
        { name: "اكيو تشيك اكتيف شرائط لقياس السكر في الدم | 50", desc: "", price: "605", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/u8mSTt6wH0P9RJgJGwdQLYpVyyRzcWWoqS6tWWnv.jpeg" },
        { name: "ساند اكير | أذوا شرائط اختبار السكر بالدم | 50 شريط", desc: "", price: "525", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sandacare-adura-test-strips-blood-glucose-50-strips-fs8n-01700987354.png" },
        { name: "جلوكو دكتور | 50 شرائط", desc: "", price: "410", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/gluco-dr-strips-kkeo-01684825055.png" },
        { name: "سويتال | سكر دايت اجم | 75 كيس", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1632118317sweetal-75-sachets-1-gmpng" },
        { name: "شرائط كونتور تي اس لقياس سكر الدم | 50 شريط", desc: "", price: "600", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/contour-ts-diabetic-blood-glucose-test-strips-50-g78q-01686742514.png" },
        { name: "اكيو شيك | جايد شرائط قياس السكر | 50 شريط", desc: "", price: "670", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/accu-chek-guide-test-strips-50-strips-0ivo-01730539099.png" }
    ], // العناية بالسكري
    'weight-management': [], // ادارة الوزن
    'masks': [], // كمامات
    'incontinence': [
        { name: "حفاضات ساني لكبار السن مقاس XXL كبير جداً | 14", desc: "", price: "550", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sani-sensitive-shorts-for-the-elderly-xxl-14pcs-evbp-01671558938.png" },
        { name: "فاين كير | حفاضات صحية للجنسين ميديم لكبار السن", desc: "", price: "600", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fine-care-incontinence-unisex-adult-briefs-medium-44pcs-zemr-01763375786.png" }
    ], // التبول اللاإرادي
    'health-monitoring': [
        { name: "روزماكس | ترمومتر ديجيتال لقياس درجة الحرارة", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/fLjVTbZ3BvPCyhBwPYdFvycpK6LUGoUvTZse6u3y.jpeg" }
    ] // آجهزة مراقبة الصحة
};

// دالة عرض منتجات المستلزمات الطبية
function loadMedicalProducts(categoryId) {
    let medicalSection = document.getElementById('medical-content');
    medicalSection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = medicalSection.querySelector(`[onclick*="loadMedicalProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    const container = document.getElementById('medical-products-container');
    container.innerHTML = ''; 
    
    const products = medicalProductsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
                <button style="background-color: #34a853; color: #fff; border: none; padding: 15px 0; width: 100%; max-width: 400px; border-radius: 8px; font-size: 18px; font-family: 'Tajawal', sans-serif; font-weight: bold; cursor: pointer; margin: 0 auto 20px; display: block; transition: background 0.3s;">
                    الروشتة
                </button>
                <a href="javascript:void(0)" style="color: #777; text-decoration: none; font-size: 16px; font-weight: 500;">اسال صيدلي</a>
            </div>
        `;
        return;
    }
    
    // عرض المنتجات
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// قسم الفيتامينات والمكملات (بيانات المنتجات)
// ==========================================
const vitaminsProductsData = {
    'vitamins-default': [
        { name: "جاستن بلو هير اكتيفيتور | 30 كبسولة", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-hair-activator-30-caps-tkme-01744117271.png" },
        { name: "جريبكسون ادفانس | 30 كبسولة", desc: "", price: "285", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-advance-30-caps-yrau-01768124447.png" },
        { name: "سليفار اكياس بطعم الاناناس | 20 كيس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sleevar-sachets-pinapple-flavor-20-sachs-vycw-01744113995.png" },
        { name: "سليفار حديد | 30 كبسولة", desc: "", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sleevar-iron-30-caps-6dei-01768130834.png" },
        { name: "سنترم للرجال | 100 أقراص", desc: "", price: "880", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/centrum-men-100-tabs-fxy6-21740650553.png" },
        { name: "جريبكسون ثيرموجينيك | 30 كبسولة", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-thermogenic-30-caps-yhn5-01768128009.png" },
        { name: "جريبكسون كريم | 100 مل", desc: "", price: "290", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-cream-100ml-fozs-01768126145.png" },
        { name: "جريبكسون جل | 100 جم", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-gel-100gm-onux-01768128583.png" },
        { name: "فيتاسيد ج فوار فيتاسيد سي للبرد | 12 قرص", desc: "", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vitacid-c-1gm-efferveccent12-tab-01674553527.png" },
        { name: "فيتامين ليمتلس وومان ماكس للنساء limitless", desc: "", price: "265", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-woman-max-30tablets-oqop-1644328703.png" },
        { name: "فيتامين ليمتلس مان ماكس للرجال | limitless man max", desc: "", price: "265", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-man-max-30tab-m45z-1644331014.png" },
        { name: "سنترم للسيدات | 100 قرص", desc: "", price: "880", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/centrum-women-100-tabs-q6jl-01740651093.png" },
        { name: "أكتوزنك كبسولات للرجال والنساء لصحة الشعر والجسم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1609336215-0025-octozincpng" },
        { name: "فيروجلوبين كبسول لشعر والانيميا | feroglobin cap", desc: "", price: "325", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/feroglobin-30-capsules-01731747149.png" },
        { name: "فيدروب نقط للاطفال والرضع والكبار vidrop فيتامين D", desc: "", price: "26", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vidrop-drops-01678611800.png" },
        { name: "اوميجا 3 بلس كبسولات للوزن وتعزيز الذاكرة والمناعة | 30", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1593946862vitamin-omega-3-fish-oiljpg" },
        { name: "جنكو بلس دواء للرجال والنساء لتنشيط الدورة", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/ginko-plus-50mg-20cap-78sk-01736411803.png" },
        { name: "برفكتيل أقراص للشعر لعلاج التساقط وتطويل الشعر | 30", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vitabiotics-perfectil-original-triple-active-30serv-30tab-qnnj-01720188237.png" },
        { name: "ليمتلس اوسوفورتين د3 5000 حبوب فيتامين د | 30", desc: "", price: "130", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-ossofortin-d3-5000-i-u-30-tab-qrme-01750155329.png" },
        { name: "اوستوكير اقراص كالسيوم مع فيتامين د osteocare", desc: "", price: "180", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/osteocare-30-tab-01720061476.png" }
    ], // قسم الفيتامينات والمكملات
    'vitamins-minerals': [
        { name: "سانتورين | 350 مجم | 20 كبسولة", desc: "", price: "190", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/santorin-20cap-5zes-01753029768.png" },
        { name: "سنترم إنرجي مالتي فيتامين | 30 قرص", desc: "", price: "320", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/centrum-energy-multivitamins-30-tabs-oyf6-01764163881.png" },
        { name: "دوزوفا ميلاتونين للنوم 0 | 30 مجم", desc: "", price: "249", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-melatonin-5mg-60-capsules-ztbc-01750338712.png" },
        { name: "سي زنك مكمل غذائي لدعم صحة الجهاز المناعي | 30", desc: "", price: "110", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/c-zinc-multivitamin-30cap-wpow-01673804117.png" },
        { name: "بروفي كيدز | مجموعة فيتامينات متعددة مع", desc: "", price: "349", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/profi-multivitamin-mineral-gummy-supplements-strawberry-orange-lemon-flavor-for-kids-4-years-aspartame-free-gelatin-free-artificial-colors-freew7pm-01735218221.png" },
        { name: "دوزوفا ناد+ 300مجم | 30 كبسولة", desc: "", price: "294", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-nad-300mg-30-caps-0yuc-01750340592.png" },
        { name: "بلومفيل أيرون حديد 28مجم | 30 كبسولة", desc: "", price: "225", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/bloomville-iron-hard-gelatin-28mg-30-caps-zwd8-01758197944.png" },
        { name: "دوزوفا ميلاتونين 5 مجم | 30 كبسولة", desc: "", price: "149", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-melatonin-5mg-30-caps-bkus-01750338370.png" },
        { name: "ليمتلس | وومان ماكس | 100+20 قرص", desc: "", price: "730", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-woman-max-100-tab-gqom-01751357103.png" },
        { name: "دوزوفا مان ماكس فيتامينات | 30 قرص", desc: "", price: "260", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-man-max-multivitamin-30-tabs-4m8t-01750335759.png" },
        { name: "دوزوفا Q10 كو انزيم | 30 قرص", desc: "", price: "490", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-q10-coenzyme-ubiquinol-60-caps-pci2-01750337407.png" },
        { name: "دوزوفا ناد+ 300مجم | 60 كبسولة", desc: "", price: "494", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-nad-300-mg-60-capiteg-01750340150.png" },
        { name: "دوزوفا وومان ماكس فيتامينات | 30 قرص", desc: "", price: "260", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/dozova-women-max-multivitamin-30-tabs-iqct-01750336563.png" },
        { name: "سيلينيوم فيتامينات يومي | 30 قرص", desc: "", price: "155", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/selenium-daily-vit-30-tabs-5yw1-01786563922.png" },
        { name: "ماج وايتس | 30 قرص", desc: "", price: "125", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mag-whites-30-tab-6kmq-01756084079.png" },
        { name: "برفكتيل | دعم إضافي للشعر | 60 قرص", desc: "", price: "700", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/perfectil-plus-hair-extra-support-60-tablets-o1rb-01776246470.png" },
        { name: "تيوتريزو اف اي | 14 كبسولة", desc: "", price: "60", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/nutritru-f-e-14-tabuyuk-01734878886.png" },
        { name: "ماش بريمير | ايميونو ماش كبدز 12 فيتامين و5 معادن", desc: "", price: "105", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mash-premiere-immuno-mash-kids-12-vitamin-5-minerals-l-lysine-for-normalgrowth-strong-immunity-100-ml-34tc-01709458459.png" },
        { name: "مسر بير بلص بطعم البرتقال | 160 مل", desc: "", price: "145", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mr-bear-plus-orange-flavour-160-ml-wzxv-01719605261.png" },
        { name: "أوميجال جونيورز | 30 كبسولة", desc: "", price: "360", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/omegal-juniors-30-caps-iuel-01781131987.png" }
    ], // الفيتامينات والمعادن
    'supplements': [
        { name: "سنترم للرجال | 100 قرص", desc: "", price: "880", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/centrum-men-100-tabs-fxy6-21740650553.png" },
        { name: "جاستن بلو هير اكتيفيتور | 30 كبسولة", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/justin-blue-hair-activator-30-caps-tkme-01744117271.png" },
        { name: "سليفار اكياس بطعم الاناناس | 20 كيس", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sleevar-sachets-pinapple-flavor-20-sachs-vycw-01744113995.png" },
        { name: "سليفار حديد | 30 كبسولة", desc: "", price: "390", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sleevar-iron-30-caps-6dei-01768130834.png" },
        { name: "فيتاسيد ج فوار فيتاسيد سي للبرد | 12 قرص", desc: "", price: "54", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vitacid-c-1gm-efferveccent12-tab-01674553527.png" },
        { name: "فيتامين ليمتلس وومان ماكس للنساء limitless", desc: "", price: "265", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-woman-max-30tablets-oqop-1644328703.png" },
        { name: "فيتامين ليمتلس مان ماكس للرجال | limitless man max", desc: "", price: "265", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-man-max-30tab-m45z-1644331014.png" },
        { name: "سنترم للسيدات | 100 قرص", desc: "", price: "880", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/centrum-women-100-tabs-q6jl-01740651093.png" },
        { name: "أكتوزنك كبسولات للرجال والنساء لصحة الشعر والجسم", desc: "", price: "50", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1609336215-0025-octozincpng" },
        { name: "فيروجلوين كبسول لشعر والانيميا | feroglobin cap", desc: "", price: "325", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/feroglobin-30-capsules-01731747149.png" },
        { name: "فيدروب نقط للاطفال والرضع والكبار vidrop فيتامين D", desc: "", price: "26", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vidrop-drops-01678611800.png" },
        { name: "اوميجا 3 بلس كبسولات للوزن وتعزيز الذاكرة والمناعة | 30", desc: "", price: "135", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1593946862vitamin-omega-3-fish-oiljpg" },
        { name: "جنكو بلس دواء للرجال والنساء لتنشيط الدورة", desc: "", price: "70", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/ginko-plus-50mg-20cap-78sk-01736411803.png" },
        { name: "برفكتيل أقراص للشعر لعلاج التساقط وتطويل الشعر | 30", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/vitabiotics-perfectil-original-triple-active-30serv-30tab-qnnj-01720188237.png" },
        { name: "ليمتلس اوسوفورتين د3 5000 حبوب فيتامين د | 30", desc: "", price: "130", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/limitless-ossofortin-d3-5000-i-u-30-tab-qrme-01750155329.png" },
        { name: "اوستوكير اقراص كالسيوم مع فيتامين د osteocare", desc: "", price: "180", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/osteocare-30-tab-01720061476.png" },
        { name: "سي ريتارد زنك c-retard + zinc للرجال والنساء | 20", desc: "", price: "80", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/c-retard-zinc-vitamin-c-500mg-20cap-c8u0-01721669785.png" },
        { name: "كروميترون | 30 كبسولة", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/chromitron-30-caps-dtnb-01722460937.png" },
        { name: "زنكترون كبسول مكمل غذائي للرجال والنساء للبشرة والشعر", desc: "", price: "126", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/1611395573%D8%B2%D9%86%D9%83%D8%AA%D8%B1%D9%88%D9%86-%D8%A7%D9%81%D8%B6%D9%84-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%AD%D8%A8%D9%88%D8%A8-%D8%A7%D9%84%D8%B2%D9%86%D9%83-%D9%84%D9%84%D8%B1%D8%AC%D8%A7%D9%84jpg" },
        { name: "برشام ميلجا اقراص milga مقوي للاعصاب والانتصاب |", desc: "", price: "108", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/milga-40-tablets-01719587613.png" }
    ], // المكملات الغذائية
    'weight-loss': [
        { name: "جريبكسون ثيرموجينيك | 30 كبسولة", desc: "", price: "250", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-thermogenic-30-caps-yhn5-01768128009.png" },
        { name: "جريبكسون كريم | 100 مل", desc: "", price: "290", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-cream-100ml-fozs-01768126145.png" },
        { name: "جريبكسون جل | 100 جم", desc: "", price: "350", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-gel-100gm-onux-01768128583.png" },
        { name: "جريبكسون ادفانس | 30 كبسولة", desc: "", price: "285", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-advance-30-caps-yrau-01768124447.png" },
        { name: "سويتال ستيڤيا | 50 كيس", desc: "", price: "95", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sweetal-stevia-50-sachets4dsy-01732104138.png" },
        { name: "أورلي 60مجم | 30 كبسولة", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/orly-60mg-30-caps-ldio-01725185510.png" },
        { name: "حبوب اورلي للتخسيس وانقاص الوزن | 30 | orly cap", desc: "", price: "240", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/orly-for-slimming-30-tab-01671525738.png" },
        { name: "دواء سلفستر وان للتخسيس | 20 كبسولة | sylvester 1", desc: "", price: "150", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/sylvester-1-20cap-kecv-01724611562.png" },
        { name: "مازورا | سليم ستيڤيا | 50 كيس", desc: "", price: "120", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/mazora-slim-stevia-powder-50-sachs-aoz8-01793541618.png" },
        { name: "جريبكسون كروميوم | 30 كبسولة", desc: "", price: "180", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-chromium-30-caps-7yox-01768125169.png" },
        { name: "جريبكسون كت | 30 قرص", desc: "", price: "300", img: "https://cdn.chefaa.com/filters:format(webp)/fit-in/330x330/public/uploads/products/grapexon-cut-30-tabs-mqvq-01768126999.png" }
    ], // التخسيس
};

// دالة عرض منتجات الفيتامينات
function loadVitaminsProducts(categoryId) {
    let vitaminsSection = document.getElementById('vitamins-content');
    vitaminsSection.querySelectorAll('.sidebar-link, .main-category-title').forEach(el => el.classList.remove('active'));
    
    let clickedLink = vitaminsSection.querySelector(`[onclick*="loadVitaminsProducts('${categoryId}')"]`);
    if (clickedLink) clickedLink.classList.add('active');

    const container = document.getElementById('vitamins-products-container');
    container.innerHTML = ''; 
    
    const products = vitaminsProductsData[categoryId];
    
    // لو القسم فاضي
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-state-box" style="grid-column: 1 / -1; background-color: #fff; border-radius: 10px; padding: 50px 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="width: 80px; height: 80px; background-color: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 30px; color: #34a853;"></i>
                </div>
                <h2 style="font-size: 24px; color: #333; margin-bottom: 10px; font-weight: bold;">لا توجد نتائج</h2>
                <p style="font-size: 16px; color: #777; margin-bottom: 30px;">أهلا بك، كيف يمكننا مساعدتك في الوصول الي ما تحتاجه؟</p>
                <button style="background-color: #34a853; color: #fff; border: none; padding: 15px 0; width: 100%; max-width: 400px; border-radius: 8px; font-size: 18px; font-family: 'Tajawal', sans-serif; font-weight: bold; cursor: pointer; margin: 0 auto 20px; display: block; transition: background 0.3s;">
                    الروشتة
                </button>
                <a href="javascript:void(0)" style="color: #777; text-decoration: none; font-size: 16px; font-weight: 500;">اسال صيدلي</a>
            </div>
        `;
        return;
    }
    
    // عرض المنتجات
    products.forEach(prod => {
        let badgeHtml = prod.badge ? `<span class="prescription-badge">${prod.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card" style="position: relative;">
                ${badgeHtml}
                <img src="${prod.img}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price">${prod.price} جنيه</span>
                    <button class="add-to-cart-btn">أضف إلى العربية</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}
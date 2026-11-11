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
    let allSections = ['medications-content', 'hair-content', 'skin-content', 'daily-content', 'makeup-content', 'medical-content', 'vitamins-content', 'mother-baby-content', 'sexual-health-content'];
    
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
/**
 * NUFUZ LC — Multi-language (i18n) Engine
 * Languages: Uzbek (uz), Russian (ru), English (en)
 */

const TRANSLATIONS = {
  uz: {
    // Meta & Title
    page_title: "Nufuz LC — IELTS, CEFR va General English Kurslari | Toshkent",
    
    // Navbar
    nav_teachers: "Ustozlar",
    nav_courses: "Kurslar",
    nav_freeday: "Free Day!",
    nav_results: "Natijalar",
    nav_about: "Biz haqimizda",
    nav_hiring: "O'qituvchilarga",
    nav_location: "Manzil",
    nav_call_aria: "Qo'ng'iroq qilish",
    nav_tg: "Telegram",
    mobile_menu_title: "Tilni tanlang:",
    mobile_reg_btn: "Bepul ro'yxatdan o'tish",

    // Hero
    hero_title: `Ortiqcha vaqtsiz <span class="highlight">IELTS</span> va <span class="highlight">CEFR</span> sertifikatiga erishing`,
    hero_desc: `O'zbekiston va xalqaro talablarga mos intensiv ingliz tili darslari. Kuchli nazorat, individual yondashuv va haqiqiy natijalar bilan.`,
    hero_cta: `Darajangizni bepul aniqlang`,
    hero_stat_graduates: `Bitiruvchilar`,
    hero_stat_ielts: `O'rtacha IELTS ball`,
    hero_stat_success: `Muvaffaqiyat darajasi`,
    hero_teacher_name: `Ustoz Jahongir Rahmonov`,
    hero_teacher_role: `Bosh o'qituvchi & IELTS Instruktor`,
    hero_teacher_footer: `🏆 Yuqori natijadorlik va tizimli ta'lim`,

    // Ustozlar
    teachers_label: `Bizning mutaxassislar`,
    teachers_title: `Yuqori natijaga eltuvchi <span>kuchli Ustozlarimiz</span>`,
    teachers_desc: `Xalqaro IELTS va CEFR sertifikatiga ega, sinovdan o'tgan maxsus metodika asosida dars beruvchi tajribali o'qituvchilar.`,
    zoom_btn: `🔍 Kattalashtirib ko'rish`,
    amirbek_name: `Amirbek Khalimov`,
    amirbek_course: `2 Oylik Kurs`,
    amirbek_role: `CEFR Writing & Intensive Tayyorlov Ustozi`,
    amirbek_time_label: `Dars vaqti:`,
    amirbek_time_val: `08:00 – 10:00 (ertalab)`,
    amirbek_dur_label: `Kurs davomiyligi:`,
    amirbek_dur_val: `2 oy intensiv`,
    amirbek_focus_label: `Asosiy yo'nalish:`,
    amirbek_focus_val: `CEFR Writing muammolariga aniq va tezkor yechim`,
    amirbek_goal_label: `Maqsad:`,
    amirbek_goal_val: `Yuqori ball, natija kafolatli!`,

    rahmiddin_name: `Rahmiddin & Mehriddin`,
    rahmiddin_course: `4 Oylik Kurs`,
    rahmiddin_role: `IELTS 8.0 Sohiblari & Katta Instruktorlar`,
    rahmiddin_f1_label: `Focused Preparation:`,
    rahmiddin_f1_val: `Har bir modul bo'yicha chuqur strategiyalar`,
    rahmiddin_f2_label: `Improve Score Fast:`,
    rahmiddin_f2_val: `Qisqa muddatda ballni maksimal ko'tarish`,
    rahmiddin_f3_label: `Expert Guidance:`,
    rahmiddin_f3_val: `Xalqaro 8.0 ball olgan ustozlar nazorati`,
    rahmiddin_f4_label: `Proven Results:`,
    rahmiddin_f4_val: `Yuzlab muvaffaqiyatli bitiruvchilar natijasi`,

    // Courses
    courses_label: `Bizning yo'nalishlar`,
    courses_title: `Maqsadingizga mos <span>kurs tanlang</span>`,
    courses_desc: `Har bir kurs – o'z darajangizdan boshlab, xalqaro standartgacha olib boruvchi tizimli va intensiv dastur.`,
    mock_btn: `Har hafta Mock testlar!`,
    badge_popular: `Eng mashhur`,
    badge_grant: `Grant uchun`,
    ielts_desc: `IELTS imtixonining barcha 4 moduli bo'yicha chuqurlashtirilgan strategiyalar. Haqiqiy imtihon sharoitida muntazam Mock testlar.`,
    cefr_desc: `Milliy va xalqaro attestatsiyalar, grantlar va OTMga kiruvchilar uchun maxsus tayyorgarlik dasturi.`,
    general_desc: `Grammatika, so'z boyligi va gapirish amaliyotini bir joyda rivojlantiruvchi har tomonlama ingliz tili kursi.`,
    course_cta: `Ochiq darsga yozilish →`,

    // Free Day
    freeday_badge: `Shoshiling! Joylar soni cheklangan`,
    freeday_title: `Free Day! — <span>Bepul ochiq dars</span>ga keling`,
    freeday_desc: `Markazimiz muhiti, o'qituvchilarimiz metodikasi bilan shaxsan tanishing va bepul konsultatsiya oling.`,
    freeday_btn: `Free Day'ga bepul joy band qilish`,

    // Results
    results_label: `Haqiqiy dalillar`,
    results_title: `O'quvchilarimizning <span>natijalari</span>`,
    results_desc: `Har bir sertifikat — tinimsiz mehnat va to'g'ri metodika samarasi. Siz ham shunday natijaga erisha olasiz.`,
    filter_all: `Barchasi`,
    filter_ielts: `IELTS`,
    filter_cefr: `CEFR`,
    reviews_title: `O'quvchilarimiz nima deydi?`,

    // Why us
    why_label: `Nega aynan biz?`,
    why_title: `Nufuz LC — <span>muvaffaqiyatingiz kafolati</span>`,

    // Teachers / Hiring
    hiring_label: `Karyera va rivojlanish`,
    hiring_title: `Kuchli o'qituvchilar <span>jamoasiga qo'shiling</span>`,

    // Register Form
    reg_label: `Ro'yxatdan o'tish`,
    reg_title: `Birinchi qadamni <span>hozir boshlang</span>`,
    reg_desc: `Bepul daraja testiga yoziling. 24 soat ichida mutaxassisimiz siz bilan bog'lanadi.`,
    form_name_label: `Ism-familiya`,
    form_phone_label: `Telefon raqam`,
    form_course_label: `Qiziqqan yo'nalish`,
    form_course_select: `— Yo'nalishni tanlang —`,
    form_submit: `Ochiq darsga yozilish`,
    form_privacy: `Ma'lumotlaringiz xavfsiz — uchinchi shaxslarga hech qachon berilmaydi.`,

    // Footer
    footer_desc: `O'zbekistondagi yetakchi IELTS va CEFR o'quv markazi. Kuchli mentorlar, individual yondashuv va isbotlangan natijalar.`,
    footer_contact_title: `Bog'lanish va Manzil`,
    footer_address: `Sharifjon o'quv markazi ro'parasi`,
    footer_open_map: `Xaritada ochish ↗`,
    footer_view_maps: `📍 Google Maps orqali ko'rish`,
    footer_full_map: `To'liq xaritada ochish ↗`,
    footer_hours: `Du–Shan: 08:00 – 20:00`,
    footer_rights: `Barcha huquqlar himoyalangan.`,
    footer_service: `Sayt yasash xizmati:`,
    footer_authors: `Mualliflar: Diyorbek Fayzullayev, Ruslan Samadov`,

    // Modal
    modal_title: `🎓 Ochiq darsga ro'yxatdan o'ting`,
    modal_submit: `Yuborish`,
    modal_privacy: `Ma'lumotlar uchinchi shaxslarga berilmaydi`
  },

  ru: {
    // Meta & Title
    page_title: "Nufuz LC — Курсы IELTS, CEFR и General English | Ташкент",

    // Navbar
    nav_teachers: "Преподаватели",
    nav_courses: "Курсы",
    nav_freeday: "Free Day!",
    nav_results: "Результаты",
    nav_about: "О нас",
    nav_hiring: "Преподавателям",
    nav_location: "Локация",
    nav_call_aria: "Позвонить",
    nav_tg: "Телеграм",
    mobile_menu_title: "Выберите язык:",
    mobile_reg_btn: "Бесплатная запись",

    // Hero
    hero_title: `Получите сертификаты <span class="highlight">IELTS</span> и <span class="highlight">CEFR</span> без потери времени`,
    hero_desc: `Интенсивные уроки английского языка по национальным и международным стандартам. Строгий контроль, индивидуальный подход и реальные результаты.`,
    hero_cta: `Определите свой уровень бесплатно`,
    hero_stat_graduates: `Выпускников`,
    hero_stat_ielts: `Средний балл IELTS`,
    hero_stat_success: `Уровень успеха`,
    hero_teacher_name: `Учитель Жахонгир Рахмонов`,
    hero_teacher_role: `Главный ментор и IELTS инструктор`,
    hero_teacher_footer: `🏆 Высокая результативность и системное обучение`,

    // Ustozlar
    teachers_label: `Наши специалисты`,
    teachers_title: `<span>Сильные преподаватели</span>, ведущие к высокому результату`,
    teachers_desc: `Опытные преподаватели с международными сертификатами IELTS и CEFR, обучающие по проверенной авторской методике.`,
    zoom_btn: `🔍 Увеличить просмотр`,
    amirbek_name: `Амирбек Халимов`,
    amirbek_course: `2-месячный курс`,
    amirbek_role: `Преподаватель CEFR Writing & Intensive подготовки`,
    amirbek_time_label: `Время уроков:`,
    amirbek_time_val: `08:00 – 10:00 (утро)`,
    amirbek_dur_label: `Длительность курса:`,
    amirbek_dur_val: `2 месяца интенсив`,
    amirbek_focus_label: `Основной упор:`,
    amirbek_focus_val: `Точное и быстрое решение сложностей в CEFR Writing`,
    amirbek_goal_label: `Цель:`,
    amirbek_goal_val: `Высокий балл, гарантия результата!`,

    rahmiddin_name: `Рахмиддин и Мехриддин`,
    rahmiddin_course: `4-месячный курс`,
    rahmiddin_role: `Обладатели IELTS 8.0 и старшие инструкторы`,
    rahmiddin_f1_label: `Focused Preparation:`,
    rahmiddin_f1_val: `Глубокие стратегии по каждому отдельному модулю`,
    rahmiddin_f2_label: `Improve Score Fast:`,
    rahmiddin_f2_val: `Максимальный рост балла в кратчайшие сроки`,
    rahmiddin_f3_label: `Expert Guidance:`,
    rahmiddin_f3_val: `Контроль и менторство экспертов с баллом IELTS 8.0`,
    rahmiddin_f4_label: `Proven Results:`,
    rahmiddin_f4_val: `Сотни подтвержденных сертификатов выпускников`,

    // Courses
    courses_label: `Наши направления`,
    courses_title: `Выберите курс <span>под вашу цель</span>`,
    courses_desc: `Каждый курс — это системная и интенсивная программа от вашего текущего уровня до международных стандартов.`,
    mock_btn: `Еженедельные Mock тесты!`,
    badge_popular: `Самый популярный`,
    badge_grant: `Для грантов`,
    ielts_desc: `Углубленные стратегии по всем 4 модулям IELTS. Регулярные Mock-тесты в условиях реального официального экзамена.`,
    cefr_desc: `Специальная программа подготовки к национальным аттестациям, грантам и поступлению в государственные и зарубежные вузы.`,
    general_desc: `Комплексный курс английского языка, гармонично развивающий грамматику, словарный запас и живую речь.`,
    course_cta: `Записаться на открытый урок →`,

    // Free Day
    freeday_badge: `Спешите! Количество мест ограничено`,
    freeday_title: `Free Day! — Приходите на <span>бесплатный открытый урок</span>`,
    freeday_desc: `Лично познакомьтесь с атмосферой нашего центра, методикой преподавателей и получите бесплатную консультацию.`,
    freeday_btn: `Забронировать бесплатное место на Free Day`,

    // Results
    results_label: `Реальные факты`,
    results_title: `<span>Результаты</span> наших студентов`,
    results_desc: `Каждый сертификат — результат упорного труда и эффективной методики. Вы тоже можете достичь такого результата.`,
    filter_all: `Все`,
    filter_ielts: `IELTS`,
    filter_cefr: `CEFR`,
    reviews_title: `Что говорят наши студенты?`,

    // Why us
    why_label: `Почему именно мы?`,
    why_title: `Nufuz LC — <span>гарантия вашего успеха</span>`,

    // Teachers / Hiring
    hiring_label: `Карьера и развитие`,
    hiring_title: `Присоединяйтесь к <span>команде сильных преподавателей</span>`,

    // Register Form
    reg_label: `Регистрация`,
    reg_title: `Сделайте первый шаг <span>прямо сейчас</span>`,
    reg_desc: `Запишитесь на бесплатный тест уровня. Наш специалист свяжется с вами в течение 24 часов.`,
    form_name_label: `Имя и фамилия`,
    form_phone_label: `Номер телефона`,
    form_course_label: `Интересующее направление`,
    form_course_select: `— Выберите направление —`,
    form_submit: `Записаться на открытый урок`,
    form_privacy: `Ваши данные в безопасности — они никогда не передаются третьим лицам.`,

    // Footer
    footer_desc: `Ведущий учебный центр IELTS и CEFR в Узбекистане. Сильные менторы, индивидуальный подход и проверенные результаты.`,
    footer_contact_title: `Контакты и Адрес`,
    footer_address: `Напротив учебного центра Шарифжон`,
    footer_open_map: `Открыть на карте ↗`,
    footer_view_maps: `📍 Смотреть в Google Maps`,
    footer_full_map: `Открыть полную карту ↗`,
    footer_hours: `Пн–Сб: 08:00 – 20:00`,
    footer_rights: `Все права защищены.`,
    footer_service: `Создание сайтов:`,
    footer_authors: `Авторы: Диёрбек Файзуллаев, Руслан Самадов`,

    // Modal
    modal_title: `🎓 Запишитесь на открытый урок`,
    modal_submit: `Отправить`,
    modal_privacy: `Данные не передаются третьим лицам`
  },

  en: {
    // Meta & Title
    page_title: "Nufuz LC — IELTS, CEFR & General English Courses | Tashkent",

    // Navbar
    nav_teachers: "Teachers",
    nav_courses: "Courses",
    nav_freeday: "Free Day!",
    nav_results: "Results",
    nav_about: "About Us",
    nav_hiring: "For Teachers",
    nav_location: "Location",
    nav_call_aria: "Call Us",
    nav_tg: "Telegram",
    mobile_menu_title: "Select Language:",
    mobile_reg_btn: "Free Registration",

    // Hero
    hero_title: `Achieve your <span class="highlight">IELTS</span> and <span class="highlight">CEFR</span> certificates without wasted time`,
    hero_desc: `Intensive English training adhering to global educational standards. Rigorous supervision, personalized approach, and verified achievements.`,
    hero_cta: `Test your level for free`,
    hero_stat_graduates: `Graduates`,
    hero_stat_ielts: `Average IELTS Score`,
    hero_stat_success: `Success Rate`,
    hero_teacher_name: `Mentor Jahongir Rakhmonov`,
    hero_teacher_role: `Head Teacher & IELTS Instructor`,
    hero_teacher_footer: `🏆 High Performance & Systematic Education`,

    // Ustozlar
    teachers_label: `Our Specialists`,
    teachers_title: `<span>Elite Mentors</span> leading to outstanding results`,
    teachers_desc: `Internationally certified IELTS and CEFR instructors teaching through rigorous, proven educational frameworks.`,
    zoom_btn: `🔍 Zoom to view`,
    amirbek_name: `Amirbek Khalimov`,
    amirbek_course: `2-Month Course`,
    amirbek_role: `CEFR Writing & Intensive Preparation Expert`,
    amirbek_time_label: `Lesson Time:`,
    amirbek_time_val: `08:00 – 10:00 (morning)`,
    amirbek_dur_label: `Duration:`,
    amirbek_dur_val: `2 months intensive`,
    amirbek_focus_label: `Core Focus:`,
    amirbek_focus_val: `Fast and effective solutions for CEFR Writing tasks`,
    amirbek_goal_label: `Goal:`,
    amirbek_goal_val: `High band score, guaranteed outcome!`,

    rahmiddin_name: `Rahmiddin & Mehriddin`,
    rahmiddin_course: `4-Month Course`,
    rahmiddin_role: `IELTS 8.0 Achievers & Senior Instructors`,
    rahmiddin_f1_label: `Focused Preparation:`,
    rahmiddin_f1_val: `Deep strategic mastery across every module`,
    rahmiddin_f2_label: `Improve Score Fast:`,
    rahmiddin_f2_val: `Rapid score elevation in optimal timeframe`,
    rahmiddin_f3_label: `Expert Guidance:`,
    rahmiddin_f3_val: `Direct mentorship from IELTS 8.0 certified experts`,
    rahmiddin_f4_label: `Proven Results:`,
    rahmiddin_f4_val: `Hundreds of successful student certifications`,

    // Courses
    courses_label: `Our Curriculum`,
    courses_title: `Choose the course <span>tailored to your goal</span>`,
    courses_desc: `Every course is a systematic and intensive pathway advancing you from your current level to international excellence.`,
    mock_btn: `Weekly Mock Tests!`,
    badge_popular: `Most Popular`,
    badge_grant: `For Grants`,
    ielts_desc: `In-depth strategies covering all 4 IELTS modules. Regular Mock examinations simulating authentic test conditions.`,
    cefr_desc: `Dedicated preparation program for national certifications, academic scholarships, and university admissions.`,
    general_desc: `All-round English course synchronizing grammar mastery, robust vocabulary expansion, and real-life fluency.`,
    course_cta: `Sign up for open lesson →`,

    // Free Day
    freeday_badge: `Hurry! Limited seats available`,
    freeday_title: `Free Day! — Join our <span>Free Open Lesson</span>`,
    freeday_desc: `Experience our center's vibrant atmosphere, meet our instructors in person, and receive a free comprehensive consultation.`,
    freeday_btn: `Book your free seat for Free Day`,

    // Results
    results_label: `Real Proof`,
    results_title: `Our Students' <span>Achievements</span>`,
    results_desc: `Every certificate is the fruit of disciplined dedication and proven methodology. You can achieve this milestone too.`,
    filter_all: `All`,
    filter_ielts: `IELTS`,
    filter_cefr: `CEFR`,
    reviews_title: `What Our Students Say`,

    // Why us
    why_label: `Why Choose Us?`,
    why_title: `Nufuz LC — <span>guarantee of your success</span>`,

    // Teachers / Hiring
    hiring_label: `Career & Development`,
    hiring_title: `Join our <span>team of elite educators</span>`,

    // Register Form
    reg_label: `Enrollment`,
    reg_title: `Take your first step <span>right now</span>`,
    reg_desc: `Register for a free proficiency test. Our academic advisor will contact you within 24 hours.`,
    form_name_label: `Full Name`,
    form_phone_label: `Phone Number`,
    form_course_label: `Desired Program`,
    form_course_select: `— Select Program —`,
    form_submit: `Sign up for open lesson`,
    form_privacy: `Your data is completely confidential and never shared with third parties.`,

    // Footer
    footer_desc: `Leading IELTS & CEFR educational center in Uzbekistan. Premier mentors, personalized coaching, and proven outcomes.`,
    footer_contact_title: `Contacts & Location`,
    footer_address: `Opposite Sharifjon Learning Center`,
    footer_open_map: `Open in Maps ↗`,
    footer_view_maps: `📍 View in Google Maps`,
    footer_full_map: `Open Full Map ↗`,
    footer_hours: `Mon–Sat: 08:00 – 20:00`,
    footer_rights: `All rights reserved.`,
    footer_service: `Website development:`,
    footer_authors: `Authors: Diyorbek Fayzullayev, Ruslan Samadov`,

    // Modal
    modal_title: `🎓 Register for an Open Lesson`,
    modal_submit: `Submit`,
    modal_privacy: `Your data will not be shared with third parties`
  }
};

const PHRASE_MAP = [
  // Course card details
  { uz: "Listening, Reading, Writing, Speaking modullari", ru: "Модули Listening, Reading, Writing, Speaking", en: "Listening, Reading, Writing, Speaking modules" },
  { uz: "Har hafta Mock test va tahlil", ru: "Еженедельный Mock-тест и разбор", en: "Weekly Mock test and analysis" },
  { uz: "Individual so'z boyligi va grammatika ishi", ru: "Индивидуальная работа над лексикой и грамматикой", en: "Personalized vocabulary and grammar focus" },
  { uz: "Speaking club va Writing correction", ru: "Speaking club и проверка эссе (Writing)", en: "Speaking club and Writing correction" },
  { uz: "Maqsad: Band 7.0 va undan yuqori", ru: "Цель: Band 7.0 и выше", en: "Goal: Band 7.0 and higher" },
  { uz: "B1, B2 yoki C1 darajasi bo'yicha yo'naltirilgan kurs", ru: "Курс, ориентированный на уровень B1, B2 или C1", en: "Course targeted for B1, B2, or C1 levels" },
  { uz: "Grant ariza talablariga muvofiq writing", ru: "Writing в соответствии с требованиями грантов", en: "Writing matching scholarship application criteria" },
  { uz: "Rasmiy imtihonga tayyorlov strategiyalari", ru: "Стратегии подготовки к официальному экзамену", en: "Official exam preparation strategies" },
  { uz: "Milliy va xalqaro standartlar bo'yicha attestatsiya", ru: "Аттестация по национальным и международным стандартам", en: "Certification according to national and international standards" },
  { uz: "Maqsad: C1 va milliy grant sertifikati", ru: "Цель: C1 и сертификат государственного гранта", en: "Goal: C1 and state scholarship certificate" },
  { uz: "Zamonaviy kommunikativ yondashuv", ru: "Современный коммуникативный подход", en: "Modern communicative method" },
  { uz: "Kundalik hayotda qo'llaniladigan leksika", ru: "Лексика для повседневной жизни", en: "Practical everyday vocabulary" },
  { uz: "Pronunciation va Speaking mashg'ulotlari", ru: "Уроки произношения и разговорной речи", en: "Pronunciation coaching and speaking drills" },
  { uz: "Vaqti-vaqti bilan progress testlar", ru: "Регулярные тесты успеваемости", en: "Periodic progress evaluation tests" },
  { uz: "Maqsad: A2 dan B2 gacha tizimli o'sish", ru: "Цель: системный рост от A2 до B2", en: "Goal: systematic progression from A2 to B2" },

  // Course meta
  { uz: "3–5 oy", ru: "3–5 месяцев", en: "3–5 months" },
  { uz: "4–6 oy", ru: "4–6 месяцев", en: "4–6 months" },
  { uz: "6–12 oy", ru: "6–12 месяцев", en: "6–12 months" },
  { uz: "B1+ darajadan", ru: "С уровня B1+", en: "From B1+ level" },
  { uz: "A2+ darajadan", ru: "С уровня A2+", en: "From A2+ level" },
  { uz: "Absolute Beginner uchun", ru: "Для начинающих", en: "For Absolute Beginners" },

  // Free day schedule
  { uz: "Bepul diagnostika testi (Diagnostic Test)", ru: "Бесплатный диагностический тест (Diagnostic Test)", en: "Free Diagnostic Test" },
  { uz: "IELTS va CEFR bo'yicha darajangizni, kuchli va zaif nuqtalaringizni aniqlab beramiz.", ru: "Определим ваш уровень по IELTS и CEFR, выявим сильные и слабые стороны.", en: "We identify your IELTS and CEFR level along with your strengths and weaknesses." },
  { uz: "Jonli ochiq dars & Speaking Masterclass", ru: "Живой открытый урок и Speaking мастер-класс", en: "Live Open Lesson & Speaking Masterclass" },
  { uz: "Top mentorlarimiz bilan haqiqiy imtihon strategiyalari va gapirish amaliyotini o'rganing.", ru: "Изучите реальные экзаменационные стратегии и разговорную практику с топ-менторами.", en: "Learn authentic exam strategies and speaking practice directly from top mentors." },
  { uz: "Individual o'qish rejasi & Maxsus chegirma", ru: "Индивидуальный план обучения и специальная скидка", en: "Individual Study Plan & Special Discount" },
  { uz: "Free Day qatnashchilari uchun kurslarga yozilishda maxsus chegirmalar va vaucherlar.", ru: "Специальные скидки и ваучеры на курсы для участников Free Day.", en: "Exclusive discounts and vouchers for Free Day attendees." },
  { uz: "Faqat 15 ta bepul o'rin qoldi", ru: "Осталось всего 15 бесплатных мест", en: "Only 15 free seats left" },

  // Why us & details
  { uz: "Nega Nufuz LC?", ru: "Почему Nufuz LC?", en: "Why Nufuz LC?" },
  { uz: "Nufuz LC — muvaffaqiyatingiz kafolati", ru: "Nufuz LC — гарантия вашего успеха", en: "Nufuz LC — Guarantee of Your Success" },
  { uz: "Kuchli Mentorlar", ru: "Сильные менторы", en: "Expert Mentors" },
  { uz: "Haqiqiy Natijalar", ru: "Реальные результаты", en: "Real Results" },
  { uz: "Muntazam Mock Testlar", ru: "Регулярные Mock тесты", en: "Regular Mock Tests" },
  { uz: "Kichik Guruhlar", ru: "Малые группы", en: "Small Groups" },
  { uz: "Professional Trening", ru: "Профессиональный тренинг", en: "Professional Training" },
  { uz: "Karyera o'sishi", ru: "Карьерный рост", en: "Career Growth" },
  { uz: "Raqobatbardosh oylik", ru: "Конкурентная зарплата", en: "Competitive Salary" },
  { uz: "Bozordagi eng yuqori stavkalar va natijaga asoslangan bonuslar", ru: "Самые высокие ставки на рынке и бонусы за результаты", en: "Top market rates and performance-based bonuses" },
  { uz: "Xalqaro standartdagi metodika bo'yicha tayyorgarlik dasturi", ru: "Программа подготовки по методике мирового уровня", en: "Training program aligned with global standards" },
  { uz: "Head Teacher va Metodistlik bosqichlariga ko'tarilish imkoniyati", ru: "Возможность повышения до Head Teacher и Методиста", en: "Career advancement to Head Teacher and Methodologist" },
  { uz: "Treningga yozilish va topshirish", ru: "Записаться на тренинг", en: "Apply for Training" },
  { uz: "Platformaga o'tish →", ru: "Перейти на платформу →", en: "Go to Platform →" },
  { uz: "VAKANSIYA OCHIQ", ru: "ВАКАНСИЯ ОТКРЫТА", en: "VACANCY OPEN" },
  { uz: "⚡ Birinchi bosqich onlayn saralash orqali o'tkaziladi", ru: "⚡ Первый этап проходит через онлайн-отбор", en: "⚡ First stage is conducted via online assessment" },
  { uz: "O'qituvchilar uchun maxsus saralash va malaka oshirish dasturi", ru: "Специальная программа отбора и повышения квалификации учителей", en: "Specialized selection and qualification program for educators" },
  { uz: "Siz o'ziga ishongan o'qituvchimisiz?", ru: "Вы уверенный в себе преподаватель?", en: "Are you a confident teacher?" },

  // Certificates buttons
  { uz: "Sertifikatni to'liq ko'rish", ru: "Смотреть сертификат полностью", en: "View full certificate" },
  { uz: "Kattalashtirish", ru: "Увеличить", en: "Enlarge" }
];

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('nufuz_lang') || 'uz';
    if (!['uz', 'ru', 'en'].includes(this.currentLang)) {
      this.currentLang = 'uz';
    }
    this.originalNodes = new WeakMap();
  }

  init() {
    this.cacheOriginals();
    this.setLanguage(this.currentLang, false);
    this.bindEvents();
  }

  cacheOriginals() {
    // Cache any text elements that match known phrases
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue.trim();
      if (!text) continue;
      for (let p of PHRASE_MAP) {
        if (text === p.uz) {
          this.originalNodes.set(node, p);
          break;
        }
      }
    }
  }

  setLanguage(lang, animate = true) {
    if (!TRANSLATIONS[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('nufuz_lang', lang);

    document.documentElement.lang = lang;

    const t = TRANSLATIONS[lang];

    // Update document title
    if (t.page_title) {
      document.title = t.page_title;
    }

    // Update text for all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Translate dynamic text phrases
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const p = this.originalNodes.get(node);
      if (p) {
        if (lang === 'uz') {
          node.nodeValue = p.uz;
        } else if (p[lang]) {
          node.nodeValue = p[lang];
        }
      }
    }

    // Update active class on all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Trigger custom event
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  bindEvents() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn && btn.dataset.lang) {
        e.preventDefault();
        this.setLanguage(btn.dataset.lang, true);
      }
    });
  }
}

// Global instance
window.i18n = new I18nManager();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
  window.i18n.init();
}

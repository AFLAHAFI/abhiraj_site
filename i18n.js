/* English / Arabic switch.
   - English is the default. The visitor's choice is remembered (localStorage "abhiLang").
   - Arabic switches the whole page to right-to-left and replaces every visible English string with the entries below.
   - Strings are looked up by their English text, so the HTML stays plain English (good for search engines and no-JS visitors).
   - To fix or improve a translation, edit the matching line in AR below. Keys must match the English text exactly.
   - Proper names (Abhi Raj logo, software names, companies) are intentionally left in Latin letters. */
(() => {
  'use strict';

  /* data-i18n="key" overrides the lookup for an element whose English text is ambiguous */
  const AR = {
    /* page titles + meta */
    'hero.l1': 'مصمم تصور معماري',
    'hero.l2': 'ثلاثي الأبعاد',
    'rib.concept': 'الفكرة',
    'Abhi Raj G. N. — Architectural 3D Visualizer': 'أبهي راج ج. ن. — مصمم تصور معماري ثلاثي الأبعاد',
    'Projects — Abhi Raj': 'المشاريع — أبهي راج',
    'Project details — Abhi Raj': 'تفاصيل المشروع — أبهي راج',
    'Abhi Raj G. N. — architectural 3D visualizer in Sharjah, UAE with 7+ years of experience in interior and exterior visualization, walkthrough animation, 360 tours and site coordination.': 'أبهي راج ج. ن. — مصمم تصور معماري ثلاثي الأبعاد في الشارقة، الإمارات، بخبرة تزيد على 7 سنوات في التصور الداخلي والخارجي والرسوم المتحركة للجولات والجولات بزاوية 360 درجة وتنسيق أعمال الموقع.',

    /* loader + navigation */
    'Architectural 3D Visualizer': 'مصمم تصور معماري ثلاثي الأبعاد',
    'Ready': 'جاهز',
    'Loading': 'جارٍ التحميل',
    'Main navigation': 'التنقل الرئيسي',
    'Menu': 'القائمة',
    'Close': 'إغلاق',
    'Home': 'الرئيسية',
    'About': 'نبذة',
    'Experience': 'الخبرات',
    'Tools': 'الأدوات',
    'Projects': 'المشاريع',
    'Get in touch': 'تواصل معي',
    'WhatsApp': 'واتساب',
    'Download CV': 'تحميل السيرة الذاتية',
    'Sharjah, UAE': 'الشارقة، الإمارات العربية المتحدة',

    /* hero */
    "Hi, I'm Abhi Raj G. N.": 'مرحبًا، أنا أبهي راج ج. ن.',
    'Bringing architectural concepts to life.': 'أحوّل الأفكار المعمارية إلى واقع نابض بالحياة.',
    'Detailed spaces. Realistic light. Visual stories that communicate design intent.': 'مساحات غنية بالتفاصيل. إضاءة واقعية. قصص بصرية تنقل فكرة التصميم.',
    '7+ years of experience': 'أكثر من 7 سنوات من الخبرة',
    'Exterior visualization': 'التصور الخارجي',
    'Interior visualization': 'التصور الداخلي',
    'Walkthrough animations': 'رسوم الجولات المتحركة',
    'VR & interactive experiences': 'الواقع الافتراضي والتجارب التفاعلية',
    'ARCHITECTURE IN FOCUS': 'العمارة في بؤرة الاهتمام',
    '3D modeling': 'النمذجة ثلاثية الأبعاد',
    'Rendering': 'التصيير',
    'Project management': 'إدارة المشاريع',
    'Site execution': 'تنفيذ الموقع',

    /* about */
    'Behind the visuals': 'خلف الصور',
    'Architecture.': 'العمارة.',
    'Atmosphere.': 'الأجواء.',
    'Attention': 'الاهتمام',
    'to detail.': 'بالتفاصيل.',
    'Years of architectural visualization': 'سنوات في التصور المعماري',
    'Turnkey projects managed to handover': 'مشاريع متكاملة أُديرت حتى التسليم',
    'Years working in the UAE': 'سنوات من العمل في الإمارات',
    'Project studies in the portfolio': 'دراسات مشاريع في ملف الأعمال',
    'I’m Abhi Raj G. N., an architectural 3D visualizer with 7+ years of experience, including 2 years in the UAE. I produce photorealistic renderings, walkthrough animations and 360 tours for villa, residential, commercial and landscape projects.': 'أنا أبهي راج ج. ن.، مصمم تصور معماري ثلاثي الأبعاد بخبرة تزيد على 7 سنوات، منها سنتان في الإمارات. أُنتج صورًا واقعية فائقة الدقة ورسومًا متحركة للجولات وجولات بزاوية 360 درجة لمشاريع الفلل والمشاريع السكنية والتجارية وتنسيق المواقع.',
    'I take projects from concept development through 3D visualization and client presentation to on-site execution. Skilled in 3ds Max, Corona Renderer, V-Ray, Lumion and D5 Render, and currently expanding into Unreal Engine for real-time visualization and VR.': 'أنتقل بالمشاريع من تطوير الفكرة، مرورًا بالتصور ثلاثي الأبعاد وعرضه على العميل، وصولًا إلى التنفيذ في الموقع. أتقن 3ds Max وCorona Renderer وV-Ray وLumion وD5 Render، وأعمل حاليًا على التوسع في Unreal Engine للتصور الفوري والواقع الافتراضي.',

    /* services */
    'Services': 'الخدمات',
    'What I': 'ما',
    'do': 'أقدّمه',
    'Facades, landscape and surroundings, lit for daylight or dusk.': 'الواجهات والمناظر الطبيعية والمحيط، بإضاءة النهار أو الغروب.',
    'Modeled rooms where materials, reflections and light set the mood.': 'غرف مُجسَّمة تصنع فيها الخامات والانعكاسات والإضاءة الأجواء.',
    'Camera paths that let you move through a design before it is built.': 'مسارات كاميرا تتيح لك التجوّل في التصميم قبل أن يُبنى.',
    'Real-time scenes to explore on screen.': 'مشاهد فورية يمكن استكشافها على الشاشة.',
    'Core skills': 'المهارات الأساسية',
    '3D interior visualization': 'التصور الداخلي ثلاثي الأبعاد',
    '3D exterior visualization': 'التصور الخارجي ثلاثي الأبعاد',
    'Villa interior design visualization': 'تصور التصميم الداخلي للفلل',
    'Landscape visualization': 'تصور تنسيق المواقع',
    'Photorealistic rendering': 'التصيير الواقعي الفائق',
    'Walkthrough animation': 'الرسوم المتحركة للجولات',
    '360 virtual tour': 'جولة افتراضية بزاوية 360 درجة',
    'Beyond the render': 'ما بعد التصيير',
    'Kitchen design & custom furniture modelling': 'تصميم المطابخ ونمذجة الأثاث المخصص',
    'Site supervision & site execution': 'الإشراف على الموقع وتنفيذه',
    'Project management & turnkey handover': 'إدارة المشاريع والتسليم الجاهز للاستخدام',
    'Client & design-team coordination': 'التنسيق بين العميل وفريق التصميم',

    /* process */
    'How I work': 'كيف أعمل',
    'My': 'طريقة',
    'process': 'عملي',
    'Brief and references': 'الملخص والمراجع',
    'Plans, drawings and mood references collected and checked.': 'جمع المخططات والرسومات ومراجع الأجواء ومراجعتها.',
    'The space built in 3ds Max from the supplied plans.': 'بناء المساحة في 3ds Max اعتمادًا على المخططات المقدَّمة.',
    'Materials and lighting': 'الخامات والإضاءة',
    'Surfaces, daylight and lamps tuned until the atmosphere is right.': 'ضبط الأسطح وضوء النهار والمصابيح حتى تكتمل الأجواء المطلوبة.',
    'Final images in Corona Renderer, Lumion or D5 Render.': 'الصور النهائية باستخدام Corona Renderer أو Lumion أو D5 Render.',
    'Finishing and delivery': 'اللمسات النهائية والتسليم',
    'Post-production in Photoshop, then files in the formats you need.': 'المعالجة اللاحقة في Photoshop، ثم تسليم الملفات بالصيغ التي تحتاجها.',
    'From concept to handover': 'من الفكرة إلى التسليم',
    'turnkey projects managed from concept development to client handover.': 'مشروعًا متكاملًا أُديرت من تطوير الفكرة حتى تسليمها للعميل.',
    'Along the way: 3–4 UAE kitchen projects and several villa interiors delivered end to end, from 3D concept to site completion.': 'وخلال ذلك: 3–4 مشاريع مطابخ في الإمارات وعدة تصاميم داخلية لفلل سُلِّمت من البداية إلى النهاية، من التصور ثلاثي الأبعاد حتى إنجاز الموقع.',

    /* ribbons */
    'Exterior': 'الخارجي',
    'Interior': 'الداخلي',
    'Walkthrough': 'الجولات',
    '360 tours': 'جولات 360',
    'Visualization': 'التصور',
    'Handover': 'التسليم',

    /* selected projects + 360 tour */
    'Selected projects': 'مشاريع مختارة',
    'Spaces with': 'مساحات',
    'a': '',
    'sense of life.': 'نابضة بالحياة.',
    'View all projects': 'عرض كل المشاريع',
    '360° virtual tour': 'جولة افتراضية بزاوية 360°',
    'Look around': 'تجوّل',
    'the space.': 'في المكان.',
    'Drag to look around. Use + / − to zoom, or go full screen for the best view.': 'اسحب للنظر حولك. استخدم + / − للتكبير والتصغير، أو اعرضها بملء الشاشة لأفضل مشاهدة.',
    'Drag to look around': 'اسحب للنظر حولك',
    'Office interior': 'تصميم داخلي لمكتب',
    '360 degree office interior viewer. Drag to look around.': 'عارض بزاوية 360 درجة لمكتب داخلي. اسحب للنظر حولك.',
    'Office interior, 360 degree panorama': 'تصميم داخلي لمكتب، بانوراما بزاوية 360 درجة',
    'Zoom out': 'تصغير',
    'Zoom in': 'تكبير',
    'Full screen': 'ملء الشاشة',

    /* experience */
    'Concept': 'من الفكرة',
    'to': 'إلى',
    'handover.': 'التسليم.',
    'Education & training': 'التعليم والتدريب',
    'AutoCAD 2D and 3D Course': 'دورة أوتوكاد ثنائي وثلاثي الأبعاد',
    'SAI CADS, Trivandrum, Kerala': 'SAI CADS، تريفاندرم، كيرالا',
    'Multimedia and Animation Course': 'دورة الوسائط المتعددة والرسوم المتحركة',
    'Animaster, Trivandrum, Kerala': 'Animaster، تريفاندرم، كيرالا',
    'Higher Secondary, Commerce': 'الثانوية العليا، تخصص التجارة',
    "St John's Model HSS, Nalanchira, Trivandrum, Kerala": "St John's Model HSS، نالانشيرا، تريفاندرم، كيرالا",
    'Languages': 'اللغات',
    'English · Hindi · Malayalam — read, write, speak': 'الإنجليزية · الهندية · المالايالامية — قراءة وكتابة وتحدثًا',
    'Oct 2024 – Present': 'أكتوبر 2024 – الآن',
    'Dec 2019 – Sep 2024': 'ديسمبر 2019 – سبتمبر 2024',
    'Jun 2019 – Nov 2019': 'يونيو 2019 – نوفمبر 2019',
    '3D Visualizer and Site Coordinator': 'مصمم تصور ثلاثي الأبعاد ومنسق موقع',
    'Architectural 3D Visualizer and Project Manager': 'مصمم تصور معماري ثلاثي الأبعاد ومدير مشاريع',
    '3D Visualizer': 'مصمم تصور ثلاثي الأبعاد',
    'India': 'الهند',
    'Lead the 3D visualization process from concept to final presentation, delivering photorealistic interior and exterior renderings.': 'أقود عملية التصور ثلاثي الأبعاد من الفكرة حتى العرض النهائي، وأقدّم صورًا واقعية فائقة الدقة للمساحات الداخلية والخارجية.',
    'Delivered 3–4 UAE kitchen projects and several villa interiors, from concept development to completion.': 'سلّمت 3–4 مشاريع مطابخ في الإمارات وعدة تصاميم داخلية لفلل، من تطوير الفكرة حتى الإنجاز.',
    'Coordinate design, production and site teams so installed work stays aligned with the approved 3D designs.': 'أنسّق بين فرق التصميم والإنتاج والموقع ليبقى العمل المُركَّب مطابقًا للتصاميم ثلاثية الأبعاد المعتمدة.',
    'Managed 15+ turnkey projects from concept development through to client handover.': 'أدرت أكثر من 15 مشروعًا متكاملًا من تطوير الفكرة حتى التسليم للعميل.',
    'Built accurate 3D models with architects, interior designers and project managers to match design intent.': 'بنيت نماذج ثلاثية الأبعاد دقيقة بالتعاون مع المعماريين ومصممي الديكور ومديري المشاريع لتطابق فكرة التصميم.',
    'Produced interior, exterior and landscape visualizations for residential and commercial clients.': 'أنتجت تصورات داخلية وخارجية وتصورات لتنسيق المواقع لعملاء من القطاعين السكني والتجاري.',
    'Created photorealistic renderings, walkthrough animations and PowerPoint presentations for project proposals and marketing.': 'أنشأت صورًا واقعية فائقة الدقة ورسومًا متحركة للجولات وعروض PowerPoint لمقترحات المشاريع والتسويق.',

    /* tools */
    'Software': 'البرامج',
    'I use': 'التي أستخدمها',
    'Modelling, rendering and post-production, from the first model to the final image.': 'النمذجة والتصيير والمعالجة اللاحقة، من أول نموذج حتى الصورة النهائية.',
    'Also working with': 'أعمل أيضًا مع',
    'AutoCAD 2D & 3D': 'AutoCAD ثنائي وثلاثي الأبعاد',
    'Unreal Engine (developing)': 'Unreal Engine (قيد التطوير)',
    'AI-assisted post-production': 'معالجة لاحقة بمساعدة الذكاء الاصطناعي',

    /* contact + footer */
    "Let's collaborate": 'لنتعاون',
    "LET'S COLLABORATE": 'لنتعاون',
    'Your next space.': 'مساحتك القادمة.',
    'Brought to life.': 'تنبض بالحياة.',
    'Get in touch for architectural visualization, interiors, exteriors and walkthroughs.': 'تواصل معي للتصور المعماري والتصاميم الداخلية والخارجية والجولات المتحركة.',
    'Start on WhatsApp': 'ابدأ عبر واتساب',
    'Send an email': 'أرسل بريدًا إلكترونيًا',
    'Email': 'البريد الإلكتروني',
    'Telephone': 'الهاتف',
    'Based in': 'المقر',
    'Abhi Raj G. N.': 'أبهي راج ج. ن.',
    "Let's bring your vision to life.": 'لنحوّل رؤيتك إلى واقع.',
    'WhatsApp inquiry': 'استفسار عبر واتساب',
    'View portfolio PDF': 'عرض ملف الأعمال PDF',
    'Architectural 3D visualization · Interiors · Exteriors': 'التصور المعماري ثلاثي الأبعاد · التصاميم الداخلية · التصاميم الخارجية',
    'Portfolio collection': 'مجموعة الأعمال',
    'Back to top': 'العودة إلى الأعلى',

    /* email dialog + lightbox */
    'Close email options': 'إغلاق خيارات البريد',
    'Start a conversation.': 'ابدأ محادثة.',
    "Choose how you'd like to send your inquiry.": 'اختر الطريقة التي تفضّلها لإرسال استفسارك.',
    'Open Gmail': 'فتح Gmail',
    'Open email app': 'فتح تطبيق البريد',
    'Copy email address': 'نسخ عنوان البريد',
    'Email address': 'عنوان البريد الإلكتروني',
    'Gmail opens in your browser. The email app option needs a configured mail app.': 'يفتح Gmail في المتصفح. خيار تطبيق البريد يتطلب تطبيق بريد مُعدًّا على جهازك.',
    'Email address copied. Paste it into your email service.': 'تم نسخ عنوان البريد. الصقه في خدمة البريد لديك.',
    'Select and copy the email address above, then paste it into your email service.': 'حدّد عنوان البريد أعلاه وانسخه، ثم الصقه في خدمة البريد لديك.',
    'Project image viewer': 'عارض صور المشروع',
    'Close ×': 'إغلاق ×',
    'Close image viewer': 'إغلاق عارض الصور',
    'Previous image': 'الصورة السابقة',
    'Next image': 'الصورة التالية',

    /* projects page */
    'ABHI RAJ G. N. / SELECTED VISUALIZATIONS': 'أبهي راج ج. ن. / تصورات مختارة',
    'Spaces imagined.': 'مساحات متخيَّلة.',
    'Visions realized.': 'رؤى تتحقق.',
    'An exploration of architecture, light and atmosphere. Discover interior and exterior visualizations that bring design ideas into focus.': 'استكشاف للعمارة والضوء والأجواء. اكتشف تصورات داخلية وخارجية تُبرز أفكار التصميم بوضوح.',
    'Explore the collection': 'استكشف المجموعة',
    '2025 portfolio': 'ملف أعمال 2025',
    'Projects showcase': 'معرض المشاريع',
    'Project highlights': 'أبرز ما في المشاريع',
    'Project exploration': 'استكشاف المشاريع',
    'A closer look': 'نظرة أقرب',
    'at the work.': 'إلى الأعمال.',
    'Residential spaces, hospitality interiors and architectural exteriors.': 'مساحات سكنية وتصاميم داخلية للضيافة وواجهات معمارية.',
    'Filter projects': 'تصفية المشاريع',
    'All projects': 'كل المشاريع',
    'Residential': 'سكني',
    'Commercial': 'تجاري',
    'Hospitality': 'ضيافة',
    'Interiors': 'داخلي',
    'Exteriors': 'خارجي',
    'Architecture': 'العمارة',
    'Landscape': 'المناظر الطبيعية',
    'Resort': 'منتجع',
    'Mood studies': 'دراسات الأجواء',
    'High-rise': 'برج شاهق',
    'Commercial interior': 'تصميم داخلي تجاري',
    'Bedroom and bathroom': 'غرفة نوم وحمام',
    'Kitchen': 'مطبخ',
    'Villa': 'فيلا',
    'Hotel interior': 'تصميم داخلي لفندق',
    'Ajman': 'عجمان',
    'Living room': 'غرفة معيشة',
    'Sharjah': 'الشارقة',
    'AI post-production': 'معالجة لاحقة بالذكاء الاصطناعي',
    'Explore project': 'استكشف المشروع',
    'Precision in detail.': 'دقة في التفاصيل.',
    'Feeling in every frame.': 'إحساس في كل لقطة.',
    'The craft': 'الحرفة',
    'Interior and exterior 3D visualization': 'التصور ثلاثي الأبعاد الداخلي والخارجي',
    'Lighting, materials and spatial composition': 'الإضاءة والخامات والتكوين المكاني',
    'Landscaping and architectural context': 'تنسيق المواقع والسياق المعماري',
    'Walkthrough animations and VR/AR assets': 'رسوم الجولات المتحركة وأصول الواقع الافتراضي والمعزز',
    'The toolkit': 'مجموعة الأدوات',
    'AI-assisted post-production in selected studies': 'معالجة لاحقة بمساعدة الذكاء الاصطناعي في دراسات مختارة',
    'The contribution': 'المساهمة',
    'Translated 2D plans into detailed 3D models': 'تحويل المخططات ثنائية الأبعاد إلى نماذج ثلاثية الأبعاد مفصلة',
    'Created residential, commercial and industrial visualizations': 'إنشاء تصورات سكنية وتجارية وصناعية',
    'Produced photorealistic renders for presentations': 'إنتاج صور واقعية فائقة الدقة للعروض التقديمية',
    'Collaborated with architects and designers': 'التعاون مع المعماريين والمصممين',
    'Tools and achievements reflect the supplied 2025 portfolio. Individual pages identify original modeling and studies using externally sourced base models.': 'الأدوات والإنجازات مأخوذة من ملف أعمال 2025 المقدَّم. وتوضّح كل صفحة على حدة الأعمال المنمذجة أصليًا والدراسات التي استخدمت نماذج أساسية من مصادر خارجية.',
    'Every space': 'لكل مساحة',
    'has a story.': 'حكاية.',
    'Explore the concept, creative contribution, tools and original presentation sheet for each project.': 'استكشف الفكرة والمساهمة الإبداعية والأدوات ولوحة العرض الأصلية لكل مشروع.',

    /* project page */
    'Project details': 'تفاصيل المشروع',
    'Please enable JavaScript to view the project story, or explore the original portfolio below.': 'الرجاء تفعيل JavaScript لعرض قصة المشروع، أو استكشف ملف الأعمال الأصلي أدناه.',
    'Project not found.': 'المشروع غير موجود.',
    'Choose a project from the collection.': 'اختر مشروعًا من المجموعة.',
    'Architectural visualization by Abhi Raj G. N.': 'تصور معماري بواسطة أبهي راج ج. ن.',
    'View full image': 'عرض الصورة كاملة',
    'The concept': 'الفكرة',
    'A space, brought to life.': 'مساحة تنبض بالحياة.',
    'Creative contribution': 'المساهمة الإبداعية',
    'Tools used': 'الأدوات المستخدمة',
    'Project features': 'مميزات المشروع',
    'Explore the space.': 'استكشف المكان.',
    'Study the light, materials and architectural details. Select an image to view it at full size.': 'تأمّل الضوء والخامات والتفاصيل المعمارية. اختر صورة لعرضها بالحجم الكامل.',
    'View original portfolio sheet': 'عرض لوحة الأعمال الأصلية',
    'Open portfolio PDF': 'فتح ملف الأعمال PDF',
    'Back to projects': 'العودة إلى المشاريع',

    /* project data (projects-data.js) */
    'Architectural Atmospheres': 'أجواء معمارية',
    'Resort at Dusk': 'منتجع عند الغروب',
    'Quiet Interior Moods': 'أجواء داخلية هادئة',
    'The Urban Skyline': 'أفق المدينة',
    'Café & Bar': 'مقهى وبار',
    'A Serene Private Suite': 'جناح خاص هادئ',
    'The Modern Kitchen': 'المطبخ العصري',
    'Villa in the Landscape': 'فيلا وسط الطبيعة',
    'High-Rise Hospitality': 'ضيافة في برج شاهق',
    'Ajman Living Room': 'غرفة معيشة في عجمان',
    'Living in Balance': 'معيشة متوازنة',
    'Sharjah Residence': 'سكن في الشارقة',

    'A collection of architectural and landscape studies exploring warm light, atmosphere and realistic presentation.': 'مجموعة من الدراسات المعمارية ودراسات تنسيق المواقع تستكشف الضوء الدافئ والأجواء والعرض الواقعي.',
    'Rendering and AI-assisted enhancement of downloaded 3ds Max scenes. Base models were sourced externally.': 'تصيير وتحسين بمساعدة الذكاء الاصطناعي لمشاهد 3ds Max جرى تنزيلها. النماذج الأساسية من مصادر خارجية.',
    'Lighting and atmosphere': 'الإضاءة والأجواء',
    'Landscape composition': 'تكوين المناظر الطبيعية',
    'AI-assisted editing': 'تحرير بمساعدة الذكاء الاصطناعي',

    'A resort environment brought to life through natural lighting, lush landscaping, refined materials and an inviting evening atmosphere.': 'بيئة منتجع تنبض بالحياة بفضل الإضاءة الطبيعية والمساحات الخضراء الغنّاء والخامات الراقية وأجواء مسائية جذابة.',
    'Visualization, scene composition and artistic enhancements by Abhi Raj; the base model was downloaded.': 'التصور وتكوين المشهد واللمسات الفنية من أبهي راج؛ أما النموذج الأساسي فجرى تنزيله.',
    'Landscape integration': 'دمج المناظر الطبيعية',
    'Day-to-evening atmosphere': 'أجواء من النهار حتى المساء',
    'Exterior material refinement': 'تحسين الخامات الخارجية',

    'A series of fully modeled interior scenes exploring how light, shadow, texture and composition can communicate a feeling as much as a space.': 'سلسلة من المشاهد الداخلية المنمذجة بالكامل تستكشف كيف يمكن للضوء والظل والملمس والتكوين أن تنقل إحساسًا بقدر ما تنقل مساحة.',
    'Full 3D modeling, scene composition, lighting and rendering by Abhi Raj.': 'النمذجة الكاملة ثلاثية الأبعاد وتكوين المشهد والإضاءة والتصيير بواسطة أبهي راج.',
    'Atmospheric lighting': 'إضاءة تصنع الأجواء',
    'Material and reflection studies': 'دراسات الخامات والانعكاسات',
    'Spatial composition': 'التكوين المكاني',

    'A high-rise exterior study with detailed lighting, landscape context and material refinement, composed for a professional architectural presentation.': 'دراسة لواجهة برج شاهق بإضاءة مفصلة وسياق طبيعي وتحسين للخامات، أُعدّت لعرض معماري احترافي.',
    'Rendering, visualization settings and artistic enhancements by Abhi Raj; the base model was sourced online.': 'التصيير وإعدادات التصور واللمسات الفنية من أبهي راج؛ أما النموذج الأساسي فمصدره الإنترنت.',
    'Urban context': 'السياق الحضري',
    'Dusk lighting': 'إضاءة الغروب',
    'Exterior composition': 'التكوين الخارجي',

    'A warm café and bar blending casual comfort with sophisticated detailing, custom furniture and carefully balanced mood lighting.': 'مقهى وبار دافئ يجمع بين الراحة العفوية والتفاصيل الراقية والأثاث المخصص وإضاءة أجواء متوازنة بعناية.',
    'Entire scene modeled and rendered by Abhi Raj.': 'المشهد بالكامل منمذج ومُصيَّر بواسطة أبهي راج.',
    'Detailed furniture modeling': 'نمذجة أثاث مفصلة',
    'Commercial spatial planning': 'تخطيط مكاني تجاري',
    'Warm mood lighting': 'إضاءة دافئة تصنع الأجواء',

    'Bedroom and bathroom studies designed around modern comfort, considered furniture, warm materials and soft, realistic lighting.': 'دراسات لغرفة نوم وحمام صُمّمت حول الراحة العصرية والأثاث المدروس والخامات الدافئة والإضاءة الناعمة الواقعية.',
    '3D modeling and rendering, including layout, furniture, materials and lighting.': 'النمذجة والتصيير ثلاثيا الأبعاد، بما يشمل التوزيع والأثاث والخامات والإضاءة.',
    'Modern comfort': 'راحة عصرية',
    'Furniture and layout design': 'تصميم الأثاث والتوزيع',
    'Soft material response': 'استجابة ناعمة للخامات',

    'Kitchen visualizations combining functional cabinetry, refined countertops and considered lighting with a warm, contemporary finish.': 'تصورات لمطابخ تجمع بين الخزائن العملية وأسطح العمل الراقية والإضاءة المدروسة بلمسة نهائية دافئة وعصرية.',
    'Modeling, visualization and post-production, with attention to material realism and detail.': 'النمذجة والتصور والمعالجة اللاحقة مع الاهتمام بواقعية الخامات والتفاصيل.',
    'Refined cabinetry': 'خزائن راقية',
    'Natural and artificial lighting': 'إضاءة طبيعية واصطناعية',
    'Texture and shadow detail': 'تفاصيل الملمس والظل',

    'A villa exterior presentation with natural light, refined materials, contextual landscaping and atmospheric effects.': 'عرض لواجهة فيلا بضوء طبيعي وخامات راقية وتنسيق مواقع متناغم مع المحيط ومؤثرات جوية.',
    'Rendering, scene composition and artistic enhancements by Abhi Raj; the villa base model was downloaded.': 'التصيير وتكوين المشهد واللمسات الفنية من أبهي راج؛ أما النموذج الأساسي للفيلا فجرى تنزيله.',
    'Landscape and architecture': 'المناظر الطبيعية والعمارة',
    'Natural exterior lighting': 'إضاءة خارجية طبيعية',
    'Material refinement': 'تحسين الخامات',

    'A contemporary hotel interior inside a high-rise building, developed through detailed architectural modeling, furniture and an immersive lighting treatment.': 'تصميم داخلي عصري لفندق داخل برج شاهق، طُوِّر عبر نمذجة معمارية مفصلة وأثاث ومعالجة إضاءة غامرة.',
    'Full modeling and visualization workflow, from spatial layout to final rendering.': 'مسار عمل كامل للنمذجة والتصور، من التوزيع المكاني حتى التصيير النهائي.',
    'Double-height interior': 'فراغ داخلي مزدوج الارتفاع',
    'Architectural and furniture detail': 'تفاصيل معمارية وتفاصيل أثاث',
    'Contextual lighting': 'إضاءة متناغمة مع السياق',

    'A modern living room in Ajman with a functional layout, detailed furniture and realistic materials, composed to feel warm and comfortable.': 'غرفة معيشة عصرية في عجمان بتوزيع عملي وأثاث مفصل وخامات واقعية، صُمّمت لتبدو دافئة ومريحة.',
    'Full modeling and rendering by Abhi Raj.': 'النمذجة والتصيير الكاملان بواسطة أبهي راج.',
    'Functional layout': 'توزيع عملي',
    'Realistic textures': 'ملامس واقعية',
    'Natural light and shadows': 'ضوء طبيعي وظلال',

    'A balanced living space emphasizing careful furniture modeling, refined material choices and natural light, depth and texture.': 'مساحة معيشة متوازنة تُبرز نمذجة الأثاث بعناية واختيار الخامات الراقية والضوء الطبيعي والعمق والملمس.',
    'Full modeling, lighting and rendering by Abhi Raj.': 'النمذجة والإضاءة والتصيير الكاملة بواسطة أبهي راج.',
    'Balanced composition': 'تكوين متوازن',
    'Furniture modeling': 'نمذجة الأثاث',
    'Lighting and material precision': 'دقة الإضاءة والخامات',

    "An elegant residential living room tailored to the client's needs, refined through realistic rendering and detailed post-production.": 'غرفة معيشة سكنية أنيقة صُمّمت وفق احتياجات العميل، وصُقلت عبر تصيير واقعي ومعالجة لاحقة مفصلة.',
    'Complete workflow from layout and modeling through rendering and Photoshop post-production.': 'مسار عمل كامل من التوزيع والنمذجة مرورًا بالتصيير وصولًا إلى المعالجة اللاحقة في Photoshop.',
    'Client-focused interior': 'تصميم داخلي يركّز على العميل',
    'Color and reflection refinement': 'تحسين الألوان والانعكاسات',
    'Complete visualization workflow': 'مسار تصور متكامل'
  };

  const norm = s => s.replace(/\s+/g, ' ').trim().replace(/[’‘]/g, "'");
  const DICT = new Map(Object.entries(AR).map(([k, v]) => [norm(k), v]));
  const flip = s => s.replace(/↗/g, '↖');

  /* translate one trimmed English string; returns null when there is nothing to translate */
  function tr(text, isAlt) {
    if (!text) return null;
    if (DICT.has(text)) return DICT.get(text);
    let m;
    if ((m = text.match(/^←\s*(.+)$/))) { const t = tr(m[1]); return t == null ? null : '→ ' + t; }
    if ((m = text.match(/^(.+?)\s*↗$/))) { const t = tr(m[1]); return (t == null ? m[1] : t) + ' ↖'; }
    if ((m = text.match(/^(.+?)\s*↑$/))) { const t = tr(m[1]); return t == null ? null : t + ' ↑'; }
    if ((m = text.match(/^Showing (\d+) project studies$/))) return 'عرض ' + m[1] + ' من دراسات المشاريع';
    if ((m = text.match(/^(\d+) project studies$/))) return m[1] + ' من دراسات المشاريع';
    if ((m = text.match(/^Loading frames · (\d+) \/ (\d+)$/))) return 'جارٍ تحميل الإطارات · ' + m[1] + ' / ' + m[2];
    if ((m = text.match(/^Next: (.+)$/))) { const t = tr(m[1]); return 'التالي: ' + (t == null ? m[1] : t); }
    if ((m = text.match(/^(.+) — Abhi Raj$/))) { const t = tr(m[1]); return t == null ? null : t + ' — أبهي راج'; }
    if ((m = text.match(/^(\d+) \/ (.+)$/))) { const t = tr(m[2]); return t == null ? null : m[1] + ' / ' + t; }
    if ((m = text.match(/^(.+) \/ (\d{4})$/))) { const t = tr(m[1]); return t == null ? null : t + ' / ' + m[2]; }
    if (isAlt) {
      if ((m = text.match(/^(.+), view (\d+)$/))) { const t = tr(m[1]); return (t == null ? m[1] : t) + '، المشهد ' + m[2]; }
      if ((m = text.match(/^(.+?) (?:architectural )?(?:rendering|visualization)$/))) { const t = tr(m[1]); return t == null ? null : t + ' — تصور معماري'; }
    }
    if (text.indexOf(' · ') > -1) {
      let any = false;
      const out = text.split(' · ').map(p => { const t = tr(p); if (t != null) any = true; return t == null ? p : t; });
      return any ? out.join(' · ') : null;
    }
    return null;
  }

  const root = document.documentElement;
  const ATTRS = ['alt', 'aria-label', 'title', 'placeholder'];
  const textOrig = new Map();   // Text node -> original English
  const attrOrig = new Map();   // Element -> { attr: original English }
  let lang = 'en';
  let titleOrig = document.title;
  let metaDesc = document.querySelector('meta[name="description"]');
  let metaOrig = metaDesc ? metaDesc.getAttribute('content') : '';
  let toggle = null;

  const skipEl = el => !el || el.closest('[data-no-i18n],script,style,noscript,textarea,svg');

  function doText(node) {
    const parent = node.parentElement;
    if (skipEl(parent)) return;
    const raw = node.nodeValue;
    if (!/[A-Za-z]/.test(raw)) return;
    const keyEl = parent.closest('[data-i18n]');
    let out;
    if (keyEl && DICT.has(keyEl.getAttribute('data-i18n'))) out = DICT.get(keyEl.getAttribute('data-i18n'));
    else out = tr(norm(raw), !!parent.closest('.lightbox-caption'));
    if (out == null) return;
    const lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    if (!textOrig.has(node)) textOrig.set(node, raw);
    node.nodeValue = lead + out + trail;
  }

  function doAttrs(el) {
    if (skipEl(el)) return;
    for (const a of ATTRS) {
      if (!el.hasAttribute(a)) continue;
      const v = el.getAttribute(a);
      const cur = attrOrig.get(el);
      const base = cur && a in cur ? cur[a] : v;
      const out = tr(norm(base), a === 'alt');
      if (out == null) continue;
      if (!cur) attrOrig.set(el, { [a]: base }); else if (!(a in cur)) cur[a] = base;
      if (v !== out) el.setAttribute(a, out);
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { doText(node); return; }
    if (node.nodeType !== 1) return;
    if (skipEl(node)) return;
    doAttrs(node);
    const tw = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n;
    while ((n = tw.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }

  function doHead() {
    const t = tr(norm(titleOrig));
    if (t != null) document.title = t;
    if (metaDesc) { const d = tr(norm(metaOrig)); if (d != null) metaDesc.setAttribute('content', d); }
  }

  /* live updates: text added or changed by the page's own scripts (project.js, dialogs, menu button, counters, loader) */
  const mo = new MutationObserver(list => {
    if (lang !== 'ar') { mo.takeRecords(); return; }
    for (const m of list) {
      if (m.type === 'childList') m.addedNodes.forEach(walk);
      else if (m.type === 'characterData') doText(m.target);
      else if (m.type === 'attributes') doAttrs(m.target);
    }
    mo.takeRecords();   // ignore the changes we just made ourselves
    if (document.title !== (lang === 'ar' ? tr(norm(titleOrig)) : titleOrig)) { titleOrig = document.title; doHead(); }
  });
  const watch = () => mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  function restore() {
    textOrig.forEach((orig, node) => { if (node.isConnected) node.nodeValue = orig; });
    textOrig.clear();
    attrOrig.forEach((o, el) => { for (const a in o) el.setAttribute(a, o[a]); });
    attrOrig.clear();
    document.title = titleOrig;
    if (metaDesc) metaDesc.setAttribute('content', metaOrig);
  }

  function paintToggle() {
    if (!toggle) return;
    const ar = lang === 'ar';
    toggle.textContent = ar ? 'English' : 'العربية';
    toggle.lang = ar ? 'en' : 'ar';
    toggle.setAttribute('aria-label', ar ? 'Switch language to English' : 'التبديل إلى اللغة العربية');
    toggle.setAttribute('aria-pressed', String(ar));
  }

  function setLang(next, save) {
    if (next === lang && root.lang === next) { paintToggle(); return; }
    mo.disconnect();
    if (lang === 'ar') restore();
    lang = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    if (next === 'ar') { titleOrig = document.title; walk(document.body); doHead(); }
    if (save) { try { localStorage.setItem('abhiLang', next); } catch (e) { /* private mode */ } }
    paintToggle();
    watch();
    dispatchEvent(new Event('resize'));          // let the scroll scripts re-measure the new layout
    document.dispatchEvent(new CustomEvent('langchange', { detail: next }));
  }

  /* the toggle button lives in the navigation, before the "Get in touch" pill */
  const nav = document.querySelector('#main-nav');
  if (nav) {
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'lang-toggle';
    toggle.setAttribute('data-no-i18n', '');
    toggle.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar', true));
    nav.insertBefore(toggle, nav.querySelector('.pill') || null);
  }

  let saved = null;
  try { saved = localStorage.getItem('abhiLang'); } catch (e) { /* ignore */ }
  lang = 'en';
  root.lang = 'en'; root.dir = 'ltr';
  if (saved === 'ar') setLang('ar', false); else { paintToggle(); watch(); }
})();

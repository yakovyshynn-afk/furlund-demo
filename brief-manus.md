# MASTER PROMPT ДЛЯ MANUS AI → CLAUDE CODE
## Сайт каркасних будинків — вигаданий преміальний бренд (шоукейс для ніші)

**Джерело:** власник приніс готовий зовнішній бриф (стиль Manus AI), без окремого brief.md/structure.md/copy.md/design-spec.md.
**Статус:** повний продуктовий і дизайн-бриф — Бодя (builder) працює напряму з цим файлом, як з `workspace/anna-trincher/brief-manus.md`.
**Призначення:** вигаданий шоукейс-бренд для ніші «каркасні будинки» — після здачі стає демо-патерном для аутріч (Тарас) у цій ніші.
**Вхідні асети:** `workspace/karkasni-budynky/source-assets/` (скопійовано з `/Users/romanyakovyshynn/Desktop/САЙТ КАРКАСНИХ БУДИНКІВ`) — фото будинків, відео (дрон, б-рол, прогулянка), ілюстрація матеріалів.
**Шрифти:** НЕ передані як файли — тільки інструкція підключення Google Fonts, дослівно нижче в розділі "ШРИФТИ (джерело: Загальна інформація по шрифтах.md)". Підключати саме так, локальних font-files немає.

---

[ТУТ ПОВНИЙ ТЕКСТ MASTER PROMPT — розділи 0–51, дослівно як отримано від власника]

## 0. РОЛЬ І ГОЛОВНА МЕТА

Ти працюєш як **Senior Product Designer + Creative Director + Brand Designer + UX/UI Designer + Senior Frontend Engineer + Art Director + QA Engineer**.

Твоє завдання — не просто створити вебсторінку, а розробити **повноцінний, візуально винятковий, преміальний digital-концепт вигаданої компанії, яка спеціалізується на будівництві сучасних каркасних будинків**.

Результат має виглядати так, ніби це реальний сайт дорогої європейської архітектурно-будівельної компанії, над яким працювала сильна команда:

* brand designer;
* creative director;
* UX/UI designer;
* art director;
* motion designer;
* frontend engineer;
* copywriter;
* conversion specialist.

Не роби типовий шаблонний сайт будівельної компанії.

Не використовуй очевидний шаблон:
«Головна → Послуги → Про нас → Наші будинки → Контакти».

Потрібно створити **цілісну digital-історію бренду**, де дизайн, типографіка, фотографії, простір, анімації, структура контенту, архітектурна естетика та UX працюють як єдина система.

---

# 1. ПЕРШИЙ ЕТАП — ОБОВ'ЯЗКОВИЙ АНАЛІЗ УСІХ ФАЙЛІВ

Перед написанням будь-якого коду **НЕ ПОЧИНАЙ РОЗРОБКУ ОДРАЗУ**.

Спочатку повністю проаналізуй усі файли, які були передані разом із цим завданням.

Особливо уважно проаналізуй:

* файл/файли зі шрифтами;
* назви шрифтів;
* формати шрифтів;
* накреслення;
* доступні weights;
* italic/normal;
* можливі variable fonts;
* логотипи;
* SVG;
* PNG/JPG/WebP;
* іконки;
* графічні елементи;
* референси;
* moodboards;
* PDF;
* текстові документи;
* screenshots;
* будь-які інші assets.

### Критично важливо

Не вигадуй характеристики файлів, яких немає.

Якщо в папці є конкретний шрифт — використовуй саме його.

Якщо є декілька шрифтів — визнач:

1. primary font;
2. secondary font;
3. display font;
4. body font;
5. UI font.

Якщо шрифт має декілька weights — правильно розподіли їх між:

* H1;
* H2;
* H3;
* body;
* navigation;
* labels;
* buttons;
* captions;
* metadata.

Якщо шрифт можна підключити локально — підключи його локально.

Не замінюй переданий шрифт на Google Font просто тому, що це простіше.

---

# 2. ПІСЛЯ АНАЛІЗУ ФАЙЛІВ — СТВОРИ DESIGN DIRECTION

До початку реалізації визнач:

### Brand personality

Компанія повинна сприйматися як:

* сучасна;
* архітектурна;
* технологічна;
* надійна;
* преміальна;
* мінімалістична;
* інженерно точна;
* естетична;
* спокійна;
* впевнена;
* неагресивна.

Уникай образу:

* дешевої будівельної компанії;
* масового забудовника;
* «типового українського/італійського будівельного сайту»;
* шаблонного landing page;
* сайту з надлишком зеленого кольору, якщо це не обґрунтовано брендом;
* стокового corporate design;
* надмірних градієнтів;
* банальних іконок;
* generic cards;
* generic glassmorphism.

---

# 3. ПОЗИЦІОНУВАННЯ БРЕНДУ

Компанія вигадана.

Не використовуй реальні компанії як назву бренду.

Придумай **оригінальну назву бренду**, яка звучить як реальна європейська архітектурно-будівельна компанія.

Назва повинна бути:

* короткою;
* преміальною;
* легкою для запам'ятовування;
* придатною для логотипа;
* придатною для домену;
* без очевидної прив'язки до конкретної існуючої компанії.

Якщо необхідно, запропонуй 3–5 варіантів і вибери найкращий.

Після вибору назви використовуй її послідовно по всьому сайту.

---

# 4. БАЗОВА ІДЕЯ БРЕНДУ

Компанія не просто «будує каркасні будинки».

Вона продає:

**архітектуру + технологію + комфорт + контроль + якість життя.**

Основний message повинен передавати ідею:

> Ми створюємо будинки, в яких архітектура, інженерія та спосіб життя працюють як одна система.

Не копіюй цю фразу буквально, якщо зможеш створити сильніший copy.

Tone of voice:

* короткий;
* впевнений;
* інтелігентний;
* архітектурний;
* без маркетингового крику;
* без cliché;
* без «найкращі ціни»;
* без «№1 на ринку»;
* без фальшивих claims.

---

# 5. ГОЛОВНА СТОРІНКА

Створи повноцінну premium homepage.

Вона повинна мати сильну візуальну драматургію.

## HERO SECTION

Hero має бути головним дизайнерським statement сайту.

Не роби стандартний:

[фото будинку]
[великий текст]
[кнопка]

Потрібно створити cinematic architectural opening.

Використовуй:

* великоформатне зображення/відео;
* typography;
* negative space;
* architectural composition;
* subtle motion;
* editorial layout.

Hero повинен одразу відповісти на три питання:

1. Хто ми?
2. Що ми створюємо?
3. Чому це відрізняється від звичайного будівництва?

---

# 6. HERO COPY

Створи короткий, сильний headline.

Він не повинен бути generic.

Приклади напрямку, а не текст для буквального копіювання:

* Architecture, built for living.
* Homes engineered around life.
* Structure. Space. Silence.
* Designed as architecture. Built as engineering.

Зроби власний варіант.

Headline має бути коротким і візуально сильним.

Під ним:

* короткий supporting statement;
* primary CTA;
* secondary CTA або scroll interaction.

---

# 7. NAVIGATION

Navigation повинна бути мінімалістичною.

Передбач:

* logo;
* Projects;
* Houses / Models;
* Technology;
* Process;
* About;
* Contact.

Але структура може бути змінена, якщо після UX-аналізу буде сильніше рішення.

Navigation повинна:

* працювати на desktop;
* працювати на mobile;
* мати чіткий active state;
* мати smooth transitions;
* не перекривати важливий контент;
* залишатися premium.

---

# 8. HOME PAGE — СТРУКТУРА

Розглянь таку структуру:

### SECTION 01 — HERO

Cinematic opening.

### SECTION 02 — BRAND STATEMENT

Короткий manifesto.

Наприклад:

Architecture is not decoration.

It is how a home feels,
moves,
breathes,
and ages.

Створи власний текст.

---

### SECTION 03 — FEATURED PROJECT

Один головний будинок.

Показати:

* large image;
* project name;
* location;
* area;
* typology;
* year;
* short architectural description.

Зробити transition у наступний блок.

---

### SECTION 04 — ARCHITECTURAL SYSTEM

Пояснити, що будинок складається не лише з фасаду.

Показати:

* structure;
* insulation;
* energy;
* materials;
* engineering;
* interior;
* facade.

Можна використовувати interactive diagram або scroll-based reveal.

---

### SECTION 05 — PROJECTS

Галерея реалізованих/концептуальних будинків.

Не використовуй стандартну grid із однакових карток.

Створи editorial layout:

* різні розміри;
* різні пропорції;
* asymmetric composition;
* large images;
* metadata;
* hover effects.

---

### SECTION 06 — TECHNOLOGY

Пояснити технологію каркасного будівництва простою мовою.

Напрямки:

* structural frame;
* insulation;
* thermal performance;
* airtightness;
* moisture management;
* engineering;
* prefabrication;
* precision.

Не роби надмірно технічний сайт.

Потрібно одночасно говорити з:

* архітектором;
* технічно підкованим клієнтом;
* людиною, яка просто хоче якісний будинок.

---

### SECTION 07 — THE PROCESS

Показати весь шлях:

01 — Discovery
02 — Architecture
03 — Engineering
04 — Production
05 — Construction
06 — Handover

Зробити це візуально цікаво.

Наприклад:

horizontal scroll;
sticky section;
progress indicator;
scroll-driven timeline.

Але не використовуй motion просто заради motion.

---

### SECTION 08 — MATERIALS

Створити section про матеріали.

Показати:

* timber;
* stone;
* metal;
* glass;
* concrete;
* natural textures.

Якщо відповідні assets є в папці — використовувати їх.

---

### SECTION 09 — NUMBERS

Показати кілька ключових параметрів бренду.

Наприклад:

24–48 weeks
XX projects
XX m² designed
XX years expertise

Але:

**НЕ ВИГАДУЙ ФАКТИЧНІ ПАРАМЕТРИ ЯК РЕАЛЬНІ.**

Оскільки компанія вигадана, або використовуй явно концептуальні значення, або сформулюй їх так, щоб вони не виглядали як підтверджені фактичні claims.

---

### SECTION 10 — TESTIMONIAL / CLIENT EXPERIENCE

Створити editorial quote.

Не використовуй cliché testimonials.

Краще коротка людська цитата про досвід життя в будинку.

---

### SECTION 11 — FINAL CTA

Фінальний блок повинен бути емоційним.

Не:

"Замовити консультацію прямо зараз!!!"

А щось на кшталт:

Let's design the place
you'll call home.

CTA:

Start a project.

---

# 9. PROJECTS PAGE

Створи окрему сторінку Projects.

Вона повинна виглядати як architectural portfolio.

Для кожного project:

* hero image;
* title;
* location;
* year;
* area;
* type;
* architectural concept;
* gallery;
* plans/diagrams, якщо assets існують;
* materials;
* technical information;
* project story.

Project detail page повинна мати власну композицію, а не просто набір cards.

---

# 10. HOUSE MODELS / COLLECTION

Створи сторінку з моделями будинків.

Наприклад:

* House 01
* House 02
* House 03
* House 04

Але назви повинні бути брендово сильними.

Для кожної моделі:

* area;
* bedrooms;
* bathrooms;
* floors;
* estimated configuration;
* architectural style;
* gallery;
* floor plan;
* CTA.

Не створюй fake technical specifications, якщо вони не потрібні.

---

# 11. TECHNOLOGY PAGE

Окрема сторінка, яка пояснює технологію.

Структура:

### Structural system

Що тримає будинок.

### Thermal envelope

Як працює теплоізоляція.

### Energy

Як будинок поводиться з енергією.

### Precision

Чому prefabrication / controlled manufacturing важливі.

### Durability

Як забезпечується довговічність.

### Comfort

Як engineering впливає на повсякденне життя.

Потрібно створити **візуальне пояснення**, а не просто текстові абзаци.

---

# 12. PROCESS PAGE

Створи детальну сторінку процесу.

Наприклад:

DISCOVER
→ DEFINE
→ DESIGN
→ ENGINEER
→ BUILD
→ DELIVER

Кожен етап має:

* номер;
* title;
* description;
* image;
* duration placeholder;
* output;
* transition.

---

# 13. ABOUT PAGE

About не повинна бути нудною корпоративною сторінкою.

Не роби:

"We are a leading company with many years of experience..."

Створи editorial manifesto.

Показати:

* philosophy;
* architecture;
* engineering;
* craftsmanship;
* team;
* approach;
* values.

---

# 14. CONTACT PAGE

Contact page повинна бути мінімалістичною.

Форма:

* Name;
* Email;
* Phone;
* Location;
* Project type;
* Approximate area;
* Message.

CTA:

Start your project.

Додай:

* email;
* phone;
* location;
* social links.

Якщо це вигадана компанія — використовуй очевидно концептуальні placeholder-дані, а не дані реальних людей/компаній.

---

# 15. RESPONSIVE DESIGN

Сайт повинен бути повністю responsive.

Обов'язково перевір:

### Desktop

1440px
1920px

### Laptop

1280px

### Tablet

768px

### Mobile

390px
375px

Mobile не повинен бути просто «зменшеним desktop».

Потрібно окремо продумати:

* navigation;
* typography;
* spacing;
* image crop;
* cards;
* animations;
* horizontal scrolling;
* CTA;
* forms.

---

# 16. TYPOGRAPHY SYSTEM

Побудуй повну typography system на базі **реальних шрифтів із переданих файлів**.

Створи:

* Display XL;
* Display L;
* H1;
* H2;
* H3;
* Body L;
* Body;
* Body S;
* Label;
* Caption;
* Button.

Визнач:

* font-family;
* font-weight;
* font-size;
* line-height;
* letter-spacing;
* text-transform.

Typography повинна бути одним із ключових елементів дизайну.

Не використовуй занадто багато різних font sizes.

---

# 17. COLOR SYSTEM

Створи semantic color tokens.

Наприклад:

--background
--surface
--text-primary
--text-secondary
--border
--accent
--muted

Але фактичні кольори визначай після аналізу переданих assets та загального art direction.

Якщо немає заданої палітри — побудуй преміальну architectural palette.

Пріоритет:

* natural;
* restrained;
* sophisticated;
* high contrast;
* timeless.

Не використовуй випадкові яскраві кольори.

---

# 18. GRID

Створи професійну responsive grid system.

Наприклад:

12-column desktop grid.

Визнач:

* max-width;
* margins;
* gutters;
* container;
* spacing scale.

Використовуй CSS variables / design tokens.

---

# 19. SPACING SYSTEM

Створи системний spacing scale.

Наприклад:

4
8
12
16
24
32
48
64
80
96
128
160

Але адаптуй значення відповідно до реального дизайну.

Не виставляй margin/padding хаотично в кожному компоненті.

---

# 20. IMAGERY

Зображення повинні виглядати як architectural photography.

Якщо assets вже є:

**ВИКОРИСТОВУЙ ПЕРЕДАНІ ASSETS.**

Не замінюй їх випадковими stock images без необхідності.

Якщо потрібні додаткові зображення, використовуй максимально релевантні architectural references.

Уникай:

* cliché family stock photos;
* handshake photos;
* hard-hat construction clichés;
* generic smiling contractors;
* очевидних AI-looking houses.

Пріоритет:

* architecture;
* materiality;
* light;
* landscape;
* interiors;
* details;
* construction process.

---

# 21. MOTION DESIGN

Motion має бути дорогим і стриманим.

Не роби:

* excessive bounce;
* random parallax;
* excessive blur;
* slow loading animations;
* meaningless hover animations.

Використовуй:

* reveal;
* image clip;
* subtle scale;
* typography movement;
* masked transitions;
* horizontal scroll;
* smooth page transitions;
* micro-interactions.

Анімація повинна підтримувати архітектурну концепцію.

---

# 22. MICRO-INTERACTIONS

Продумай:

### Buttons

hover
active
focus
disabled

### Navigation

hover
active
mobile open/close

### Project cards

image zoom
metadata reveal

### Images

subtle movement

### Scroll

section reveal

### Cursor

Якщо кастомний cursor справді покращує experience — можна використати.

Але не робити його лише заради «wow».

---

# 23. ACCESSIBILITY

Обов'язково:

* semantic HTML;
* правильна hierarchy headings;
* alt text;
* keyboard navigation;
* focus states;
* sufficient contrast;
* reduced motion support;
* accessible forms;
* labels;
* aria attributes там, де потрібно.

Сайт має бути не тільки красивим, а й якісним технічно.

---

# 24. PERFORMANCE

Пріоритет:

* швидкий initial load;
* оптимізовані images;
* lazy loading;
* responsive images;
* правильні formats;
* мінімізація JS;
* code splitting, якщо потрібно;
* уникнення unnecessary dependencies.

Не використовуй важку бібліотеку тільки для однієї простої анімації.

---

# 25. SEO

Створи:

* title;
* meta description;
* semantic structure;
* Open Graph;
* favicon;
* canonical;
* правильні heading levels.

Для сторінок:

Home
Projects
Project Detail
Technology
Process
About
Contact

---

# 26. COMPONENT ARCHITECTURE

Код повинен бути production-quality.

Не створюй одну величезну сторінку на тисячі рядків.

Розділи систему на компоненти.

Приблизні:

Header
Footer
Button
Container
Section
Hero
ProjectCard
ProjectGrid
ProjectHero
ProjectMeta
ImageReveal
SectionHeading
Stats
ProcessTimeline
MaterialCard
TechnologyDiagram
ContactForm
Modal
MobileMenu

Компоненти повинні бути reusable.

---

# 27. CODE QUALITY

Код повинен бути:

* чистим;
* читабельним;
* типізованим, якщо стек це дозволяє;
* modular;
* maintainable;
* semantic;
* без дублювання;
* без dead code.

Не залишай:

* console.log;
* unused imports;
* fake TODO;
* broken links;
* placeholder components;
* lorem ipsum.

---

# 28. TECH STACK

Якщо існуючий проєкт уже має стек — спочатку проаналізуй його та не ламай архітектуру без необхідності.

Якщо проєкт створюється з нуля, використовуй сучасний production-ready frontend stack.

Пріоритет:

* React / Next.js;
* TypeScript;
* Tailwind або добре структурований CSS;
* сучасна animation library лише за необхідності.

Не додавай dependency без причини.

---

# 29. DATA ARCHITECTURE

Проекти, моделі будинків, характеристики та контент не повинні бути хаотично розкидані по компонентах.

Створи структуровані data objects.

Наприклад:

projects.ts
houses.ts
process.ts
technology.ts

Це дозволить легко змінювати контент без переписування UI.

---

# 30. НЕ ВИКОРИСТОВУЙ FAKE UI

Кожен елемент інтерфейсу повинен мати сенс.

Не створюй декоративні:

* cards;
* buttons;
* dashboards;
* badges;
* metrics;

якщо вони не потрібні.

Не використовуй Lorem Ipsum.

Весь visible content має бути реальним copy, написаним спеціально для концепту бренду.

---

# 31. COPYWRITING

Тексти повинні бути:

* короткими;
* premium;
* architectural;
* emotionally intelligent;
* concrete.

Уникай:

"quality is our priority"

"we are the best"

"your dream home"

"innovative solutions"

"professional team"

якщо вони не мають конкретного сенсу.

---

# 32. VISUAL HIERARCHY

Кожна сторінка повинна мати:

1. Primary visual;
2. Primary message;
3. Supporting information;
4. CTA;
5. Secondary content.

Користувач повинен розуміти hierarchy без читання всього тексту.

---

# 33. ART DIRECTION

Весь сайт повинен нагадувати перетин:

**architectural magazine + premium architecture studio + advanced construction company + contemporary product brand.**

Не копіюй конкретний існуючий сайт.

Можна використовувати загальні design principles з сучасного editorial/web design, але кінцевий результат має бути оригінальним.

---

# 34. IMPORTANT — NO TEMPLATE LOOK

Після першої реалізації постав собі питання:

> Чи виглядає це як готовий premium website, чи як template?

Якщо template — перероби.

Особливо перевір:

* hero;
* cards;
* typography;
* spacing;
* footer;
* CTA;
* navigation;
* image treatment.

---

# 35. DESKTOP EXPERIENCE

Desktop повинен використовувати великий екран повноцінно.

Не роби вузьку колонку тексту посередині сторінки всюди.

Використовуй:

* asymmetry;
* large typography;
* architectural grid;
* edge-to-edge images;
* intentional whitespace.

---

# 36. MOBILE EXPERIENCE

На mobile:

* зберегти hierarchy;
* зберегти premium feeling;
* не перевантажити;
* скоротити decorative motion;
* правильно crop images;
* зробити CTA доступним.

Обов'язково протестуй touch targets.

---

# 37. FOOTER

Footer повинен бути частиною design system.

Містити:

* logo;
* navigation;
* contact;
* social;
* legal;
* copyright.

Не роби типовий «сірий footer».

---

# 38. ERROR / EMPTY STATES

Якщо є динамічні компоненти, передбач:

* loading;
* error;
* empty state.

Але не перевантажуй концепт.

---

# 39. SEO CONTENT STRUCTURE

Кожна сторінка повинна мати одну чітку H1.

H2/H3 повинні створювати логічну структуру.

Не використовуй heading лише через його візуальний розмір.

---

# 40. QUALITY CONTROL

Після завершення першої версії НЕ ВВАЖАЙ РОБОТУ ЗАВЕРШЕНОЮ.

Зроби окремий QA pass.

Перевір:

### Visual

* spacing;
* typography;
* alignment;
* image crops;
* grid;
* responsive;
* consistency.

### UX

* navigation;
* CTA;
* forms;
* scroll;
* interactions;
* mobile menu.

### Technical

* console;
* errors;
* broken imports;
* broken images;
* broken routes;
* responsiveness;
* performance.

### Accessibility

* keyboard;
* focus;
* contrast;
* labels;
* alt.

---

# 41. SELF-CRITIQUE PASS

Після QA проведи критичний review як Creative Director.

Оціни:

### Brand

Чи виглядає це як окремий бренд?

### Design

Чи є власна visual language?

### UX

Чи зрозуміло, що робити користувачу?

### Premium perception

Чи виглядає це дорого?

### Architecture

Чи відчувається тема архітектури?

### Construction

Чи зрозуміло, що компанія реально займається будівництвом?

### Conversion

Чи є природний шлях до контакту?

### Originality

Чи це не схоже на generic AI-generated website?

Якщо будь-яка відповідь слабка — внеси зміни.

---

# 42. FINAL POLISH PASS

Перед завершенням:

* вирівняй typography;
* перевір line-height;
* перевір letter-spacing;
* вирівняй spacing;
* прибери зайві borders;
* прибери зайві shadows;
* прибери зайві animations;
* перевір transitions;
* перевір mobile;
* перевір image loading;
* перевір CTA;
* перевір navigation.

Після цього зроби ще один visual pass.

---

# 43. ВАЖЛИВЕ ПРАВИЛО ЩОДО ASSETS

Не створюй заміну для asset, який уже є в переданій папці.

Спочатку:

1. знайди asset;
2. перевір його формат;
3. перевір роздільну здатність;
4. перевір співвідношення сторін;
5. визнач місце використання;
6. оптимізуй;
7. інтегруй.

Особливо це стосується шрифтів.

---

# 44. FONT IMPLEMENTATION

Шрифти з переданих файлів потрібно інтегрувати правильно.

Не підключай їх через remote URL, якщо локальні font files вже передані.

Використовуй правильні:

* font-family;
* font-weight;
* font-style;
* font-display.

Перевір, що браузер реально використовує потрібний font.

Не допускай випадкового fallback font на основних заголовках.

**⚠️ Виняток для цього проєкту:** локальних font-файлів не передано — тільки інструкція підключення Google Fonts (файл `Загальна інформація по шрифтах.md`, дослівно нижче). У цьому конкретному випадку саме remote Google Fonts і є "переданим" джерелом шрифтів — підключай так, як зазначено там, а не вигадуй інший шрифт.

---

# 45. FINAL DELIVERABLE

Після завершення ти повинен мати:

* повноцінний responsive website;
* coherent brand concept;
* professional typography;
* design system;
* reusable components;
* realistic content;
* project pages;
* technology page;
* process page;
* about;
* contact;
* mobile navigation;
* animations;
* accessibility;
* SEO;
* optimized assets;
* clean code.

---

# 46. ЩО НЕ МОЖНА РОБИТИ

НЕ:

* використовувати lorem ipsum;
* копіювати чужий сайт;
* використовувати generic templates;
* вигадувати реальні компанії;
* вигадувати реальні клієнтські відгуки;
* створювати фальшиві факти як реальні;
* використовувати випадкові шрифти замість переданих;
* ігнорувати assets;
* робити надмірний motion;
* перевантажувати UI;
* використовувати десятки dependencies;
* залишати console errors;
* залишати broken links;
* залишати unfinished sections;
* залишати «coming soon» без необхідності;
* залишати placeholder text.

---

# 47. ГОЛОВНИЙ ПРИНЦИП

Не оптимізуй результат під:

> "щоб було багато секцій".

Оптимізуй під:

> "щоб це виглядало як справжній бренд, який хочеться дослідити".

Кожен screen повинен мати композицію.

Кожен scroll — сенс.

Кожен animation — причину.

Кожен текст — функцію.

Кожен CTA — логіку.

Кожне зображення — роль.

---

# 48. РОБОЧИЙ ПРОЦЕС CLAUDE CODE

Працюй у такій послідовності:

## STEP 1

Проаналізуй весь repository / folder.

## STEP 2

Проаналізуй всі передані assets.

## STEP 3

Визнач typography.

## STEP 4

Визнач brand direction.

## STEP 5

Визнач color system.

## STEP 6

Визнач grid.

## STEP 7

Визнач component architecture.

## STEP 8

Створи homepage.

## STEP 9

Створи internal pages.

## STEP 10

Створи responsive behavior.

## STEP 11

Додай motion.

## STEP 12

Оптимізуй performance.

## STEP 13

Проведи QA.

## STEP 14

Проведи creative review.

## STEP 15

Проведи final polish.

---

# 49. ПРАВИЛО "DO NOT ASK FOR PERMISSION"

Якщо інформації достатньо для прийняття дизайнерського рішення — прийми рішення самостійно.

Не зупиняй роботу через дрібні невизначеності.

Якщо існує декілька хороших варіантів — вибери той, який найбільше відповідає premium architectural direction.

Але якщо відсутня критично важлива інформація, якої неможливо визначити з assets або контексту, чітко зафіксуй припущення.

**Примітка від оркестратора:** це правило стосується дизайнерських рішень усередині збірки (кольори, композиція, мікроконтент). Воно НЕ скасовує чекпоінти агенції (`core/identity.md` → чекпоінти) — публікація/здача проходить через власника, як завжди.

---

# 50. FINAL STANDARD

Результат повинен відповідати рівню:

**Awwwards-quality / premium architecture studio / high-end construction brand / editorial digital experience.**

Але не намагайся буквально копіювати Awwwards-сайти.

Головна мета:

**original + premium + usable + technically solid + memorable.**

---

# 51. КІНЦЕВА ІНСТРУКЦІЯ

Починай не з коду.

Починай з аналізу.

Спочатку зрозумій:

**assets → typography → brand → architecture → UX → visual system → components → code → QA → polish.**

Не вважай завдання завершеним після того, як сторінка просто «працює».

Вона повинна бути:

**візуально переконливою, концептуально цілісною, технічно якісною та готовою до демонстрації як реальний premium brand website.**

---

## ШРИФТИ (джерело: `Загальна інформація по шрифтах.md`, дослівно)

Заголовки (H1-H6): Space Grotesk
Основний текст (Body, Buttons, UI): Plus Jakarta Sans

### Код для підключення у `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

### Базові CSS правила

Глобальний текст (Body, абзаци, списки):
- `font-family: 'Plus Jakarta Sans', sans-serif;`
- `font-weight: 400;`
- `line-height: 1.6;` (важливо для хорошої читабельності)
- Колір: темний графіт (наприклад, `#333333` або згідно з макетом, але не чисто чорний `#000000`).

Заголовки (H1, H2, H3, H4, H5, H6):
- `font-family: 'Space Grotesk', sans-serif;`
- `font-weight: 700;`
- `line-height: 1.2;`
- `text-transform: uppercase;` (додає архітектурної строгості, застосувати до основних заголовків).
- Колір: `#1A1A1A` (або згідно з макетом).

Кнопки (CTA) та елементи навігації (Menu):
- `font-family: 'Plus Jakarta Sans', sans-serif;`
- `font-weight: 500;` (або `600` для головних кнопок)
- `letter-spacing: 0.5px;` (додасть повітря і зробить текст на кнопках акуратнішим).

Додатково: задати сімейства шрифтів через CSS-змінні (`--font-primary: 'Space Grotesk', sans-serif;` та `--font-secondary: 'Plus Jakarta Sans', sans-serif;`), щоб керувати ними централізовано.

---

## ⚠️ ПРАВКИ ВІД ВЛАСНИКА (2026-08-16, після старту збірки) — ПРІОРИТЕТ НАД ВСІМ ВИЩЕ

Ці 5 пунктів переважають будь-що суперечливе в оригінальному master prompt вище (зокрема англійські headline-приклади в розділах 6, 33, 50 — це були лише напрямки тону, не мова):

1. **Мова сайту — тільки українська.** Весь видимий текст (headline, navigation, CTA, метадані, alt-тексти, форми, footer, SEO title/description) — українською. Жодного англійського тексту в UI, окрім власних назв/брендів, якщо це органічно для преміального позиціонування (і то — мінімально).
2. **Використати ВСІ 12 файлів з `source-assets/` на сайті**, без винятку:
   - `Перше фото будинків.jpeg`
   - `Будинки туман.jpg`
   - `будинки зимою.jpg`
   - `Деталі будинку.jpg`
   - `всередині будинку.jpg`
   - `матеріали ілюстація 2.webp`
   - `ілюстрація матеріали.webp`
   - `b-roll для сайту.mp4`
   - `Відео з дрону на перший екран.mp4`
   - `відео день-ніч.mp4`
   - `прогулянка відео.mp4`
   - `Відео з дрона мобільна версія.mov` ← **виняток, див. п.3**
3. **Усі фото і відео — повнорозмірні** (не дрібні thumbnails/іконки; повноцінні edge-to-edge/великоформатні кадри відповідно до розділу 20 і 35 вище). `Відео з дрона мобільна версія.mov` — єдиний файл, що показується **тільки на мобільному** (умовний рендер за viewport/media query); решта відео і фото працюють на всіх breakpoints.
4. **Бренд — українська компанія з офісом у Києві.** Не "європейська" абстрактна компанія — контактна сторінка, footer і schema/SEO повинні відображати Київ як локацію офісу (адресу можна дати як концептуальний placeholder на рівні району/вулиці, без вигаданого точного будинку/номера як "реального" факту — позначити явно, якщо це вигадка).
5. **Багатосторінковий сайт, не односторінковий лендінг.** Реалізувати окремі сторінки за структурою розділів 9–14 вище: Home, Projects (+ project detail), House Models, Technology, Process, About, Contact — з навігацією між ними (розділ 7).

---

## ВХІДНІ ASSETS (у `workspace/karkasni-budynky/source-assets/`)

Скопійовано дослівно з `/Users/romanyakovyshynn/Desktop/САЙТ КАРКАСНИХ БУДИНКІВ`:

- `b-roll для сайту.mp4`
- `Будинки туман.jpg`
- `Відео з дрона мобільна версія.mov`
- `Відео з дрону на перший екран.mp4`
- `Деталі будинку.jpg`
- `Перше фото будинків.jpeg`
- `будинки зимою.jpg`
- `всередині будинку.jpg`
- `відео день-ніч.mp4`
- `матеріали ілюстація 2.webp`
- `прогулянка відео.mp4`
- `ілюстрація матеріали`

Це реальні фото/відео будинків — використовувати їх (розділ 20 вище), не замінювати стоковими.

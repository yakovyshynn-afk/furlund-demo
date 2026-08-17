# Nano Banana — промпти для фото сторінки process.html (Furlund)

6 промптів, по одному на кожен крок процесу. Генеруй по черзі в Nano Banana (gemini.google.com або API), кожен — окремий запит. Промпти написані так, щоб при послідовній генерації всі 6 виглядали як фотографії з однієї зйомки одного видавництва (architecture magazine), а не 6 різних стилів.

## Спільна арт-дирекція (тримати в голові / можна докидати в кожен запит, якщо результат "з'їжджає" зі стилю)

Warm, restrained architectural color palette: sand/cream (`#F6F2EA`), soft taupe (`#EFE9DC`), warm walnut-bronze accent (`#A9713D`/`#C79A66`), near-black charcoal ink (`#16150F`). Ukrainian forest-steppe landscape near Kyiv — birch and pine woodland, gently rolling farmland, NOT alpine, NOT Scandinavian fjord/mountain cliché. Overcast or soft golden-hour light, medium depth of field, 35–50mm full-frame lens look, photorealistic documentary architectural photography — think Dezeen / Wallpaper* editorial, not stock photography. If people appear: real professionals in plain neutral workwear, mid-task, natural unposed body language — no hard-hat handshake clichés, no staged smiles at camera. No logos, no text overlays, no watermarks.

Якщо один із промптів дає занадто "яскравий"/стоковий результат — додай в кінець фрази `, muted editorial color grading, no oversaturation, restrained premium tone like an architecture magazine`.

---

## Крок 01 — Дослідження

**Landscape orientation, ~16:9.**

```
Architectural documentary photography. A site survey in progress on a wooded plot of land in a forest-steppe landscape near Kyiv, Ukraine — birch and pine trees, undergrowth, overcast soft daylight. One or two people in plain neutral field clothing (no hi-vis vests, no hard hats) walking the terrain, one crouching near a survey tripod / laser level, the other holding a tablet or notebook checking site orientation and boundaries. Wide establishing shot, camera at eye level, natural depth of field, the land and trees dominate the frame — the people are small and secondary within the landscape, not posing for camera. Soft overcast light, muted natural greens and browns, no dramatic sky, no finished building visible anywhere in frame. Photorealistic, 35mm lens look, architecture magazine editorial style, muted restrained color grading.
```

Українською: виїзд команди на лісову ділянку під Києвом — зйомка місцевості, вимірювання/огляд рельєфу, людина з планшетом чи нівеліром серед дерев, готового будинку в кадрі немає.

---

## Крок 02 — Визначення

**Portrait orientation, ~4:5.**

```
Architectural documentary photography, overhead / high-angle still life shot on a wooden studio table near a window with soft natural daylight. A working session: sketched floor-plan drawings on paper, a few material sample swatches (raw timber offcut, a piece of stone, a fabric or insulation sample), a pencil, a measuring tape, a cup of coffee. Some sheets have handwritten notes and simple room-diagram sketches — not finished architectural renders, more like a working brief being shaped. Warm sand and walnut tones, soft directional window light with gentle shadows, shallow depth of field with the closest sketch in sharp focus. No people's faces in frame, maybe a hand resting on a sketch or holding a pencil at the edge of the frame. Photorealistic, editorial still-life photography, muted restrained color grading.
```

Українською: робочий стіл з ескізами планування, матеріальними зразками і нотатками — момент, коли бриф перетворюється на програму приміщень, без готових креслень чи 3D-візуалізацій.

---

## Крок 03 — Проєктування

**Landscape orientation, ~16:9.**

```
Architectural documentary photography. Early morning light study on the same forested plot near Kyiv — soft ground fog drifting between birch and pine trees, low sun breaking through, long soft shadows. In the foreground, slightly out of focus, a simple white architectural massing model (a scaled physical model of a timber-frame house volume, no color, just clean geometric block forms) sits on a wooden stand or tripod easel outdoors, being used to study how light falls on the volumes at this time of day. The background is the real misty landscape in sharp focus beyond the model. Quiet, contemplative mood, cool morning color temperature, no finished building, no people necessarily — if a hand appears, it is adjusting the model. Photorealistic, architecture magazine editorial style, muted restrained color grading.
```

Українською: ранковий туман на ділянці і невелика фізична архітектурна модель об'єму будинку, яку вивчають проти реального світла — перевірка, як сонце входить у майбутні кімнати, без готового будинку в кадрі.

---

## Крок 04 — Інжиниринг

**Landscape orientation, ~4:3.**

```
Architectural documentary photography, close-up macro/technical detail shot. A cutaway cross-section of a timber-frame wall assembly on a workshop table or wall-mounted panel, showing the layered construction in real materials and true depth: structural timber studs, mineral wool insulation, a vapor/wind barrier membrane, and exterior sheathing, clearly visible in cross-section like a real construction sample or teaching model — not a rendered diagram. Beside it, a rolled set of technical drawings / structural blueprints with a pencil and a scale ruler, softly out of focus in the background. Cool, precise, even studio-adjacent daylight, sharp focus on the layered wall detail, tactile material textures (wood grain, fibrous insulation) clearly readable. Photorealistic, technical editorial photography, muted restrained color grading, no digital diagram overlays or text labels.
```

Українською: реальний фізичний розріз стінового вузла каркасу (дерево + утеплювач + мембрана) поруч із робочими кресленнями — інженерний прорахунок до вузла, ще без будівельного майданчика.

---

## Крок 05 — Будівництво

**Portrait orientation, ~4:5.**

```
Architectural documentary photography. A timber-frame house structure under active assembly outdoors on a cleared plot near Kyiv, partly under a temporary covered production shelter / canopy roof in the background where prefabricated wall panels are stored. In the foreground, the erected timber frame skeleton of a house is visible against an overcast sky — vertical studs, horizontal beams, some wall panels already closed with sheathing, others still open frame. One or two workers in plain neutral workwear (no bright hi-vis, no posed hard-hat smiles) are mid-task — lifting or fastening a panel, working with hand tools, genuinely engaged in the work, not looking at camera. Foundation visible at the base, partially built. Natural overcast daylight, honest documentary framing, slightly low angle emphasizing the scale of the frame against the sky. Photorealistic, muted restrained color grading, architecture magazine editorial style.
```

Українською: змонтований дерев'яний каркас будинку на ділянці під Києвом, частина стін вже закрита обшивкою, робітники в процесі монтажу панелей — найактивніший, "будівельний" етап.

---

## Крок 06 — Передача

**Portrait orientation, ~4:5.**

```
Architectural documentary photography. A finished timber-frame house exterior at dusk / blue hour, warm light glowing from inside through large glass windows and doors, contrasting with the cool deep-blue evening sky and the surrounding forest-steppe landscape near Kyiv. Clean modern architectural volumes, natural facade materials (timber cladding, dark metal accents, glass), no people necessarily in frame — the mood is of quiet completion and a home ready to be lived in, not a construction site anymore. If a human element is included, a small detail in the foreground softly out of focus: a set of house keys and a folder of documents resting on an outdoor step or windowsill, softly lit by the warm interior glow. Long exposure feel, calm symmetrical or gently asymmetrical composition, no people posing, no ribbon-cutting cliché. Photorealistic, architecture magazine editorial style, muted restrained warm-cool color grading.
```

Українською: готовий будинок у сутінках з теплим світлом у вікнах на тлі холодного вечірнього неба, за бажанням — деталь із ключами й документами як символ моменту передачі об'єкта.

---

## Запасний варіант (якщо Nano Banana недоступний або результат не влаштовує)

Ті самі 6 промптів можна подати без змін у будь-який інший text-to-image інструмент з підтримкою природномовних промптів (Midjourney, DALL·E через ChatGPT, Ideogram) — синтаксис нижче не інструмент-специфічний, це чистий описовий текст. `[ПОТРІБНО ПЕРЕВІРИТИ: чи Nano Banana в поточній версії підтримує прямий control за aspect ratio через текст промпту, чи потрібно виставляти співвідношення сторін окремим параметром інтерфейсу — якщо textual "landscape orientation, ~16:9" ігнорується, задай orientation через UI-налаштування генерації]`.

---

## Додаток — модуль «Лінія. Вогнище» (models.html)

Той самий бренд, та сама арт-дирекція (палітра, лісостеп під Києвом, документальна архітектурна фотографія — див. розділ "Спільна арт-дирекція" вище), інший об'єкт зйомки: не крок процесу, а сам модуль системи "Лінія" — спільний простір дому (кухня + їдальня + вітальня в одному об'ємі, ≈45–60 м²). Замінює тимчасову SVG-схему на картці моделі.

**Portrait orientation, ~4:5** (щоб лягти в ту саму сітку `editorial-grid`, поруч з "Студія" і "Перехід").

```
Architectural documentary photography, interior shot of a single open-plan living volume inside a timber-frame house — kitchen, dining and living room sharing one continuous space with no dividing walls. Wide interior view from one corner of the room across the full width of the space: on one side an open kitchen with a simple long timber island/counter and minimal natural wood cabinetry; in the middle of the room a plain wooden dining table with a small set of unmatched-but-harmonious chairs; on the far side a living area with a low sofa and, as the visual anchor of the room, a built-in plastered or masonry hearth/fireplace with a small wood fire lit inside it — no mantel ornaments, no television above it. A full-height glass wall or large glazed opening along one long side of the room reveals the same birch and pine forest-steppe landscape near Kyiv, softly out of focus outside, with overcast or late-afternoon daylight entering. Exposed timber-frame structural elements (a beam or occasional visible stud) integrated into the ceiling or one wall. Natural sand/cream plaster walls and warm walnut-bronze timber tones throughout, matching a restrained architectural material palette — no bright colors, no clutter, no personal decor items, no branded objects, no visible logos or text. Soft directional daylight mixed with the warm glow of the hearth fire, medium depth of field, the whole shared volume readable in one frame from kitchen to fireplace. No people in frame. Photorealistic, 35mm lens look, architecture magazine editorial style, muted restrained color grading like Dezeen / Wallpaper*.
```

Українською: на фото має бути видно один спільний простір без перегородок — кухня з дерев'яним островом, обідня зона зі столом і житлова зона з каміном/вогнищем як фокальним елементом, і панорамне скло з видом на лісостеп під Києвом на задньому плані; людей у кадрі немає.

Якщо результат виглядає "заміським кліше" (масивний кам'яний камін, мисливські трофеї, надто рустикальний декор) — скоригуй промпт у бік мінімалізму: заміни `built-in plastered or masonry hearth/fireplace` на `a slim built-in linear fireplace insert flush with a plastered wall, no visible chimney breast, minimal modern fire feature` і прибери фразу `with a small wood fire lit inside it`, замінивши на `with a small flame visible through a narrow glazed opening`.

Запасний варіант інструменту — той самий, що описаний вище для кроків 01–06 (Midjourney / DALL·E через ChatGPT / Ideogram, без зміни тексту промпту).

---

## Додаток — модуль «Лінія. Студія» (models.html)

Той самий бренд, та сама арт-дирекція (див. "Спільна арт-дирекція" вище). Об'єкт зйомки: найменший модуль системи "Лінія" — односкладовий об'єм (кабінет / гостьова / майстерня, ≈28–34 м²). Замінює `assets/images/detail.webp` — фото деталі стіни, яке зараз стоїть на картці, не показує сам модуль і не відповідає alt-тексту "односкладовий об'єм зі скляним фасадом у лісі". Промпт має дати саме зовнішній вигляд цілого невеликого об'єму серед лісу, а не деталь чи інтер'єр. Важливо: "Студія" — це один модуль системи "Лінія", яка складається з чотирьох модулів (Студія, Люкс, Вогнище, Перехід), що стикуються між собою в конфігурацію, а не самодостатній окремий будиночок — фото має це читати композиційно.

**Portrait orientation, ~4:5** (та сама пропорція, що і в наявної картки "Студія" в `editorial-grid`).

### Ітерація 1 (перша спроба — результат: завеликий будинок / кластер кількох об'ємів)

Базовий промпт без обмеження масштабу — залишено тут лише для історії правок, вже не використовується як є:

> Architectural documentary photography, exterior view of a single, compact timber-frame house volume standing alone within a forest-steppe woodland near Kyiv [...] The composition places the small module off-center within the frame [...]

### Ітерація 2 (виправлення розміру — результат: розмір і стиль ок, АЛЕ виглядає як самодостатній ізольований будиночок / глемпінг-хатинка, а не модуль системи)

До Ітерації 1 додано в кінець: `, emphasize this is a single small standalone volume, roughly the size of a garden studio or one-room cabin, clearly smaller than a full house`. Розмір та архітектурна якість (дах, цоколь) стали ок, але власник зазначив: фото читається як завершений ізольований будиночок сам по собі, а не як один модуль, що призначений для стикування з іншими.

### Ітерація 3 — АКТУАЛЬНА ВЕРСІЯ (додано натяк на модульність/стикування)

Зберігає все, що спрацювало в Ітерації 1–2 (компактний обсяг, розмір "garden studio", не сарай, не глемпінг-кабіна на полозах), явно фіксує архітектурну якість даху й цоколя, і додає композиційний прийом з промпту "Лінія. Перехід" — фрагмент піднятого дерев'яного настилу, що обривається за межею кадру, натякаючи на продовження до сусіднього об'єму, без показу цілого другого об'єму:

```
Architectural documentary photography, exterior view of a single, compact timber-frame house module standing largely alone within a forest-steppe woodland near Kyiv — birch and pine trees surrounding it on most sides, undergrowth and grass at the base, no other complete building volumes visible anywhere in the frame. The module itself is modest in scale, one continuous box-like form, roughly the size of a garden studio or one-room cabin, clearly smaller than a full house — not a shed, not a glamping cabin on skids. Architectural quality throughout: a dark standing-seam metal roof (matte charcoal / anthracite zinc panels) with a thin, precise overhanging eave line, natural timber cladding (vertical boards, warm walnut-bronze tone) on the closed sides, and one full glass facade — floor-to-ceiling glazing spanning roughly one whole side or corner of the volume, transparent enough that a simple interior (a desk, a chair, bare walls) is faintly readable through the glass, or a soft warm interior glow if shot near dusk. The whole volume is raised off the ground on slender concrete piers or a low visible plinth, with a clear gap of open air and grass beneath the floor line — not resting flush on the earth like a shed. On one side of the volume, a raised wooden deck/boardwalk at the same floor level extends outward from the module and is cut off by the edge of the frame — its far end running out of shot rather than ending in visible stairs or a railing on all sides — implying it continues toward another, unseen volume just out of frame. Do not show a second building; only the deck disappearing past the frame edge should hint at a connecting system. The composition places the module off-center within the frame, surrounded by trees on multiple sides, so the forest reads as dominant and the building as a modest, quiet single-volume insertion into the landscape — not a large house, not a cluster of connected volumes. Overcast or soft late-afternoon light, medium-wide lens, the entire single volume fully visible from pier/plinth level to roofline within the frame — no cropped close-up of just a wall, a window frame, or a construction detail. No other modules fully in frame, no people. Photorealistic, 35mm lens look, architecture magazine editorial style, muted restrained color grading like Dezeen / Wallpaper*.
```

Українською: на фото має бути видно цілий, невеликий, окремий об'єм — з темним фальцевим дахом і тонким карнизом, піднятий на палях/цоколі, з дерев'яною обшивкою на закритих сторонах і суцільним скляним фасадом на одній стороні, серед лісу під Києвом. З одного боку об'єму виходить фрагмент піднятого дерев'яного настилу, який обривається за межею кадру — без сходів чи поруччя на кінці — натякаючи, що він веде до сусіднього, невидимого в кадрі об'єму. Другий об'єм показувати не можна, лише сам настил, що йде "у нікуди" за кадр, як композиційний натяк на систему, що стикується.

Якщо результат знову дає надто велику "садибу" чи одразу кілька повністю видимих з'єднаних об'ємів — прибери деталізацію настилу і зменш акцент на ньому, повернувшись ближче до формулювання Ітерації 2 (`emphasize this is a single small standalone volume...`), і додай `, the wooden deck is a minor, subtle detail at the very edge of the frame, not a dominant element — the single small module remains the clear main subject`.

Якщо натяк на стикування не читається (настил виглядає як звичайна тераса на весь периметр будинку, без обриву за кадром) — додай в кінець промпту `, the boardwalk must be visibly cut off by the frame edge with no railing or stairs at its cut end, signaling it continues beyond the frame — not a complete wraparound porch or deck`.

Запасний варіант інструменту — той самий, що описаний вище для кроків 01–06 (Midjourney / DALL·E через ChatGPT / Ideogram, без зміни тексту промпту).

---

## Додаток — модуль «Лінія. Люкс» (models.html)

Той самий бренд, та сама арт-дирекція (див. "Спільна арт-дирекція" вище). Об'єкт зйомки: спальний модуль системи "Лінія" (санвузол, гардеробна, скло на всю висоту з боку найкращого краєвиду, ≈32–40 м²). Замінює `assets/images/interior.webp` — загальний інтер'єр, який зараз стоїть на картці й не показує саме спальню з панорамним склом, як заявлено в alt-тексті "спальний об'єм зі скляною стіною на весь зріст". Промпт має дати саме спальню з floor-to-ceiling склом і видом на ландшафт, а не довільний інтер'єр.

**Landscape orientation, ~16:9** (та сама пропорція, що і в наявної картки "Люкс" в `editorial-grid`).

```
Architectural documentary photography, interior shot of a single bedroom volume inside a timber-frame house — a bed as the central element of the composition, styled simply with plain linen bedding, warm walnut-bronze wood tones and natural sand/cream plaster or timber-lined walls. Along the side of the room facing the best view, a full floor-to-ceiling glass wall — glazing running from floor to ceiling across the width of one entire side of the room — opens onto the same birch and pine forest-steppe landscape near Kyiv, softly out of focus outside, with soft daylight or golden-hour light entering and falling across the bed. A glimpse of an ensuite bathroom or an open dressing/wardrobe area may be visible at the edge of the frame (a partial view of a walk-in wardrobe rail or a bathroom doorway), but the bed and the full-height glass wall with the landscape view remain the clear visual anchors of the composition, shot from a low, eye-level angle across the room toward the glass so both the bed and the full height of the glazing are readable in one frame. Natural, uncluttered styling, no personal decor items, no branded objects, no visible logos or text, no people in frame. Photorealistic, 35mm lens look, architecture magazine editorial style, muted restrained color grading like Dezeen / Wallpaper*.
```

Українською: на фото має бути видно спальню зі суцільним склом від підлоги до стелі з видом на лісостеп під Києвом, ліжко як центральний елемент і, за бажанням, натяк на гардеробну чи санвузол скраю кадру; людей у кадрі немає.

Якщо результат виглядає як загальна вітальня чи ігнорує ліжко як центр композиції — додай в кінець промпту `, the bed must be the clear compositional focus in the foreground or middle ground, this is unmistakably a bedroom, not a living room`.

Запасний варіант інструменту — той самий, що описаний вище для кроків 01–06 (Midjourney / DALL·E через ChatGPT / Ideogram, без зміни тексту промпту).

---

## Додаток — модуль «Лінія. Перехід» (models.html)

Той самий бренд, та сама арт-дирекція (див. "Спільна арт-дирекція" вище). Об'єкт зйомки: з'єднувальний модуль системи "Лінія" — критий або відкритий дерев'яний місток/настил, що з'єднує два об'єми, не торкаючись рельєфу під собою (площа за конфігурацією). Замінює `assets/images/winter.webp` — загальний зимовий пейзаж, який зараз стоїть на картці й не показує сам місток, як заявлено в alt-тексті "дерев'яний настил, що з'єднує об'єми між собою". Промпт має дати саме дерев'яний перехід між двома об'ємами, піднятий над рельєфом, а не пейзаж сам по собі.

**Portrait orientation, ~4:5** (та сама пропорція, що і в наявної картки "Перехід" в `editorial-grid`).

```
Architectural documentary photography, exterior view of a wooden walkway/bridge connecting two separate timber-frame house volumes, shot from a slightly low angle so the walkway clearly reads as raised above the ground rather than resting flush on it — a timber deck or boardwalk on slender visible supports or piers, with the forest-steppe terrain (grass, undergrowth, a gentle natural slope) visible beneath and around it, untouched by the structure. The wooden decking is made of the same warm walnut-bronze timber as the rest of the system, running from a section of glazed or timber-clad wall belonging to one house volume on one side of the frame to a corresponding wall section of another volume on the other side — both volumes only partially visible at the left and right edges of the frame, cropped so the walkway itself remains the clear subject, not the buildings. Birch and pine trees surrounding the scene near Kyiv, soft overcast or golden-hour daylight, the walkway can be either fully open-air or partially covered with a simple flat timber canopy overhead connecting the two rooflines — no dramatic snow or winter scene, ordinary green-season or autumn forest-steppe setting. No people in frame. Photorealistic, medium-wide lens, architecture magazine editorial style, muted restrained color grading like Dezeen / Wallpaper*.
```

Українською: на фото має бути видно дерев'яний місток/настил, який з'єднує дві частини будинку і візуально піднятий над рельєфом (видно землю/траву під ним), а не загальний зимовий пейзаж без самого переходу.

Якщо результат показує лише пейзаж без чіткого містка або занадто плоский настил без відриву від землі — додай в кінець промпту `, the raised gap between the walkway deck and the ground below must be clearly visible, this is a bridge-like connector, not a ground-level path`.

Запасний варіант інструменту — той самий, що описаний вище для кроків 01–06 (Midjourney / DALL·E через ChatGPT / Ideogram, без зміни тексту промпту).
</content>

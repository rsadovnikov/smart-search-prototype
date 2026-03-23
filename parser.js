// ═══════════════════════════════════════════════
// FILTER SCHEMA
// ═══════════════════════════════════════════════

const SCHEMA = {
  deal: {
    label: 'Тип сделки',
    single: true,
    options: [
      { value: 'buy',  genText: 'купить', displayLabel: 'Купить',
        triggers: ['куплю','купить','покупку','покупка','покупаю','приобрести','приобретаю','рассматриваю покупку'] },
      { value: 'rent', genText: 'снять',  displayLabel: 'Снять',
        triggers: ['сниму','снять','аренда','арендую','арендовать','в аренду','посуточно','в найм'] },
    ]
  },
  rooms: {
    label: 'Комнатность',
    single: false,
    options: [
      { value: 'studio', genText: 'студию',      displayLabel: 'Студия',
        triggers: ['студию','студия','студии'] },
      { value: 1, genText: 'однушку',     displayLabel: '1-комн.',
        triggers: ['однушку','однушка','1-комнатную','однокомнатную','1к квартиру','1к квартира'] },
      { value: 2, genText: 'двушку',      displayLabel: '2-комн.',
        triggers: ['двушку','двушка','2-комнатную','двухкомнатную','2к квартиру','2к квартира'] },
      { value: 3, genText: 'трёшку',      displayLabel: '3-комн.',
        triggers: ['трёшку','трёшка','трешку','трешка','3-комнатную','трёхкомнатную','трехкомнатную','3к квартиру'] },
      { value: 4, genText: '4-комнатную', displayLabel: '4-комн.',
        triggers: ['четырёшку','четырешку','4-комнатную','четырехкомнатную','четырёхкомнатную','4к квартиру'] },
      { value: 5, genText: '5-комнатную', displayLabel: '5-комн.',
        triggers: ['пятикомнатную','5-комнатную','5к квартиру','пятёрку','пятерку'] },
      { value: 6, genText: '6-комнатную', displayLabel: '6+-комн.',
        triggers: ['шестикомнатную','6-комнатную','многокомнатную','большую квартиру'] },
    ]
  },
  district: {
    label: 'Район',
    single: true,
    options: [
      { value: 'Ховрино',        genText: 'Ховрино',        triggers: ['ховрино','ховрине'] },
      { value: 'Марьино',        genText: 'Марьино',        triggers: ['марьино','марьине'] },
      { value: 'Хамовники',      genText: 'Хамовниках',     triggers: ['хамовники','хамовниках','хамовникам'] },
      { value: 'Митино',         genText: 'Митино',         triggers: ['митино','митине'] },
      { value: 'Сокольники',     genText: 'Сокольниках',    triggers: ['сокольники','сокольниках'] },
      { value: 'Замоскворечье',  genText: 'Замоскворечье',  triggers: ['замоскворечье','замоскворечьи','замоскворечья'] },
      { value: 'Коньково',       genText: 'Коньково',       triggers: ['коньково','конькове'] },
      { value: 'Строгино',       genText: 'Строгино',       triggers: ['строгино','строгине'] },
      { value: 'Измайлово',      genText: 'Измайлово',      triggers: ['измайлово','измайлове'] },
      { value: 'Кунцево',        genText: 'Кунцево',        triggers: ['кунцево','кунцеве'] },
      { value: 'Академический',  genText: 'Академическом',  triggers: ['академический','академическом'] },
      { value: 'Медведково',     genText: 'Медведково',     triggers: ['медведково','медведкове'] },
      { value: 'Черёмушки',      genText: 'Черёмушках',     triggers: ['черёмушки','черёмушках','черемушки','черемушках'] },
      { value: 'Бутово',         genText: 'Бутово',         triggers: ['бутово','бутове','бутовом'] },
      { value: 'Теплый Стан',    genText: 'Тёплом Стане',   triggers: ['теплый стан','тёплый стан','теплом стане','тёплом стане'] },
      { value: 'Преображенское', genText: 'Преображенском', triggers: ['преображенское','преображенском','преображенского'] },
    ]
  },
  type: {
    label: 'Тип жилья',
    single: true,
    options: [
      { value: 'вторичка',    genText: 'вторичку',    displayLabel: 'Вторичка',
        triggers: ['вторичку','вторичка','вторичке','вторичный рынок','готовое жильё','готовое жилье','б/у','бу квартира'] },
      { value: 'новостройка', genText: 'новостройку', displayLabel: 'Новостройка',
        triggers: ['новостройку','новостройка','новостройке','новострой','первичный рынок','в новом доме','сдача','от застройщика'] },
    ]
  },
  balcony: {
    label: 'Балкон / лоджия',
    single: false,
    options: [
      { value: 'balcony', genText: 'с балконом', displayLabel: 'Балкон',
        triggers: ['с балконом','балконом','балкон','с балконами','застеклённый балкон','застекленный балкон'] },
      { value: 'loggia',  genText: 'с лоджией',  displayLabel: 'Лоджия',
        triggers: ['с лоджией','лоджией','лоджию','лоджия','застеклённая лоджия'] },
    ]
  },
  renovation: {
    label: 'Ремонт',
    single: false,
    options: [
      { value: 'no',       genText: 'без ремонта',              displayLabel: 'Без ремонта',
        triggers: ['без ремонта','черновая отделка','без отделки','черновой','под ремонт','требует ремонта','голые стены'] },
      { value: 'cosmetic', genText: 'с косметическим ремонтом', displayLabel: 'Косметический',
        triggers: ['косметическим ремонтом','косметический ремонт','косметический','косметическим','косметику','косметика','чистовая отделка','предчистовая'] },
      { value: 'euro',     genText: 'с евроремонтом',           displayLabel: 'Евроремонт',
        triggers: ['евроремонт','евроремонтом','евро ремонт','качественный ремонт','хороший ремонт'] },
      { value: 'designer', genText: 'с дизайнерским ремонтом',  displayLabel: 'Дизайнерский',
        triggers: ['дизайнерский ремонт','дизайнерская отделка','дизайнерский интерьер','авторский интерьер','дизайнером'] },
    ]
  },
  house_type: {
    label: 'Тип дома',
    single: false,
    options: [
      { value: 'brick',    genText: 'в кирпичном доме',    displayLabel: 'Кирпичный',
        triggers: ['кирпичный дом','кирпичном доме','кирпичный','кирпич','кирпичном'] },
      { value: 'monolith', genText: 'в монолитном доме',   displayLabel: 'Монолитный',
        triggers: ['монолитный дом','монолитном доме','монолитный','монолит','монолитно-кирпичный'] },
      { value: 'panel',    genText: 'в панельном доме',    displayLabel: 'Панельный',
        triggers: ['панельный дом','панельном доме','панельный','панелька','панель','блочный дом','блочный'] },
      { value: 'stalinka', genText: 'в сталинке',          displayLabel: 'Сталинский',
        triggers: ['сталинский дом','сталинка','сталинку','сталинке','довоенный дом','дом сталинской'] },
    ]
  },
  floor_options: {
    label: 'Этаж',
    single: false,
    options: [
      { value: 'not_first', genText: 'не первый этаж',        displayLabel: 'Не первый',
        triggers: ['не первый этаж','не на первом этаже','не первый','не первом этаже','выше первого'] },
      { value: 'not_last',  genText: 'не последний этаж',     displayLabel: 'Не последний',
        triggers: ['не последний этаж','не на последнем этаже','не последний','не последнем этаже','не крайний'] },
      { value: 'only_last', genText: 'только последний этаж', displayLabel: 'Последний',
        triggers: ['только последний этаж','последний этаж','пентхаус','на верхнем этаже','верхний этаж'] },
    ]
  },
  bathroom: {
    label: 'Санузел',
    single: false,
    options: [
      { value: 'combined', genText: 'совмещённый санузел', displayLabel: 'Совмещённый',
        triggers: ['совмещённый санузел','совмещенный санузел','совмещённый','совмещенный','совмещен'] },
      { value: 'separate', genText: 'раздельный санузел',  displayLabel: 'Раздельный',
        triggers: ['раздельный санузел','раздельный туалет','раздельный','туалет отдельно','отдельный туалет'] },
      { value: 'two_plus', genText: 'два санузла',         displayLabel: 'Два и более',
        triggers: ['два санузла','2 санузла','два туалета','2 туалета','несколько санузлов','два ванных'] },
    ]
  },
  parking: {
    label: 'Парковка',
    single: false,
    options: [
      { value: 'underground', genText: 'с подземной парковкой',      displayLabel: 'Подземная',
        triggers: ['подземная парковка','подземный паркинг','подземная стоянка','подземный гараж','паркинг в подземке','машиноместо'] },
      { value: 'ground',      genText: 'с наземной парковкой',       displayLabel: 'Наземная',
        triggers: ['наземная парковка','наземная стоянка','парковка во дворе','закрытая парковка во дворе'] },
      { value: 'multilevel',  genText: 'с многоуровневой парковкой', displayLabel: 'Многоуровневая',
        triggers: ['многоуровневая парковка','многоуровневый паркинг','паркинг в доме'] },
    ]
  },
}

// area_max и floor_max идут перед price/area_min — перекрытие решает конфликты
// price_max_k/price_min_k (тысячи) идут перед млн-паттернами
const RANGE_PATTERNS = [
  { id: 'area_max',    re: /до\s+(\d+)\s*(?:кв\.?\s*м|м[²2])/i,                                 parse: m => parseInt(m[1]),                    gen: v => `до ${v} м²`        },
  { id: 'price_max_k', re: /до\s+(\d+)\s*(?:тысяч[ауи]?|тыс|тыч|тк)(?=\s|$)/i,                  parse: m => parseInt(m[1]),                    gen: v => `до ${v} тыс ₽`    },
  { id: 'price_min_k', re: /от\s+(\d+)\s*(?:тысяч[ауи]?|тыс|тыч|тк)(?=\s|$)/i,                  parse: m => parseInt(m[1]),                    gen: v => `от ${v} тыс ₽`    },
  { id: 'price_max',   re: /до\s+([\d,]+(?:\.\d+)?)\s*(?:млн|м\b)/i,                             parse: m => parseFloat(m[1].replace(',','.')), gen: v => `до ${v} млн`      },
  { id: 'price_min',   re: /от\s+([\d,]+(?:\.\d+)?)\s*(?:млн|м\b)/i,                             parse: m => parseFloat(m[1].replace(',','.')), gen: v => `от ${v} млн`      },
  { id: 'area_min',    re: /(\d+)\s*(?:кв\.?\s*м|м[²2])/i,                                       parse: m => parseInt(m[1]),                    gen: v => `от ${v} м²`       },
  { id: 'floor_max',   re: /до\s+(\d+)\s*[-\s]*(?:го\s+)?этаж/i,                                 parse: m => parseInt(m[1]),                    gen: v => `до ${v} этажа`    },
  { id: 'floor_min',   re: /(?:от|с)\s+(\d+)\s*(?:-?го)?\s*этаж/i,                               parse: m => parseInt(m[1]),                    gen: v => `от ${v} этажа`    },
  { id: 'metro_time',  re: /(\d+)\s*(?:минут|мин)\s+(?:пешком|до\s+метро)/i,                     parse: m => parseInt(m[1]),                    gen: v => `${v} мин до метро`},
]

const STOPWORDS = new Set([
  'и','или','но','а','в','на','с','из','для','к','у','по','за','до','от','при',
  'без','под','над','со','о','об','то','что','как','чтобы','когда','если',
  'хочу','хочется','нужна','нужен','нужно','мне','я','нам','нас',
  'ищу','ищем','есть','был','была','было','будет','там','тут',
  'тоже','также','ну','вот','же','бы','ли','не','да','нет',
  'ещё','уже','очень','просто','только','именно','это','тот','та','те',
  'который','которая','которые','где','куда','чтоб','хочется',
])

// ═══════════════════════════════════════════════
// PARSER: text → { filters, matches, unmatched }
// ═══════════════════════════════════════════════

function parseText(text) {
  const lower = text.toLowerCase()
  const matches = []
  const filters = {}

  for (const [filterId, schema] of Object.entries(SCHEMA)) {
    for (const opt of schema.options) {
      const sorted = [...opt.triggers].sort((a, b) => b.length - a.length)
      for (const trigger of sorted) {
        const idx = lower.indexOf(trigger)
        if (idx === -1) continue
        const end = idx + trigger.length
        if (matches.some(m => idx < m.end && end > m.start)) continue
        matches.push({ filterId, value: opt.value, start: idx, end })
        if (schema.single) {
          filters[filterId] = opt.value
        } else {
          if (!filters[filterId]) filters[filterId] = []
          if (!filters[filterId].includes(opt.value)) filters[filterId].push(opt.value)
        }
        break
      }
    }
  }

  // Range patterns
  for (const rp of RANGE_PATTERNS) {
    const m = lower.match(rp.re)
    if (!m) continue
    const start = lower.indexOf(m[0])
    const end = start + m[0].length
    if (matches.some(ex => start < ex.end && end > ex.start)) continue
    matches.push({ filterId: rp.id, value: rp.parse(m), start, end })
    filters[rp.id] = rp.parse(m)
  }

  // Collect unmatched — сохраняем фразы целиком, не разрезая предлоги
  const covered = new Uint8Array(text.length)
  for (const m of matches) for (let i = m.start; i < m.end; i++) covered[i] = 1

  const chunks = []
  let chunkStart = null
  for (let i = 0; i <= text.length; i++) {
    if (i < text.length && !covered[i]) {
      if (chunkStart === null) chunkStart = i
    } else {
      if (chunkStart !== null) {
        chunks.push(text.slice(chunkStart, i).trim())
        chunkStart = null
      }
    }
  }

  const unmatched = chunks
    .filter(chunk => {
      const words = chunk.toLowerCase().split(/[\s,;.!?—]+/)
      return words.some(w => w.length > 2 && !STOPWORDS.has(w))
    })
    .join(' ')
    .trim()

  return { filters, matches, unmatched }
}

// ═══════════════════════════════════════════════
// GENERATOR: filters → text
// ═══════════════════════════════════════════════

function generateText(filters) {
  const parts = []

  if (filters.deal) {
    const opt = SCHEMA.deal.options.find(o => o.value === filters.deal)
    if (opt) parts.push(opt.genText)
  }
  if (filters.rooms) {
    const vals = Array.isArray(filters.rooms) ? filters.rooms : [filters.rooms]
    const texts = vals.map(r => {
      const opt = SCHEMA.rooms.options.find(o => o.value === r)
      return opt ? opt.genText : `${r}-комнатную`
    })
    parts.push(texts.join(' и '))
  }
  if (filters.district) {
    const opt = SCHEMA.district.options.find(o => o.value === filters.district)
    parts.push('в ' + (opt ? opt.genText : filters.district))
  }
  if (filters.type) {
    const opt = SCHEMA.type.options.find(o => o.value === filters.type)
    if (opt) parts.push(opt.genText)
  }
  if (filters.price_min)   parts.push(`от ${filters.price_min} млн`)
  if (filters.price_max)   parts.push(`до ${filters.price_max} млн`)
  if (filters.price_min_k) parts.push(`от ${filters.price_min_k} тыс ₽`)
  if (filters.price_max_k) parts.push(`до ${filters.price_max_k} тыс ₽`)
  if (filters.area_min)  parts.push(`от ${filters.area_min} м²`)
  if (filters.area_max)  parts.push(`до ${filters.area_max} м²`)
  if (filters.floor_min) parts.push(`от ${filters.floor_min} этажа`)
  if (filters.floor_max) parts.push(`до ${filters.floor_max} этажа`)
  if (filters.metro_time) parts.push(`${filters.metro_time} мин до метро`)

  for (const filterId of ['balcony', 'renovation', 'house_type', 'bathroom', 'parking']) {
    if (filters[filterId]) {
      const vals = Array.isArray(filters[filterId]) ? filters[filterId] : [filters[filterId]]
      vals.forEach(v => {
        const opt = SCHEMA[filterId]?.options.find(o => o.value === v)
        if (opt) parts.push(opt.genText)
      })
    }
  }
  if (filters.floor_options) {
    const vals = Array.isArray(filters.floor_options) ? filters.floor_options : [filters.floor_options]
    vals.forEach(v => {
      const opt = SCHEMA.floor_options.options.find(o => o.value === v)
      if (opt) parts.push(opt.genText)
    })
  }

  return parts.join(' ')
}

// CommonJS export (для Node.js тестов)
if (typeof module !== 'undefined') {
  module.exports = { SCHEMA, RANGE_PATTERNS, STOPWORDS, parseText, generateText }
}

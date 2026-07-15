// ═══════════════════════════════════════════════════════════════════════
// PROJECTS DATA — داده‌های پروژه‌ها
//
// ساختار هر پروژه:
//   main   → عکس اصلی (اولین عکس اسلایدر)
//   thumbs → عکس‌های بعدی (همه در یه اسلایدر با main)
//
// برای تغییر عکس:
//   - فایل رو در public/img/ بذار
//   - مسیر رو اینجا عوض کن: src="/img/نام_فایل.jpg"
// ═══════════════════════════════════════════════════════════════════════

export const PROJECTS = [
  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۱ — پایه‌های مبل، تراشکاری ۴ محوره
  // دستگاه: Schnitzer Nero (4-محور تراش چوب)
  // ─────────────────────────────────────────────────────────────────
  {
    id: "01",
    tag: "wood",
    titleKey: "p01_title",
    descKey:  "p01_desc",
    main:   "/img/p01_leg_finished.jpg",    // ← پایه مبل تمام‌شده
    thumbs: [
      "/img/p01_lathe_machine.jpg",         // ← دستگاه Schnitzer Nero
      "/img/p1.jpg",
      "/img/p07_engraving.jpg",            // ← قطعه روی دستگاه در حال تراش
    ],
    meta: [
      { key: "lbl_mc",  val: "Schnitzer Nero — 4-Achs CNC-Drehmaschine" },
      { key: "lbl_sw",  val: "Pegasos CAD/CAM" },
      { key: "lbl_mat", valKey: "p01_mat" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۲ — پازل ۳D از MDF
  // ─────────────────────────────────────────────────────────────────
  {
    id: "02",
    tag: "3d",
    titleKey: "p02_title",
    descKey:  "p02_desc",
    main:   "/img/p02_puzzle_assembled.jpg", // ← پازل کامل سوار شده
    thumbs: [
      "/img/p02_puzzle_side.jpg",            // ← نیمه سوار از کنار
      "/img/p02_puzzle_parts.jpg",           // ← قطعات جدا روی تخته
    ],
    meta: [
      { key: "lbl_sw",  val: "ArtCAM · AutoCAD" },
      { key: "lbl_mc",  val: "CNC H2-16" },
      { key: "lbl_mat", val: "MDF" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۳ — صفحه میز ناهارخوری
  // دستگاه: Busellato Jet Optima + Busellato H2-16
  // ─────────────────────────────────────────────────────────────────
  {
    id: "03",
    tag: "wood",
    titleKey: "p03_title",
    descKey:  "p03_desc",
    main:   "/img/p03_table_on_cnc.jpg",   // ← صفحه میز روی دستگاه CNC
    thumbs: [
      "/img/p03_woodslices.jpg",            // ← صفحه‌های چوبی گرد روی ماشین
      "/img/p03_cnc_side.jpg",              // ← دید از کنار دستگاه
    ],
    meta: [
      { key: "lbl_sw",  val: "AlphaCAM · ArtCAM" },
      { key: "lbl_mc",  val: "Busellato Jet Optima · Busellato H2-16" },
      { key: "lbl_mat", valKey: "p03_mat" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۴ — میز Live-Edge با اپوکسی
  // تخته‌های طبیعی با لبه زنده + رزین اپوکسی
  // ─────────────────────────────────────────────────────────────────
  {
    id: "04",
    tag: "3d",
    titleKey: "p04_title",
    descKey:  "p04_desc",
    main:   "/img/p04_slab_long.jpg",      // ← تخته بلند Live-Edge روی پایه
    thumbs: [
      "/img/p04_slab_closeup.jpg",          // ← کلوزآپ لبه تاریک چوب
      "/img/p04_slab_top.jpg",              // ← دید از بالا زاویه‌دار
    ],
    meta: [
      { key: "lbl_sw",  val: "AlphaCAM · Aspire" },
      { key: "lbl_mc",  val: "Busellato Jet Optima 5x" },
      { key: "lbl_mat", valKey: "p04_mat" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۵ — گنبد ۳D از MDF
  // R 357.88mm · H 170mm
  // ─────────────────────────────────────────────────────────────────
  {
    id: "05",
    tag: "3d",
    titleKey: "p05_title",
    descKey:  "p05_desc",
    main:   "/img/p05_dome_finished.jpg",  // ← گنبد تمام‌شده از روبرو
    thumbs: [
      "/img/p05_dome_layers.jpg",           // ← لایه‌های MDF روی هم
      "/img/p05_dome_milling.jpg",          // ← دستگاه در حال فرزکاری
      "/img/p05_dome_topview.jpg",          // ← دید از بالا هنگام فرزکاری
    ],
    meta: [
      { key: "lbl_sw",  val: "AlphaCAM · Aspire" },
      { key: "lbl_ctrl", val: "TAPCAM" },
      { key: "Maße",   val: "R 357,88mm · H 170mm" },
      { key: "lbl_mat", val: "MDF geschichtet" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۶ — برش CNC اسفنج
  // دستگاه: ماشین برش اسفنج با کنترلر Beckhoff TwinCAT
  // ─────────────────────────────────────────────────────────────────
  {
    id: "06",
    tag: "foam",
    titleKey: "p06_title",
    descKey:  "p06_desc",
    main:   "/img/p06_foam_machine.jpg",   // ← دستگاه CNC برش اسفنج
    thumbs: [
      "/img/p06_foam_blocks.jpg",           // ← بلوک‌های اسفنج آماده برش
      "/img/p06_foam_controller.jpg",       // ← کنترلر Beckhoff TwinCAT
    ],
    meta: [
      { key: "lbl_ctrl", val: "Beckhoff TwinCAT" },
      { key: "lbl_mc",  valKey: "p06_mc" },
      { key: "lbl_mat", valKey: "p06_mat" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۷ — حکاکی تزئینی روی MDF
  // دستگاه: Busellato H2-16
  // ─────────────────────────────────────────────────────────────────
  {
    id: "07",
    tag: "wood",
    titleKey: "p07_title",
    descKey:  "p07_desc",
    main:   "/img/20180702_125831.jpg",      // ← حکاکی گل روی MDF در حال کار
    thumbs: [
      "/img/p07_h216_machine.jpg",          // ← دستگاه Busellato H2-16
    ],
    meta: [
      { key: "lbl_sw",  val: "Aspire (Vectric)" },
      { key: "lbl_mc",  val: "Busellato H2-16" },
      { key: "lbl_mat", val: "MDF" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // پروژه ۰۸ — نرم‌افزار CAD/CAM
  // اسکرین‌شات‌های نرم‌افزارهای مختلف
  // ─────────────────────────────────────────────────────────────────
  {
    id: "08",
    tag: "cad",
    titleKey: "p08_title",
    descKey:  "p08_desc",
    main:   "/img/p08_alphacam_screenshot.jpg",  // ← اسکرین‌شات AlphaCAM
    thumbs: [
                      // ← شبیه‌سازی ۳D در AlphaCAM
      "/img/p08_autocad_screenshot.jpg",          // ← اسکرین‌شات AutoCAD
    ],
    meta: [
      { key: "CAD 2D/3D", val: "AutoCAD · Rhino 3D" },
      { key: "CAM Holz",  val: "ArtCAM · AlphaCAM · Aspire" },
      { key: "CAM Metall", val: "Powermill · Pytha/CAM" },
      { key: "lbl_ctrl", val: "Siemens · NC · TAPCAM · Beckhoff · Radionics" },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════
// SOFTWARE GRID — بخش ماشین‌ها، نرم‌افزارها و کنترلرها
// ۸ آیتم → گرید ۴×۲ بدون فضای خالی
// ═══════════════════════════════════════════════════════════════════════
export const SOFTWARE = [
  // ردیف اول
  { catKey: "sw_5ax",     items: ["Busellato Jet Optima", "SCM Multi-Achse"] },
  { catKey: "sw_4ax",     items: ["Schnitzer Nero 4x3", "CNC-Holzdrehmaschinen"] },
  { catKey: "sw_3ax",     items: ["Busellato H2-16", "Busellato Jet Optimum"] },
  { catKey: "sw_foam",    items: ["CNC-Schwammschneidemaschine", "Beckhoff TwinCAT"] },
  // ردیف دوم
  { catKey: "sw_laser",   items: ["CNC Lasermaschine", "Gravur & Schneiden"] },
  { catKey: "sw_camwood", items: ["ArtCAM", "AlphaCAM", "Aspire (Vectric)"] },
  { catKey: "sw_cad",     items: ["AutoCAD 2017", "Rhino 3D", "Pegasos CAD/CAM"] },
  { catKey: "sw_ctrl",    items: ["Siemens CNC", "NC-Steuerung", "TAPCAM / Tapcad", "Beckhoff TwinCAT", "Radionics", "NC (Busellato)", "Pegasos NC"] },
]

// ═══════════════════════════════════════════════════════════════════════
// گالری حذف شد — طبق درخواست کاربر
// اگر بخوای دوباره اضافه کنی:
//   export const GALLERY = [ {src:"/img/...", alt:"..."}, ... ]
// و در App.jsx import و GallerySlider رو اضافه کن
// ═══════════════════════════════════════════════════════════════════════

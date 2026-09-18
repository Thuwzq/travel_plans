/* ============================================================
 * 湘约十一 · 湖南七日双人之旅 —— 数据层
 * 2026.10.01(周四) 出发 ～ 10.07(周三) 分别
 * 路线：深圳 → 长沙 → 张家界 → 长沙（舒适节奏版）
 * ============================================================ */

export const IMG = {
  hero: 'https://assets.with.tencent.com/default/632c6b88-a193-46e9-a889-2389a08bf0dc/image_1789455402_1_3.jpg',
  changshaIFS: 'https://assets.with.tencent.com/default/f7293006-59e9-4683-adc3-6ae7ede8ace1/image_1789460386_2_1.jpg',
  juZiZhou: 'https://assets.with.tencent.com/default/42bfefaf-32c6-48e5-8bac-4d81abe489e8/image_1789455407_2_3.jpg',
  aiWanTing: 'https://assets.with.tencent.com/default/241a3ea5-9e63-4c2a-8110-fcaedd472aac/image_1789455409_2_3.jpg',
  changshaNight: 'https://assets.with.tencent.com/default/fa6487d8-1ccf-46f2-9023-5a9f657ace42/image_1789455410_2_1.png',
  changshaAirport: 'https://assets.with.tencent.com/default/6ac489e2-8025-4855-954b-292af3643ee8/image_1789460390_1_1.jpg',
  wuLingYuan: 'https://assets.with.tencent.com/default/90423252-5f8b-499e-9b9a-f8763e9eb603/image_1789455401_2_1.jpg',
  wuLingYuan2: 'https://assets.with.tencent.com/default/632c6b88-a193-46e9-a889-2389a08bf0dc/image_1789455402_1_3.jpg',
  tianMen: 'https://assets.with.tencent.com/default/d8b75c60-0c55-4f9b-a92a-6cecde689a70/image_1789455402_2_1.jpg',
  tianMenFog: 'https://assets.with.tencent.com/default/1bff0185-fb65-4993-9f9e-f8e5a2738736/image_1789455404_1_3.jpg',
  foodChou: 'https://assets.with.tencent.com/default/7d744638-5b68-4990-bfb9-4b9c91400126/image_1789455411_1_1.jpg',
  foodTaiping: 'https://assets.with.tencent.com/default/f2303c44-1c30-4fc9-a089-6a4ccba1ea4c/image_1789455411_2_1.jpg'
};

export const tripMeta = {
  badge: '2026 国庆黄金周 · 双人湘行',
  title: '湘约十一',
  subtitle: '深圳 → 长沙 → 张家界 → 长沙',
  slogan: '从湾区晨光出发，先醉在星城的烟火夜里，再赴三千奇峰的阿凡达秘境，最后回到长沙道别——一个奔向大海之北，一个回归湾区之南。',
  stats: [
    { value: '7', unit: '天', label: '黄金周长假' },
    { value: '2', unit: '人', label: '同行旅人' },
    { value: '2', unit: '城', label: '湘楚双城' },
    { value: '3', unit: '段', label: '高铁城际' },
    { value: '2', unit: '趟', label: '返程航班' }
  ]
};

/* ---------------- 路线总览 ---------------- */
export const routeStops = [
  {
    tag: '启程', city: '深圳', date: '10.01 上午', icon: '🚄',
    desc: '深圳北站出发', highlights: ['高铁直达长沙'],
    bg: 'bg-sky-100', text: 'text-sky-600', chip: 'bg-sky-50 text-sky-700'
  },
  {
    tag: '第一站', city: '长沙', date: '10.01 - 10.04', icon: '🎡',
    desc: '网红星城 · 慢节奏逛吃', highlights: ['橘子洲', '岳麓山', '太平街'],
    bg: 'bg-orange-100', text: 'text-orange-600', chip: 'bg-orange-50 text-orange-700'
  },
  {
    tag: '第二站', city: '张家界', date: '10.04 - 10.06', icon: '🏔️',
    desc: '三千奇峰 · 阿凡达秘境', highlights: ['武陵源', '袁家界', '天门山'],
    bg: 'bg-teal-100', text: 'text-teal-600', chip: 'bg-teal-50 text-teal-700'
  },
  {
    tag: '中转', city: '回长沙', date: '10.06 晚', icon: '🌙',
    desc: '返回星城 · 机场前休整', highlights: ['高铁返程', '安睡一晚'],
    bg: 'bg-violet-100', text: 'text-violet-600', chip: 'bg-violet-50 text-violet-700'
  },
  {
    tag: '归程', city: '大连 / 深圳', date: '10.07 下午', icon: '✈️',
    desc: '黄花机场 · 分别出发', highlights: ['一个北上', '一个南下'],
    bg: 'bg-indigo-100', text: 'text-indigo-600', chip: 'bg-indigo-50 text-indigo-700'
  }
];

/* ---------------- 城市筛选 Tab ---------------- */
export const cityTabs = [
  { key: 'all', label: '全部行程', icon: 'ri-stack-line', count: 7 },
  { key: 'changsha', label: '长沙', icon: 'ri-city-line', count: 5 },
  { key: 'zhangjiajie', label: '张家界', icon: 'ri-landscape-line', count: 2 }
];

/* ---------------- 七日行程（舒适节奏） ---------------- */
export const itinerary = [
  {
    day: 1, date: '10.01', weekday: '周四', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 五一广场', theme: '初见星城',
    subtitle: '从湾区晨光到湘江夜色，第一天只安排逛和吃',
    image: IMG.changshaIFS, imageAlt: '长沙五一广场IFS国金中心商圈夜景',
    schedule: [
      { time: '08:30', tag: 'transport', title: '深圳北站出发', desc: 'G 字头高铁直达长沙南，全程约 3 小时 30 分，二等座约 ¥388.5/人。提前选好靠窗位，一路看岭南秋色。' },
      { time: '12:00', tag: 'transport', title: '抵达长沙南', desc: '地铁 2 号线直达五一广场约 30 分钟，出站步行即达酒店，全程不折腾。' },
      { time: '13:00', tag: 'food', title: '午餐 · 湘菜正餐', desc: '费大厨辣椒炒肉或炊烟时代小炒黄牛肉，长沙的辣从这一顿正式开始。' },
      { time: '14:30', tag: 'hotel', title: '入住 + 午休', desc: '入住五一广场的万代大酒店，安顿行李后小睡一会避开正午暑气——舒适第一，今天不赶路。' },
      { time: '16:30', tag: 'sight', title: '黄兴路 · IFS 国金中心', desc: '楼顶打卡 KAWS 雕塑，商场里逛逛吹空调，避开晚高峰人流。' },
      { time: '18:00', tag: 'food', title: '太平街小吃', desc: '黑色经典臭豆腐、糖油粑粑、大香肠，一条千年老街从头吃到尾。' },
      { time: '20:00', tag: 'sight', title: '湘江夜景散步', desc: '人手一杯茶颜悦色，沿湘江中路走到杜甫江阁，看对岸灯火渐次亮起。' },
      { time: '21:30', tag: 'hotel', title: '回酒店休息', desc: '早点休息，明天可以睡到自然醒。' }
    ],
    transport: '深圳北 → 长沙南 · 高铁约 3h30m · ¥388.5/人',
    hotel: '长沙 · 万代大酒店（五一广场 · 第 1/3 晚）',
    tip: '十一高铁票 9 月中旬开售即抢，可勾选候补；五一广场地铁站出口步行可达各大商圈，全程无需打车。'
  },
  {
    day: 2, date: '10.02', weekday: '周五', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 橘子洲', theme: '独立寒秋',
    subtitle: '上午看江，下午躲进美术馆，晚上用胃认识星城',
    image: IMG.juZiZhou, imageAlt: '橘子洲头青年毛泽东雕像',
    schedule: [
      { time: '09:00', tag: 'food', title: '自然醒 · 嗦粉早餐', desc: '下楼嗦一碗长沙米粉，加码子加煎蛋，老长沙人的早晨从一碗粉开始。' },
      { time: '10:30', tag: 'transport', title: '地铁直达橘子洲', desc: '2 号线"橘子洲站"下车即达，不用打车，洲上禁止社会车辆。' },
      { time: '11:00', tag: 'sight', title: '橘子洲头', desc: '青年毛泽东雕像、湘江风光带；观光小火车 ¥20/人往返，坐着环洲一圈轻松不累脚。' },
      { time: '13:00', tag: 'food', title: '午餐 + 午休', desc: '回五一商圈吃顿简餐，回酒店午休到下午三点，把体力留给夜晚。' },
      { time: '15:30', tag: 'sight', title: '谢子龙影像艺术馆', desc: '洋湖边的"白色城堡"，文艺情侣拍照圣地，免费但需公众号预约。' },
      { time: '18:00', tag: 'food', title: '坡子街 · 火宫殿', desc: '晚餐正式开吃：糖油粑粑、龙脂猪血、八宝果脯一路补齐。' },
      { time: '20:00', tag: 'food', title: '宵夜 · 口味虾', desc: '文和友或街边老店嗦虾开炫，记得说"微辣"，给明天留点余地。' },
      { time: '22:00', tag: 'hotel', title: '江风散步回酒店', desc: '湘江中路吹吹晚风消消食，今天的步数刚好一万步。' }
    ],
    transport: '地铁 2 号线 · 市内通勤约 ¥10/人/天',
    hotel: '长沙 · 万代大酒店（五一广场 · 第 2/3 晚）',
    tip: '橘子洲十一期间限流，务必提前在「橘洲文旅」公众号预约免费门票；小火车旺季排队，不赶时间可步行。'
  },
  {
    day: 3, date: '10.03', weekday: '周六', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 岳麓山', theme: '岳麓寻秋',
    subtitle: '爱晚亭边枫渐红，千年学府半日游，下午照旧午休',
    image: IMG.aiWanTing, imageAlt: '岳麓山爱晚亭秋色',
    schedule: [
      { time: '09:00', tag: 'food', title: '早餐 · 葱油粑粑', desc: '巷子里的葱油粑粑配豆浆，老长沙味道，人均十元吃到满足。' },
      { time: '09:30', tag: 'transport', title: '前往岳麓山', desc: '地铁 + 公交或打车至东门，把登山留给上午的凉爽。' },
      { time: '10:00', tag: 'sight', title: '岳麓山 · 爱晚亭', desc: '"停车坐爱枫林晚"，初秋的枫叶正渐次转红，古亭与山色皆是诗意。' },
      { time: '11:30', tag: 'sight', title: '岳麓书院 · 湖南大学', desc: '¥40/人，千年学府的书香与庭院之美，顺访大学城的青春气息。' },
      { time: '12:30', tag: 'food', title: '大学城午餐', desc: '帅哥烧饼、手工酸奶，人均 ¥30 吃到扶墙出。' },
      { time: '14:00', tag: 'hotel', title: '回酒店午休', desc: '下午最热的时段回酒店补觉，旅行的意义也包括好好休息。' },
      { time: '16:30', tag: 'sight', title: '后湖艺术园区', desc: '湖边咖啡馆坐坐，看日落洒在水面上，长沙也有安静的一面。' },
      { time: '18:30', tag: 'food', title: '晚餐 · 剁椒鱼头宴', desc: '坛宗或湘春酒家的剁椒鱼头，"鸿运当头"，给长沙之行收个尾。' },
      { time: '20:30', tag: 'sight', title: '渔人码头夜景', desc: '湘江西岸看对岸 CBD 灯光，浪漫收尾。' }
    ],
    transport: '地铁 + 公交/打车 · 岳麓山半日通勤约 ¥30/两人',
    hotel: '长沙 · 万代大酒店（五一广场 · 第 3/3 晚）',
    tip: '岳麓山可乘观光车或索道上山（¥30 起），不必全程步行；爱晚亭秋季人多，上午去光线柔和人也少。'
  },
  {
    day: 4, date: '10.04', weekday: '周日', cityKey: 'changsha', city: '长沙 → 张家界',
    place: '长沙 → 张家界', theme: '奔赴峰林',
    subtitle: '上午看两千年前的长沙，下午的高铁开往三千奇峰',
    image: IMG.wuLingYuan, imageAlt: '张家界武陵源峰林',
    schedule: [
      { time: '09:30', tag: 'food', title: '自然醒 · 早餐', desc: '最后一顿长沙早餐，米粉、烧麦、甜酒冲蛋都可以来一点。' },
      { time: '10:30', tag: 'sight', title: '湖南博物院', desc: '马王堆汉墓与辛追夫人，两千年前的长沙尽在眼前；免费但需提前 3-7 天预约。' },
      { time: '12:30', tag: 'food', title: '午餐 + 退房', desc: '商圈解决最后一顿长沙正餐，回酒店取行李出发。' },
      { time: '14:00', tag: 'transport', title: '长沙南 → 张家界西', desc: '高铁约 2 小时 30 分，二等座约 ¥180/人，车上正好补个觉。' },
      { time: '17:00', tag: 'transport', title: '抵达张家界', desc: '打车约 15 分钟入住索道站旁的亚朵酒店，步行 5 分钟就是天门山索道下站，后天出发更从容。' },
      { time: '18:30', tag: 'food', title: '晚餐 · 三下锅', desc: '胡师傅三下锅：腊肉 + 豆腐 + 萝卜干一锅炖香，配米饭两碗。' },
      { time: '20:00', tag: 'sight', title: '大庸古城 · 72 奇楼', desc: '夜景灯光震撼，拍照打卡不需要门票，逛到微微出汗刚好。' },
      { time: '21:30', tag: 'hotel', title: '回酒店休息', desc: '明天进山，今晚早点休息。' }
    ],
    transport: '长沙南 → 张家界西 · 高铁约 2h30m · ¥180/人',
    hotel: '张家界 · 索道站亚朵酒店（天门山索道旁 · 第 1/2 晚）',
    tip: '湖南博物院十一一票难求，放票即约；若约不上可替换为李自健美术馆（免费，需预约）。'
  },
  {
    day: 5, date: '10.05', weekday: '周一', cityKey: 'zhangjiajie', city: '张家界',
    place: '张家界 · 武陵源', theme: '金鞭溪与阿凡达',
    subtitle: '走进《阿凡达》的哈利路亚世界，步道平缓不赶时间',
    image: IMG.wuLingYuan2, imageAlt: '武陵源袁家界峰林云海',
    schedule: [
      { time: '08:00', tag: 'food', title: '早餐后出发', desc: '市区乘车约 50 分钟至武陵源标志门，8 点半前入园人最少。' },
      { time: '09:00', tag: 'sight', title: '武陵源标志门', desc: '门票 ¥228/人、4 日有效，首次入园录入指纹。今天主打金鞭溪 + 袁家界。' },
      { time: '09:30', tag: 'sight', title: '金鞭溪徒步', desc: '7.5 公里平缓沿溪步道，约 2.5 小时，被誉为"世界最美峡谷"，《西游记》取景地。' },
      { time: '12:00', tag: 'transport', title: '百龙天梯上山', desc: '¥72/人，全封闭高速电梯 1 分 32 秒直上袁家界——站轿厢中间不看脚下，就当普通电梯坐；山顶简餐解决午饭。' },
      { time: '13:30', tag: 'sight', title: '袁家界 · 阿凡达秘境', desc: '迷魂台、天下第一桥、乾坤柱——《阿凡达》哈利路亚悬浮山的原型峰林。' },
      { time: '16:00', tag: 'transport', title: '返回市区', desc: '环保车 + 天梯原路下山，乘车回市区酒店休整，不安排夜游。' },
      { time: '19:00', tag: 'food', title: '晚餐 · 岩耳炖土鸡', desc: '悬崖岩耳 + 散养土鸡，山珍汤头滋补又鲜美。' },
      { time: '20:30', tag: 'sight', title: '澧水夜景散步', desc: '河堤走走消消食，看大庸桥的灯光与山影。' }
    ],
    transport: '张家界市区 ↔ 武陵源 · 班车/打车约 50min',
    hotel: '张家界 · 索道站亚朵酒店（天门山索道旁 · 第 2/2 晚）',
    tip: '百龙天梯是全封闭轿厢电梯，不看脚下就当普通电梯坐；实在介意可改走乱窜坡步道上袁家界（约 1.5h），全程林荫覆盖无暴露感，人少景美。'
  },
  {
    day: 6, date: '10.06', weekday: '周二', cityKey: 'zhangjiajie', city: '张家界 → 长沙',
    place: '张家界 · 天门山', theme: '云端天门',
    subtitle: '不踩玻璃也看得到云海，999 级台阶丈量天门，傍晚高铁回星城',
    image: IMG.tianMenFog, imageAlt: '天门山云雾缭绕的崖壁栈道',
    schedule: [
      { time: '07:30', tag: 'transport', title: '天门山索道下站', desc: 'A 线玩法：索道上山 + 公路下山。十一票务紧张，务必提前 3-5 天在官方渠道购票。' },
      { time: '08:00', tag: 'sight', title: '世界最长观光索道', desc: '7455 米、约 28 分钟直上山顶，全封闭 8 人轿厢平稳安静；坐中间朝内看远处山峦、不看脚下，注意力很快会被云雾风景接管。' },
      { time: '08:40', tag: 'sight', title: '西线常规崖壁栈道', desc: '走护栏完善的常规崖壁步道，玻璃栈道段直接从旁路绕过——不踩一块玻璃，云海与峰林照样尽收眼底。' },
      { time: '11:00', tag: 'sight', title: '天门山寺 · 求支平安签', desc: '山顶古刹清幽人少，替彼此求一支平安签；寺前平台视野开阔平稳，是山顶最从容的角落。' },
      { time: '12:00', tag: 'food', title: '山顶午餐', desc: '山顶餐厅简餐或自带干粮，补充体力。' },
      { time: '13:00', tag: 'sight', title: '穿山扶梯 → 天门洞', desc: '自动扶梯穿越山体直下，999 级台阶扶着扶手慢慢往下走——下行比攀爬轻松得多，抵达 131.5 米高的"天门"。' },
      { time: '14:30', tag: 'transport', title: '99 道弯下山 · 取行李', desc: '环保车走"通天大道"下山，回酒店取行李后前往张家界西站。' },
      { time: '16:30', tag: 'transport', title: '张家界西 → 长沙南', desc: '高铁约 2 小时 30 分，车上补觉，醒来就回星城。' },
      { time: '19:30', tag: 'hotel', title: '抵达长沙 · 入住', desc: '入住长沙南站旁的亚朵/全季，明早磁浮 20 分钟直达机场；附近简餐后早点休息。' }
    ],
    transport: '天门山 A 线 ¥278/人 · 张家界西 → 长沙南高铁 ¥180/人',
    hotel: '长沙 · 南站旁亚朵/全季（长沙南站 · 赶飞机）',
    tip: '行程已避开玻璃栈道与悬索桥（现场均有旁路可绕行）；索道与扶梯均为封闭舱体，慢慢来就好；山顶风大温低备薄外套，回程高铁建议买 16:30 后班次。'
  },
  {
    day: 7, date: '10.07', weekday: '周三', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 黄花机场', theme: '星城道别',
    subtitle: '睡到自然醒的最后一日，机场出口拥抱后各奔山海',
    image: IMG.changshaAirport, imageAlt: '长沙黄花国际机场航站楼',
    schedule: [
      { time: '09:00', tag: 'food', title: '自然醒 · 最后一碗粉', desc: '睡到自然醒，酒店附近嗦最后一碗长沙米粉，从容收拾行李。' },
      { time: '10:30', tag: 'transport', title: '前往黄花机场', desc: '磁浮快线约 20 分钟直达航站楼（约 ¥20/人），或打车约 40 分钟 ¥80。' },
      { time: '11:30', tag: 'transport', title: '抵达机场 · 值机', desc: '十一安检排队较长，早点到心里踏实；值机托运按各自的航班走。' },
      { time: '12:30', tag: 'food', title: '机场午餐', desc: '出发大厅平静地吃完旅途最后一顿饭，把话慢慢说完。' },
      { time: '15:30', tag: 'transport', title: '道别 · 先送早航班', desc: '出发大厅合影留念，拥抱道别——山水一程，来日方长。' },
      { time: '17:30', tag: 'transport', title: '一路北上 · 长沙 → 大连', desc: '直飞约 3 小时，参考时段 17:00-19:00，夜抵海滨之城。' },
      { time: '19:00', tag: 'transport', title: '一路南下 · 长沙 → 深圳', desc: '直飞约 1 小时 25 分，参考时段 19:00-21:00，晚归湾区。' }
    ],
    transport: '磁浮快线约 20min ¥20/人 · 长沙 → 大连 ¥900-1300 /人 · 长沙 → 深圳 ¥500-800 /人',
    hotel: '各自归家 · 后会有期',
    tip: '两趟航班时间不同，先送早出发的那位；分别前记得拥抱合影——看过的山水都会记得，我们曾并肩同行。'
  }
];

/* ---------------- 城际交通 ---------------- */
export const transportList = [
  {
    from: '深圳', to: '长沙', icon: 'ri-train-line', mode: '高铁直达',
    duration: '约 3h30m', price: '¥388.5/人 起',
    note: '深圳北 → 长沙南，建议 08:00-09:00 班次，开售即抢',
    theme: { bg: 'bg-sky-50', iconBg: 'bg-sky-500', text: 'text-sky-700', border: 'hover:border-sky-300' }
  },
  {
    from: '长沙', to: '张家界', icon: 'ri-train-line', mode: '高铁直达',
    duration: '约 2h30m', price: '¥180/人 起',
    note: '长沙南 → 张家界西，建议 14:00 前后出发，傍晚抵达',
    theme: { bg: 'bg-teal-50', iconBg: 'bg-teal-500', text: 'text-teal-700', border: 'hover:border-teal-300' }
  },
  {
    from: '张家界', to: '长沙', icon: 'ri-route-line', mode: '高铁直达',
    duration: '约 2h30m', price: '¥180/人 起',
    note: '张家界西 → 长沙南，建议 16:30 后班次，天门山玩完从容出发',
    theme: { bg: 'bg-jade-50', iconBg: 'bg-jade-600', text: 'text-jade-700', border: 'hover:border-jade-400' }
  },
  {
    from: '长沙', to: '大连', icon: 'ri-flight-takeoff-line', mode: '直飞航班',
    duration: '约 3h', price: '¥900-1300/人',
    note: '黄花机场 CSX → 周水子 DLC，参考 17:00-19:00 时段',
    theme: { bg: 'bg-indigo-50', iconBg: 'bg-indigo-500', text: 'text-indigo-700', border: 'hover:border-indigo-300' }
  },
  {
    from: '长沙', to: '深圳', icon: 'ri-flight-land-line', mode: '直飞航班',
    duration: '约 1h25m', price: '¥500-800/人',
    note: '黄花机场 CSX → 宝安机场 SZX，参考 19:00-21:00 时段',
    theme: { bg: 'bg-rose-50', iconBg: 'bg-rose-500', text: 'text-rose-700', border: 'hover:border-rose-300' }
  },
  {
    from: '酒店', to: '黄花机场', icon: 'ri-subway-line', mode: '磁浮快线',
    duration: '约 20min', price: '约 ¥20/人',
    note: '长沙南站乘磁浮快线直达航站楼；打车约 40 分钟 ¥80',
    theme: { bg: 'bg-amber-50', iconBg: 'bg-amber-500', text: 'text-amber-700', border: 'hover:border-amber-300' }
  }
];

/* ---------------- 精选住宿（每晚 ¥500 上下 · 舒适不奢华） ---------------- */
export const hotelStays = [
  {
    city: '长沙', area: '五一广场商圈', nights: 3, dateRange: '10.01 - 10.03',
    icon: 'ri-city-line', color: 'bg-orange-500', chip: 'bg-orange-50 text-orange-600',
    reason: '全城 C 位：下楼就是茶颜悦色与太平街，地铁 1/2 号线双线交汇，去橘子洲两站直达，逛吃全程零通勤。',
    avgPrice: '¥550-650', avgNote: '十一核心商圈峰值价，全程地段最贵的一站，但位置无可替代',
    advice: '十一价格上涨约三成，9 月中旬前锁定"可免费取消"房型最稳妥；万代与全季相距不到 200 米，互为备选，哪家有房订哪家。',
    hotels: [
      {
        name: '长沙国金中心万代大酒店', tier: '舒适首选', tierTheme: 'bg-jade-600',
        type: '高档四星 · 评分 4.6 · 1.1万+ 点评', price: '¥550-650',
        addr: '开福区黄兴中路87号 · 五一广场地铁站约 190 米',
        desc: '老牌四星"位置王"：地铁 7 号口步行 4 分钟到店，IFS、太平街、坡子街全在步行圈；高楼层可远眺湘江，早餐几十个品种，还有空中花园与高空健身房。',
        tags: ['位置满分', '早餐丰盛', '高空城景']
      },
      {
        name: '全季酒店（五一广场IFS国金中心店）', tier: '品质平替', tierTheme: 'bg-orange-500',
        type: '舒适连锁 · 评分 4.7 · 华住集团', price: '¥480-580',
        addr: '黄兴中路69号 · 五一广场地铁站约 100 米',
        desc: '华住中端标杆：金可儿床垫 + 全屋隔音，房况新净；楼下就是 IFS 与黄兴路步行街，逛吃结束 5 分钟躺回床上，价格也更友好。',
        tags: ['床品出色', '房况较新', '性价比高']
      }
    ]
  },
  {
    city: '张家界', area: '天门山索道站旁', nights: 2, dateRange: '10.04 - 10.05',
    icon: 'ri-landscape-line', color: 'bg-teal-600', chip: 'bg-teal-50 text-teal-700',
    reason: '住在索道下站旁：A 线 7:30 开闸，步行 5 分钟即排队，等于比别人多睡一小时；楼下美食街嗦三下锅，进山回城都省心。',
    avgPrice: '¥430-520', avgNote: '整体房价低于长沙，舒适型即可住得很好，预算稍降',
    advice: '两家都紧邻索道站，按价格与房态选即可；若想要户外泳池和更大公区，可看五星的大成山水国际大酒店（约 ¥400-480/晚，近索道）。',
    hotels: [
      {
        name: '张家界天门山索道站亚朵酒店', tier: '舒适首选', tierTheme: 'bg-jade-600',
        type: '高档型 · 评分 4.8 · 2022 年开业', price: '¥450-520',
        addr: '永定区官黎坪靛达广场 · 步行 3-5 分钟到索道站',
        desc: '"楼下即索道站"：赶早班 A 线不慌不忙；免费洗衣房伺候连爬两天的登山服，深夜还有一碗免费热粥——爬完山的胃最懂这份温柔。',
        tags: ['步行到索道', '免费洗衣', '深夜暖粥']
      },
      {
        name: '张家界天门山希尔顿欢朋酒店', tier: '品质平替', tierTheme: 'bg-orange-500',
        type: '国际连锁 · 评分 4.8 · 高档榜前列', price: '¥440-520',
        addr: '永定区大庸路 · 距天门山索道约 150 米',
        desc: '希尔顿集团欢朋品牌，2 万+ 点评的高分常青树：客房隔音出色、床品稳定，部分房间抬眼就是天门山影，楼下停车吃饭都方便。',
        tags: ['国际品牌', '隔音出色', '山景房型']
      }
    ]
  },
  {
    city: '长沙', area: '长沙南站旁', nights: 1, dateRange: '10.06',
    icon: 'ri-train-line', color: 'bg-violet-500', chip: 'bg-violet-50 text-violet-600',
    reason: '最后一晚不折腾：高铁到站步行即入住，次日磁浮快线 20 分钟直达黄花机场，赶飞机的从容保持到最后一刻。',
    avgPrice: '¥380-460', avgNote: '地段不核心价格友好，纯粹为赶飞机中转的一晚',
    advice: '优先选带"高铁/机场接送"的门店，预订时告知车次方便衔接；若两家订满，可看延年城际酒店（步行 630 米，评分 4.8，有专车接送）。',
    hotels: [
      {
        name: '长沙南站国际会展中心亚朵酒店', tier: '舒适首选', tierTheme: 'bg-jade-600',
        type: '高档型 · 评分 4.6 · 亚朵集团', price: '¥420-480',
        addr: '雨花区湘秀路131号 · 距长沙南站约 600 米',
        desc: '亚朵式深睡收官：有高铁送站服务，早餐开到上午 11 点，完美匹配"睡到自然醒再出发"的最后一天节奏。',
        tags: ['送站服务', '早餐到11点', '深睡收官']
      },
      {
        name: '全季酒店（长沙南站国际会展中心店）', tier: '品质平替', tierTheme: 'bg-orange-500',
        type: '舒适连锁 · 评分 4.7 · 华住集团', price: '¥380-450',
        addr: '雨花区湘凤路黎托枢纽 · 距长沙南站约 280 米',
        desc: '出站步行 5 分钟进大堂，全程无需打车；房间干净安静，西广场外就是地铁 2/4 号线，想进市区逛最后一晚也方便。',
        tags: ['出站即达', '双地铁口', '干净安静']
      }
    ]
  }
];

/* ---------------- 美食清单 ---------------- */
export const foods = [
  {
    city: '长沙', icon: 'ri-city-line', color: 'bg-orange-500', chip: 'bg-orange-50 text-orange-600',
    items: [
      { name: '黑色经典臭豆腐', emoji: '🖤', desc: '外酥里嫩，戳开浇上灵魂汤汁，长沙街头味道图腾', star: 5, must: true, img: IMG.foodChou },
      { name: '茶颜悦色', emoji: '🧋', desc: '幽兰拿铁 + 声声乌龙，中式国风茶饮的浪漫', star: 5, must: true },
      { name: '辣椒炒肉', emoji: '🌶️', desc: '湘菜之魂，螺丝椒 + 土猪肉，拌饭两碗起步', star: 5 },
      { name: '剁椒鱼头', emoji: '🐟', desc: '红剁椒铺满大鱼头，"鸿运当头"的告别宴主菜', star: 5 },
      { name: '糖油粑粑', emoji: '🍡', desc: '糯米糖油现炸，外壳微脆、内里软糯，甜进心里', star: 4 },
      { name: '口味虾', emoji: '🦞', desc: '星城夜宵王者，麻辣鲜香，戴上手套开炫', star: 5 },
      { name: '长沙米粉', emoji: '🍜', desc: '早起的理由：筒子骨汤打底，码子随心配', star: 4 },
      { name: '太平街小吃巡礼', emoji: '🏮', desc: '千年老街一路吃过去：大香肠、龙脂猪血、梅菜饼', star: 4, img: IMG.foodTaiping }
    ]
  },
  {
    city: '张家界', icon: 'ri-landscape-line', color: 'bg-teal-600', chip: 'bg-teal-50 text-teal-700',
    items: [
      { name: '三下锅', emoji: '🍲', desc: '土家干锅代表作：腊肉 + 豆腐 + 萝卜干一锅炖香', star: 5, must: true },
      { name: '土家腊肉', emoji: '🥓', desc: '柴火慢熏、肥而不腻，配蒜苗爆炒是一绝', star: 5 },
      { name: '岩耳炖土鸡', emoji: '🫕', desc: '悬崖岩耳 + 散养土鸡，山珍汤头滋补又鲜美', star: 4 },
      { name: '张家界莓茶', emoji: '🍵', desc: '藤茶特产，入口微苦、回味清甘，爬山后来一杯', star: 4 }
    ]
  }
];

/* ---------------- 预算（两人合计） ---------------- */
export const budget = {
  total: 11300,
  note: '十一黄金周为旺季峰值价，两人合计估算，实际以预订为准',
  items: [
    { name: '城际交通', amount: 3300, icon: 'ri-train-line', color: '#0ea5e9', desc: '高铁 3 段 + 机票 2 趟（双人合计）' },
    { name: '住宿 6 晚', amount: 3200, icon: 'ri-hotel-bed-line', color: '#8b5cf6', desc: '五一商圈×3晚 + 索道站×2晚 + 南站×1晚' },
    { name: '餐饮美食', amount: 2100, icon: 'ri-restaurant-2-line', color: '#f97316', desc: '日均 ¥300，含两顿仪式感大餐' },
    { name: '门票索道', amount: 1500, icon: 'ri-ticket-2-line', color: '#14b8a6', desc: '武陵源 + 天门山 A 线 + 岳麓书院' },
    { name: '购物机动', amount: 1200, icon: 'ri-shopping-bag-3-line', color: '#f43f5e', desc: '特产手信 + 应急余量' }
  ]
};

/* ---------------- 贴士锦囊 ---------------- */
export const tips = [
  {
    icon: 'ri-calendar-check-line', title: '抢票攻略',
    theme: { bg: 'bg-rose-50', iconBg: 'bg-rose-500', text: 'text-rose-700' },
    desc: '火车票提前 15 天在 12306 开售（9 月中旬起），开放候补 + 多车次勾选；机票越早订越便宜，十一价格只涨不跌。'
  },
  {
    icon: 'ri-hotel-bed-line', title: '订房节奏',
    theme: { bg: 'bg-violet-50', iconBg: 'bg-violet-500', text: 'text-violet-700' },
    desc: '酒店越早订越便宜且可挑房型：先锁"可免费取消"的订单，后续看到更优价格再更换；十一热门酒店提前 3-4 周就紧张。'
  },
  {
    icon: 'ri-shield-check-line', title: '门票预约',
    theme: { bg: 'bg-jade-50', iconBg: 'bg-jade-600', text: 'text-jade-700' },
    desc: '天门山提前 3-5 天官方渠道购票（A 线最紧俏）；橘子洲、湖南博物院免费但需公众号预约；武陵源建议线上提前买。'
  },
  {
    icon: 'ri-t-shirt-line', title: '穿衣指南',
    theme: { bg: 'bg-sky-50', iconBg: 'bg-sky-500', text: 'text-sky-700' },
    desc: '10 月初湖南白天 22-28°C，山区早晚约 15°C。薄外套 + 舒适运动鞋必备，日均步行约 1.5 万步。'
  },
  {
    icon: 'ri-fire-line', title: '辣度预警',
    theme: { bg: 'bg-orange-50', iconBg: 'bg-orange-500', text: 'text-orange-700' },
    desc: '湘菜默认中辣起步，点单说"微辣"是对广东胃最后的温柔；备好肠胃药，茶颜悦色的茶也能救急。'
  },
  {
    icon: 'ri-hand-heart-line', title: '恐高友好设计',
    theme: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-500', text: 'text-emerald-700' },
    desc: '行程已避开玻璃栈道、悬索桥等高空项目；索道与百龙天梯均为封闭轿厢，站内侧看远山即可；崖壁栈道全程有护栏，靠内缓行不吓人。'
  },
  {
    icon: 'ri-timer-flash-line', title: '错峰心法',
    theme: { bg: 'bg-amber-50', iconBg: 'bg-amber-500', text: 'text-amber-700' },
    desc: '十一景区 10:00-15:00 人流最密，本行程多数景点安排在早晨进入；排队时可留意景区实时客流播报，错开 1 小时少排 1 小时。'
  },
  {
    icon: 'ri-shield-user-line', title: '证件与装备',
    theme: { bg: 'bg-cyan-50', iconBg: 'bg-cyan-500', text: 'text-cyan-700' },
    desc: '高铁、机票、酒店、景区全部实名，身份证务必随身；备充电宝、肠胃药、创可贴与舒适运动鞋，日均 1.5 万步不是玩笑。'
  },
  {
    icon: 'ri-heart-pulse-line', title: '分别安排',
    theme: { bg: 'bg-indigo-50', iconBg: 'bg-indigo-500', text: 'text-indigo-700' },
    desc: '10.7 预留至少 3 小时余量赴机场；行李提前一晚打包；先送早出发的航班，出发大厅合影留给未来。'
  }
];

/* ---------------- 分别航班 ---------------- */
export const flights = [
  {
    code: 'CSX → DLC', from: '长沙黄花国际机场', to: '大连周水子国际机场',
    duration: '约 3 小时', window: '参考时段 17:00 - 19:00',
    direction: '一路北上 · 海滨之约', icon: 'ri-flight-takeoff-line', accent: 'text-sky-300', ring: 'hover:border-sky-400/40'
  },
  {
    code: 'CSX → SZX', from: '长沙黄花国际机场', to: '深圳宝安国际机场',
    duration: '约 1 小时 25 分', window: '参考时段 19:00 - 21:00',
    direction: '一路南下 · 归途湾区', icon: 'ri-flight-land-line', accent: 'text-rose-300', ring: 'hover:border-rose-400/40'
  }
];

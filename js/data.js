/* ============================================================
 * 湘约十一 · 湖南七日双人之旅 —— 数据层
 * 2026.10.01(周四) 出发 ～ 10.07(周三) 分别
 * ============================================================ */

export const IMG = {
  hero: 'https://assets.with.tencent.com/default/632c6b88-a193-46e9-a889-2389a08bf0dc/image_1789455402_1_3.jpg',
  gaoYiLing: 'https://assets.with.tencent.com/default/dfd59f9e-8bc8-4c63-90a0-5845939ca561/image_1789455400_1_3.jpg',
  dongjiangFog: 'https://assets.with.tencent.com/default/b7570d46-51be-41e6-b716-1a31f8ea6ec0/image_1789455397_1_3.jpg',
  dongjiangWide: 'https://assets.with.tencent.com/default/b4ba0307-6cba-445c-9e32-675b38b6f59c/image_1789455396_2_1.jpg',
  wuLingYuan: 'https://assets.with.tencent.com/default/90423252-5f8b-499e-9b9a-f8763e9eb603/image_1789455401_2_1.jpg',
  wuLingYuan2: 'https://assets.with.tencent.com/default/632c6b88-a193-46e9-a889-2389a08bf0dc/image_1789455402_1_3.jpg',
  tianMen: 'https://assets.with.tencent.com/default/d8b75c60-0c55-4f9b-a92a-6cecde689a70/image_1789455402_2_1.jpg',
  tianMenFog: 'https://assets.with.tencent.com/default/1bff0185-fb65-4993-9f9e-f8e5a2738736/image_1789455404_1_3.jpg',
  juZiZhou: 'https://assets.with.tencent.com/default/42bfefaf-32c6-48e5-8bac-4d81abe489e8/image_1789455407_2_3.jpg',
  aiWanTing: 'https://assets.with.tencent.com/default/241a3ea5-9e63-4c2a-8110-fcaedd472aac/image_1789455409_2_3.jpg',
  changshaNight: 'https://assets.with.tencent.com/default/fa6487d8-1ccf-46f2-9023-5a9f657ace42/image_1789455410_2_1.png',
  foodChou: 'https://assets.with.tencent.com/default/7d744638-5b68-4990-bfb9-4b9c91400126/image_1789455411_1_1.jpg',
  foodTaiping: 'https://assets.with.tencent.com/default/f2303c44-1c30-4fc9-a089-6a4ccba1ea4c/image_1789455411_2_1.jpg'
};

export const tripMeta = {
  badge: '2026 国庆黄金周 · 双人湘行',
  title: '湘约十一',
  subtitle: '深圳 → 郴州 → 张家界 → 长沙',
  slogan: '从湾区晨光出发，看郴州的雾、张家界的山、长沙的夜，最后在星城道别，一个奔向大海之北，一个回归湾区之南。',
  stats: [
    { value: '7', unit: '天', label: '黄金周长假' },
    { value: '2', unit: '人', label: '同行旅人' },
    { value: '4', unit: '城', label: '湘楚四城' },
    { value: '3', unit: '段', label: '高铁城际' },
    { value: '2', unit: '趟', label: '返程航班' }
  ]
};

/* ---------------- 路线总览 ---------------- */
export const routeStops = [
  {
    tag: '启程', city: '深圳', date: '10.01 上午', icon: '🚄',
    desc: '深圳北站出发', highlights: ['高铁直达郴州'],
    bg: 'bg-sky-100', text: 'text-sky-600', chip: 'bg-sky-50 text-sky-700'
  },
  {
    tag: '第一站', city: '郴州', date: '10.01 - 10.02', icon: '⛰️',
    desc: '湘南山水 · 别名"林中之城"', highlights: ['高椅岭丹霞', '雾漫小东江'],
    bg: 'bg-emerald-100', text: 'text-emerald-600', chip: 'bg-emerald-50 text-emerald-700'
  },
  {
    tag: '第二站', city: '张家界', date: '10.03 - 10.05', icon: '🏔️',
    desc: '三千奇峰 · 阿凡达秘境', highlights: ['武陵源', '袁家界', '天门山'],
    bg: 'bg-teal-100', text: 'text-teal-600', chip: 'bg-teal-50 text-teal-700'
  },
  {
    tag: '第三站', city: '长沙', date: '10.06 - 10.07', icon: '🎡',
    desc: '网红星城 · 淘汰不了的辣', highlights: ['橘子洲', '岳麓山', '太平街'],
    bg: 'bg-orange-100', text: 'text-orange-600', chip: 'bg-orange-50 text-orange-700'
  },
  {
    tag: '归程', city: '大连 / 深圳', date: '10.07 晚', icon: '✈️',
    desc: '黄花机场 · 分别出发', highlights: ['一个北上', '一个南下'],
    bg: 'bg-indigo-100', text: 'text-indigo-600', chip: 'bg-indigo-50 text-indigo-700'
  }
];

/* ---------------- 城市筛选 Tab ---------------- */
export const cityTabs = [
  { key: 'all', label: '全部行程', icon: 'ri-stack-line', count: 7 },
  { key: 'chenzhou', label: '郴州', icon: 'ri-mountains-line', count: 2 },
  { key: 'zhangjiajie', label: '张家界', icon: 'ri-landscape-line', count: 3 },
  { key: 'changsha', label: '长沙', icon: 'ri-city-line', count: 2 }
];

/* ---------------- 七日行程 ---------------- */
export const itinerary = [
  {
    day: 1, date: '10.01', weekday: '周四', cityKey: 'chenzhou', city: '郴州',
    place: '郴州 · 资兴', theme: '初见丹霞',
    subtitle: '从湾区晨光到湘南红岩，旅程在一场日落里开场',
    image: IMG.gaoYiLing, imageAlt: '郴州高椅岭丹霞地貌',
    schedule: [
      { time: '08:12', tag: 'transport', title: '深圳北站出发', desc: 'G 字头高铁直达郴州西，全程约 1 小时 40 分，二等座约 ¥244.5/人。提前选好靠窗位，一路看南岭秋色。' },
      { time: '10:00', tag: 'transport', title: '抵达郴州西站', desc: '出站打车约 40 分钟直达高椅岭景区（约 ¥80），行李寄存游客中心，轻装上山。' },
      { time: '11:00', tag: 'food', title: '景区简餐', desc: '游客中心附近解决午餐，也可以自带干粮和水，山顶补给点较少。' },
      { time: '12:30', tag: 'sight', title: '高椅岭 · 丹霞碧水', desc: '徒步巨蜥湖、登天云梯栈道，红岩与绿水相互映衬，随手一拍都是大片，全程约 3-4 小时。' },
      { time: '17:30', tag: 'sight', title: '日落黄金时刻', desc: '下午 4 点后光线变柔，站在观景台看整片丹霞被镀上金边，这是高椅岭一天中最美的时刻。' },
      { time: '19:00', tag: 'food', title: '资兴晚餐', desc: '前往东江湖畔的农家菜馆：有机鱼、土鸡蛋、时令蔬菜，尝一口地道的湘南风味。' },
      { time: '20:30', tag: 'hotel', title: '入住东江湖畔', desc: '今晚住景区旁民宿，早些休息——明天要赶一场清晨的雾。' }
    ],
    transport: '深圳北 → 郴州西 · 高铁约 1h40m · ¥244.5/人',
    hotel: '资兴 · 东江湖景区旁民宿（方便清晨看雾）',
    tip: '高椅岭栈道有一定坡度，务必穿运动鞋；十一人流量大，提前在「高椅岭旅游区」公众号购票免排队。'
  },
  {
    day: 2, date: '10.02', weekday: '周五', cityKey: 'chenzhou', city: '郴州',
    place: '郴州 · 东江湖', theme: '雾漫小东江',
    subtitle: '清晨的人间仙境，午后奔赴三千奇峰',
    image: IMG.dongjiangFog, imageAlt: '雾漫小东江晨雾渔船',
    schedule: [
      { time: '06:00', tag: 'note', title: '早起占位', desc: '从民宿步行或摆渡车至小东江观雾栈道，6:30 前到观景台占好机位。' },
      { time: '06:30', tag: 'sight', title: '雾漫小东江', desc: '晨雾缭绕 + 渔夫撒网表演（约每半小时一场），摄影圈封神的"人间仙境"，最佳观赏时段 6:30-8:30。' },
      { time: '09:00', tag: 'sight', title: '东江湖游船', desc: '码头乘船游湖，兜率岛、黄草镇方向的山水画卷徐徐展开，航程约 1.5 小时。' },
      { time: '11:00', tag: 'sight', title: '龙景峡谷', desc: '瀑布群步道穿行于密林水汽之间，负氧离子含量爆表，凉爽又治愈。' },
      { time: '13:00', tag: 'food', title: '东江湖鱼宴', desc: '剁椒鱼头、清蒸银鱼，一湖好水养出的鱼，鲜甜没有土腥味。' },
      { time: '15:00', tag: 'transport', title: '返回郴州西站', desc: '车程约 1 小时，预留取行李与安检时间。' },
      { time: '17:00', tag: 'transport', title: '郴州西 → 张家界西', desc: '经长沙南中转（或直达班次），全程约 4.5 小时，车上正好补个觉。' },
      { time: '21:30', tag: 'hotel', title: '抵达张家界', desc: '入住市区酒店，选在天门山索道站附近，明天出发更从容。' }
    ],
    transport: '郴州西 → 张家界西 · 动车中转约 4.5h · ¥260-330/人',
    hotel: '张家界市区 · 天门山索道站附近',
    tip: '晨雾受天气影响，雨后初晴最壮观；若当天雾少也别遗憾，游船与峡谷同样值回票价。'
  },
  {
    day: 3, date: '10.03', weekday: '周六', cityKey: 'zhangjiajie', city: '张家界',
    place: '张家界 · 武陵源', theme: '金鞭溪与阿凡达',
    subtitle: '走进《阿凡达》的哈利路亚世界',
    image: IMG.wuLingYuan, imageAlt: '武陵源袁家界峰林',
    schedule: [
      { time: '08:00', tag: 'transport', title: '出发武陵源', desc: '市区乘车约 50 分钟至武陵源标志门，赶在 8 点前入园人最少。' },
      { time: '09:00', tag: 'sight', title: '武陵源标志门', desc: '门票 ¥228/人、4 日有效，首次入园录入指纹。今天主打金鞭溪 + 袁家界。' },
      { time: '09:30', tag: 'sight', title: '金鞭溪徒步', desc: '7.5 公里平缓沿溪步道，约 2.5 小时，被誉为"世界最美峡谷"，《西游记》取景地。' },
      { time: '12:00', tag: 'transport', title: '百龙天梯上山', desc: '¥72/人，1 分 32 秒从谷底直上袁家界；山顶简餐解决午饭。' },
      { time: '13:30', tag: 'sight', title: '袁家界 · 阿凡达秘境', desc: '迷魂台、天下第一桥、乾坤柱——《阿凡达》哈利路亚悬浮山的原型峰林。' },
      { time: '16:00', tag: 'sight', title: '袁家寨子观景台', desc: '土家风情观景点，俯瞰整个峰林峡谷，云雾在峰柱间流动。' },
      { time: '18:00', tag: 'hotel', title: '入住武陵源', desc: '标志门附近客栈，晚上顺路逛溪布街，看溪水边的夜色。' },
      { time: '19:00', tag: 'food', title: '武陵源晚餐', desc: '正宗三下锅：腊肉 + 豆腐 + 萝卜干一锅炖，配米饭两碗。' }
    ],
    transport: '张家界市区 ↔ 武陵源 · 班车/打车约 50min',
    hotel: '武陵源 · 标志门附近客栈',
    tip: '十一百龙天梯排队可能超 1 小时，体力好的情侣可改走乱窜坡步道上袁家界（约 1.5h），人少景美。'
  },
  {
    day: 4, date: '10.04', weekday: '周日', cityKey: 'zhangjiajie', city: '张家界',
    place: '张家界 · 天子山', theme: '御笔峰云海',
    subtitle: '山顶环线日，把最壮阔的峰林留在最后',
    image: IMG.wuLingYuan2, imageAlt: '张家界峰林云海',
    schedule: [
      { time: '08:00', tag: 'transport', title: '天子山索道上山', desc: '¥72/人，缆车穿云而上，云海峰林在脚下铺开。' },
      { time: '09:00', tag: 'sight', title: '天子山核心景区', desc: '御笔峰、仙女散花、贺龙公园、云青岩观景台，一步一景的峰林盛宴。' },
      { time: '11:30', tag: 'sight', title: '杨家界（体力加餐）', desc: '天波府、一步登天，游客相对更少，保留了更多野趣与险峻。' },
      { time: '13:00', tag: 'food', title: '山间野餐', desc: '自带干粮 + 山顶热饮，找个观景位边吃边看峰林，比餐厅更浪漫。' },
      { time: '14:30', tag: 'sight', title: '十里画廊', desc: '观光小火车往返 ¥38/人，采药老人、三姐妹峰在两侧次第展开。' },
      { time: '16:30', tag: 'transport', title: '返回市区', desc: '从标志门乘车回市区，回酒店休整放松。' },
      { time: '19:00', tag: 'food', title: '市区晚餐', desc: '胡师傅三下锅或岩耳炖土鸡，饭后来一杯回甘的张家界莓茶。' },
      { time: '20:30', tag: 'sight', title: '澧水夜景', desc: '河堤散步消食，看大庸桥的灯光与山影。' }
    ],
    transport: '武陵源 → 张家界市区 · 班车约 50min',
    hotel: '张家界市区 · 天门山索道站附近',
    tip: '武陵源两日联玩，今天以"山顶环线"为主；索道排队赶早，山顶下午常有云雾，拍照更有仙气。'
  },
  {
    day: 5, date: '10.05', weekday: '周一', cityKey: 'zhangjiajie', city: '张家界',
    place: '张家界 · 天门山', theme: '云端天门',
    subtitle: '玻璃栈道牵手走过，999 级台阶丈量天空',
    image: IMG.tianMenFog, imageAlt: '天门山玻璃栈道云雾',
    schedule: [
      { time: '07:30', tag: 'transport', title: '天门山索道下站', desc: 'A 线玩法：索道上山 + 公路下山。十一票务紧张，务必提前 3-5 天在官方渠道购票。' },
      { time: '08:00', tag: 'sight', title: '世界最长观光索道', desc: '7455 米、约 28 分钟直上山顶，城市、田园与山峦在脚下交替切换。' },
      { time: '09:00', tag: 'sight', title: '西线玻璃栈道', desc: '鞋套 ¥5/人，悬空于千米崖壁之上，恐高的那个请抓紧另一半的手。' },
      { time: '11:00', tag: 'sight', title: '鬼谷栈道 · 悬索桥', desc: '沿崖壁蜿蜒的栈道，云雾从脚下穿行而过，惊险与浪漫并存。' },
      { time: '12:00', tag: 'food', title: '山顶午餐', desc: '山顶餐厅简餐或自带干粮，补充体力。' },
      { time: '13:00', tag: 'sight', title: '穿山扶梯 → 天门洞', desc: '自动扶梯穿越山体直下，抵达 999 级上天梯，打卡 131.5 米高的"天门"。' },
      { time: '15:00', tag: 'sight', title: '99 道弯盘山公路', desc: '乘环保车下山，"通天大道"连续发卡弯，感受司机师傅的秋名山车技。' },
      { time: '17:00', tag: 'hotel', title: '回市区休整', desc: '晚上视体力逛大庸古城或 72 奇楼夜景。' },
      { time: '21:00', tag: 'note', title: '收拾行囊', desc: '明早出发长沙，提前打包行李，早些休息。' }
    ],
    transport: '天门山 A 线 · 索道上山 / 公路下山 · ¥278/人',
    hotel: '张家界市区（同前一晚）',
    tip: '山顶风大温低，备一件薄外套；玻璃栈道人多时移动缓慢，手机相机务必收好防掉落。'
  },
  {
    day: 6, date: '10.06', weekday: '周二', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 橘子洲 & 五一商圈', theme: '独立寒秋，湘江北去',
    subtitle: '下午看江、晚上暴走，用胃认识星城',
    image: IMG.juZiZhou, imageAlt: '橘子洲头青年毛泽东雕像',
    schedule: [
      { time: '08:30', tag: 'transport', title: '张家界西 → 长沙南', desc: '高铁约 2 小时 30 分，二等座约 ¥180/人，车上补觉回血。' },
      { time: '11:30', tag: 'transport', title: '抵达长沙', desc: '酒店选在五一广场商圈，寄存行李后开始逛吃，位置无敌全程靠走。' },
      { time: '12:00', tag: 'food', title: '午餐 · 湘菜正餐', desc: '费大厨辣椒炒肉或炊烟时代小炒黄牛肉，长沙的辣从这一顿正式开始。' },
      { time: '14:00', tag: 'sight', title: '橘子洲头', desc: '地铁 2 号线直达；青年毛泽东雕像、湘江风光带，观光小火车 ¥20/人往返。' },
      { time: '17:30', tag: 'sight', title: '五一广场商圈', desc: 'IFS 国金中心楼顶打卡 KAWS 雕塑，逛商场避开晚高峰的人流。' },
      { time: '18:30', tag: 'food', title: '太平街 → 坡子街', desc: '黑色经典臭豆腐、糖油粑粑、大香肠，一条街从头吃到尾。' },
      { time: '20:00', tag: 'food', title: '茶颜悦色打卡', desc: '幽兰拿铁 + 声声乌龙，人手一杯的长沙仪式感，小程序点单免排队。' },
      { time: '21:30', tag: 'food', title: '宵夜 · 口味虾', desc: '黄兴路步行街嗦虾收尾，记得说"微辣"，给明天留点余地。' }
    ],
    transport: '张家界西 → 长沙南 · 高铁约 2h30m · ¥180/人',
    hotel: '长沙 · 五一广场商圈酒店',
    tip: '橘子洲十一期间限流，务必提前在「橘洲文旅」公众号预约免费门票；节假日地铁比打车快。'
  },
  {
    day: 7, date: '10.07', weekday: '周三', cityKey: 'changsha', city: '长沙',
    place: '长沙 · 岳麓山 & 黄花机场', theme: '岳麓寻秋 · 星城道别',
    subtitle: '爱晚亭边枫渐红，机场出口拥抱后各奔山海',
    image: IMG.aiWanTing, imageAlt: '岳麓山爱晚亭',
    schedule: [
      { time: '08:00', tag: 'note', title: '退房寄存', desc: '早餐来一碗长沙米粉或嗦个粉码面，元气满满开启最后一天。' },
      { time: '08:30', tag: 'transport', title: '地铁至岳麓山', desc: '地铁 2 号线转公交/步行至东门或南门，把登山留给清晨的凉爽。' },
      { time: '09:00', tag: 'sight', title: '岳麓山 · 爱晚亭', desc: '"停车坐爱枫林晚"，初秋的枫叶正渐次转红，古亭与山色皆是诗意。' },
      { time: '11:00', tag: 'sight', title: '岳麓书院', desc: '¥40/人，千年学府的书香与庭院之美，顺访湖南大学的青春气息。' },
      { time: '12:30', tag: 'food', title: '告别午餐', desc: '坛宗或湘春酒家的剁椒鱼头宴，"鸿运当头"，为这趟旅程画上句号。' },
      { time: '14:00', tag: 'transport', title: '前往黄花机场', desc: '取行李后乘地铁 + 磁浮快线约 50 分钟（或打车约 40 分钟 ¥80）。' },
      { time: '15:30', tag: 'transport', title: '机场分别 · 值机', desc: '十一安检排队较长，预留充足时间；别忘了在出发大厅合影留念。' },
      { time: '17:30', tag: 'transport', title: '一路北上 · 长沙 → 大连', desc: '直飞约 3 小时，参考时段 17:00-19:00，夜抵海滨之城。' },
      { time: '19:00', tag: 'transport', title: '一路南下 · 长沙 → 深圳', desc: '直飞约 1 小时 25 分，参考时段 19:00-21:00，晚归湾区。' }
    ],
    transport: '长沙 → 大连 ¥900-1300 /人 · 长沙 → 深圳 ¥500-800 /人',
    hotel: '各自归家 · 后会有期',
    tip: '两趟航班时间不同，先送早出发的那位；分别前记得拥抱合影——山水一程，来日方长。'
  }
];

/* ---------------- 城际交通 ---------------- */
export const transportList = [
  {
    from: '深圳', to: '郴州', icon: 'ri-train-line', mode: '高铁直达',
    duration: '约 1h40m', price: '¥244.5/人 起',
    note: '深圳北 → 郴州西，建议 08:00-09:00 班次，开售即抢',
    theme: { bg: 'bg-sky-50', iconBg: 'bg-sky-500', text: 'text-sky-700', border: 'hover:border-sky-300' }
  },
  {
    from: '郴州', to: '张家界', icon: 'ri-route-line', mode: '动车中转',
    duration: '约 4.5h', price: '¥260-330/人',
    note: '郴州西 → 长沙南 → 张家界西，建议 17:00 前后出发',
    theme: { bg: 'bg-teal-50', iconBg: 'bg-teal-500', text: 'text-teal-700', border: 'hover:border-teal-300' }
  },
  {
    from: '张家界', to: '长沙', icon: 'ri-train-line', mode: '高铁直达',
    duration: '约 2h30m', price: '¥180/人 起',
    note: '张家界西 → 长沙南，建议 09:00 班次，午后抵达',
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
    from: '市区', to: '黄花机场', icon: 'ri-subway-line', mode: '磁浮 + 地铁',
    duration: '约 50min', price: '约 ¥30/人',
    note: '长沙南站乘磁浮快线直达航站楼；打车约 40 分钟 ¥80',
    theme: { bg: 'bg-amber-50', iconBg: 'bg-amber-500', text: 'text-amber-700', border: 'hover:border-amber-300' }
  }
];

/* ---------------- 美食清单 ---------------- */
export const foods = [
  {
    city: '郴州', icon: 'ri-mountains-line', color: 'bg-emerald-600', chip: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: '栖凤渡鱼粉', emoji: '🍜', desc: '郴州人的早餐灵魂，鱼汤鲜辣、米粉滑嫩，加个煎蛋更满足', star: 5, must: true },
      { name: '东江湖鱼宴', emoji: '🐟', desc: '一湖好水养好鱼，剁椒雄鱼头鲜掉眉毛', star: 5, must: true },
      { name: '烧鸡公', emoji: '🍗', desc: '本地宵夜顶流，现杀公鸡猛火爆炒，越吃越上头', star: 4 },
      { name: '马田豆腐', emoji: '🧈', desc: '外焦里嫩的油炸豆腐，豆香与辣油齐飞', star: 4 }
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
  },
  {
    city: '长沙', icon: 'ri-city-line', color: 'bg-orange-500', chip: 'bg-orange-50 text-orange-600',
    items: [
      { name: '黑色经典臭豆腐', emoji: '🖤', desc: '外酥里嫩，戳开浇上灵魂汤汁，长沙街头味道图腾', star: 5, must: true, img: IMG.foodChou },
      { name: '茶颜悦色', emoji: '🧋', desc: '幽兰拿铁 + 声声乌龙，中式国风茶饮的浪漫', star: 5, must: true },
      { name: '辣椒炒肉', emoji: '🌶️', desc: '湘菜之魂，螺丝椒 + 土猪肉，拌饭两碗起步', star: 5 },
      { name: '剁椒鱼头', emoji: '🐟', desc: '红剁椒铺满大鱼头，"鸿运当头"的告别宴主菜', star: 5 },
      { name: '糖油粑粑', emoji: '🍡', desc: '糯米糖油现炸，外壳微脆、内里软糯，甜进心里', star: 4 },
      { name: '口味虾', emoji: '🦞', desc: '星城夜宵王者，麻辣鲜香，戴上手套开炫', star: 5 },
      { name: '太平街小吃巡礼', emoji: '🏮', desc: '千年老街一路吃过去：大香肠、龙脂猪血、梅菜饼', star: 4, img: IMG.foodTaiping }
    ]
  }
];

/* ---------------- 预算（两人合计） ---------------- */
export const budget = {
  total: 10900,
  note: '十一黄金周为旺季峰值价，两人合计估算，实际以预订为准',
  items: [
    { name: '城际交通', amount: 3300, icon: 'ri-train-line', color: '#0ea5e9', desc: '高铁 3 段 + 机票 2 趟（双人）' },
    { name: '住宿 6 晚', amount: 2400, icon: 'ri-hotel-bed-line', color: '#8b5cf6', desc: '均价 ¥400/晚，景区与商圈地段' },
    { name: '餐饮美食', amount: 2100, icon: 'ri-restaurant-2-line', color: '#f97316', desc: '日均 ¥300，含两顿仪式感大餐' },
    { name: '门票索道', amount: 2000, icon: 'ri-ticket-2-line', color: '#14b8a6', desc: '五大景区门票 + 索道/天梯/游船' },
    { name: '购物机动', amount: 1100, icon: 'ri-shopping-bag-3-line', color: '#f43f5e', desc: '特产手信 + 应急余量' }
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
    icon: 'ri-shield-check-line', title: '门票预约',
    theme: { bg: 'bg-jade-50', iconBg: 'bg-jade-600', text: 'text-jade-700' },
    desc: '天门山提前 3-5 天官方渠道购票（A 线最紧俏）；橘子洲免费但需公众号预约；武陵源、高椅岭建议线上提前买。'
  },
  {
    icon: 'ri-t-shirt-line', title: '穿衣指南',
    theme: { bg: 'bg-sky-50', iconBg: 'bg-sky-500', text: 'text-sky-700' },
    desc: '10 月初湖南白天 22-28°C，山区早晚约 15°C。薄外套 + 舒适运动鞋必备，日均步行 2 万步起。'
  },
  {
    icon: 'ri-fire-line', title: '辣度预警',
    theme: { bg: 'bg-orange-50', iconBg: 'bg-orange-500', text: 'text-orange-700' },
    desc: '湘菜默认中辣起步，点单说"微辣"是对广东胃最后的温柔；备好肠胃药，茶颜悦色的茶也能救急。'
  },
  {
    icon: 'ri-camera-lens-line', title: '拍照时刻',
    theme: { bg: 'bg-violet-50', iconBg: 'bg-violet-500', text: 'text-violet-700' },
    desc: '小东江晨雾 6:30-8:30 最佳；高椅岭下午 4 点后光线最柔；天门山上午顺光；橘子洲黄昏逆光剪影绝美。'
  },
  {
    icon: 'ri-heart-pulse-line', title: '分别安排',
    theme: { bg: 'bg-indigo-50', iconBg: 'bg-indigo-500', text: 'text-indigo-700' },
    desc: '10.7 预留至少 3.5 小时余量赴机场；行李提前一晚打包；先送早出发的航班，出发大厅合影留给未来。'
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

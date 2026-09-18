/* ============================================================
 * 湘约十一 · 主逻辑（ESModule）
 * ============================================================ */
import {
  IMG, tripMeta, routeStops, cityTabs, itinerary,
  transportList, hotelStays, foods, budget, tips, flights
} from './data.js';

/* ---------------- 通用工具 ---------------- */
const $ = (sel) => document.querySelector(sel);

const TAG_STYLE = {
  transport: { chip: 'bg-sky-50 text-sky-700', icon: 'ri-route-line' },
  sight: { chip: 'bg-jade-50 text-jade-700', icon: 'ri-camera-eye-line' },
  food: { chip: 'bg-orange-50 text-orange-600', icon: 'ri-restaurant-line' },
  hotel: { chip: 'bg-violet-50 text-violet-700', icon: 'ri-hotel-line' },
  note: { chip: 'bg-stone-100 text-stone-600', icon: 'ri-information-line' }
};

const CITY_THEME = {
  zhangjiajie: { badge: 'bg-teal-600', dot: 'border-teal-500', text: 'text-teal-700' },
  changsha: { badge: 'bg-orange-500', dot: 'border-orange-400', text: 'text-orange-600' }
};

const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

/* ---------------- Hero 统计带 ---------------- */
function renderHeroStats() {
  const wrap = $('#heroStats');
  if (!wrap) return;
  wrap.innerHTML = tripMeta.stats.map((s, i) => `
    <div class="${i === tripMeta.stats.length - 1 ? 'col-span-2 sm:col-span-1 ' : ''}rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-4 py-3 text-center hover:bg-white/15 transition-colors">
      <div class="text-2xl sm:text-3xl font-black text-white leading-none">${s.value}<span class="text-sm font-semibold text-emerald-200 ml-0.5">${s.unit}</span></div>
      <div class="text-xs text-emerald-50/70 mt-1.5">${s.label}</div>
    </div>
  `).join('');
}

/* ---------------- 路线总览 ---------------- */
function renderRoute() {
  const grid = $('#routeGrid');
  if (!grid) return;
  grid.innerHTML = routeStops.map((s, i) => `
    <div class="reveal reveal-delay-${i % 5} relative bg-white rounded-2xl border border-stone-200 p-6 text-center hover-lift hover:border-jade-300">
      <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900 text-[11px] font-bold tracking-widest text-white">${s.tag}</div>
      <div class="w-14 h-14 mx-auto rounded-2xl ${s.bg} flex items-center justify-center text-2xl">${s.icon}</div>
      <h3 class="mt-4 text-lg font-bold text-slate-900">${s.city}</h3>
      <div class="mt-1 text-xs font-medium ${s.text}">${s.date}</div>
      <p class="mt-2 text-xs text-slate-500 leading-relaxed">${s.desc}</p>
      <div class="mt-3 flex flex-wrap justify-center gap-1.5">
        ${s.highlights.map((h) => `<span class="px-2 py-0.5 rounded-full ${s.chip} text-[11px] font-medium">${h}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------------- 行程时间轴 ---------------- */
function dayCard(d) {
  const theme = CITY_THEME[d.cityKey];
  return `
  <article class="day-card reveal relative pl-16 lg:pl-20">
    <div class="absolute left-0 top-10 w-10 h-10 rounded-full ${theme.badge} text-white flex items-center justify-center font-black text-sm shadow-lg shadow-slate-900/20 ring-4 ring-white z-10">D${d.day}</div>
    <div class="group grid lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-2xl hover:shadow-slate-900/10 transition-shadow duration-500">
      <div class="lg:col-span-4 relative img-zoom min-h-60 lg:min-h-full">
        <img src="${d.image}" alt="${d.imageAlt}" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"></div>
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-slate-800">Day ${d.day}</span>
          <span class="px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur text-xs font-medium text-white">${d.date} ${d.weekday}</span>
        </div>
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <div class="text-xs opacity-80"><i class="ri-map-pin-2-fill mr-1"></i>${d.place}</div>
          <div class="text-xl font-bold mt-0.5">${d.theme}</div>
        </div>
      </div>
      <div class="lg:col-span-8 p-6 sm:p-8">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg text-xs font-bold text-white ${theme.badge}">${d.city}</span>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900">${d.theme} · ${d.date}</h3>
        </div>
        <p class="mt-2 text-sm text-slate-500">${d.subtitle}</p>
        <div class="mt-6 ml-1 pl-6 border-l-2 border-stone-100 space-y-5">
          ${d.schedule.map((s) => {
            const t = TAG_STYLE[s.tag] || TAG_STYLE.note;
            return `
            <div class="schedule-item">
              <div class="flex items-start gap-3">
                <span class="inline-flex shrink-0 items-center gap-1 px-2.5 py-1 rounded-lg ${t.chip} text-xs font-bold tabular-nums">
                  <i class="${t.icon}"></i>${s.time}
                </span>
                <div class="min-w-0">
                  <div class="font-semibold text-slate-800 text-sm">${s.title}</div>
                  <p class="mt-1 text-sm text-slate-500 leading-relaxed">${s.desc}</p>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="mt-6 grid sm:grid-cols-2 gap-3">
          <div class="flex items-start gap-2.5 rounded-xl bg-sky-50/70 border border-sky-100 px-4 py-3">
            <i class="ri-route-fill text-sky-500 mt-0.5"></i>
            <div>
              <div class="text-xs font-bold text-sky-700">当日交通</div>
              <div class="text-xs text-slate-600 mt-0.5 leading-relaxed">${d.transport}</div>
            </div>
          </div>
          <div class="flex items-start gap-2.5 rounded-xl bg-violet-50/70 border border-violet-100 px-4 py-3">
            <i class="ri-hotel-fill text-violet-500 mt-0.5"></i>
            <div>
              <div class="text-xs font-bold text-violet-700">当晚住宿</div>
              <div class="text-xs text-slate-600 mt-0.5 leading-relaxed">${d.hotel}</div>
            </div>
          </div>
        </div>
        <div class="mt-4 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200/70 px-4 py-3">
          <i class="ri-lightbulb-flash-fill text-amber-500 mt-0.5 shrink-0"></i>
          <p class="text-xs text-amber-800 leading-relaxed">${d.tip}</p>
        </div>
      </div>
    </div>
  </article>`;
}

let revealObserver = null;

function initRevealObserver() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
}

function observeReveals(scope = document) {
  if (!revealObserver) initRevealObserver();
  scope.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObserver.observe(el));
}

function renderTabs(activeKey = 'all') {
  const bar = $('#cityTabs');
  if (!bar) return;
  bar.innerHTML = cityTabs.map((t) => {
    const isActive = t.key === activeKey;
    return `
    <button type="button" class="tab-btn ${isActive ? 'active' : 'bg-white text-slate-600 border border-stone-200 hover:border-jade-400 hover:text-jade-700'} inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold" data-tab="${t.key}">
      <i class="${t.icon}"></i>${t.label}
      <span class="px-1.5 py-px rounded-full ${isActive ? 'bg-white/25' : 'bg-stone-100'} text-xs">${t.count}</span>
    </button>`;
  }).join('');
}

function renderTimeline(key = 'all') {
  const timeline = $('#timeline');
  if (!timeline) return;
  const days = key === 'all' ? itinerary : itinerary.filter((d) => d.cityKey === key);
  timeline.innerHTML = days.map(dayCard).join('');
  observeReveals(timeline);
}

function bindTabEvents() {
  const bar = $('#cityTabs');
  if (!bar) return;
  bar.addEventListener('click', (ev) => {
    const btn = ev.target.closest('[data-tab]');
    if (!btn) return;
    const key = btn.dataset.tab;
    renderTabs(key);
    renderTimeline(key);
    const target = $('#itinerary');
    if (target) window.scrollTo({ top: Math.max(0, target.offsetTop - 84), behavior: 'smooth' });
  });
}

/* ---------------- 交通卡片 ---------------- */
function renderTransport() {
  const grid = $('#transportGrid');
  if (!grid) return;
  grid.innerHTML = transportList.map((t, i) => `
    <div class="reveal reveal-delay-${i % 3} relative rounded-2xl border border-stone-200 bg-white p-6 hover-lift ${t.theme.border} transition-colors">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-12 h-12 rounded-xl ${t.theme.iconBg} text-white flex items-center justify-center text-xl"><i class="${t.icon}"></i></span>
          <div>
            <div class="font-bold text-slate-900">${t.from} <i class="ri-arrow-right-line text-jade-600 text-sm mx-0.5"></i> ${t.to}</div>
            <div class="text-xs ${t.theme.text} font-semibold mt-0.5">${t.mode}</div>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg ${t.theme.bg} text-[11px] font-bold ${t.theme.text}">段 ${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="mt-5 grid grid-cols-2 gap-3">
        <div class="rounded-xl bg-stone-50 px-3 py-2.5">
          <div class="text-[11px] text-slate-400 font-medium">耗时</div>
          <div class="text-sm font-bold text-slate-800 mt-0.5">${t.duration}</div>
        </div>
        <div class="rounded-xl bg-stone-50 px-3 py-2.5">
          <div class="text-[11px] text-slate-400 font-medium">参考票价</div>
          <div class="text-sm font-bold text-slate-800 mt-0.5">${t.price}</div>
        </div>
      </div>
      <p class="mt-4 text-xs text-slate-500 leading-relaxed"><i class="ri-information-line mr-1 text-slate-400"></i>${t.note}</p>
    </div>
  `).join('');
}

/* ---------------- 精选住宿 ---------------- */
function renderHotels() {
  const wrap = $('#hotelWrap');
  if (!wrap) return;
  wrap.innerHTML = hotelStays.map((stay) => `
    <div class="reveal">
      <div class="flex flex-wrap items-center gap-3">
        <span class="w-10 h-10 rounded-xl ${stay.color} text-white flex items-center justify-center text-lg"><i class="${stay.icon}"></i></span>
        <h3 class="text-xl font-bold text-slate-900">${stay.city} · ${stay.area}</h3>
        <span class="px-2.5 py-1 rounded-full ${stay.chip} text-xs font-semibold">${stay.dateRange} · 连住 ${stay.nights} 晚</span>
      </div>
      <p class="mt-3 text-sm text-slate-500 leading-relaxed max-w-3xl">${stay.reason}</p>
      <div class="mt-6 grid md:grid-cols-3 gap-4 items-stretch">
        <div class="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6 flex flex-col">
          <div class="flex items-center gap-2 text-violet-700">
            <i class="ri-price-tag-3-line text-lg"></i>
            <span class="font-bold text-sm">本站房价参考</span>
          </div>
          <div class="mt-3 flex items-baseline gap-1">
            <span class="text-3xl font-black text-slate-900 tabular-nums">${stay.avgPrice}</span>
            <span class="text-sm text-slate-500">/晚</span>
          </div>
          <p class="mt-1.5 text-xs text-slate-500 leading-relaxed">${stay.avgNote}</p>
          <div class="mt-4 pt-4 border-t border-violet-100">
            <div class="flex items-center gap-1.5 text-xs font-bold text-violet-700"><i class="ri-lightbulb-flash-line"></i>订房锦囊</div>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">${stay.advice}</p>
          </div>
        </div>
        ${stay.hotels.map((h) => `
        <div class="rounded-2xl border border-stone-200 bg-white p-6 hover-lift hover:border-jade-300 transition-colors flex flex-col">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <span class="px-2 py-0.5 rounded-full ${h.tierTheme} text-white text-[11px] font-bold">${h.tier}</span>
              <h4 class="mt-2.5 font-bold text-slate-900 leading-snug">${h.name}</h4>
              <div class="mt-1 text-xs text-slate-400">${h.type}</div>
            </div>
            <div class="text-right shrink-0">
              <div class="text-lg font-black text-jade-700 tabular-nums">${h.price}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">/晚 · 十一参考</div>
            </div>
          </div>
          <div class="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
            <i class="ri-map-pin-2-line mt-0.5 text-slate-400 shrink-0"></i>
            <span>${h.addr}</span>
          </div>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed flex-1">${h.desc}</p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            ${h.tags.map((t) => `<span class="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------------- 美食清单 ---------------- */
function renderFoods() {
  const wrap = $('#foodWrap');
  if (!wrap) return;
  wrap.innerHTML = foods.map((city, ci) => `
    <div class="reveal reveal-delay-${ci % 2}">
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 rounded-xl ${city.color} text-white flex items-center justify-center text-lg"><i class="${city.icon}"></i></span>
        <h3 class="text-xl font-bold text-slate-900">${city.city}味道</h3>
        <span class="px-2.5 py-1 rounded-full ${city.chip} text-xs font-semibold">${city.items.length} 必打卡</span>
      </div>
      <div class="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${city.items.map((f) => f.img ? `
        <div class="group relative rounded-2xl overflow-hidden border border-stone-200 img-zoom hover-lift sm:col-span-2 lg:col-span-1 h-56 lg:h-60">
          <img src="${f.img}" alt="${f.name}" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent"></div>
          ${f.must ? '<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-maple-500 text-white text-[11px] font-bold shadow">必吃 TOP</span>' : ''}
          <div class="absolute bottom-0 inset-x-0 p-5 text-white">
            <div class="text-2xl">${f.emoji}</div>
            <div class="mt-1 font-bold text-lg">${f.name}</div>
            <p class="mt-1 text-xs text-slate-200/85 leading-relaxed">${f.desc}</p>
            <div class="mt-2 text-xs text-amber-300 tracking-widest">${stars(f.star)}</div>
          </div>
        </div>` : `
        <div class="rounded-2xl border border-stone-200 bg-white p-5 hover-lift hover:border-jade-300 transition-colors flex flex-col">
          <div class="flex items-start justify-between">
            <span class="text-3xl">${f.emoji}</span>
            ${f.must ? '<span class="px-2 py-0.5 rounded-full bg-maple-50 text-maple-600 border border-maple-200 text-[11px] font-bold">必吃</span>' : ''}
          </div>
          <h4 class="mt-3 font-bold text-slate-900">${f.name}</h4>
          <p class="mt-1.5 text-xs text-slate-500 leading-relaxed">${f.desc}</p>
          <div class="mt-auto pt-3 text-xs text-amber-400 tracking-widest">${stars(f.star)}</div>
        </div>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------------- 预算：列表 + ECharts 环形图 ---------------- */
function renderBudgetList() {
  const box = $('#budgetList');
  if (!box) return;
  const max = Math.max(...budget.items.map((i) => i.amount));
  box.innerHTML = budget.items.map((it) => {
    const pct = Math.round((it.amount / budget.total) * 100);
    return `
    <div class="rounded-2xl border border-stone-200 bg-white p-5 hover-lift">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3 min-w-0">
          <span class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white text-lg" style="background:${it.color}"><i class="${it.icon}"></i></span>
          <div class="min-w-0">
            <div class="font-bold text-slate-900">${it.name}</div>
            <div class="text-xs text-slate-400 mt-0.5 truncate">${it.desc}</div>
          </div>
        </div>
        <div class="text-right shrink-0">
          <div class="font-black text-slate-900 tabular-nums">¥${it.amount.toLocaleString()}</div>
          <div class="text-xs text-slate-400">占比 ${pct}%</div>
        </div>
      </div>
      <div class="mt-3 h-2 rounded-full bg-stone-100 overflow-hidden">
        <div class="budget-bar h-full rounded-full" style="--bar-w:${(it.amount / max) * 100}%; background:linear-gradient(90deg,${it.color}bb,${it.color})"></div>
      </div>
    </div>`;
  }).join('') + `
    <div class="mt-4 rounded-2xl bg-gradient-to-r from-jade-700 to-jade-500 p-6 text-white flex items-center justify-between flex-wrap gap-3">
      <div>
        <div class="text-sm text-emerald-100/85">两人合计预算（估算）</div>
        <div class="text-3xl font-black mt-1 tabular-nums">¥ ${budget.total.toLocaleString()}</div>
      </div>
      <div class="text-xs text-emerald-100/75 max-w-xs leading-relaxed"><i class="ri-error-warning-line mr-1"></i>${budget.note}</div>
    </div>`;

  requestAnimationFrame(() => {
    setTimeout(() => box.querySelectorAll('.budget-bar').forEach((b) => b.classList.add('animated')), 300);
  });
}

async function initBudgetChart() {
  const el = $('#budgetChart');
  if (!el) return;
  try {
    const echarts = await import('https://cdn.jsdelivr.net/npm/echarts@5.5.0/core.js');
    const [{ PieChart }, { TooltipComponent, LegendComponent }, { CanvasRenderer }] = await Promise.all([
      import('https://cdn.jsdelivr.net/npm/echarts@5.5.0/charts.js'),
      import('https://cdn.jsdelivr.net/npm/echarts@5.5.0/components.js'),
      import('https://cdn.jsdelivr.net/npm/echarts@5.5.0/renderers.js')
    ]);
    echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

    const chart = echarts.init(el);
    chart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: (p) => `${p.marker} ${p.name}<br/>预算：¥${p.value.toLocaleString()}（${p.percent}%）`
      },
      legend: {
        bottom: '0%',
        left: 'center',
        itemWidth: 12,
        itemHeight: 12,
        icon: 'circle',
        textStyle: { color: '#64748b', fontSize: 12 }
      },
      series: [{
        type: 'pie',
        radius: ['46%', '68%'],
        center: ['50%', '42%'],
        avoidLabelOverlap: true,
        itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 3 },
        label: {
          show: true,
          position: 'center',
          formatter: () => `两人总预算\n¥${budget.total.toLocaleString()}`,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#0f172a',
          lineHeight: 24
        },
        emphasis: {
          scaleSize: 6,
          label: {
            show: true,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#0f172a',
            formatter: () => `两人总预算\n¥${budget.total.toLocaleString()}`
          }
        },
        labelLine: { show: false },
        data: budget.items.map((it) => ({
          name: it.name,
          value: it.amount,
          itemStyle: { color: it.color }
        }))
      }]
    });
    window.addEventListener('resize', () => chart.resize());
  } catch (err) {
    el.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center text-slate-400 text-sm gap-2">
        <i class="ri-pie-chart-line text-4xl"></i>
        <p>图表组件加载失败，请查看右侧预算明细</p>
      </div>`;
  }
}

/* ---------------- 贴士锦囊 ---------------- */
function renderTips() {
  const grid = $('#tipsGrid');
  if (!grid) return;
  grid.innerHTML = tips.map((t, i) => `
    <div class="reveal reveal-delay-${i % 3} rounded-2xl border border-stone-200 bg-white p-6 hover-lift">
      <div class="flex items-center gap-3">
        <span class="w-11 h-11 rounded-xl ${t.theme.iconBg} text-white flex items-center justify-center text-xl"><i class="${t.icon}"></i></span>
        <h3 class="font-bold text-slate-900">${t.title}</h3>
      </div>
      <p class="mt-3.5 text-sm text-slate-500 leading-relaxed">${t.desc}</p>
    </div>
  `).join('');
}

/* ---------------- 分别航班 ---------------- */
function renderFlights() {
  const grid = $('#flightCards');
  if (!grid) return;
  grid.innerHTML = flights.map((f, i) => `
    <div class="reveal reveal-delay-${i + 1} rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 ${f.ring}">
      <div class="flex items-center justify-between text-white/60 text-xs font-semibold tracking-widest">
        <span>${f.code}</span>
        <i class="${f.icon} ${f.accent} text-lg"></i>
      </div>
      <div class="mt-6 flex items-end justify-between text-white">
        <div>
          <div class="text-xs text-slate-400">${f.from}</div>
          <div class="mt-1 text-lg font-bold leading-tight">长沙</div>
        </div>
        <div class="flex-1 mx-4 mb-2">
          <div class="flight-dash h-0.5 rounded-full"></div>
          <div class="mt-2 text-center text-xs ${f.accent} font-medium">${f.duration}</div>
        </div>
        <div class="text-right">
          <div class="text-xs text-slate-400">${f.to}</div>
          <div class="mt-1 text-lg font-bold leading-tight">${f.code.endsWith('DLC') ? '大连' : '深圳'}</div>
        </div>
      </div>
      <div class="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
        <span class="text-slate-400">${f.window}</span>
        <span class="${f.accent} font-semibold">${f.direction}</span>
      </div>
    </div>
  `).join('');
}

/* ---------------- 导航：移动端菜单 & ScrollSpy ---------------- */
function bindNav() {
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  const navLinks = document.querySelectorAll('.nav-link[data-nav]');
  const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => spy.observe(s));

  const nav = $('#navbar');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    nav.classList.toggle('shadow-md', window.scrollY > 24);
  }, { passive: true });
}

/* ---------------- 初始化 ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderHeroStats();
  renderRoute();
  renderTabs();
  renderTimeline('all');
  bindTabEvents();
  renderTransport();
  renderHotels();
  renderFoods();
  renderBudgetList();
  initBudgetChart();
  renderTips();
  renderFlights();
  bindNav();
  observeReveals();
});

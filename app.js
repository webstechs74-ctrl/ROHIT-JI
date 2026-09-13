// ===== APP: sidebar build, routing, dashboard content =====

let currentPage = "dashboard";
let openGroup = null;

function iconTile(t){
  return `
  <div class="tile">
    <div class="icon" style="background:${t.color}">${t.icon}</div>
    <div>
      <div class="name">${t.label}</div>
      <div class="amt">${t.value}</div>
    </div>
  </div>`;
}

function statCard(s){
  return `
  <div class="stat-card">
    <div class="icon" style="background:${s.color}">${s.icon}</div>
    <div><div class="lbl">${s.label}</div><div class="val">${s.value}</div></div>
  </div>`;
}

// ---------- Build sidebar ----------
function buildNav(){
  const root = document.getElementById("navRoot");
  root.innerHTML = NAV.map(item => {
    if(item.type === "page"){
      return `<div class="nav-item" data-id="${item.id}" onclick="navigate('${item.id}')">
        <div class="left"><span class="ic">${item.icon}</span><span>${item.label}</span></div>
      </div>`;
    }
    const subHtml = item.children.map(c =>
      `<div class="sub-item" data-id="${c.id}" onclick="event.stopPropagation();navigate('${c.id}')">${c.label}</div>`
    ).join("");
    return `
      <div class="nav-item" data-group="${item.id}" onclick="toggleGroup('${item.id}')">
        <div class="left"><span class="ic">${item.icon}</span><span>${item.label}</span></div>
        <span class="chev">▸</span>
      </div>
      <div class="submenu" data-submenu="${item.id}">${subHtml}</div>`;
  }).join("");
}

function toggleGroup(groupId){
  const submenu = document.querySelector(`.submenu[data-submenu="${groupId}"]`);
  const navItem = document.querySelector(`.nav-item[data-group="${groupId}"]`);
  const isOpen = submenu.classList.contains("open");
  document.querySelectorAll(".submenu.open").forEach(s => s.classList.remove("open"));
  document.querySelectorAll(".nav-item.open").forEach(s => s.classList.remove("open"));
  if(!isOpen){
    submenu.classList.add("open");
    navItem.classList.add("open");
    openGroup = groupId;
  } else {
    openGroup = null;
  }
}

function findLabel(pageId){
  for(const item of NAV){
    if(item.id === pageId) return item.label;
    if(item.children){
      const found = item.children.find(c => c.id === pageId);
      if(found) return found.label;
    }
  }
  return pageId;
}

function findParentGroup(pageId){
  for(const item of NAV){
    if(item.children && item.children.some(c => c.id === pageId)) return item.id;
  }
  return null;
}

function isNavPage(pageId){
  return NAV.some(item => item.id === pageId || (item.children && item.children.some(c => c.id === pageId)));
}

function navigate(pageId, customLabel){
  currentPage = pageId;
  document.getElementById("crumbText").textContent = customLabel || findLabel(pageId);

  // highlight active states
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.querySelectorAll(".sub-item").forEach(n => n.classList.remove("active"));

  const parentGroup = findParentGroup(pageId);
  if(parentGroup){
    const submenu = document.querySelector(`.submenu[data-submenu="${parentGroup}"]`);
    const navItem = document.querySelector(`.nav-item[data-group="${parentGroup}"]`);
    document.querySelectorAll(".submenu.open").forEach(s => s.classList.remove("open"));
    document.querySelectorAll(".nav-item.open").forEach(s => s.classList.remove("open"));
    submenu.classList.add("open");
    navItem.classList.add("open");
    const subItem = document.querySelector(`.sub-item[data-id="${pageId}"]`);
    if(subItem) subItem.classList.add("active");
    openGroup = parentGroup;
  } else {
    const navItem = document.querySelector(`.nav-item[data-id="${pageId}"]`);
    if(navItem) navItem.classList.add("active");
  }

  renderContent(pageId);
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderContent(pageId){
  const el = document.getElementById("content");
  if(pageId === "dashboard"){
    const dashboardRenderer = PAGE_RENDERERS["dashboard"];
    el.innerHTML = dashboardRenderer ? dashboardRenderer() : dashboardHTML();
    initCharts();
    return;
  }
  const renderer = PAGE_RENDERERS[pageId];
  if(!renderer){
    el.innerHTML = `<div class="page-card"><div class="empty-note">Page not found</div></div>`;
    return;
  }
  // Custom-designed pages (not part of the sidebar menu) render their own header/layout
  el.innerHTML = isNavPage(pageId) ? `<h1 class="page-title">${findLabel(pageId)}</h1>${renderer()}` : renderer();
}

function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{ t.style.display="none"; }, 2600);
}

// ---------- Dashboard content (mirrors original layout) ----------
const STATS = [
  { label:"Success Transaction", value:"2000", icon:"✔", color:"#12b76a" },
  { label:"Pending Transaction", value:"5324", icon:"⏱", color:"#f5a524" },
  { label:"Failed Transaction",  value:"1234", icon:"✖", color:"#f04438" },
  { label:"Refund Transaction",  value:"2000", icon:"↺", color:"#c8992f" },
];

const WALLET_ROW1 = [
  { label:"AEPS CHANNEL 1", value:"₹8000",    icon:"🖐", color:"#7a5cff" },
  { label:"AEPS CHANNEL 2", value:"₹36,789",  icon:"🖐", color:"#c8992f" },
  { label:"PPI DMT",        value:"₹234",     icon:"📲", color:"#c8992f" },
  { label:"BBPS",           value:"₹6847686", icon:"🧾", color:"#151d33" },
  { label:"PAYOUT",         value:"₹6847686", icon:"💳", color:"#8a91a6" },
];
const WALLET_ROW2 = [
  { label:"NSDL PAN CARD",  value:"₹6847686", icon:"🪪", color:"#7a5cff" },
  { label:"M ATM",          value:"₹6847686", icon:"🏧", color:"#f5a524" },
  { label:"IRCTC AGENT",    value:"₹6847686", icon:"🚆", color:"#c8992f" },
  { label:"CMS",            value:"₹6847686", icon:"💰", color:"#12b76a" },
  { label:"DTH RECHARGE",   value:"₹6847686", icon:"📡", color:"#f04438" },
];
const WALLET_ROW3 = [
  { label:"MOBILE RECHARGE",     value:"₹6847686", icon:"📱", color:"#c8992f" },
  { label:"NSDL ACCOUNT OPENING",value:"₹6847686", icon:"🔄", color:"#12b76a" },
  { label:"BUS BOOKING",         value:"₹6847686", icon:"🚌", color:"#f5a524" },
  { label:"FLIGHT BOOKING",      value:"₹6847686", icon:"✈",  color:"#7a5cff" },
];

const COMMISSION_ROW1 = [
  { label:"COMPANY AEPS WALLET",     value:"₹8000",    icon:"🖐", color:"#7a5cff" },
  { label:"COMPANY E-WALLET",        value:"₹36,789",  icon:"📶", color:"#c8992f" },
  { label:"COMPANY PARTNER WALLET",  value:"₹234",     icon:"👛", color:"#f5a524" },
  { label:"ALL CUSTOMER USER WALLET",value:"₹6847686", icon:"👛", color:"#151d33" },
  { label:"TODAY COMMISSION AEPS",   value:"₹6847686", icon:"🖐", color:"#c8992f" },
];
const COMMISSION_ROW2 = [
  { label:"MONTHLY COMMISSION AEPS", value:"₹8000",    icon:"🖐", color:"#7a5cff" },
  { label:"TODAY CHARGE ALL SERVICE",value:"₹36,789",  icon:"📱", color:"#c8992f" },
  { label:"MONTHLY CHARGE ALL SERVICE",value:"₹234",   icon:"🧾", color:"#151d33" },
  { label:"CREDIT COMMISSION ALL",   value:"₹6847686", icon:"🤲", color:"#12b76a" },
  { label:"DEBIT COMMISSION ALL",    value:"₹6847686", icon:"🤲", color:"#f04438" },
];
const COMMISSION_ROW3 = [
  { label:"NET COMMISSION ALL", value:"₹8000", icon:"🤲", color:"#7a5cff" },
];

const PARTNER_SUMMARY = [
  { label:"API PARTNER",      value:"₹8000",    icon:"👥", color:"#f5a524" },
  { label:"RESELLER PARTNER", value:"₹36,789",  icon:"⚙",  color:"#c8992f" },
  { label:"B2B PARTNER",      value:"₹234",     icon:"B2B", color:"#151d33" },
  { label:"WL PARTNER",       value:"₹6847686", icon:"WL", color:"#8a91a6" },
  { label:"TOTAL CUSTOMER",   value:"₹6847686", icon:"👥", color:"#7a5cff" },
];

function dashboardHTML(){
  return `
  <h1 class="page-title">Dashboard</h1>

  <div class="grid grid-4">${STATS.map(statCard).join("")}</div>

  <div class="section-label">Company wallet transaction summary Mera Digital Pay</div>
  <div class="dates"><input type="text" placeholder="dd/mm/yyyy" readonly><input type="text" placeholder="dd/mm/yyyy" readonly></div>
  <div class="grid grid-5">${WALLET_ROW1.map(iconTile).join("")}</div>
  <div class="grid grid-5">${WALLET_ROW2.map(iconTile).join("")}</div>
  <div class="grid grid-5">${WALLET_ROW3.map(iconTile).join("")}</div>

  <div class="section-label">Wallet and commission charge summary</div>
  <div class="grid grid-5">${COMMISSION_ROW1.map(iconTile).join("")}</div>
  <div class="grid grid-5">${COMMISSION_ROW2.map(iconTile).join("")}</div>
  <div class="grid grid-5">${COMMISSION_ROW3.map(iconTile).join("")}</div>

  <div class="section-label">Company partner summary Mera Digital Pay</div>
  <div class="grid grid-5">${PARTNER_SUMMARY.map(iconTile).join("")}</div>
  <div class="dates"><input type="text" placeholder="dd/mm/yyyy" readonly><input type="text" placeholder="dd/mm/yyyy" readonly></div>

  <div class="charts-row">
    <div class="panel">
      <canvas id="barChart" height="230"></canvas>
      <div class="chart-title">Payout Wallet Transaction Graphs</div>
    </div>
    <div class="panel">
      <canvas id="donutChart" height="230"></canvas>
      <div class="chart-title">Partner Distribution</div>
    </div>
  </div>

  <div class="dates"><input type="text" placeholder="dd/mm/yyyy" readonly><input type="text" placeholder="dd/mm/yyyy" readonly></div>
  <div class="panel">
    <canvas id="monthChart" height="110"></canvas>
  </div>
  `;
}

let charts = {};
function destroyCharts(){
  Object.values(charts).forEach(c => c && c.destroy());
  charts = {};
}

function initCharts(){
  destroyCharts();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const mk = (base) => days.map((_,i)=> Math.round(base + Math.sin(i)*300 + Math.random()*200));

  charts.bar = new Chart(document.getElementById("barChart"), {
    type:"bar",
    data:{
      labels:days,
      datasets:[
        { label:"AEPS",   data:mk(900),  backgroundColor:"#f5a524" },
        { label:"DMT",    data:mk(1100), backgroundColor:"#f04438" },
        { label:"BBPS",   data:mk(1000), backgroundColor:"#12b76a" },
        { label:"Payout", data:mk(950),  backgroundColor:"#c8992f" },
      ]
    },
    options:{
      responsive:true,
      plugins:{ legend:{ display:false } },
      scales:{ y:{ title:{display:true,text:"Total Transaction"}, grid:{color:"#f0f1f6"} }, x:{ grid:{display:false} } }
    }
  });

  charts.donut = new Chart(document.getElementById("donutChart"), {
    type:"doughnut",
    data:{
      labels:["API partner","Reseller partner","B2B partner","WL partner","Total customer"],
      datasets:[{ data:[22,14,28,18,18], backgroundColor:["#c8992f","#e94f8a","#12b76a","#7a5cff","#151d33"], borderWidth:0 }]
    },
    options:{ responsive:true, cutout:"68%", plugins:{ legend:{ position:"bottom", labels:{ boxWidth:10, font:{size:10.5} } } } }
  });

  const dayLabels = Array.from({length:31}, (_,i)=> i+1);
  const dayData = [47495, 4464, 2249, 700, 546, 387, 207, 178, 81, 89, 77, 75, 71, 68, 59, 58, 53, 49, 44, 40, 38, 36, 32, 27, 28, 22, 20, 18, 16];
  while(dayData.length < 31) dayData.push(0);

  charts.month = new Chart(document.getElementById("monthChart"), {
    type:"bar",
    data:{ labels:dayLabels, datasets:[{ label:"Amount", data:dayData, backgroundColor:"#151d33" }] },
    options:{
      responsive:true,
      plugins:{ legend:{ display:false } },
      scales:{ y:{ title:{display:true,text:"Amount"}, grid:{color:"#f0f1f6"} }, x:{ grid:{display:false} } }
    }
  });
}

// ---------- init ----------
buildNav();
navigate("dashboard");

// ===== CUSTOM PAGE: All Adhikari Details =====
// Values are kept in one object so backend/API data can replace them directly.

const ADHIKARI_DETAIL_DEMO = {
  user: { "Name": "Rohit Singh", "Address": "Uttar Pradesh" },
  outlet: {
    "Customer Code": "MEDPYDRS005", "Customer Role": "Reseller Partner",
    "Login No": "7417328236", "KYC No": "N/A", "Created Date": "17/07/2026"
  },
  profile: {
    "Wallet": "₹50.00", "AEPS": "₹50.00", "PG Wallet": "₹0.00",
    "Capping Wallet": "₹0.00", "PAN Card No": "N/A", "Aadhaar No": "N/A"
  },
  parent: { "Parent Name": "N/A", "DT Name": "N/A", "AD Name": "N/A", "MD Name": "N/A" }
};

function escapeAdhikariValue(value){
  return String(value ?? "N/A").replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

async function copyAdhikariValue(value, button){
  const text = String(value ?? "N/A");
  try {
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("textarea");
      input.value = text; input.style.position = "fixed"; input.style.opacity = "0";
      document.body.appendChild(input); input.select(); document.execCommand("copy"); input.remove();
    }
    const old = button.innerHTML;
    button.innerHTML = "✓ Copied"; button.classList.add("copied");
    setTimeout(() => { button.innerHTML = old; button.classList.remove("copied"); }, 1200);
  } catch(error){ toast("Unable to copy this value"); }
}

function adhikariInfoRow(label, value){
  const safeLabel = escapeAdhikariValue(label);
  const safeValue = escapeAdhikariValue(value);
  const encodedValue = encodeURIComponent(String(value ?? "N/A"));
  return `<div class="adhikari-info-row">
    <div class="adhikari-value"><strong>${safeLabel}</strong><span>:</span><span>${safeValue}</span></div>
    <button class="copy-value-btn" type="button" title="Copy ${safeLabel}" data-copy="${encodedValue}"
      onclick="copyAdhikariValue(decodeURIComponent(this.dataset.copy),this)"><span aria-hidden="true">⧉</span> Copy</button>
  </div>`;
}

function adhikariInfoSection(title, values){
  return `<section class="adhikari-info-section"><h3>${escapeAdhikariValue(title)}</h3>
    <div class="adhikari-section-body">${Object.entries(values).map(([l,v])=>adhikariInfoRow(l,v)).join("")}</div>
  </section>`;
}

function page_adhikariDetail(record = ADHIKARI_DETAIL_DEMO){
  return `<div class="adhikari-reference-page">
    <div class="adhikari-reference-head"><div><h2>Adhikari Details</h2>
      <p>Complete user, outlet, wallet and parent information</p></div>
      <span class="adhikari-active-badge"><i></i> Active</span></div>
    <div class="adhikari-info-grid">
      ${adhikariInfoSection("USER INFO",record.user||{})}
      ${adhikariInfoSection("OUTLET INFO",record.outlet||{})}
      ${adhikariInfoSection("PROFILE INFO",record.profile||{})}
      ${adhikariInfoSection("PARENT INFO",record.parent||{})}
    </div></div>`;
}

PAGE_RENDERERS["all-adhikari"] = page_adhikariDetail;
PAGE_RENDERERS["adhikari-detail"] = page_adhikariDetail;

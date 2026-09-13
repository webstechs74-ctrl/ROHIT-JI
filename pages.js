// ===== PAGE HTML BUILDERS =====

function badge(status){
  const map = {
    Active:"green", Approved:"green", Connected:"green",
    Pending:"amber",
    Inactive:"red", Rejected:"red", Disconnected:"red"
  };
  return `<span class="badge ${map[status]||'blue'}">${status}</span>`;
}

function pageHeader(title, sub, ctaLabel, ctaTarget){
  return `
  <div class="head">
    <div>
      <h2>${title}</h2>
      <div class="sub">${sub}</div>
    </div>
    ${ctaLabel ? `<button class="btn" onclick="navigate('${ctaTarget}')">+ ${ctaLabel}</button>` : ""}
  </div>`;
}

function searchRow(placeholder, extra=""){
  return `
  <div class="search-row">
    <input type="text" placeholder="${placeholder}">
    ${extra}
    <button class="btn outline">Search</button>
  </div>`;
}

// ---------- Partner-type tables ----------
function partnerTable(rows, title, sub){
  const trs = rows.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.mobile}</td>
      <td>${p.email}</td>
      <td>${p.type}</td>
      <td>${p.wallet}</td>
      <td>${badge(p.status)}</td>
      <td>
        <button class="act-btn" onclick="toast('Opening details for ${p.name}')">View</button>
        <button class="act-btn" onclick="toast('Edit form for ${p.name}')">Edit</button>
      </td>
    </tr>`).join("");

  return `
  <div class="page-card">
    ${pageHeader(title, sub, "Add Partner", "add-partner")}
    ${searchRow("Search by name, mobile or ID...", `
      <select><option>All Status</option><option>Active</option><option>Inactive</option></select>`)}
    <table>
      <thead><tr>
        <th>Partner ID</th><th>Name</th><th>Mobile</th><th>Email</th><th>Type</th><th>Wallet</th><th>Status</th><th>Action</th>
      </tr></thead>
      <tbody>${trs || `<tr><td colspan="8" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

function page_allPartner(){ return partnerTable(PARTNERS, "All Partner", "Complete list of every partner registered on the platform"); }
function page_apiPartner(){ return partnerTable(PARTNERS.filter(p=>p.type==="API"), "API Partner", "Partners onboarded under the API partner category"); }
function page_b2bPartner(){ return partnerTable(PARTNERS.filter(p=>p.type==="B2B"), "B2B Partner", "Partners onboarded under the B2B partner category"); }
function page_resellerPartner(){ return partnerTable(PARTNERS.filter(p=>p.type==="Reseller"), "Reseller Partner", "Partners onboarded under the Reseller category"); }
function page_blPartner(){ return partnerTable(PARTNERS.filter(p=>p.type==="BL"), "BL Partner", "Partners onboarded under the BL (Business Loan) category"); }

function page_allPartnerDetail(){
  const trs = PARTNERS.map(p => `
    <tr>
      <td>${p.id}</td><td>${p.name}</td><td>${p.mobile}</td><td>${p.email}</td>
      <td>${p.type}</td><td>${p.wallet}</td><td>Jaipur, RJ</td><td>08 Sep 2026</td><td>${badge(p.status)}</td>
      <td><button class="act-btn" onclick="toast('Full profile for ${p.name}')">Profile</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader("All Partner Detail", "Extended profile information for every partner")}
    ${searchRow("Search partner...")}
    <table>
      <thead><tr>
        <th>ID</th><th>Name</th><th>Mobile</th><th>Email</th><th>Type</th><th>Wallet</th><th>Location</th><th>Joined</th><th>Status</th><th>Action</th>
      </tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${PARTNERS.length} of ${PARTNERS.length} records</div>
  </div>`;
}

// ---------- Add Partner form ----------
function page_addPartner(){
  return `
  <div class="page-card">
    ${pageHeader("Add Partner", "Onboard a new partner to the platform")}
    <div class="form-grid">
      <div class="field"><label>Full Name</label><input type="text" placeholder="e.g. Rohit Sharma"></div>
      <div class="field"><label>Mobile Number</label><input type="text" placeholder="10 digit mobile number"></div>
      <div class="field"><label>Email Address</label><input type="email" placeholder="name@example.com"></div>
      <div class="field"><label>Partner Type</label>
        <select><option>API Partner</option><option>B2B Partner</option><option>Reseller Partner</option><option>BL Partner</option></select>
      </div>
      <div class="field"><label>PAN Number</label><input type="text" placeholder="ABCDE1234F"></div>
      <div class="field"><label>Aadhar Number</label><input type="text" placeholder="XXXX XXXX XXXX"></div>
      <div class="field"><label>State</label><input type="text" placeholder="e.g. Rajasthan"></div>
      <div class="field"><label>City</label><input type="text" placeholder="e.g. Jaipur"></div>
      <div class="field" style="grid-column:1/-1;"><label>Address</label><textarea placeholder="Full address"></textarea></div>
    </div>
    <div class="form-actions">
      <button class="btn" onclick="toast('Partner added successfully (demo)')">Save Partner</button>
      <button class="btn outline" onclick="navigate('all-partner')">Cancel</button>
    </div>
  </div>`;
}

// ---------- All Adhikari ----------
function page_allAdhikari(){
  const trs = ADHIKARI.map(a => `
    <tr>
      <td>${a.name}</td><td>${a.designation}</td><td>${a.mobile}</td><td>${a.area}</td><td>${badge(a.status)}</td>
      <td><button class="act-btn" onclick="navigate('adhikari-detail','Adhikari / Partner Details')">View</button>
          <button class="act-btn" onclick="toast('Editing ${a.name}')">Edit</button>
          <button class="act-btn delete" onclick="toast('${a.name} removed (demo)')">Remove</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader("All Adhikari", "Officers and supervisors managing partners across regions", "Add Adhikari", "all-adhikari")}
    ${searchRow("Search by name or area...")}
    <table>
      <thead><tr><th>Name</th><th>Designation</th><th>Mobile</th><th>Area</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${ADHIKARI.length} of ${ADHIKARI.length} records</div>
  </div>`;
}

// ---------- KYC pages ----------
function kycTable(rows, title, sub, mode){
  const trs = rows.map(k => {
    let actions = `<button class="act-btn" onclick="toast('Viewing KYC of ${k.name}')">View</button>`;
    if(mode === "pending"){
      actions += `<button class="act-btn approve" onclick="toast('${k.name} KYC approved (demo)')">Approve</button>
                  <button class="act-btn reject" onclick="toast('${k.name} KYC rejected (demo)')">Reject</button>`;
    } else if(mode === "delete"){
      actions += `<button class="act-btn delete" onclick="toast('${k.name} KYC deleted (demo)')">Delete</button>`;
    }
    return `
    <tr>
      <td>${k.name}</td><td>${k.mobile}</td><td>${k.aadhar}</td><td>${k.pan}</td><td>${k.date}</td>
      <td>${badge(k.status)}</td><td>${actions}</td>
    </tr>`;
  }).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search by name or mobile...")}
    <table>
      <thead><tr><th>Name</th><th>Mobile</th><th>Aadhar</th><th>PAN</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs || `<tr><td colspan="7" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}
function page_pendingKyc(){ return kycTable(KYC.filter(k=>k.status==="Pending"), "Pending AEPS KYC", "KYC requests awaiting review", "pending"); }
function page_approveKyc(){ return kycTable(KYC.filter(k=>k.status==="Approved"), "Approve AEPS KYC", "KYC requests that have been approved", "view"); }
function page_rejectKyc(){ return kycTable(KYC.filter(k=>k.status==="Rejected"), "Reject AEPS KYC", "KYC requests that have been rejected", "view"); }
function page_deleteKyc(){ return kycTable(KYC, "AEPS KYC Delete", "Permanently remove a KYC record from the system", "delete"); }

// ---------- Service pages ----------
function page_allService(){
  const trs = SERVICES.map(s => `
    <tr>
      <td>${s.name}</td><td>${s.category}</td><td>${s.charge}</td><td>${badge(s.status)}</td>
      <td><button class="act-btn" onclick="toast('Editing ${s.name}')">Edit</button>
          <button class="act-btn delete" onclick="toast('${s.name} disabled (demo)')">Disable</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader("All Service", "Every service currently offered on the platform", "Add Service", "add-service")}
    ${searchRow("Search service...")}
    <table>
      <thead><tr><th>Service Name</th><th>Category</th><th>Charge</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${SERVICES.length} of ${SERVICES.length} records</div>
  </div>`;
}

function page_addService(){
  return `
  <div class="page-card">
    ${pageHeader("Add Service", "Create a new service to offer to partners")}
    <div class="form-grid">
      <div class="field"><label>Service Name</label><input type="text" placeholder="e.g. Aadhar Pay"></div>
      <div class="field"><label>Category</label>
        <select><option>Banking</option><option>Money Transfer</option><option>Utility</option><option>Recharge</option><option>Travel</option><option>Govt.</option></select>
      </div>
      <div class="field"><label>Charge Type</label>
        <select><option>Flat</option><option>Percentage</option></select>
      </div>
      <div class="field"><label>Charge Value</label><input type="text" placeholder="e.g. ₹5 or 1.2%"></div>
      <div class="field"><label>Status</label>
        <select><option>Active</option><option>Inactive</option></select>
      </div>
      <div class="field"><label>API Provider</label><input type="text" placeholder="e.g. Paysprint"></div>
      <div class="field" style="grid-column:1/-1;"><label>Description</label><textarea placeholder="Short description of the service"></textarea></div>
    </div>
    <div class="form-actions">
      <button class="btn" onclick="toast('Service added successfully (demo)')">Save Service</button>
      <button class="btn outline" onclick="navigate('all-service')">Cancel</button>
    </div>
  </div>`;
}

function page_packageManage(){
  const cards = PACKAGES.map(p => `
    <div class="pkg-card">
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <ul>${p.services.map(s=>`<li>${s}</li>`).join("")}</ul>
      <button class="btn outline" style="width:100%;" onclick="toast('Editing ${p.name} package')">Edit Package</button>
    </div>`).join("");
  return `
  <div class="page-card">
    ${pageHeader("Package Manage", "Bundle services into packages for partners", "Add Package", "package-manage")}
    <div class="pkg-grid">${cards}</div>
  </div>`;
}

function page_allApiDetail(){
  const trs = API_DETAILS.map(a => `
    <tr>
      <td>${a.name}</td><td>${a.provider}</td><td><code>${a.key}</code></td><td>${badge(a.status)}</td>
      <td><button class="act-btn" onclick="toast('Editing credentials for ${a.name}')">Edit</button>
          <button class="act-btn" onclick="toast('Testing connection for ${a.name}')">Test</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader("All API Detail", "Third-party API integrations connected to the platform")}
    ${searchRow("Search API...")}
    <table>
      <thead><tr><th>API Name</th><th>Provider</th><th>API Key</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${API_DETAILS.length} of ${API_DETAILS.length} records</div>
  </div>`;
}

const PAGE_RENDERERS = {
  "all-partner": page_allPartner,
  "api-partner": page_apiPartner,
  "b2b-partner": page_b2bPartner,
  "reseller-partner": page_resellerPartner,
  "bl-partner": page_blPartner,
  "add-partner": page_addPartner,
  "all-adhikari": page_allAdhikari,
  "pending-kyc": page_pendingKyc,
  "approve-kyc": page_approveKyc,
  "reject-kyc": page_rejectKyc,
  "delete-kyc": page_deleteKyc,
  "all-service": page_allService,
  "add-service": page_addService,
  "package-manage": page_packageManage,
  "all-api-detail": page_allApiDetail,
  "all-partner-detail": page_allPartnerDetail,
};

// ===== GENERIC TEMPLATES for the newly added sections =====

function toggleSwitch(checked, onLabel){
  return `<label class="switch">
    <input type="checkbox" ${checked?"checked":""} onchange="toast('${onLabel} ${checked?'disabled':'enabled'} (demo)')">
    <span class="slider"></span>
  </label>`;
}

// ---- Fund / request style table (Partner, Type, Amount, Date, Status, Action) ----
function fundTable(rows, title, sub, opts={}){
  const showApproveReject = !!opts.actionable;
  const trs = rows.map(r => {
    let actions = `<button class="act-btn" onclick="toast('Viewing request from ${r.partner}')">View</button>`;
    if(showApproveReject && r.status === "Pending"){
      actions += `<button class="act-btn approve" onclick="toast('Request from ${r.partner} approved (demo)')">Approve</button>
                  <button class="act-btn reject" onclick="toast('Request from ${r.partner} rejected (demo)')">Reject</button>`;
    }
    return `
    <tr>
      <td>${r.partner}</td><td>${r.type}</td><td>${r.amount}</td><td>${r.date}</td>
      <td>${badge(r.status)}</td><td>${actions}</td>
    </tr>`;
  }).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search by partner name...")}
    <table>
      <thead><tr><th>Partner</th><th>Type</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs || `<tr><td colspan="6" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Banking-style table (Applicant, Mobile, Product, Date, Status, Action) ----
function bankingTable(rows, title, sub){
  const trs = rows.map(r => `
    <tr>
      <td>${r.applicant}</td><td>${r.mobile}</td><td>${r.product}</td><td>${r.date}</td>
      <td>${badge(r.status)}</td>
      <td><button class="act-btn" onclick="toast('Viewing application of ${r.applicant}')">View</button>
          ${r.status==="Pending"?`<button class="act-btn approve" onclick="toast('${r.applicant} application approved (demo)')">Approve</button>`:""}</td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search applicant...")}
    <table>
      <thead><tr><th>Applicant</th><th>Mobile</th><th>Product</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs || `<tr><td colspan="6" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Billing table ----
function billingTable(rows, title, sub){
  const trs = rows.map(r => `
    <tr>
      <td>${r.invoice}</td><td>${r.type}</td><td>${r.amount}</td><td>${r.date}</td>
      <td>${badge(r.status==="Paid"?"Active":"Pending")}</td>
      <td><button class="act-btn" onclick="toast('Downloading invoice ${r.invoice}')">Download</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search invoice number...")}
    <table>
      <thead><tr><th>Invoice No.</th><th>Type</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs || `<tr><td colspan="6" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Support / ticket style table ----
function supportTable(rows, title, sub){
  const trs = rows.map(r => `
    <tr>
      <td>${r.name}</td><td>${r.subject}</td><td>${r.date}</td>
      <td>${badge(r.status==="Resolved"?"Active":"Pending")}</td>
      <td><button class="act-btn" onclick="toast('Opening thread for ${r.name}')">Open</button>
          ${r.status==="Open"?`<button class="act-btn approve" onclick="toast('Marked resolved (demo)')">Resolve</button>`:""}</td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search by name or subject...")}
    <table>
      <thead><tr><th>Name</th><th>Subject</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs || `<tr><td colspan="5" class="empty-note">No records found</td></tr>`}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Staff table ----
function staffTable(rows, title, sub, addTarget){
  const trs = rows.map(s => `
    <tr>
      <td>${s.name}</td><td>${s.role}</td><td>${s.mobile}</td><td>${badge(s.status)}</td>
      <td><button class="act-btn" onclick="toast('Editing ${s.name}')">Edit</button>
          <button class="act-btn delete" onclick="toast('${s.name} removed (demo)')">Remove</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub, addTarget ? "Add Staff" : null, addTarget)}
    ${searchRow("Search staff...")}
    <table>
      <thead><tr><th>Name</th><th>Role</th><th>Mobile</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Toggle-status table (Merchant Status / 2FA Status) ----
function toggleTable(rows, title, sub, colLabel){
  const trs = rows.map(p => `
    <tr>
      <td>${p.id||p.name}</td><td>${p.name}</td><td>${p.mobile}</td>
      <td>${toggleSwitch(p.status==="Active", p.name)}</td>
      <td><button class="act-btn" onclick="toast('Viewing ${p.name}')">View</button></td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search by name or ID...")}
    <table>
      <thead><tr><th>Partner ID</th><th>Name</th><th>Mobile</th><th>${colLabel}</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Roles table ----
function rolesTable(rows, title, sub, cols){
  const trs = rows.map(r => `
    <tr>
      <td>${r.role||r.name}</td><td>${r.assigned||r.designation}</td><td>${r.permissions||r.area}</td>
      <td>
        <select class="act-btn" style="padding:5px 8px;">
          <option>Keep Current Role</option><option>Zonal Manager</option><option>State Head</option><option>Support Staff</option>
        </select>
        <button class="act-btn approve" onclick="toast('Role updated (demo)')">Update</button>
      </td>
    </tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    ${searchRow("Search...")}
    <table>
      <thead><tr><th>${cols[0]}</th><th>${cols[1]}</th><th>${cols[2]}</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Commission slabs table ----
function commissionTable(rows, title, sub){
  const trs = rows.map(c => `
    <tr><td>${c.service}</td><td>${c.partnerType}</td><td>${c.rate}</td>
      <td><button class="act-btn" onclick="toast('Editing commission for ${c.service}')">Edit</button></td></tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub, "Add Slab", "sr-commission-set")}
    <table>
      <thead><tr><th>Service</th><th>Partner Type</th><th>Commission Rate</th><th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Generic key/value list table (ID cards, app versions) ----
function kvTable(rows, title, sub, cols, keys){
  const trs = rows.map(r => `
    <tr>${keys.map(k => `<td>${k==="status"?badge(r[k]):r[k]}</td>`).join("")}
      <td><button class="act-btn" onclick="toast('Editing record')">Edit</button></td></tr>`).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    <table>
      <thead><tr>${cols.map(c=>`<th>${c}</th>`).join("")}<th>Action</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
    <div class="pager">Showing ${rows.length} of ${rows.length} records</div>
  </div>`;
}

// ---- Generic form builder ----
function genericForm(title, sub, fields, saveMsg){
  const fieldsHtml = fields.map(f => {
    if(f.type === "textarea"){
      return `<div class="field" style="grid-column:1/-1;"><label>${f.label}</label><textarea placeholder="${f.placeholder||''}"></textarea></div>`;
    }
    if(f.type === "select"){
      return `<div class="field"><label>${f.label}</label><select>${(f.options||[]).map(o=>`<option>${o}</option>`).join("")}</select></div>`;
    }
    if(f.type === "toggle"){
      return `<div class="field"><label>${f.label}</label>${toggleSwitch(f.checked, f.label)}</div>`;
    }
    return `<div class="field"><label>${f.label}</label><input type="${f.type||'text'}" placeholder="${f.placeholder||''}"></div>`;
  }).join("");
  return `
  <div class="page-card">
    ${pageHeader(title, sub)}
    <div class="form-grid">${fieldsHtml}</div>
    <div class="form-actions">
      <button class="btn" onclick="toast('${saveMsg||'Saved successfully (demo)'}')">Save</button>
      <button class="btn outline" onclick="navigate('dashboard')">Cancel</button>
    </div>
  </div>`;
}

// ===== Wrapper renderers per menu id =====

// --- Api Company Detail ---
function page_acdMerchantStatus(){ return toggleTable(PARTNERS, "Merchant Status", "Enable or disable merchant accounts platform-wide", "Merchant Status"); }
function page_acd2faStatus(){ return toggleTable(PARTNERS, "2FA Status", "Manage two-factor authentication for each partner login", "2FA Enabled"); }
function page_acdCommission(){ return commissionTable(COMMISSION_SLABS, "Commission", "Company-wide commission configuration"); }
function page_acdRollManagement(){ return rolesTable(ROLES, "Roll Management", "Roles and access levels defined for the platform", ["Role","Assigned To","Permissions"]); }
function page_acdFieldOfficer(){ return staffTable(STAFF.filter(s=>s.role==="Field Officer"), "Field Officer Management", "Field officers deployed across regions", "manage-staff"); }
function page_acdIdCard(){ return kvTable(ID_CARDS, "ID Card Management", "Employee and officer ID cards issued", ["Name","Card No.","Role","Issue Date","Status"], ["name","cardNo","role","issueDate","status"]); }
function page_acdApplication(){ return kvTable(APP_VERSIONS, "Application Management", "Mobile app and web portal release management", ["Platform","Version","Release Date","Status"], ["platform","version","releaseDate","status"]); }
function page_acdWebsite(){
  return genericForm("Website Management", "Update the public-facing website configuration", [
    { label:"Site Title", placeholder:"Mera Digital Pay" },
    { label:"Support Email", type:"email", placeholder:"support@meradigitalpay.com" },
    { label:"Support Phone", placeholder:"1800-123-4567" },
    { label:"Theme Color", placeholder:"#101a3a" },
    { label:"Maintenance Mode", type:"toggle", checked:false },
    { label:"About Us", type:"textarea", placeholder:"Short description shown on the website footer" },
  ], "Website settings updated (demo)");
}

// --- Partner Section extra ---
function page_rollUpdateAdhikari(){ return rolesTable(ADHIKARI, "Roll Update Adhikari", "Update the assigned role for an existing Adhikari", ["Name","Designation","Area"]); }

// --- Fund Manage Section ---
function page_fmAmountLock(){
  const trs = PARTNERS.map(p=>`<tr><td>${p.id}</td><td>${p.name}</td><td>${p.wallet}</td><td>${badge(p.status)}</td>
    <td><button class="act-btn reject" onclick="toast('Wallet locked for ${p.name} (demo)')">Lock</button></td></tr>`).join("");
  return `<div class="page-card">${pageHeader("Partner Amount Lock","Freeze a partner's wallet balance temporarily")}
    ${searchRow("Search partner...")}
    <table><thead><tr><th>ID</th><th>Name</th><th>Wallet</th><th>Status</th><th>Action</th></tr></thead><tbody>${trs}</tbody></table>
    <div class="pager">Showing ${PARTNERS.length} of ${PARTNERS.length} records</div></div>`;
}
function page_fmAmountRelease(){
  const trs = PARTNERS.map(p=>`<tr><td>${p.id}</td><td>${p.name}</td><td>${p.wallet}</td><td>${badge(p.status)}</td>
    <td><button class="act-btn approve" onclick="toast('Wallet released for ${p.name} (demo)')">Release</button></td></tr>`).join("");
  return `<div class="page-card">${pageHeader("Partner Amount Release","Unlock a previously frozen partner wallet")}
    ${searchRow("Search partner...")}
    <table><thead><tr><th>ID</th><th>Name</th><th>Wallet</th><th>Status</th><th>Action</th></tr></thead><tbody>${trs}</tbody></table>
    <div class="pager">Showing ${PARTNERS.length} of ${PARTNERS.length} records</div></div>`;
}
function page_fmWalletMaintain(){
  return genericForm("Partner Amount Wallet Maintain", "Manually adjust a partner's wallet balance", [
    { label:"Select Partner", type:"select", options: PARTNERS.map(p=>p.name) },
    { label:"Action Type", type:"select", options:["Credit","Debit"] },
    { label:"Amount", placeholder:"e.g. 5000" },
    { label:"Remark", placeholder:"Reason for adjustment" },
  ], "Wallet adjusted successfully (demo)");
}
function page_fmWalletCredit(){
  return genericForm("All Partner Wallet Credit", "Credit amount into a partner's wallet", [
    { label:"Select Partner", type:"select", options: PARTNERS.map(p=>p.name) },
    { label:"Amount", placeholder:"e.g. 5000" },
    { label:"Payment Mode", type:"select", options:["Bank Transfer","UPI","Cash"] },
    { label:"Remark", placeholder:"Reason for credit" },
  ], "Wallet credited successfully (demo)");
}
function page_fmWalletDebit(){
  return genericForm("All Partner Wallet Debit", "Debit amount from a partner's wallet", [
    { label:"Select Partner", type:"select", options: PARTNERS.map(p=>p.name) },
    { label:"Amount", placeholder:"e.g. 5000" },
    { label:"Reason", type:"select", options:["Chargeback","Correction","Penalty"] },
    { label:"Remark", placeholder:"Reason for debit" },
  ], "Wallet debited successfully (demo)");
}

// --- Fund Request Manage Section ---
function page_frAll(){ return fundTable(FUND_REQUESTS, "All Partner Fund Request", "Fund requests raised by every partner", {actionable:true}); }
function page_frApi(){ return fundTable(FUND_REQUESTS.filter(r=>r.type==="API"), "API Partner Fund Request", "Fund requests from API partners", {actionable:true}); }
function page_frB2b(){ return fundTable(FUND_REQUESTS.filter(r=>r.type==="B2B"), "B2B Partner Fund Request", "Fund requests from B2B partners", {actionable:true}); }
function page_frReseller(){ return fundTable(FUND_REQUESTS.filter(r=>r.type==="Reseller"), "Reseller Partner Fund Request", "Fund requests from Reseller partners", {actionable:true}); }
function page_frApprove(){ return fundTable(FUND_REQUESTS.filter(r=>r.status==="Approved"), "Approve Fund Request", "Fund requests that have already been approved"); }
function page_frPending(){ return fundTable(FUND_REQUESTS.filter(r=>r.status==="Pending"), "Pending Fund Request", "Fund requests awaiting review", {actionable:true}); }
function page_frReject(){ return fundTable(FUND_REQUESTS.filter(r=>r.status==="Rejected"), "Reject Fund Request", "Fund requests that were rejected"); }

// --- Payout Request Section ---
function page_prAll(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="Payout"), "Payout Request All", "All payout withdrawal requests", {actionable:true}); }
function page_prApi(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="Payout"&&r.type==="API"), "Payout Request API Partner", "Payout requests from API partners", {actionable:true}); }
function page_prB2b(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="Payout"&&r.type==="B2B"), "Payout Request B2B Partner", "Payout requests from B2B partners", {actionable:true}); }

// --- BBPS Request Section ---
function page_bbpsAll(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="BBPS"), "BBPS Request All", "All BBPS bill-payment requests", {actionable:true}); }
function page_bbpsCc(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="CreditCard"), "Credit Card Request", "Credit card bill payment requests", {actionable:true}); }
function page_bbpsApi(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="BBPS"&&r.type==="API"), "BBPS API Partner Request", "BBPS requests from API partners", {actionable:true}); }
function page_bbpsReseller(){ return fundTable(PAYOUT_REQUESTS.filter(r=>r.category==="BBPS"&&r.type==="Reseller"), "BBPS Reseller Partner Request", "BBPS requests from Reseller partners", {actionable:true}); }

// --- Banking Section ---
function page_bankAccountOpening(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Bank Account"), "Bank Account Opening All", "New bank account opening applications"); }
function page_bankCreditCard(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Credit Card"), "Credit Card All", "Credit card applications submitted by customers"); }
function page_bankPersonalLoan(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Personal Loan"), "Personal Loan All", "Personal loan applications"); }
function page_bankBusinessLoan(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Business Loan"), "Business Loan All", "Business loan applications"); }
function page_bankBc(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Bank BC"), "Bank BC All", "Bank Business Correspondent onboarding requests"); }
function page_bankSellerReg(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="Seller Registration"), "Seller Registration All", "New seller registration requests"); }
function page_bankMatm(){ return bankingTable(BANKING_REQUESTS.filter(r=>r.product==="M ATM"), "M ATM Request All", "Micro-ATM device requests from partners"); }
function page_bankLinkUpdate(){
  return genericForm("Banking Link Update", "Update the linked bank / partner API endpoint", [
    { label:"Bank Name", type:"select", options:["State Bank of India","HDFC Bank","ICICI Bank","Axis Bank","Yes Bank"] },
    { label:"Linked Partner", type:"select", options: PARTNERS.map(p=>p.name) },
    { label:"New Link / Endpoint URL", placeholder:"https://api.bank.com/v2/..." },
    { label:"Status", type:"select", options:["Active","Inactive"] },
  ], "Banking link updated successfully (demo)");
}

// --- Billing Section ---
function page_billRecharge(){ return billingTable(BILLING.filter(b=>b.type==="Recharge"), "Recharge Billing", "Recharge related billing and invoices"); }
function page_billTds(){ return billingTable(BILLING.filter(b=>b.type==="TDS"), "TDS Billing", "TDS deduction invoices"); }
function page_billGst(){ return billingTable(BILLING.filter(b=>b.type==="GST"), "GST Billing", "GST invoices generated for services"); }

// --- Settings & Reports Section ---
function page_srTransactionHistory(){
  const trs = TRANSACTIONS.map(t=>`<tr><td>${t.txnId}</td><td>${t.partner}</td><td>${t.service}</td><td>${t.amount}</td><td>${t.date}</td><td>${badge(t.status==="Success"?"Active":t.status)}</td></tr>`).join("");
  return `<div class="page-card">${pageHeader("Transaction History","Complete log of all platform transactions")}
    ${searchRow("Search transaction ID or partner...")}
    <table><thead><tr><th>Txn ID</th><th>Partner</th><th>Service</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead><tbody>${trs}</tbody></table>
    <div class="pager">Showing ${TRANSACTIONS.length} of ${TRANSACTIONS.length} records</div></div>`;
}
function page_srCommission(){ return commissionTable(COMMISSION_SLABS, "Commission", "Commission report across services and partner types"); }
function page_srWebsiteSetting(){ return page_acdWebsite(); }
function page_srComplainAll(){ return supportTable(SUPPORT.filter(s=>s.category==="Complaint"), "Complain All", "Complaints raised by partners and customers"); }
function page_srCommissionSet(){
  return genericForm("Commission Set", "Configure a commission slab for a service", [
    { label:"Service", type:"select", options: SERVICES.map(s=>s.name) },
    { label:"Partner Type", type:"select", options:["API Partner","B2B Partner","Reseller Partner","BL Partner","All Partners"] },
    { label:"Commission Type", type:"select", options:["Flat","Percentage"] },
    { label:"Commission Value", placeholder:"e.g. 0.5% or ₹5" },
  ], "Commission slab saved (demo)");
}
function page_srGstInvoice(){ return billingTable(BILLING.filter(b=>b.type==="GST"), "GST Invoice Billing", "Generate and track GST invoices"); }
function page_srReviewWebsite(){ return supportTable(SUPPORT.filter(s=>s.category==="Review"), "Review Website", "Feedback and issues reported about the website"); }
function page_srEnquiryDetails(){ return supportTable(SUPPORT.filter(s=>s.category==="Enquiry"), "Enquiry Details", "New business and partnership enquiries"); }
function page_srServiceFeedback(){ return supportTable(SUPPORT.filter(s=>s.category==="Feedback"), "Service Feedback", "Feedback submitted by partners about services"); }
function page_srFormEdit(){
  const forms = [
    { name:"Partner Registration Form", fields:12, updated:"20 Aug 2026" },
    { name:"AEPS KYC Form",             fields:8,  updated:"15 Aug 2026" },
    { name:"Service Request Form",      fields:6,  updated:"02 Sep 2026" },
    { name:"Fund Request Form",         fields:5,  updated:"28 Aug 2026" },
  ];
  const trs = forms.map(f=>`<tr><td>${f.name}</td><td>${f.fields} fields</td><td>${f.updated}</td>
    <td><button class="act-btn" onclick="toast('Opening editor for ${f.name}')">Edit</button></td></tr>`).join("");
  return `<div class="page-card">${pageHeader("Form Edit","Edit the fields shown on platform forms")}
    <table><thead><tr><th>Form Name</th><th>Fields</th><th>Last Updated</th><th>Action</th></tr></thead><tbody>${trs}</tbody></table></div>`;
}
function page_srCallRequestHistory(){ return supportTable(SUPPORT.filter(s=>s.category==="Call"), "Call Request History", "Callback requests raised by partners"); }
function page_srTicketRaiseHistory(){ return supportTable(SUPPORT.filter(s=>s.category==="Ticket"), "Ticket Raise History", "Support tickets raised across the platform"); }
function page_srMailIdTemplate(){
  return genericForm("Mail ID Template", "Create or edit an email notification template", [
    { label:"Template Name", type:"select", options:["Welcome Email","KYC Approved","KYC Rejected","Fund Credited","Password Reset"] },
    { label:"Subject Line", placeholder:"e.g. Your KYC has been approved" },
    { label:"From Email", placeholder:"no-reply@meradigitalpay.com" },
    { label:"Email Body", type:"textarea", placeholder:"Write the email content here..." },
  ], "Email template saved (demo)");
}

// --- Manage Staff (standalone page) ---
function page_manageStaff(){ return staffTable(STAFF, "Manage Staff", "All internal staff members and their access roles", null); }

// Extend the render map with all new pages
Object.assign(PAGE_RENDERERS, {
  "acd-merchant-status": page_acdMerchantStatus,
  "acd-2fa-status": page_acd2faStatus,
  "acd-commission": page_acdCommission,
  "acd-roll-management": page_acdRollManagement,
  "acd-field-officer": page_acdFieldOfficer,
  "acd-id-card": page_acdIdCard,
  "acd-application": page_acdApplication,
  "acd-website": page_acdWebsite,

  "roll-update-adhikari": page_rollUpdateAdhikari,

  "fm-amount-lock": page_fmAmountLock,
  "fm-amount-release": page_fmAmountRelease,
  "fm-wallet-maintain": page_fmWalletMaintain,
  "fm-wallet-credit": page_fmWalletCredit,
  "fm-wallet-debit": page_fmWalletDebit,

  "fr-all": page_frAll,
  "fr-api": page_frApi,
  "fr-b2b": page_frB2b,
  "fr-reseller": page_frReseller,
  "fr-approve": page_frApprove,
  "fr-pending": page_frPending,
  "fr-reject": page_frReject,

  "pr-all": page_prAll,
  "pr-api": page_prApi,
  "pr-b2b": page_prB2b,

  "bbps-all": page_bbpsAll,
  "bbps-cc": page_bbpsCc,
  "bbps-api": page_bbpsApi,
  "bbps-reseller": page_bbpsReseller,

  "bank-account-opening": page_bankAccountOpening,
  "bank-credit-card": page_bankCreditCard,
  "bank-personal-loan": page_bankPersonalLoan,
  "bank-business-loan": page_bankBusinessLoan,
  "bank-bc": page_bankBc,
  "bank-seller-reg": page_bankSellerReg,
  "bank-matm": page_bankMatm,
  "bank-link-update": page_bankLinkUpdate,

  "bill-recharge": page_billRecharge,
  "bill-tds": page_billTds,
  "bill-gst": page_billGst,

  "sr-transaction-history": page_srTransactionHistory,
  "sr-commission": page_srCommission,
  "sr-website-setting": page_srWebsiteSetting,
  "sr-complain-all": page_srComplainAll,
  "sr-commission-set": page_srCommissionSet,
  "sr-gst-invoice": page_srGstInvoice,
  "sr-review-website": page_srReviewWebsite,
  "sr-enquiry-details": page_srEnquiryDetails,
  "sr-service-feedback": page_srServiceFeedback,
  "sr-form-edit": page_srFormEdit,
  "sr-call-request-history": page_srCallRequestHistory,
  "sr-ticket-raise-history": page_srTicketRaiseHistory,
  "sr-mail-id-template": page_srMailIdTemplate,

  "manage-staff": page_manageStaff,
});

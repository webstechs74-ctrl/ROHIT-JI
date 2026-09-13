PAGE_RENDERERS["acd-field-officer"] = function renderFieldOfficer() {
  return `
    <style>
      .fo-page {
        background: #fff;
        border: 1px solid #e1e7ef;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 18px rgba(30, 45, 70, 0.07);
      }

      .fo-header {
        padding: 20px;
        border-bottom: 1px solid #e5e9ef;
      }

      .fo-header h2 {
        margin: 0 0 5px;
        color: #172033;
        font-size: 20px;
      }

      .fo-header p {
        margin: 0;
        color: #7a8494;
        font-size: 12px;
      }

      .fo-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      }

      .fo-table th {
        padding: 14px;
        background: #f1f5f9;
        color: #596677;
        font-size: 12px;
        text-align: left;
      }

      .fo-table td {
        padding: 14px;
        border-bottom: 1px solid #edf0f4;
        color: #202936;
        font-size: 13px;
      }

      .fo-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
      }

      .fo-status.pending {
        color: #d28a00;
        background: #fff4d9;
      }

      .fo-status.approved {
        color: #07885e;
        background: #e6f8f0;
      }

      .fo-status::before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
      }

      .permission-open-btn {
        border: 0;
        border-radius: 8px;
        padding: 8px 13px;
        color: #fff;
        background: #0878d1;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
      }

      .permission-open-btn:hover {
        background: #0565b2;
      }

      /* Permission popup */

      .permission-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        background: rgba(15, 25, 40, 0.65);
      }

      .permission-overlay.open {
        display: flex;
      }

      .permission-popup {
        width: min(1100px, 96vw);
        max-height: 92vh;
        overflow-y: auto;
        background: #f8fbff;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
      }

      .permission-popup-header {
        position: sticky;
        top: 0;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        gap: 15px;
        padding: 20px 22px;
        background: #eff6ff;
        border-bottom: 1px solid #dae5f2;
      }

      .permission-title {
        display: flex;
        gap: 12px;
      }

      .permission-shield {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 11px;
        color: #fff;
        background: #0878d1;
        font-size: 22px;
      }

      .permission-title h2 {
        margin: 0 0 5px;
        color: #122033;
        font-size: 21px;
      }

      .permission-title p {
        margin: 0;
        color: #647386;
        font-size: 11px;
      }

      .permission-close {
        width: 34px;
        height: 34px;
        border: 0;
        border-radius: 50%;
        background: #fff;
        color: #27364a;
        font-size: 20px;
        cursor: pointer;
      }

      .permission-toolbar {
        display: grid;
        grid-template-columns: 1fr 220px 1fr;
        gap: 12px;
        padding: 15px 20px;
      }

      .permission-toolbar input,
      .permission-toolbar select {
        width: 100%;
        border: 1px solid #dce4ee;
        border-radius: 9px;
        padding: 11px 12px;
        background: #fff;
        color: #344054;
      }

      .selected-user {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 12px;
        background: #fff;
        border: 1px solid #dce4ee;
        border-radius: 9px;
      }

      .selected-user-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        flex: 0 0 36px;
        border-radius: 50%;
        color: #0878d1;
        background: #eaf4ff;
      }

      .selected-user strong {
        display: block;
        font-size: 11px;
      }

      .selected-user span {
        color: #667085;
        font-size: 10px;
      }

      .services-panel {
        margin: 0 20px 20px;
        padding: 17px;
        background: #fff;
        border: 1px solid #dce4ee;
        border-radius: 12px;
      }

      .services-panel-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 15px;
      }

      .services-panel-head h3 {
        margin: 0;
        color: #14243a;
        font-size: 16px;
      }

      .permission-actions {
        display: flex;
        gap: 8px;
      }

      .permission-small-btn {
        border: 1px solid #d7e0eb;
        border-radius: 8px;
        padding: 8px 12px;
        background: #fff;
        color: #24354c;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
      }

      .permission-small-btn.primary {
        border-color: #dcecff;
        color: #086fc1;
        background: #edf6ff;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
      }

      .service-permission-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        min-height: 66px;
        padding: 12px;
        border: 1px solid #e0e7ef;
        border-radius: 10px;
        background: #fff;
      }

      .service-info {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
      }

      .service-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        flex: 0 0 35px;
        border-radius: 9px;
        color: #0878d1;
        background: #eaf4ff;
        font-size: 17px;
      }

      .service-info strong {
        display: block;
        color: #1c2b3e;
        font-size: 11px;
      }

      .service-info small {
        display: block;
        margin-top: 3px;
        color: #7b8797;
        font-size: 9px;
      }

      .service-toggle {
        position: relative;
        width: 34px;
        height: 19px;
        flex: 0 0 34px;
      }

      .service-toggle input {
        display: none;
      }

      .service-toggle span {
        position: absolute;
        inset: 0;
        border-radius: 20px;
        background: #bbc8d6;
        cursor: pointer;
        transition: 0.2s;
      }

      .service-toggle span::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        transition: 0.2s;
      }

      .service-toggle input:checked + span {
        background: #0878d1;
      }

      .service-toggle input:checked + span::after {
        transform: translateX(15px);
      }

      .permission-footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding: 15px 20px;
        background: #fff;
        border-top: 1px solid #dce4ee;
      }

      @media (max-width: 900px) {
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .permission-toolbar {
          grid-template-columns: 1fr 1fr;
        }

        .selected-user {
          grid-column: 1 / -1;
        }
      }

      @media (max-width: 550px) {
        .fo-table th,
        .fo-table td {
          padding: 10px 5px;
          font-size: 9px;
          word-break: break-word;
        }

        .permission-open-btn {
          padding: 6px 8px;
          font-size: 9px;
        }

        .permission-overlay {
          padding: 5px;
        }

        .permission-popup {
          width: 100%;
          max-height: 97vh;
        }

        .permission-toolbar,
        .services-grid {
          grid-template-columns: 1fr;
        }

        .selected-user {
          grid-column: auto;
        }

        .services-panel-head {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    </style>

    <div class="fo-page">
      <div class="fo-header">
        <h2>Field Officer Name</h2>
        <p>Manage Field Officer status and service permissions</p>
      </div>

      <table class="fo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Permission</th>
          </tr>
        </thead>

        <tbody id="fieldOfficerTableBody">
          <!-- Backend ka real data yahan show hoga -->
        </tbody>
      </table>
    </div>

    ${fieldOfficerPermissionPopup()}
  `;
};


function fieldOfficerPermissionPopup() {
  const services = [
    ["🖐️", "AEPS", "Aadhaar Enabled Payment System"],
    ["▣", "Micro ATM", "Cash Withdrawal & Balance Enquiry"],
    ["🪪", "Aadhaar Pay", "Aadhaar Based Payment"],
    ["₹", "Instant Payout", "Instant Money Transfer"],
    ["💳", "PPI DMT", "Prepaid Payment Instrument DMT"],
    ["UPI", "UPI Cash Withdrawal", "UPI Cash Withdrawal"],
    ["🏦", "NSDL Biometric", "Bank Account Opening"],
    ["🏛️", "Kotak BC Account", "Bank Account Opening"],
    ["▤", "NSDL PAN Card", "Apply PAN Card"],
    ["UTI", "UTI PAN Card", "Apply PAN Card"],
    ["₹", "Loans", "Personal & Business Loans"],
    ["🛡️", "Insurance", "Life, Health, Motor & More"],
    ["BBPS", "BBPS", "Bharat Bill Payment System"],
    ["📱", "Mobile/DTH Recharge", "Prepaid, Postpaid & DTH"],
    ["🎁", "Digital Gift Card", "E-Gift Vouchers"],
    ["🚆", "IRCTC Ticket Booking", "Train Ticket Booking"],
    ["🚚", "Courier Booking", "Courier Partner"],
    ["GST", "GST Suvidha", "GST Registration & Filing"],
    ["📄", "Document Verification", "Digital Documents"],
    ["•••", "Other Services", "Future Services"]
  ];

  const serviceCards = services.map((service) => `
    <div class="service-permission-card">
      <div class="service-info">
        <div class="service-icon">${service[0]}</div>

        <div>
          <strong>${service[1]}</strong>
          <small>${service[2]}</small>
        </div>
      </div>

      <label class="service-toggle">
        <input type="checkbox" class="permission-checkbox">
        <span></span>
      </label>
    </div>
  `).join("");

  return `
    <div
      class="permission-overlay"
      id="fieldOfficerPermissionPopup"
      onclick="closePermissionOutside(event)"
    >
      <div class="permission-popup">

        <div class="permission-popup-header">
          <div class="permission-title">
            <div class="permission-shield">🛡</div>

            <div>
              <h2>Service Permission Management</h2>
              <p>
                Select ki gayi services user ke panel aur app mein dikhengi.
              </p>
            </div>
          </div>

          <button
            class="permission-close"
            onclick="closeFieldOfficerPermission()"
          >
            ×
          </button>
        </div>

        <div class="permission-toolbar">
          <input
            type="text"
            id="permissionUserSearch"
            placeholder="User ID / Name"
          >

          <select id="permissionServiceFilter">
            <option value="all">All Services</option>
          </select>

          <div class="selected-user">
            <div class="selected-user-icon">👤</div>

            <div>
              <strong id="permissionUserName">Selected Field Officer</strong>
              <span id="permissionUserRole">Field Officer</span>
            </div>
          </div>
        </div>

        <div class="services-panel">

          <div class="services-panel-head">
            <h3>✓ All Services (Mera Digital Pay)</h3>

            <div class="permission-actions">
              <button
                class="permission-small-btn primary"
                onclick="selectAllPermissions(true)"
              >
                Select All
              </button>

              <button
                class="permission-small-btn"
                onclick="selectAllPermissions(false)"
              >
                Deselect All
              </button>
            </div>
          </div>

          <div class="services-grid">
            ${serviceCards}
          </div>
        </div>

        <div class="permission-footer">
          <button
            class="btn outline"
            onclick="selectAllPermissions(false)"
          >
            Reset
          </button>

          <button
            class="btn"
            onclick="saveFieldOfficerPermission()"
          >
            Save Permission
          </button>
        </div>

      </div>
    </div>
  `;
}


function openFieldOfficerPermission(button) {
  const row = button.closest("tr");

  const name =
    row?.querySelector("[data-field='name']")?.textContent.trim() ||
    "Selected Field Officer";

  const role =
    row?.querySelector("[data-field='role']")?.textContent.trim() ||
    "Field Officer";

  document.getElementById("permissionUserName").textContent = name;
  document.getElementById("permissionUserRole").textContent = role;

  document
    .getElementById("fieldOfficerPermissionPopup")
    .classList.add("open");
}


function closeFieldOfficerPermission() {
  document
    .getElementById("fieldOfficerPermissionPopup")
    .classList.remove("open");
}


function closePermissionOutside(event) {
  if (event.target.id === "fieldOfficerPermissionPopup") {
    closeFieldOfficerPermission();
  }
}


function selectAllPermissions(checked) {
  document
    .querySelectorAll(".permission-checkbox")
    .forEach((checkbox) => {
      checkbox.checked = checked;
    });
}


function saveFieldOfficerPermission() {
  toast("Service permissions saved successfully");
  closeFieldOfficerPermission();
}
PAGE_RENDERERS["acd-roll-management"] = function renderRollManagement() {
  return `
    <style>
      .role-page {
        background: #fff;
        border: 1px solid #e4e8ef;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 18px rgba(30, 45, 70, 0.07);
      }

      .role-page-header {
        padding: 20px;
        border-bottom: 1px solid #e5e9ef;
      }

      .role-page-header h2 {
        margin: 0 0 5px;
        font-size: 19px;
        color: #172033;
      }

      .role-page-header p {
        margin: 0;
        color: #788394;
        font-size: 12px;
      }

      .role-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      }

      .role-table th {
        padding: 14px;
        background: #f1f5f9;
        color: #596677;
        font-size: 12px;
        text-align: left;
      }

      .role-table td {
        padding: 14px;
        border-bottom: 1px solid #edf0f4;
        font-size: 13px;
        color: #202936;
      }

      .permission-btn {
        border: 0;
        border-radius: 8px;
        padding: 8px 13px;
        background: #eaf1ff;
        color: #2f6fed;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .permission-btn:hover {
        background: #2f6fed;
        color: #fff;
      }

      .role-status {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border: 0;
        border-radius: 20px;
        padding: 7px 12px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
      }

      .role-status.active {
        background: #e7f9f1;
        color: #079669;
      }

      .role-status.inactive {
        background: #fdecec;
        color: #d14343;
      }

      .role-status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
      }

      .role-popup-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 15px;
        background: rgba(12, 20, 35, 0.55);
      }

      .role-popup-overlay.open {
        display: flex;
      }

      .role-popup {
        width: 100%;
        max-width: 420px;
        background: #fff;
        border-radius: 15px;
        padding: 22px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
      }

      .role-popup-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
      }

      .role-popup-head h3 {
        margin: 0;
        font-size: 18px;
        color: #172033;
      }

      .role-popup-close {
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 50%;
        background: #f1f4f8;
        cursor: pointer;
        font-size: 18px;
      }

      .role-popup label {
        display: block;
        margin-bottom: 7px;
        font-size: 12px;
        font-weight: 700;
        color: #344054;
      }

      .role-popup select {
        width: 100%;
        padding: 11px 12px;
        border: 1px solid #d9e0e8;
        border-radius: 9px;
        background: #fff;
        font-size: 13px;
      }

      .role-popup-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;
      }

      @media (max-width: 600px) {
        .role-table th,
        .role-table td {
          padding: 10px 6px;
          font-size: 9px;
          word-break: break-word;
        }

        .permission-btn,
        .role-status {
          padding: 6px 8px;
          font-size: 9px;
        }
      }
    </style>

    <div class="role-page">

      <div class="role-page-header">
        <h2>Roll Management</h2>
        <p>Manage Adhikari roles, permissions and account status</p>
      </div>

      <table class="role-table">
        <thead>
          <tr>
            <th>Adhikari Information</th>
            <th>Current Position</th>
            <th>Permission</th>
            <th>Active/Inactive</th>
          </tr>
        </thead>

        <tbody id="roleManagementTableBody">
          <!-- Backend ka real data yahan show hoga -->
        </tbody>
      </table>

    </div>

    <div
      class="role-popup-overlay"
      id="changeRolePopup"
      onclick="closeRolePopupOutside(event)"
    >
      <div class="role-popup">

        <div class="role-popup-head">
          <h3>Change Role</h3>

          <button
            type="button"
            class="role-popup-close"
            onclick="closeChangeRolePopup()"
          >
            ×
          </button>
        </div>

        <label for="newAdhikariRole">Select New Role</label>

        <select id="newAdhikariRole">
          <option value="">Select role</option>
          <option value="API Partner">API Partner</option>
          <option value="B2B Partner">B2B Partner</option>
          <option value="Reseller Partner">Reseller Partner</option>
          <option value="BL Partner">BL Partner</option>
          <option value="Distributor">Distributor</option>
          <option value="Adhikari">Adhikari</option>
        </select>

        <div class="role-popup-actions">
          <button
            type="button"
            class="btn outline"
            onclick="closeChangeRolePopup()"
          >
            Cancel
          </button>

          <button
            type="button"
            class="btn"
            onclick="saveChangedRole()"
          >
            Save Role
          </button>
        </div>

      </div>
    </div>
  `;
};


let selectedRoleRow = null;


function openChangeRolePopup(button) {
  selectedRoleRow = button.closest("tr");

  document
    .getElementById("changeRolePopup")
    .classList.add("open");
}


function closeChangeRolePopup() {
  document
    .getElementById("changeRolePopup")
    .classList.remove("open");

  selectedRoleRow = null;
}


function closeRolePopupOutside(event) {
  if (event.target.id === "changeRolePopup") {
    closeChangeRolePopup();
  }
}


function saveChangedRole() {
  const selectedRole =
    document.getElementById("newAdhikariRole").value;

  if (!selectedRole) {
    toast("Please select a role");
    return;
  }

  if (selectedRoleRow) {
    const positionCell =
      selectedRoleRow.querySelector(".current-position");

    if (positionCell) {
      positionCell.textContent = selectedRole;
    }
  }

  toast("Role updated successfully");
  closeChangeRolePopup();
}


function toggleAdhikariStatus(button) {
  const currentlyActive =
    button.classList.contains("active");

  if (currentlyActive) {
    button.classList.remove("active");
    button.classList.add("inactive");

    button.innerHTML = `
      <span class="role-status-dot"></span>
      Inactive
    `;
  } else {
    button.classList.remove("inactive");
    button.classList.add("active");

    button.innerHTML = `
      <span class="role-status-dot"></span>
      Active
    `;
  }
}
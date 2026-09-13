PAGE_RENDERERS["acd-2fa-status"] = function render2FAStatus() {
  return `
    <div class="page-card">

      <div class="head">
        <div>
          <h2>2FA Status</h2>
        </div>
      </div>

      <div class="search-row">
        <input
          type="text"
          placeholder="Search company or Adhikari..."
        >
        <button class="btn outline">Search</button>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Adhikari Details</th>

              <th title="Security">
                <span style="font-size:20px;">🛡️</span>
              </th>

              <th title="Authentication">
                <span style="font-size:20px;">🔐</span>
              </th>

              <th title="Mobile Verification">
                <span style="font-size:20px;">📱</span>
              </th>

              <th title="Verification Status">
                <span style="font-size:20px;">✅</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <!-- Backend ka real data yahan show hoga -->
          </tbody>
        </table>
      </div>

    </div>
  `;
};
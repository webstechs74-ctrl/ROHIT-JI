PAGE_RENDERERS["acd-merchant-status"] = function renderMerchantStatus() {
  return `
    <div class="page-card">

      <div class="head">
        <div>
          <h2>Partner - Merchant Details</h2>
        </div>
      </div>

      <div class="search-row">
        <input
          type="text"
          placeholder="Search partner or merchant..."
        >
        <button class="btn outline">Search</button>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date / Time</th>
              <th>Mobile</th>
              <th>Channel / EPF</th>
              <th>Active / Inactive</th>
            </tr>
          </thead>

          <tbody>
            <!-- Backend se real data yahan show hoga -->
          </tbody>
        </table>
      </div>

    </div>
  `;
};
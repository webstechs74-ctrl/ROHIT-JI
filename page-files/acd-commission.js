PAGE_RENDERERS["acd-commission"] = function renderCommissionPage() {
  return `
    <style>
      .commission-box {
        width: 100%;
        background: #fff;
        border: 1px solid #e3e8ef;
        border-radius: 16px;
        padding: 18px;
        box-shadow: 0 5px 18px rgba(30, 45, 70, 0.08);
      }

      .commission-box h2 {
        margin: 0 0 18px;
        color: #0879a8;
        font-size: 20px;
        font-weight: 800;
      }

      .commission-table {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
      }

      .commission-table th {
        background: #f1f5f9;
        color: #626e7d;
        border-bottom: 1px solid #dfe5ec;
        padding: 13px 5px;
        font-size: 10px;
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;
        white-space: normal;
        line-height: 1.3;
      }

      .commission-table td {
        padding: 13px 5px;
        border-bottom: 1px solid #edf0f4;
        color: #202732;
        font-size: 11px;
        font-weight: 600;
        text-align: center;
        word-break: break-word;
      }

      .commission-table th:first-child,
      .commission-table td:first-child {
        width: 18%;
        text-align: left;
      }

      .commission-table th:nth-child(2),
      .commission-table th:nth-child(3) {
        width: 11%;
      }

      .commission-table th:nth-child(4),
      .commission-table th:nth-child(5) {
        width: 11%;
      }

      .commission-table th:nth-child(6),
      .commission-table th:nth-child(7) {
        width: 10%;
      }

      .commission-table th:nth-child(8) {
        width: 18%;
      }

      .amount-pill,
      .settlement-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        min-height: 35px;
        background: #f8fafc;
        border: 1.5px solid #dfe5ec;
        border-radius: 22px;
      }

      .commission-check {
        width: 22px;
        height: 22px;
        accent-color: #0879a8;
      }

      @media (max-width: 700px) {
        .commission-box {
          padding: 10px 6px;
        }

        .commission-box h2 {
          font-size: 15px;
          margin: 5px 5px 13px;
        }

        .commission-table th {
          padding: 9px 2px;
          font-size: 7px;
        }

        .commission-table td {
          padding: 10px 2px;
          font-size: 8px;
        }

        .amount-pill,
        .settlement-pill {
          width: 94%;
          min-height: 28px;
          font-size: 8px;
        }

        .commission-check {
          width: 17px;
          height: 17px;
        }
      }
    </style>

    <div class="commission-box">

      <h2>RECHARGE BILLS SERVICES</h2>

      <table class="commission-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>From Amount</th>
            <th>To Amount</th>
            <th>Commission</th>
            <th>Charge</th>
            <th>Flat</th>
            <th>Percentage</th>
            <th>Settlement Time</th>
          </tr>
        </thead>

        <tbody id="commissionTableBody">
          <!-- Backend ka real data yahan show hoga -->
        </tbody>
      </table>

    </div>
  `;
};
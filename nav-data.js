// Sidebar navigation structure
const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "🏠", type: "page" },

  {
    id: "api-company-detail",
    label: "Api Company Detail",
    icon: "🏢",
    type: "group",
    children: [
      { id: "acd-merchant-status",   label: "Merchant Status" },
      { id: "acd-2fa-status",        label: "2FA Status" },
      { id: "acd-commission",        label: "Commission" },
      { id: "acd-roll-management",   label: "Roll Management" },
      { id: "acd-field-officer",     label: "Field Officer Management" },
      { id: "acd-id-card",           label: "ID Card Management" },
      { id: "acd-application",       label: "Application Management" },
      { id: "acd-website",           label: "Website Management" },
    ]
  },

  {
    id: "partner-section",
    label: "Partner Section",
    icon: "🤝",
    type: "group",
    children: [
      { id: "all-partner",        label: "All Partner" },
      { id: "api-partner",        label: "API Partner" },
      { id: "b2b-partner",        label: "B2B Partner" },
      { id: "reseller-partner",   label: "Reseller Partner" },
      { id: "bl-partner",         label: "BL Partner" },
      { id: "add-partner",        label: "Add Partner" },
      { id: "all-adhikari",       label: "All Adhikari" },
      { id: "roll-update-adhikari", label: "Roll Update Adhikari" },
      { id: "pending-kyc",        label: "Pending AEPS KYC" },
      { id: "approve-kyc",        label: "Approve AEPS KYC" },
      { id: "reject-kyc",         label: "Reject AEPS KYC" },
      { id: "delete-kyc",         label: "AEPS KYC Delete" },
    ]
  },

  {
    id: "service-section",
    label: "Service Section",
    icon: "🧾",
    type: "group",
    children: [
      { id: "all-service",        label: "All Service" },
      { id: "add-service",        label: "Add Service" },
      { id: "package-manage",     label: "Package Manage" },
      { id: "all-api-detail",     label: "All API Detail" },
      { id: "all-partner-detail", label: "All Partner Detail" },
    ]
  },

  {
    id: "fund-manage-section",
    label: "Fund Manage Section",
    icon: "💰",
    type: "group",
    children: [
      { id: "fm-amount-lock",      label: "Partner Amount Lock" },
      { id: "fm-amount-release",   label: "Partner Amount Release" },
      { id: "fm-wallet-maintain",  label: "Partner Amount Wallet Maintain" },
      { id: "fm-wallet-credit",    label: "All Partner Wallet Credit" },
      { id: "fm-wallet-debit",     label: "All Partner Wallet Debit" },
    ]
  },

  {
    id: "fund-request-section",
    label: "Fund Request Manage Section",
    icon: "📨",
    type: "group",
    children: [
      { id: "fr-all",       label: "All Partner Fund Request" },
      { id: "fr-api",       label: "API Partner Fund Request" },
      { id: "fr-b2b",       label: "B2B Partner Fund Request" },
      { id: "fr-reseller",  label: "Reseller Partner Fund Request" },
      { id: "fr-approve",   label: "Approve Fund Request" },
      { id: "fr-pending",   label: "Pending Fund Request" },
      { id: "fr-reject",    label: "Reject Fund Request" },
    ]
  },

  {
    id: "payout-request-section",
    label: "Payout Request Section",
    icon: "📤",
    type: "group",
    children: [
      { id: "pr-all",  label: "Payout Request All" },
      { id: "pr-api",  label: "Payout Request API Partner" },
      { id: "pr-b2b",  label: "Payout Request B2B Partner" },
    ]
  },

  {
    id: "bbps-request-section",
    label: "BBPS Request Section",
    icon: "🧮",
    type: "group",
    children: [
      { id: "bbps-all",       label: "BBPS Request All" },
      { id: "bbps-cc",        label: "Credit Card Request" },
      { id: "bbps-api",       label: "BBPS API Partner Request" },
      { id: "bbps-reseller",  label: "BBPS Reseller Partner Request" },
    ]
  },

  {
    id: "banking-section",
    label: "Banking Section",
    icon: "🏦",
    type: "group",
    children: [
      { id: "bank-account-opening", label: "Bank Account Opening All" },
      { id: "bank-credit-card",     label: "Credit Card All" },
      { id: "bank-personal-loan",   label: "Personal Loan All" },
      { id: "bank-business-loan",   label: "Business Loan All" },
      { id: "bank-bc",              label: "Bank BC All" },
      { id: "bank-seller-reg",      label: "Seller Registration All" },
      { id: "bank-matm",            label: "M ATM Request All" },
      { id: "bank-link-update",     label: "Banking Link Update" },
    ]
  },

  {
    id: "billing-section",
    label: "Billing Section",
    icon: "🧯",
    type: "group",
    children: [
      { id: "bill-recharge", label: "Recharge Billing" },
      { id: "bill-tds",      label: "TDS Billing" },
      { id: "bill-gst",      label: "GST Billing" },
    ]
  },

  {
    id: "settings-reports-section",
    label: "Settings & Reports Section",
    icon: "⚙️",
    type: "group",
    children: [
      { id: "sr-transaction-history",  label: "Transaction History" },
      { id: "sr-commission",           label: "Commission" },
      { id: "sr-website-setting",      label: "Website Setting" },
      { id: "sr-complain-all",         label: "Complain All" },
      { id: "sr-commission-set",       label: "Commission Set" },
      { id: "sr-gst-invoice",          label: "GST Invoice Billing" },
      { id: "sr-review-website",       label: "Review Website" },
      { id: "sr-enquiry-details",      label: "Enquiry Details" },
      { id: "sr-service-feedback",     label: "Service Feedback" },
      { id: "sr-form-edit",            label: "Form Edit" },
      { id: "sr-call-request-history", label: "Call Request History" },
      { id: "sr-ticket-raise-history", label: "Ticket Raise History" },
      { id: "sr-mail-id-template",     label: "Mail ID Template" },
    ]
  },

  { id: "manage-staff", label: "Manage Staff", icon: "🧑‍💼", type: "page" },
];

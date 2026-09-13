MERA DIGITAL PAY - SEPARATE PAGE FILES

Each left-sidebar option now has its own JavaScript page file in this folder.
The filename matches the menu ID, for example:

  all-partner.js
  all-adhikari.js
  pending-kyc.js
  all-service.js
  bank-credit-card.js
  manage-staff.js

To change only one screen later, edit that screen's matching file.
Shared reusable table, form, badge and data helpers remain in pages.js and
demo-data.js so the same code does not have to be copied into every page.

Every page file is registered with PAGE_RENDERERS and is automatically linked
to the matching sidebar option through nav-data.js.

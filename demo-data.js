// ===== DEMO DATA (sample records for UI demonstration only) =====

const PARTNERS = [
  { id:"MDP1001", name:"Rohit Sharma",   mobile:"98765 43210", email:"rohit.s@example.com",   type:"API",      wallet:"₹12,450", status:"Active"   },
  { id:"MDP1002", name:"Anita Verma",    mobile:"91234 56780", email:"anita.v@example.com",   type:"B2B",      wallet:"₹8,900",  status:"Active"   },
  { id:"MDP1003", name:"Suresh Yadav",   mobile:"99887 66554", email:"suresh.y@example.com",  type:"Reseller", wallet:"₹3,200",  status:"Inactive" },
  { id:"MDP1004", name:"Priya Singh",    mobile:"90011 22334", email:"priya.s@example.com",   type:"BL",       wallet:"₹21,000", status:"Active"   },
  { id:"MDP1005", name:"Manoj Kumar",    mobile:"93456 12378", email:"manoj.k@example.com",   type:"API",      wallet:"₹5,670",  status:"Active"   },
  { id:"MDP1006", name:"Deepak Chauhan", mobile:"97654 11223", email:"deepak.c@example.com",  type:"B2B",      wallet:"₹14,300", status:"Inactive" },
  { id:"MDP1007", name:"Kavita Rani",    mobile:"96543 22110", email:"kavita.r@example.com",  type:"Reseller", wallet:"₹9,540",  status:"Active"   },
  { id:"MDP1008", name:"Vikram Joshi",   mobile:"95432 33445", email:"vikram.j@example.com",  type:"BL",       wallet:"₹17,800", status:"Active"   },
];

const ADHIKARI = [
  { name:"Rajesh Tiwari",  designation:"Zonal Manager",   mobile:"98123 45678", area:"Jaipur",    status:"Active"   },
  { name:"Sunita Rathore", designation:"Area Supervisor",  mobile:"97123 45678", area:"Jodhpur",   status:"Active"   },
  { name:"Naveen Gupta",   designation:"State Head",       mobile:"96123 45678", area:"Udaipur",   status:"Inactive" },
  { name:"Meena Kanwar",   designation:"District Officer", mobile:"95123 45678", area:"Ajmer",     status:"Active"   },
  { name:"Arvind Meena",   designation:"Area Supervisor",  mobile:"94123 45678", area:"Kota",      status:"Active"   },
];

const KYC = [
  { name:"Rohit Sharma",  mobile:"98765 43210", aadhar:"XXXX-XXXX-4521", pan:"ABCDE1234F", status:"Pending",  date:"05 Sep 2026" },
  { name:"Anita Verma",   mobile:"91234 56780", aadhar:"XXXX-XXXX-7743", pan:"PQRSX9821K", status:"Approved", date:"02 Sep 2026" },
  { name:"Suresh Yadav",  mobile:"99887 66554", aadhar:"XXXX-XXXX-1298", pan:"LMNOP4567Q", status:"Rejected", date:"01 Sep 2026" },
  { name:"Priya Singh",   mobile:"90011 22334", aadhar:"XXXX-XXXX-8834", pan:"XYZAB7890C", status:"Pending",  date:"06 Sep 2026" },
  { name:"Manoj Kumar",   mobile:"93456 12378", aadhar:"XXXX-XXXX-6612", pan:"DEFGH3456R", status:"Approved", date:"28 Aug 2026" },
  { name:"Deepak Chauhan",mobile:"97654 11223", aadhar:"XXXX-XXXX-2290", pan:"IJKLM6789S", status:"Pending",  date:"07 Sep 2026" },
];

const SERVICES = [
  { name:"AEPS Cash Withdrawal", category:"Banking",   charge:"₹5 flat",  status:"Active"   },
  { name:"PPI DMT",              category:"Money Transfer", charge:"0.8%", status:"Active"   },
  { name:"BBPS Bill Payment",    category:"Utility",   charge:"₹3 flat",  status:"Active"   },
  { name:"Mobile Recharge",      category:"Recharge",  charge:"1.2%",     status:"Active"   },
  { name:"DTH Recharge",         category:"Recharge",  charge:"1.0%",     status:"Inactive" },
  { name:"Bus Booking",          category:"Travel",    charge:"₹15 flat", status:"Active"   },
  { name:"Flight Booking",       category:"Travel",    charge:"₹99 flat", status:"Active"   },
  { name:"NSDL PAN Card",        category:"Govt.",     charge:"₹45 flat", status:"Active"   },
];

const API_DETAILS = [
  { name:"AEPS Channel 1 API", provider:"NPCI Aggregator", key:"aeps1_live_7f2c...", status:"Connected" },
  { name:"AEPS Channel 2 API", provider:"Paysprint",       key:"aeps2_live_9a1d...", status:"Connected" },
  { name:"PPI DMT API",        provider:"RazorpayX",       key:"dmt_live_3b8e...",   status:"Connected" },
  { name:"BBPS API",           provider:"Bharat BillPay",  key:"bbps_live_5c4f...",  status:"Disconnected" },
  { name:"Recharge API",       provider:"Robotics Exch.",  key:"rch_live_1e9a...",   status:"Connected" },
];

const PACKAGES = [
  { name:"Starter",   price:"₹499 /yr",  services:["AEPS Basic","Mobile Recharge","DTH Recharge"] },
  { name:"Growth",    price:"₹1,999 /yr",services:["AEPS Full","DMT","BBPS","Bus Booking"] },
  { name:"Enterprise",price:"₹4,999 /yr",services:["All Services","Priority Support","Custom API"] },
];

// ===== Additional demo datasets for new sections =====

const FUND_REQUESTS = [
  { partner:"Rohit Sharma",   type:"API",      amount:"₹5,000",  date:"08 Sep 2026", status:"Pending"  },
  { partner:"Anita Verma",    type:"B2B",      amount:"₹12,000", date:"07 Sep 2026", status:"Approved" },
  { partner:"Suresh Yadav",   type:"Reseller", amount:"₹2,500",  date:"07 Sep 2026", status:"Rejected" },
  { partner:"Priya Singh",    type:"BL",       amount:"₹18,000", date:"06 Sep 2026", status:"Pending"  },
  { partner:"Manoj Kumar",    type:"API",      amount:"₹7,200",  date:"05 Sep 2026", status:"Approved" },
  { partner:"Deepak Chauhan", type:"B2B",      amount:"₹9,800",  date:"04 Sep 2026", status:"Pending"  },
  { partner:"Kavita Rani",    type:"Reseller", amount:"₹3,600",  date:"03 Sep 2026", status:"Approved" },
];

const PAYOUT_REQUESTS = [
  { partner:"Rohit Sharma",   type:"API",      amount:"₹4,200",  date:"08 Sep 2026", status:"Pending",  category:"Payout"    },
  { partner:"Anita Verma",    type:"B2B",      amount:"₹6,700",  date:"07 Sep 2026", status:"Approved", category:"Payout"    },
  { partner:"Manoj Kumar",    type:"API",      amount:"₹2,100",  date:"06 Sep 2026", status:"Approved", category:"Payout"    },
  { partner:"Deepak Chauhan", type:"B2B",      amount:"₹9,300",  date:"05 Sep 2026", status:"Pending",  category:"Payout"    },
  { partner:"Suresh Yadav",   type:"Reseller", amount:"₹1,850",  date:"08 Sep 2026", status:"Pending",  category:"BBPS"      },
  { partner:"Kavita Rani",    type:"Reseller", amount:"₹950",    date:"07 Sep 2026", status:"Approved", category:"BBPS"      },
  { partner:"Rohit Sharma",   type:"API",      amount:"₹3,400",  date:"06 Sep 2026", status:"Approved", category:"BBPS"      },
  { partner:"Priya Singh",    type:"BL",       amount:"₹6,200",  date:"05 Sep 2026", status:"Pending",  category:"CreditCard"},
  { partner:"Anita Verma",    type:"B2B",      amount:"₹4,000",  date:"04 Sep 2026", status:"Approved", category:"CreditCard"},
];

const BANKING_REQUESTS = [
  { applicant:"Ramesh Prajapati", mobile:"98123 45001", product:"Bank Account", date:"08 Sep 2026", status:"Pending"  },
  { applicant:"Sunita Devi",      mobile:"98123 45002", product:"Bank Account", date:"07 Sep 2026", status:"Approved" },
  { applicant:"Ashok Kumar",      mobile:"98123 45003", product:"Credit Card",  date:"07 Sep 2026", status:"Pending"  },
  { applicant:"Geeta Bai",        mobile:"98123 45004", product:"Personal Loan",date:"06 Sep 2026", status:"Approved" },
  { applicant:"Mahesh Soni",      mobile:"98123 45005", product:"Business Loan",date:"05 Sep 2026", status:"Pending"  },
  { applicant:"Kiran Patel",      mobile:"98123 45006", product:"Bank BC",      date:"05 Sep 2026", status:"Approved" },
  { applicant:"Vinod Chaudhary",  mobile:"98123 45007", product:"Seller Registration", date:"04 Sep 2026", status:"Pending" },
  { applicant:"Poonam Sharma",    mobile:"98123 45008", product:"M ATM",        date:"03 Sep 2026", status:"Approved" },
];

const BILLING = [
  { invoice:"INV-7001", type:"Recharge", amount:"₹1,240",  date:"08 Sep 2026", status:"Paid"    },
  { invoice:"INV-7002", type:"Recharge", amount:"₹860",    date:"07 Sep 2026", status:"Pending" },
  { invoice:"INV-7003", type:"TDS",      amount:"₹3,420",  date:"05 Sep 2026", status:"Paid"    },
  { invoice:"INV-7004", type:"TDS",      amount:"₹1,980",  date:"01 Sep 2026", status:"Pending" },
  { invoice:"INV-7005", type:"GST",      amount:"₹5,600",  date:"04 Sep 2026", status:"Paid"    },
  { invoice:"INV-7006", type:"GST",      amount:"₹2,310",  date:"02 Sep 2026", status:"Pending" },
];

const SUPPORT = [
  { name:"Rohit Sharma",  subject:"AEPS transaction not credited", date:"08 Sep 2026", status:"Open",     category:"Complaint" },
  { name:"Anita Verma",   subject:"KYC document re-upload issue",  date:"07 Sep 2026", status:"Resolved", category:"Complaint" },
  { name:"Suresh Yadav",  subject:"Wants API pricing details",     date:"07 Sep 2026", status:"Open",     category:"Enquiry"   },
  { name:"Priya Singh",   subject:"Interested in BL partnership",  date:"06 Sep 2026", status:"Resolved", category:"Enquiry"   },
  { name:"Manoj Kumar",   subject:"Great support experience",      date:"06 Sep 2026", status:"Resolved", category:"Feedback"  },
  { name:"Deepak Chauhan",subject:"App feels slow on recharge",    date:"05 Sep 2026", status:"Open",     category:"Feedback"  },
  { name:"Kavita Rani",   subject:"Homepage banner not loading",   date:"05 Sep 2026", status:"Open",     category:"Review"    },
  { name:"Vikram Joshi",  subject:"Requested callback on DMT limit",date:"04 Sep 2026",status:"Resolved", category:"Call"      },
  { name:"Rohit Sharma",  subject:"Ticket #4521 - Payout delay",   date:"03 Sep 2026", status:"Open",     category:"Ticket"    },
];

const STAFF = [
  { name:"Anil Kumar",    role:"Field Officer",   mobile:"91234 00011", status:"Active"   },
  { name:"Rekha Sharma",  role:"Support Executive",mobile:"91234 00022", status:"Active"   },
  { name:"Vijay Singh",   role:"Field Officer",    mobile:"91234 00033", status:"Inactive" },
  { name:"Nisha Patel",   role:"Compliance Officer",mobile:"91234 00044",status:"Active"   },
  { name:"Sanjay Rao",    role:"Field Officer",    mobile:"91234 00055", status:"Active"   },
];

const ID_CARDS = [
  { name:"Anil Kumar",   cardNo:"MDP-IC-1021", role:"Field Officer",    issueDate:"01 Jul 2026", status:"Active"  },
  { name:"Rekha Sharma", cardNo:"MDP-IC-1022", role:"Support Executive",issueDate:"14 Jul 2026", status:"Active"  },
  { name:"Vijay Singh",  cardNo:"MDP-IC-1023", role:"Field Officer",    issueDate:"20 Jul 2026", status:"Expired" },
  { name:"Sanjay Rao",   cardNo:"MDP-IC-1024", role:"Field Officer",    issueDate:"03 Aug 2026", status:"Active"  },
];

const APP_VERSIONS = [
  { platform:"Android App", version:"v4.2.1", releaseDate:"20 Aug 2026", status:"Live"     },
  { platform:"iOS App",     version:"v4.1.0", releaseDate:"05 Aug 2026", status:"Live"     },
  { platform:"Partner Web Portal", version:"v2.9.0", releaseDate:"28 Aug 2026", status:"Live" },
  { platform:"Android App", version:"v4.3.0-beta", releaseDate:"07 Sep 2026", status:"Testing" },
];

const ROLES = [
  { role:"Super Admin",  assigned:"3 users",  permissions:"Full access" },
  { role:"State Head",   assigned:"12 users", permissions:"Regional partner & fund control" },
  { role:"Zonal Manager",assigned:"28 users", permissions:"Partner onboarding & KYC" },
  { role:"Support Staff",assigned:"9 users",  permissions:"Ticket & complaint handling" },
];

const COMMISSION_SLABS = [
  { service:"AEPS Cash Withdrawal", partnerType:"API Partner",     rate:"0.35%" },
  { service:"AEPS Cash Withdrawal", partnerType:"B2B Partner",     rate:"0.30%" },
  { service:"PPI DMT",              partnerType:"API Partner",     rate:"0.80%" },
  { service:"BBPS Bill Payment",    partnerType:"Reseller Partner",rate:"₹3 flat" },
  { service:"Mobile Recharge",      partnerType:"All Partners",    rate:"1.2%" },
];

const TRANSACTIONS = [
  { txnId:"TXN90231", partner:"Rohit Sharma",  service:"AEPS",   amount:"₹2,500", date:"08 Sep 2026 10:14", status:"Success" },
  { txnId:"TXN90232", partner:"Anita Verma",   service:"DMT",    amount:"₹8,000", date:"08 Sep 2026 09:52", status:"Success" },
  { txnId:"TXN90233", partner:"Suresh Yadav",  service:"BBPS",   amount:"₹450",   date:"08 Sep 2026 09:10", status:"Failed"  },
  { txnId:"TXN90234", partner:"Priya Singh",   service:"Recharge",amount:"₹199", date:"07 Sep 2026 21:03", status:"Success" },
  { txnId:"TXN90235", partner:"Manoj Kumar",   service:"AEPS",   amount:"₹1,200", date:"07 Sep 2026 18:44", status:"Pending" },
  { txnId:"TXN90236", partner:"Deepak Chauhan",service:"Payout", amount:"₹6,000", date:"07 Sep 2026 15:21", status:"Success" },
];

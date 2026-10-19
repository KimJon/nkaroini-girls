/* =========================================================
   NKARONI GIRLS SENIOR SCHOOL - BURSAR & RECEIPT SYSTEM
   Core Logic, Data Stores, Print Engine & Calculations
   ========================================================= */

// Default School Profile
const DEFAULT_SCHOOL_PROFILE = {
  name: "NKARONI GIRLS SENIOR SCHOOL",
  motto: "Determination Leads to Excellence",
  postalBox: "P.O. BOX 32 - 20603 WAMBA",
  tel: "0703 193 991",
  email: "nkaronigirls@gmail.com",
  county: "Samburu County",
  bankName: "Kenya Commercial Bank (KCB)",
  bankBranch: "Maralal Branch",
  accountNo: "1123456789",
  paybillNo: "522522",
  paybillAcc: "Student Adm No (e.g. NG0101)",
  bursarName: "Bursar / Accounts Office",
  principalName: "Senior Principal",
  serialPrefix: "NGSS-",
  nextReceiptNo: 1001,
  showStamp: true,
  stampText: "NKARONI GIRLS SENIOR SCHOOL\nBURSAR\nP.O. BOX 32 - 20603, WAMBA"
};

// Initial Sample Students
const INITIAL_STUDENTS = [
  { id: "s1", admNo: "NG0101", name: "FAITH CHEPKIRUI", form: "Form 1", phone: "0712345678", parent: "John Chepkirui", termFee: 25000, balance: 5000 },
  { id: "s2", admNo: "NG0102", name: "MERCY AKINYI", form: "Form 1", phone: "0723456789", parent: "Mary Akinyi", termFee: 25000, balance: 12000 },
  { id: "s3", admNo: "NG0103", name: "SHARON WANJIKU", form: "Form 1", phone: "0734567890", parent: "Peter Mwangi", termFee: 25000, balance: 0 },
  { id: "s4", admNo: "NG0104", name: "JOY NALIAKA", form: "Form 1", phone: "0745678901", parent: "Esther Naliaka", termFee: 25000, balance: 10000 },
  { id: "s5", admNo: "NG0105", name: "PURITY NAFULA", form: "Form 1", phone: "0756789012", parent: "James Wafula", termFee: 25000, balance: 7500 },
  { id: "s6", admNo: "NG0201", name: "BRENDA MUTHONI", form: "Form 2", phone: "0767890123", parent: "Grace Muthoni", termFee: 28000, balance: 8000 },
  { id: "s7", admNo: "NG0202", name: "DIANA CHEBET", form: "Form 2", phone: "0778901234", parent: "David Chebet", termFee: 28000, balance: 0 },
  { id: "s8", admNo: "NG0203", name: "VALENTINE ATIENO", form: "Form 2", phone: "0789012345", parent: "Rose Atieno", termFee: 28000, balance: 14000 },
  { id: "s9", admNo: "NG0301", name: "ESTHER CHEROTICH", form: "Form 3", phone: "0790123456", parent: "Daniel Cherotich", termFee: 30000, balance: 6000 },
  { id: "s10", admNo: "NG0302", name: "GLADYS WAIRIMU", form: "Form 3", phone: "0711223344", parent: "Margaret Wairimu", termFee: 30000, balance: 0 },
  { id: "s11", admNo: "NG0401", name: "WINNIE NDINDA", form: "Form 4", phone: "0722334455", parent: "Joseph Mutua", termFee: 32000, balance: 4000 },
  { id: "s12", admNo: "NG0402", name: "SYLVIA JEMUTAI", form: "Form 4", phone: "0733445566", parent: "Alice Jemutai", termFee: 32000, balance: 9500 }
];

// Initial Vendors / Suppliers
const INITIAL_VENDORS = [
  { id: "v1", name: "WAMBA GRAIN & CEREALS SUPPLIERS", category: "Food & Ration", contact: "Samuel Lenolkulal", phone: "0720112233", kra: "A001928374Z", balance: 45000, totalPaid: 320000 },
  { id: "v2", name: "SAMBURU BOOKSHOP & STATIONERS", category: "Stationery & Books", contact: "Agnes Nduta", phone: "0722445566", kra: "P051234567X", balance: 0, totalPaid: 154000 },
  { id: "v3", name: "RIFT VALLEY UNIFORM DISTRIBUTORS", category: "School Uniforms", contact: "Mohamed Noor", phone: "0711889900", kra: "P059988776M", balance: 25000, totalPaid: 210000 },
  { id: "v4", name: "WAMBA WATER & SANITATION PROJECT", category: "Electricity, Water & Conservancy", contact: "Eng. Kariuki", phone: "0733556677", kra: "P000987654K", balance: 12000, totalPaid: 95000 },
  { id: "v5", name: "HIGHLAND LAB & CHEMICAL SUPPLIES", category: "Laboratory & Science", contact: "Dr. Omondi", phone: "0729778899", kra: "P056655443Q", balance: 18000, totalPaid: 140000 }
];

// Default Fee Structures by Class
const DEFAULT_FEE_STRUCTURES = {
  "Form 1": {
    academicYear: "2026",
    voteheads: [
      { name: "Tuition Fee (Government Subsidized)", t1: 0, t2: 0, t3: 0, note: "MoE FSDE" },
      { name: "Boarding, Catering & Accomodation", t1: 15000, t2: 12000, t3: 8000, note: "BES" },
      { name: "Electricity, Water & Conservancy (EWC)", t1: 2500, t2: 2000, t3: 1500, note: "Utilities" },
      { name: "Repairs, Maintenance & Improvement (RMI)", t1: 2000, t2: 1500, t3: 1000, note: "Facilities" },
      { name: "Local Transport & Travel (LT&T)", t1: 1200, t2: 1000, t3: 800, note: "Mobility" },
      { name: "Administration & Evaluation / Exams", t1: 1800, t2: 1500, t3: 1200, note: "Internal" },
      { name: "Activity & Co-Curricular", t1: 1000, t2: 800, t3: 600, note: "Sports & Drama" },
      { name: "Personal Emoluments (PE - Support Staff)", t1: 3000, t2: 2500, t3: 2000, note: "Staffing" },
      { name: "Medical & Student Welfare", t1: 1000, t2: 700, t3: 500, note: "Clinic" },
      { name: "Admission / School Uniform & Mattress (New)", t1: 8500, t2: 0, t3: 0, note: "First Term Only" }
    ],
    notes: [
      "School fees must be paid on or before the first day of each term.",
      "Payments must be deposited directly to the School Bank Account or through M-Pesa Paybill.",
      "Cash and personal cheques are NOT accepted in the school compound.",
      "Always quote the student's Admission Number and Name on bank slips or M-Pesa reference."
    ]
  },
  "Form 2": {
    academicYear: "2026",
    voteheads: [
      { name: "Tuition Fee (Government Subsidized)", t1: 0, t2: 0, t3: 0, note: "MoE FSDE" },
      { name: "Boarding, Catering & Accomodation", t1: 15000, t2: 12000, t3: 8000, note: "BES" },
      { name: "Electricity, Water & Conservancy (EWC)", t1: 2500, t2: 2000, t3: 1500, note: "Utilities" },
      { name: "Repairs, Maintenance & Improvement (RMI)", t1: 2000, t2: 1500, t3: 1000, note: "Facilities" },
      { name: "Local Transport & Travel (LT&T)", t1: 1200, t2: 1000, t3: 800, note: "Mobility" },
      { name: "Administration & Evaluation / Exams", t1: 1800, t2: 1500, t3: 1200, note: "Internal" },
      { name: "Activity & Co-Curricular", t1: 1000, t2: 800, t3: 600, note: "Sports" },
      { name: "Personal Emoluments (PE - Support Staff)", t1: 3000, t2: 2500, t3: 2000, note: "Staffing" },
      { name: "Medical & Student Welfare", t1: 1000, t2: 700, t3: 500, note: "Clinic" }
    ],
    notes: [
      "School fees must be paid on or before the first day of each term.",
      "Payments must be deposited directly to the School Bank Account or through M-Pesa Paybill.",
      "Cash and personal cheques are NOT accepted in the school compound."
    ]
  },
  "Form 3": {
    academicYear: "2026",
    voteheads: [
      { name: "Tuition Fee (Government Subsidized)", t1: 0, t2: 0, t3: 0, note: "MoE FSDE" },
      { name: "Boarding, Catering & Accomodation", t1: 16000, t2: 13000, t3: 9000, note: "BES" },
      { name: "Electricity, Water & Conservancy (EWC)", t1: 2500, t2: 2000, t3: 1500, note: "Utilities" },
      { name: "Repairs, Maintenance & Improvement (RMI)", t1: 2000, t2: 1500, t3: 1000, note: "Facilities" },
      { name: "Local Transport & Travel (LT&T)", t1: 1200, t2: 1000, t3: 800, note: "Mobility" },
      { name: "Administration & Evaluation / Exams", t1: 2000, t2: 1800, t3: 1400, note: "County Mocks" },
      { name: "Activity & Co-Curricular", t1: 1000, t2: 800, t3: 600, note: "Sports" },
      { name: "Personal Emoluments (PE - Support Staff)", t1: 3000, t2: 2500, t3: 2000, note: "Staffing" },
      { name: "Medical & Student Welfare", t1: 1000, t2: 700, t3: 500, note: "Clinic" }
    ],
    notes: [
      "School fees must be paid on or before the first day of each term.",
      "Payments must be deposited directly to the School Bank Account or through M-Pesa Paybill."
    ]
  },
  "Form 4": {
    academicYear: "2026",
    voteheads: [
      { name: "Tuition Fee (Government Subsidized)", t1: 0, t2: 0, t3: 0, note: "MoE FSDE" },
      { name: "Boarding, Catering & Accomodation", t1: 17000, t2: 14000, t3: 9000, note: "BES" },
      { name: "Electricity, Water & Conservancy (EWC)", t1: 2500, t2: 2000, t3: 1500, note: "Utilities" },
      { name: "Repairs, Maintenance & Improvement (RMI)", t1: 2000, t2: 1500, t3: 1000, note: "Facilities" },
      { name: "Local Transport & Travel (LT&T)", t1: 1500, t2: 1200, t3: 1000, note: "Mobility" },
      { name: "KCSE Registration, Practical Materials & Mocks", t1: 4500, t2: 3000, t3: 1000, note: "KNEC / Mocks" },
      { name: "Administration & Academic Motivation", t1: 2000, t2: 1500, t3: 1000, note: "Internal" },
      { name: "Activity & Co-Curricular", t1: 1000, t2: 800, t3: 600, note: "Sports" },
      { name: "Personal Emoluments (PE - Support Staff)", t1: 3000, t2: 2500, t3: 2000, note: "Staffing" },
      { name: "Medical & Student Welfare", t1: 1000, t2: 700, t3: 500, note: "Clinic" }
    ],
    notes: [
      "Form 4 candidates must clear all school fees by the end of Term 2.",
      "Payments must be deposited directly to the School Bank Account or through M-Pesa Paybill."
    ]
  }
};

// Initial Sample Receipts History
const INITIAL_RECEIPTS = [
  {
    id: "rc-1001",
    receiptNo: "NGSS-1001",
    date: "2026-10-18",
    type: "student",
    account: "Tuition & Boarding Account",
    receivedFrom: "FAITH CHEPKIRUI",
    admNo: "NG0101",
    form: "Form 1",
    mode: "M-Pesa",
    refNo: "QKH891029X",
    amount: 20000,
    amountWords: "Twenty thousand shillings only.",
    purpose: "Term 1 School Fees Payment",
    voteheads: [
      { name: "Boarding & Catering", amount: 12000 },
      { name: "EWC (Water & Electricity)", amount: 2500 },
      { name: "R.M.I", amount: 2000 },
      { name: "Activity", amount: 1000 },
      { name: "Administration & Exams", amount: 2500 }
    ],
    prevBalance: 25000,
    newBalance: 5000
  },
  {
    id: "rc-1002",
    receiptNo: "NGSS-1002",
    date: "2026-10-15",
    type: "capitation",
    account: "Operations Account",
    receivedFrom: "MINISTRY OF EDUCATION",
    admNo: "GOV-FSDE",
    form: "All Classes",
    mode: "EFT",
    refNo: "EFT23352520811",
    amount: 639460.65,
    amountWords: "Six hundred and thirty nine thousand, four hundred and sixty shillings and sixty five cents only.",
    purpose: "FSDE Free Secondary Day Education Capitation Funds Term 3",
    voteheads: [
      { name: "EWC", amount: 55218.00 },
      { name: "LT&T", amount: 55218.00 },
      { name: "PEmoluments", amount: 300000.00 },
      { name: "Admin Cost", amount: 50000.00 },
      { name: "Activity", amount: 23624.65 },
      { name: "Infrastructure", amount: 155400.00 }
    ],
    prevBalance: 0,
    newBalance: 0
  },
  {
    id: "rc-1003",
    receiptNo: "NGSS-1003",
    date: "2026-10-12",
    type: "vendor",
    account: "Operations Account",
    receivedFrom: "WAMBA GRAIN & CEREALS SUPPLIERS",
    admNo: "VEND-01",
    form: "Supplier Payment",
    mode: "Cheque",
    refNo: "CHQ-002910",
    amount: 85000,
    amountWords: "Eighty-five thousand shillings only.",
    purpose: "Supply of 50 bags Maize & 30 bags Beans for Term 1 Boarding",
    voteheads: [
      { name: "Boarding & Catering Stores", amount: 85000 }
    ],
    prevBalance: 130000,
    newBalance: 45000
  }
];

// App State Management
class SchoolSystemState {
  constructor() {
    this.profile = this.load("ngss_profile", DEFAULT_SCHOOL_PROFILE);
    this.students = this.load("ngss_students", INITIAL_STUDENTS);
    this.vendors = this.load("ngss_vendors", INITIAL_VENDORS);
    this.receipts = this.load("ngss_receipts", INITIAL_RECEIPTS);
    this.feeStructures = this.load("ngss_fee_structures", DEFAULT_FEE_STRUCTURES);
    this.classes = ["Form 1", "Form 2", "Form 3", "Form 4"];
    this.syncNextReceiptNo();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage read error, using defaults:", e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Storage write error:", e);
    }
  }

  syncNextReceiptNo() {
    let max = 1000;
    this.receipts.forEach(r => {
      const match = (r.receiptNo || "").match(/\d+/);
      if (match) {
        const num = parseInt(match[0], 10);
        if (num > max) max = num;
      }
    });
    this.profile.nextReceiptNo = max + 1;
  }

  getNextReceiptNumber() {
    const num = this.profile.nextReceiptNo || 1001;
    this.profile.nextReceiptNo = num + 1;
    this.save("ngss_profile", this.profile);
    return `${this.profile.serialPrefix || "NGSS-"}${num}`;
  }

  addStudent(student) {
    this.students.unshift(student);
    this.save("ngss_students", this.students);
  }

  updateStudent(student) {
    const index = this.students.findIndex(s => s.id === student.id || s.admNo === student.admNo);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...student };
      this.save("ngss_students", this.students);
    }
  }

  deleteStudent(id) {
    this.students = this.students.filter(s => s.id !== id);
    this.save("ngss_students", this.students);
  }

  addVendor(vendor) {
    this.vendors.unshift(vendor);
    this.save("ngss_vendors", this.vendors);
  }

  updateVendor(vendor) {
    const index = this.vendors.findIndex(v => v.id === vendor.id);
    if (index !== -1) {
      this.vendors[index] = { ...this.vendors[index], ...vendor };
      this.save("ngss_vendors", this.vendors);
    }
  }

  deleteVendor(id) {
    this.vendors = this.vendors.filter(v => v.id !== id);
    this.save("ngss_vendors", this.vendors);
  }

  addReceipt(receipt) {
    this.receipts.unshift(receipt);
    this.save("ngss_receipts", this.receipts);

    // If it's a student receipt, update student balance
    if (receipt.type === "student" && receipt.admNo) {
      const student = this.students.find(s => s.admNo === receipt.admNo);
      if (student) {
        student.balance = Math.max(0, (student.balance || 0) - receipt.amount);
        this.save("ngss_students", this.students);
      }
    }

    // If it's a vendor payment, update vendor balance & total paid
    if (receipt.type === "vendor" && receipt.vendorId) {
      const vendor = this.vendors.find(v => v.id === receipt.vendorId || v.name === receipt.receivedFrom);
      if (vendor) {
        vendor.totalPaid = (vendor.totalPaid || 0) + receipt.amount;
        vendor.balance = Math.max(0, (vendor.balance || 0) - receipt.amount);
        this.save("ngss_vendors", this.vendors);
      }
    }
  }

  deleteReceipt(id) {
    this.receipts = this.receipts.filter(r => r.id !== id);
    this.save("ngss_receipts", this.receipts);
  }
}

// Global State Instance
const appState = new SchoolSystemState();

/* =========================================================
   NUMBER TO WORDS CONVERTER (KENYAN SHILLINGS & CENTS)
   ========================================================= */

function numberToWords(num) {
  if (num === null || num === undefined || isNaN(num)) return "";
  
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const scales = ["", "thousand", "million", "billion"];

  num = parseFloat(num);
  if (num === 0) return "Zero shillings only.";

  const parts = num.toFixed(2).split(".");
  let integerPart = parseInt(parts[0], 10);
  const cents = parseInt(parts[1], 10);

  function convertGroup(n) {
    let s = "";
    if (n >= 100) {
      s += ones[Math.floor(n / 100)] + " hundred ";
      n %= 100;
      if (n > 0) s += "and ";
    }
    if (n >= 20) {
      s += tens[Math.floor(n / 10)];
      if (n % 10 > 0) s += "-" + ones[n % 10];
      s += " ";
    } else if (n > 0) {
      s += ones[n] + " ";
    }
    return s.trim();
  }

  let words = "";
  let scaleIndex = 0;

  while (integerPart > 0) {
    const chunk = integerPart % 1000;
    if (chunk !== 0) {
      const chunkWords = convertGroup(chunk);
      const scale = scales[scaleIndex];
      words = chunkWords + (scale ? " " + scale + ", " : " ") + words;
    }
    integerPart = Math.floor(integerPart / 1000);
    scaleIndex++;
  }

  words = words.trim().replace(/,\s*$/, "");
  
  // Capitalize first letter
  if (words.length > 0) {
    words = words.charAt(0).toUpperCase() + words.slice(1);
  }

  let result = words + " shillings";
  if (cents > 0) {
    const centsWords = convertGroup(cents);
    result += " and " + centsWords + " cents";
  }
  result += " only.";

  return result;
}

function formatCurrency(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "0.00";
  return Number(amount).toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const day = String(d.getDate()).padStart(2, '0');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

/* =========================================================
   RECEIPT HTML GENERATOR (FOR PREVIEW AND PRINT)
   ========================================================= */

function generateReceiptHTML(data, options = {}) {
  const profile = appState.profile;
  const isDuplicate = options.isDuplicate || false;
  const copyLabel = options.copyLabel || (isDuplicate ? "STUDENT / PARENT COPY" : "ORIGINAL");
  const isHalfPage = options.isHalfPage || false;

  const logoSrc = (typeof SCHOOL_LOGO_BASE64 !== 'undefined' && SCHOOL_LOGO_BASE64) ? SCHOOL_LOGO_BASE64 : 'logo.jpeg';

  let voteheadsRows = "";
  if (data.voteheads && data.voteheads.length > 0) {
    voteheadsRows = data.voteheads.map(vh => `
      <tr>
        <td class="rc-vh-name">${vh.name}</td>
        <td class="rc-vh-amount">${formatCurrency(vh.amount)}</td>
      </tr>
    `).join("");
  } else {
    voteheadsRows = `
      <tr>
        <td class="rc-vh-name">School Fees / Tuition</td>
        <td class="rc-vh-amount">${formatCurrency(data.amount)}</td>
      </tr>
    `;
  }

  const stampHtml = profile.showStamp ? `
    <div class="rc-rubber-stamp">
      <div class="stamp-title">${profile.name}</div>
      <div style="font-weight:900; font-size:12px; margin:2px 0;">* BURSAR *</div>
      <div class="stamp-sub">${profile.postalBox}</div>
      <div class="stamp-sub">DATE: ${formatDate(data.date)}</div>
    </div>
  ` : '';

  const balanceHtml = (data.newBalance !== undefined && data.newBalance !== null && data.type === 'student') ? `
    <tr>
      <td class="rc-label">Fee Balance Status:</td>
      <td colspan="3">
        <span class="rc-balance-pill">
          Term Balance Remaining: <strong>Ksh ${formatCurrency(data.newBalance)}</strong>
          ${data.prevBalance ? ` (Previous: Ksh ${formatCurrency(data.prevBalance)})` : ''}
        </span>
      </td>
    </tr>
  ` : '';

  return `
    <div class="receipt-sheet ${isHalfPage ? 'half-page' : ''}">
      <!-- Header -->
      <div class="rc-header-top">
        <div class="rc-school-meta">
          <div class="rc-school-name">${profile.name}</div>
          <div class="rc-contact-info">
            <strong>${profile.postalBox}</strong><br>
            Tel: ${profile.tel} &nbsp;|&nbsp; Email: ${profile.email}<br>
            <em style="color:#991b1b; font-size:12px;">"${profile.motto}"</em>
          </div>
        </div>
        <div class="rc-header-right">
          <div class="rc-copy-type">${copyLabel}</div>
          <img src="${logoSrc}" alt="Logo" class="rc-logo-img">
        </div>
      </div>

      <!-- Title Bar -->
      <div class="rc-title-bar">
        <div class="rc-title">OFFICIAL SCHOOL RECEIPT</div>
      </div>

      <!-- Meta Serial & Account -->
      <div class="rc-meta-row">
        <div class="rc-serial-red">S.No ${data.receiptNo || 'NGSS-0000'}</div>
        <div class="rc-account-name">** ${data.account || 'Operations Account'} **</div>
      </div>

      <!-- Details Table -->
      <table class="rc-details-table">
        <tr>
          <td class="rc-label" style="width:16%;">Received From:</td>
          <td class="rc-val" style="width:48%;"><strong>${data.receivedFrom || ''}</strong></td>
          <td class="rc-label" style="width:14%; text-align:right;">Adm / Ref No:</td>
          <td class="rc-val" style="width:22%; font-weight:bold;">${data.admNo || 'N/A'}</td>
        </tr>
        <tr>
          <td class="rc-label">Class / Form:</td>
          <td class="rc-val"><strong>${data.form || 'General'}</strong></td>
          <td class="rc-label" style="text-align:right;">Tel No:</td>
          <td class="rc-val">${data.phone || profile.tel}</td>
        </tr>
        <tr>
          <td class="rc-label">Mode of Pay:</td>
          <td class="rc-val"><strong>${data.mode || 'Cash'}</strong></td>
          <td class="rc-label" style="text-align:right;">Chq / Ref No:</td>
          <td class="rc-val">${data.refNo || 'N/A'}</td>
        </tr>
        <tr>
          <td class="rc-label">Amount (Figures):</td>
          <td class="rc-val" style="font-weight:bold; font-size:15px; color:#1e3a8a;">
            Ksh ${formatCurrency(data.amount)}
          </td>
          <td class="rc-label" style="text-align:right;">Date:</td>
          <td class="rc-val"><strong>${formatDate(data.date)}</strong></td>
        </tr>
        <tr>
          <td class="rc-label">Amount in Words:</td>
          <td colspan="3" class="rc-val" style="font-style:italic;">
            ${data.amountWords || numberToWords(data.amount)}
          </td>
        </tr>
        <tr>
          <td class="rc-label">Being Payment For:</td>
          <td colspan="3" class="rc-val">
            ${data.purpose || 'School Fees'}
          </td>
        </tr>
        ${balanceHtml}
      </table>

      <!-- Vote Heads Breakdown -->
      <div class="rc-voteheads-section">
        <div class="rc-voteheads-heading">VOTE HEADS BREAKDOWN</div>
        <table class="rc-voteheads-table">
          ${voteheadsRows}
          <tr class="rc-total-row">
            <td style="text-align:left;">Total Paid:</td>
            <td class="rc-vh-amount">Ksh ${formatCurrency(data.amount)}</td>
          </tr>
        </table>
      </div>

      <!-- Watermark text -->
      <div class="rc-watermark-vertical">${profile.name}</div>

      <!-- Stamp and Signatures -->
      <div class="rc-footer">
        <div class="rc-voucher-no">Vo ${Math.floor(10000000 + Math.random() * 90000000)}</div>
        
        ${stampHtml}

        <div class="rc-signature-box">
          <div class="rc-sig-line"></div>
          <div class="rc-sig-title">Signature</div>
          <div class="rc-sig-sub">${profile.bursarName}</div>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   FEE STRUCTURE HTML GENERATOR
   ========================================================= */

function generateFeeStructureHTML(className) {
  const profile = appState.profile;
  const fsData = appState.feeStructures[className] || appState.feeStructures["Form 1"];
  const logoSrc = (typeof SCHOOL_LOGO_BASE64 !== 'undefined' && SCHOOL_LOGO_BASE64) ? SCHOOL_LOGO_BASE64 : 'logo.jpeg';

  let totalT1 = 0, totalT2 = 0, totalT3 = 0, totalYear = 0;

  const rowsHtml = fsData.voteheads.map((vh, index) => {
    const rowTotal = (vh.t1 || 0) + (vh.t2 || 0) + (vh.t3 || 0);
    totalT1 += (vh.t1 || 0);
    totalT2 += (vh.t2 || 0);
    totalT3 += (vh.t3 || 0);
    totalYear += rowTotal;

    return `
      <tr>
        <td style="width:6%; text-align:center;">${index + 1}</td>
        <td style="width:44%;"><strong>${vh.name}</strong> <span style="font-size:11px; color:#64748b;">(${vh.note || ''})</span></td>
        <td class="text-right" style="width:12%;">${formatCurrency(vh.t1)}</td>
        <td class="text-right" style="width:12%;">${formatCurrency(vh.t2)}</td>
        <td class="text-right" style="width:12%;">${formatCurrency(vh.t3)}</td>
        <td class="text-right" style="width:14%; font-weight:bold;">${formatCurrency(rowTotal)}</td>
      </tr>
    `;
  }).join("");

  const notesHtml = (fsData.notes || []).map(n => `<li>${n}</li>`).join("");

  return `
    <div class="feestructure-sheet">
      <!-- Letterhead -->
      <div class="fs-letterhead">
        <img src="${logoSrc}" alt="Logo" class="fs-crest">
        <div class="fs-center-header">
          <div class="fs-school-title">${profile.name}</div>
          <div class="fs-motto">MOTTO: "${profile.motto}"</div>
          <div class="fs-address">
            ${profile.postalBox} &nbsp;|&nbsp; ${profile.county}<br>
            Tel: ${profile.tel} &nbsp;|&nbsp; Email: ${profile.email}
          </div>
        </div>
        <img src="${logoSrc}" alt="Logo" class="fs-crest" style="visibility:hidden;">
      </div>

      <!-- Document Title -->
      <div class="fs-doc-title-bar">
        <div class="fs-doc-title">OFFICIAL FEES STRUCTURE FOR ACADEMIC YEAR ${fsData.academicYear || '2026'}</div>
        <div class="fs-class-badge">TARGET CLASS: ${className.toUpperCase()}</div>
      </div>

      <!-- Fee Table -->
      <table class="fs-table">
        <thead>
          <tr>
            <th style="width:6%; text-align:center;">#</th>
            <th style="width:44%;">Vote Head / Item Description</th>
            <th class="text-right" style="width:12%;">Term 1 (Ksh)</th>
            <th class="text-right" style="width:12%;">Term 2 (Ksh)</th>
            <th class="text-right" style="width:12%;">Term 3 (Ksh)</th>
            <th class="text-right" style="width:14%;">Total / Year</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
          <tr class="total-row">
            <td colspan="2" style="text-align:right;">TOTAL PAYABLE BY PARENT:</td>
            <td class="text-right">Ksh ${formatCurrency(totalT1)}</td>
            <td class="text-right">Ksh ${formatCurrency(totalT2)}</td>
            <td class="text-right">Ksh ${formatCurrency(totalT3)}</td>
            <td class="text-right">Ksh ${formatCurrency(totalYear)}</td>
          </tr>
        </tbody>
      </table>

      <!-- Banking & Payment Instructions -->
      <div class="fs-payment-instructions">
        <div class="fs-pay-title">OFFICIAL PAYMENT CHANNELS & GUIDELINES</div>
        <div class="fs-pay-grid">
          <div>
            <strong>1. DIRECT BANK DEPOSIT / EFT:</strong><br>
            Bank Name: <strong>${profile.bankName}</strong><br>
            Branch: <strong>${profile.bankBranch}</strong><br>
            Account Name: <strong>${profile.name}</strong><br>
            Account Number: <strong>${profile.accountNo}</strong>
          </div>
          <div>
            <strong>2. M-PESA PAYBILL SERVICE:</strong><br>
            Business / Paybill No: <strong>${profile.paybillNo}</strong><br>
            Account Number: <strong>${profile.paybillAcc}</strong><br>
            <em>(e.g., NG0101 FAITH)</em><br>
            <span style="color:#b91c1c; font-size:12px; font-weight:bold;">* DO NOT pay to personal phone numbers.</span>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="fs-notes-box">
        <strong>IMPORTANT REGULATIONS:</strong>
        <ol>
          ${notesHtml}
        </ol>
      </div>

      <!-- Stamp Watermark -->
      ${profile.showStamp ? `
        <div class="fs-stamp-watermark">
          ${profile.name}<br>
          * OFFICE OF THE PRINCIPAL *<br>
          ${profile.postalBox}<br>
          DATE: ${formatDate(new Date().toISOString())}
        </div>
      ` : ''}

      <!-- Signatures -->
      <div class="fs-endorsement">
        <div class="fs-sig-block">
          <div class="fs-sig-line"></div>
          <strong>${profile.bursarName}</strong><br>
          <span style="font-size:12px; color:#64748b;">Accounts & Finance</span>
        </div>
        <div class="fs-sig-block">
          <div class="fs-sig-line"></div>
          <strong>${profile.principalName}</strong><br>
          <span style="font-size:12px; color:#64748b;">Principal & Secretary BOM</span>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   UI CONTROLLER & DOM EVENT BINDINGS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initDashboard();
  initStudentsModule();
  initVendorsModule();
  initSingleReceiptModule();
  initBatchReceiptsModule();
  initCapitationReceiptModule();
  initFeeStructureModule();
  initHistoryModule();
  initSettingsModule();
});

// Navigation Handling
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.tab;
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
        // Trigger refreshes for active panels
        if (targetId === "dashboardPanel") initDashboard();
        if (targetId === "studentsPanel") renderStudentsTable();
        if (targetId === "vendorsPanel") renderVendorsTable();
        if (targetId === "historyPanel") renderHistoryTable();
      }
    });
  });
}

// 1. Dashboard Metrics
function initDashboard() {
  const totalStudents = appState.students.length;
  const totalVendors = appState.vendors.length;
  
  let totalCollections = 0;
  let totalCapitation = 0;
  let totalVendorPaid = 0;

  appState.receipts.forEach(r => {
    if (r.type === "student") totalCollections += (r.amount || 0);
    else if (r.type === "capitation") totalCapitation += (r.amount || 0);
    else if (r.type === "vendor") totalVendorPaid += (r.amount || 0);
  });

  const elStudents = document.getElementById("statTotalStudents");
  const elCollections = document.getElementById("statTotalCollections");
  const elCapitation = document.getElementById("statTotalCapitation");
  const elVendors = document.getElementById("statTotalVendors");

  if (elStudents) elStudents.textContent = totalStudents;
  if (elCollections) elCollections.textContent = "Ksh " + formatCurrency(totalCollections);
  if (elCapitation) elCapitation.textContent = "Ksh " + formatCurrency(totalCapitation);
  if (elVendors) elVendors.textContent = `${totalVendors} (Paid: Ksh ${formatCurrency(totalVendorPaid)})`;

  // Recent Receipts Table
  const recentTable = document.getElementById("recentReceiptsTbody");
  if (recentTable) {
    const recent = appState.receipts.slice(0, 6);
    if (recent.length === 0) {
      recentTable.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding:1.5rem;">No receipts generated yet.</td></tr>`;
    } else {
      recentTable.innerHTML = recent.map(r => `
        <tr>
          <td><strong>${r.receiptNo}</strong></td>
          <td>${formatDate(r.date)}</td>
          <td>${r.receivedFrom}</td>
          <td><span class="badge-tag" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">${r.form || r.type}</span></td>
          <td style="font-weight:bold; color:#1e3a8a;">Ksh ${formatCurrency(r.amount)}</td>
          <td>
            <button class="btn btn-secondary btn-sm" onclick="reprintReceipt('${r.id}')">Print</button>
          </td>
        </tr>
      `).join("");
    }
  }
}

// 2. Students & Classes Module
function initStudentsModule() {
  const classFilter = document.getElementById("studentClassFilter");
  const searchInput = document.getElementById("studentSearchInput");
  const addBtn = document.getElementById("btnAddStudent");
  const importBtn = document.getElementById("btnImportCSV");
  const csvFileInput = document.getElementById("csvStudentFileInput");

  if (classFilter) classFilter.addEventListener("change", renderStudentsTable);
  if (searchInput) searchInput.addEventListener("input", renderStudentsTable);

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      openStudentModal();
    });
  }

  // Student Form Submit
  const studentForm = document.getElementById("studentModalForm");
  if (studentForm) {
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("studentModalId").value;
      const studentData = {
        id: id || "s_" + Date.now(),
        admNo: document.getElementById("studentModalAdm").value.trim().toUpperCase(),
        name: document.getElementById("studentModalName").value.trim().toUpperCase(),
        form: document.getElementById("studentModalClass").value,
        phone: document.getElementById("studentModalPhone").value.trim(),
        parent: document.getElementById("studentModalParent").value.trim(),
        termFee: parseFloat(document.getElementById("studentModalFee").value) || 25000,
        balance: parseFloat(document.getElementById("studentModalBalance").value) || 0
      };

      if (id) {
        appState.updateStudent(studentData);
      } else {
        // Check for duplicate admNo
        if (appState.students.some(s => s.admNo === studentData.admNo)) {
          alert(`Admission number ${studentData.admNo} already exists!`);
          return;
        }
        appState.addStudent(studentData);
      }

      closeModal("studentModal");
      renderStudentsTable();
      populateStudentSelects();
    });
  }

  // CSV Import
  if (importBtn && csvFileInput) {
    importBtn.addEventListener("click", () => csvFileInput.click());
    csvFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target.result;
        importStudentsFromCSV(text);
        csvFileInput.value = "";
      };
      reader.readAsText(file);
    });
  }

  renderStudentsTable();
}

function renderStudentsTable() {
  const tbody = document.getElementById("studentsTableBody");
  if (!tbody) return;

  const classFilter = document.getElementById("studentClassFilter")?.value || "All";
  const search = (document.getElementById("studentSearchInput")?.value || "").toLowerCase();

  const filtered = appState.students.filter(s => {
    const matchesClass = (classFilter === "All" || s.form === classFilter);
    const matchesSearch = s.name.toLowerCase().includes(search) || s.admNo.toLowerCase().includes(search) || (s.parent && s.parent.toLowerCase().includes(search));
    return matchesClass && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#94a3b8; padding:2rem;">No students found matching current filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td><strong>${s.admNo}</strong></td>
      <td><strong>${s.name}</strong></td>
      <td><span class="badge-tag" style="background:#f1f5f9; color:#1e293b; border-color:#cbd5e1;">${s.form}</span></td>
      <td>${s.parent || '-'}<br><small style="color:#64748b;">${s.phone || ''}</small></td>
      <td>Ksh ${formatCurrency(s.termFee)}</td>
      <td>
        <span style="font-weight:bold; color:${s.balance > 0 ? '#b91c1c' : '#16a34a'};">
          Ksh ${formatCurrency(s.balance)}
        </span>
      </td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-crimson btn-sm" onclick="quickIssueStudentReceipt('${s.admNo}')">Issue Receipt</button>
          <button class="btn btn-secondary btn-sm" onclick="editStudent('${s.id}')">Edit</button>
          <button class="btn btn-secondary btn-sm" style="color:#b91c1c;" onclick="deleteStudentConfirm('${s.id}', '${s.name}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function openStudentModal(student = null) {
  document.getElementById("studentModalTitle").textContent = student ? "Edit Student Details" : "Add New Student";
  document.getElementById("studentModalId").value = student ? student.id : "";
  document.getElementById("studentModalAdm").value = student ? student.admNo : "";
  document.getElementById("studentModalName").value = student ? student.name : "";
  document.getElementById("studentModalClass").value = student ? student.form : "Form 1";
  document.getElementById("studentModalPhone").value = student ? student.phone : "";
  document.getElementById("studentModalParent").value = student ? student.parent : "";
  document.getElementById("studentModalFee").value = student ? student.termFee : 25000;
  document.getElementById("studentModalBalance").value = student ? student.balance : 25000;

  openModal("studentModal");
}

function editStudent(id) {
  const student = appState.students.find(s => s.id === id);
  if (student) openStudentModal(student);
}

function deleteStudentConfirm(id, name) {
  if (confirm(`Are you sure you want to delete student "${name}"?`)) {
    appState.deleteStudent(id);
    renderStudentsTable();
    populateStudentSelects();
  }
}

function importStudentsFromCSV(csvText) {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) {
    alert("CSV file is empty or missing headers!");
    return;
  }

  let count = 0;
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",").map(c => c.trim().replace(/^["']|["']$/g, ""));
    if (cols.length >= 2) {
      const admNo = cols[0].toUpperCase();
      const name = cols[1].toUpperCase();
      const form = cols[2] || "Form 1";
      const phone = cols[3] || "";
      const parent = cols[4] || "";
      const balance = parseFloat(cols[5]) || 25000;

      // Update or insert
      const existing = appState.students.find(s => s.admNo === admNo);
      if (existing) {
        appState.updateStudent({ ...existing, name, form, phone, parent, balance });
      } else {
        appState.addStudent({
          id: "s_" + Date.now() + "_" + i,
          admNo, name, form, phone, parent, termFee: 25000, balance
        });
      }
      count++;
    }
  }

  alert(`Successfully imported/updated ${count} students!`);
  renderStudentsTable();
  populateStudentSelects();
}

// 3. Vendors & Suppliers Module
function initVendorsModule() {
  const addBtn = document.getElementById("btnAddVendor");
  const searchInput = document.getElementById("vendorSearchInput");

  if (searchInput) searchInput.addEventListener("input", renderVendorsTable);
  if (addBtn) addBtn.addEventListener("click", () => openVendorModal());

  const vendorForm = document.getElementById("vendorModalForm");
  if (vendorForm) {
    vendorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("vendorModalId").value;
      const vendorData = {
        id: id || "v_" + Date.now(),
        name: document.getElementById("vendorModalName").value.trim().toUpperCase(),
        category: document.getElementById("vendorModalCategory").value.trim(),
        contact: document.getElementById("vendorModalContact").value.trim(),
        phone: document.getElementById("vendorModalPhone").value.trim(),
        kra: document.getElementById("vendorModalKRA").value.trim().toUpperCase(),
        balance: parseFloat(document.getElementById("vendorModalBalance").value) || 0,
        totalPaid: parseFloat(document.getElementById("vendorModalTotalPaid").value) || 0
      };

      if (id) {
        appState.updateVendor(vendorData);
      } else {
        appState.addVendor(vendorData);
      }

      closeModal("vendorModal");
      renderVendorsTable();
    });
  }

  renderVendorsTable();
}

function renderVendorsTable() {
  const tbody = document.getElementById("vendorsTableBody");
  if (!tbody) return;

  const search = (document.getElementById("vendorSearchInput")?.value || "").toLowerCase();
  const filtered = appState.vendors.filter(v => 
    v.name.toLowerCase().includes(search) || 
    v.category.toLowerCase().includes(search) ||
    (v.contact && v.contact.toLowerCase().includes(search))
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#94a3b8; padding:2rem;">No vendors or suppliers found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td><strong>${v.name}</strong><br><small style="color:#64748b;">KRA: ${v.kra || 'N/A'}</small></td>
      <td><span class="badge-tag" style="background:#fef3c7; color:#92400e; border-color:#fde68a;">${v.category}</span></td>
      <td>${v.contact || '-'}<br><small style="color:#64748b;">${v.phone || ''}</small></td>
      <td style="font-weight:bold; color:#16a34a;">Ksh ${formatCurrency(v.totalPaid)}</td>
      <td style="font-weight:bold; color:${v.balance > 0 ? '#b91c1c' : '#475569'};">Ksh ${formatCurrency(v.balance)}</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-primary btn-sm" onclick="quickPayVendor('${v.id}')">Pay Vendor</button>
          <button class="btn btn-secondary btn-sm" onclick="editVendor('${v.id}')">Edit</button>
          <button class="btn btn-secondary btn-sm" style="color:#b91c1c;" onclick="deleteVendorConfirm('${v.id}', '${v.name}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function openVendorModal(vendor = null) {
  document.getElementById("vendorModalTitle").textContent = vendor ? "Edit Vendor / Supplier" : "Add New Vendor / Supplier";
  document.getElementById("vendorModalId").value = vendor ? vendor.id : "";
  document.getElementById("vendorModalName").value = vendor ? vendor.name : "";
  document.getElementById("vendorModalCategory").value = vendor ? vendor.category : "Food & Ration";
  document.getElementById("vendorModalContact").value = vendor ? vendor.contact : "";
  document.getElementById("vendorModalPhone").value = vendor ? vendor.phone : "";
  document.getElementById("vendorModalKRA").value = vendor ? vendor.kra : "";
  document.getElementById("vendorModalBalance").value = vendor ? vendor.balance : 0;
  document.getElementById("vendorModalTotalPaid").value = vendor ? vendor.totalPaid : 0;

  openModal("vendorModal");
}

function editVendor(id) {
  const v = appState.vendors.find(item => item.id === id);
  if (v) openVendorModal(v);
}

function deleteVendorConfirm(id, name) {
  if (confirm(`Are you sure you want to remove vendor "${name}"?`)) {
    appState.deleteVendor(id);
    renderVendorsTable();
  }
}

// 4. Single Student Receipt Module
let currentStudentReceiptData = null;

function initSingleReceiptModule() {
  populateStudentSelects();

  const studentSelect = document.getElementById("rcStudentSelect");
  const amountInput = document.getElementById("rcAmountInput");
  const dateInput = document.getElementById("rcDateInput");
  const modeSelect = document.getElementById("rcModeSelect");
  const refInput = document.getElementById("rcRefInput");
  const purposeInput = document.getElementById("rcPurposeInput");
  const accountSelect = document.getElementById("rcAccountSelect");

  if (dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().split("T")[0];
  }

  // Populate dynamic student data
  if (studentSelect) {
    studentSelect.addEventListener("change", () => {
      const admNo = studentSelect.value;
      const student = appState.students.find(s => s.admNo === admNo);
      if (student) {
        document.getElementById("rcAdmNoInput").value = student.admNo;
        document.getElementById("rcNameInput").value = student.name;
        document.getElementById("rcClassInput").value = student.form;
        document.getElementById("rcPhoneInput").value = student.phone || "";
        document.getElementById("rcPrevBalance").textContent = "Ksh " + formatCurrency(student.balance);
        if (!amountInput.value || parseFloat(amountInput.value) === 0) {
          amountInput.value = student.balance > 0 ? student.balance : 15000;
        }
      }
      updateSingleReceiptPreview();
    });
  }

  // Inputs change preview
  [amountInput, dateInput, modeSelect, refInput, purposeInput, accountSelect].forEach(el => {
    if (el) el.addEventListener("input", updateSingleReceiptPreview);
  });

  // Voteheads dynamic table
  const addVhBtn = document.getElementById("btnAddVoteheadRow");
  if (addVhBtn) {
    addVhBtn.addEventListener("click", () => {
      addVoteheadRow();
    });
  }

  // Preset Voteheads
  const presetSelect = document.getElementById("rcPresetVoteheads");
  if (presetSelect) {
    presetSelect.addEventListener("change", () => {
      applyVoteheadPreset(presetSelect.value);
    });
  }

  // Print buttons
  const btnPrintSingle = document.getElementById("btnPrintSingleReceipt");
  const btnPrintDouble = document.getElementById("btnPrintDoubleReceipt");
  const btnSaveReceipt = document.getElementById("btnSaveReceiptRecord");

  if (btnPrintSingle) {
    btnPrintSingle.addEventListener("click", () => {
      saveCurrentReceiptIfNew();
      printSingleReceipt(false);
    });
  }

  if (btnPrintDouble) {
    btnPrintDouble.addEventListener("click", () => {
      saveCurrentReceiptIfNew();
      printSingleReceipt(true); // 2 on 1
    });
  }

  if (btnSaveReceipt) {
    btnSaveReceipt.addEventListener("click", () => {
      saveCurrentReceiptIfNew();
      alert("Receipt saved to school records successfully!");
    });
  }

  // Initialize with first student
  if (appState.students.length > 0 && studentSelect) {
    studentSelect.value = appState.students[0].admNo;
    studentSelect.dispatchEvent(new Event("change"));
  }
}

function populateStudentSelects() {
  const selects = [document.getElementById("rcStudentSelect"), document.getElementById("batchClassStudentSelect")];
  selects.forEach(sel => {
    if (!sel) return;
    const currentVal = sel.value;
    sel.innerHTML = `<option value="">-- Select Student --</option>` + appState.students.map(s => `
      <option value="${s.admNo}">${s.admNo} - ${s.name} (${s.form})</option>
    `).join("");
    if (currentVal) sel.value = currentVal;
  });
}

function addVoteheadRow(name = "Tuition / Fee Item", amount = 0) {
  const container = document.getElementById("rcVoteheadsList");
  if (!container) return;

  const row = document.createElement("div");
  row.className = "form-row vh-item-row";
  row.style.marginBottom = "0.5rem";
  row.innerHTML = `
    <div style="flex:2;">
      <input type="text" class="form-control vh-name-input" value="${name}" placeholder="Vote Head Name">
    </div>
    <div style="flex:1;">
      <input type="number" class="form-control vh-amount-input" value="${amount}" min="0" step="any" placeholder="Amount">
    </div>
    <div style="flex:0;">
      <button type="button" class="btn btn-secondary btn-sm" onclick="this.closest('.vh-item-row').remove(); recalculateVoteheadsTotal();">&times;</button>
    </div>
  `;
  container.appendChild(row);

  row.querySelector(".vh-name-input").addEventListener("input", updateSingleReceiptPreview);
  row.querySelector(".vh-amount-input").addEventListener("input", recalculateVoteheadsTotal);
  recalculateVoteheadsTotal();
}

function recalculateVoteheadsTotal() {
  const container = document.getElementById("rcVoteheadsList");
  if (!container) return;
  const rows = container.querySelectorAll(".vh-item-row");
  let total = 0;
  rows.forEach(r => {
    const val = parseFloat(r.querySelector(".vh-amount-input").value) || 0;
    total += val;
  });

  const amountInput = document.getElementById("rcAmountInput");
  if (amountInput && total > 0) {
    amountInput.value = total;
  }
  updateSingleReceiptPreview();
}

function applyVoteheadPreset(preset) {
  const container = document.getElementById("rcVoteheadsList");
  if (!container) return;
  container.innerHTML = "";

  if (preset === "standard") {
    addVoteheadRow("Boarding, Catering & Accomodation", 12000);
    addVoteheadRow("Electricity, Water & Conservancy (EWC)", 2500);
    addVoteheadRow("Repairs, Maintenance & Improvement (RMI)", 2000);
    addVoteheadRow("Administration & Examination", 2000);
    addVoteheadRow("Activity & Co-Curricular", 1500);
  } else if (preset === "boarding") {
    addVoteheadRow("Boarding & Meals Stores", 15000);
    addVoteheadRow("Medical & Welfare", 1000);
  } else if (preset === "capitation") {
    addVoteheadRow("EWC", 55218);
    addVoteheadRow("LT&T", 55218);
    addVoteheadRow("PEmoluments", 300000);
    addVoteheadRow("Admin Cost", 50000);
    addVoteheadRow("Activity", 23624.65);
    addVoteheadRow("Infrastructure", 155400);
  } else {
    addVoteheadRow("School Fees Term Payment", 20000);
  }
}

function updateSingleReceiptPreview() {
  const previewDiv = document.getElementById("singleReceiptPreviewArea");
  if (!previewDiv) return;

  const admNo = document.getElementById("rcAdmNoInput")?.value || "";
  const name = document.getElementById("rcNameInput")?.value || "";
  const form = document.getElementById("rcClassInput")?.value || "";
  const phone = document.getElementById("rcPhoneInput")?.value || "";
  const date = document.getElementById("rcDateInput")?.value || new Date().toISOString().split("T")[0];
  const mode = document.getElementById("rcModeSelect")?.value || "Cash";
  const refNo = document.getElementById("rcRefInput")?.value || "REF-" + Math.floor(100000 + Math.random() * 900000);
  const purpose = document.getElementById("rcPurposeInput")?.value || "School Fees Term 1 2026";
  const account = document.getElementById("rcAccountSelect")?.value || "Operations Account";
  const amount = parseFloat(document.getElementById("rcAmountInput")?.value) || 0;

  // Gather voteheads
  const voteheads = [];
  const vhRows = document.querySelectorAll("#rcVoteheadsList .vh-item-row");
  vhRows.forEach(r => {
    const vhName = r.querySelector(".vh-name-input")?.value;
    const vhAmount = parseFloat(r.querySelector(".vh-amount-input")?.value) || 0;
    if (vhName && vhAmount > 0) {
      voteheads.push({ name: vhName, amount: vhAmount });
    }
  });

  const student = appState.students.find(s => s.admNo === admNo);
  const prevBalance = student ? student.balance : 0;
  const newBalance = Math.max(0, prevBalance - amount);

  currentStudentReceiptData = {
    id: "temp_" + Date.now(),
    receiptNo: appState.profile.serialPrefix + (appState.profile.nextReceiptNo || 1001),
    date,
    type: "student",
    account,
    receivedFrom: name,
    admNo,
    form,
    phone,
    mode,
    refNo,
    amount,
    amountWords: numberToWords(amount),
    purpose,
    voteheads,
    prevBalance,
    newBalance
  };

  previewDiv.innerHTML = generateReceiptHTML(currentStudentReceiptData, { copyLabel: "ORIGINAL" });
}

function saveCurrentReceiptIfNew() {
  if (!currentStudentReceiptData) return;
  const receiptNo = appState.getNextReceiptNumber();
  currentStudentReceiptData.receiptNo = receiptNo;
  currentStudentReceiptData.id = "rc_" + Date.now();
  appState.addReceipt({ ...currentStudentReceiptData });
  renderStudentsTable();
  initDashboard();
}

function printSingleReceipt(isDuplicate) {
  if (!currentStudentReceiptData) return;
  const printContainer = document.getElementById("printContainer");
  if (!printContainer) return;

  if (isDuplicate) {
    // 2-on-1: Original + Student Copy on single A4
    printContainer.innerHTML = `
      ${generateReceiptHTML(currentStudentReceiptData, { copyLabel: "ORIGINAL (SCHOOL COPY)", isHalfPage: true })}
      ${generateReceiptHTML(currentStudentReceiptData, { copyLabel: "STUDENT / PARENT COPY", isHalfPage: true })}
    `;
  } else {
    // 1-on-1: Full A4
    printContainer.innerHTML = generateReceiptHTML(currentStudentReceiptData, { copyLabel: "ORIGINAL", isHalfPage: false });
  }

  window.print();
}

function quickIssueStudentReceipt(admNo) {
  // Jump to Single Receipt tab
  const tab = document.querySelector(`.nav-tab[data-tab="singleReceiptPanel"]`);
  if (tab) tab.click();

  const sel = document.getElementById("rcStudentSelect");
  if (sel) {
    sel.value = admNo;
    sel.dispatchEvent(new Event("change"));
  }
}

// 5. Class Batch Receipts Module
function initBatchReceiptsModule() {
  const classSelect = document.getElementById("batchClassSelect");
  const selectAllCb = document.getElementById("batchSelectAllCb");
  const btnSetAllAmount = document.getElementById("btnBatchSetAllAmount");
  const batchAmountInput = document.getElementById("batchBulkAmountInput");
  const btnGenerateBatch = document.getElementById("btnGenerateClassBatch");
  const btnPrintBatch = document.getElementById("btnPrintClassBatch");

  if (classSelect) {
    classSelect.addEventListener("change", renderBatchStudentsTable);
  }

  if (selectAllCb) {
    selectAllCb.addEventListener("change", () => {
      const cbs = document.querySelectorAll(".batch-student-cb");
      cbs.forEach(cb => cb.checked = selectAllCb.checked);
    });
  }

  if (btnSetAllAmount && batchAmountInput) {
    btnSetAllAmount.addEventListener("click", () => {
      const amount = parseFloat(batchAmountInput.value) || 0;
      if (amount <= 0) {
        alert("Please enter a valid amount!");
        return;
      }
      document.querySelectorAll(".batch-amount-input").forEach(inp => {
        inp.value = amount;
      });
    });
  }

  if (btnGenerateBatch) {
    btnGenerateBatch.addEventListener("click", () => {
      generateBatchClassReceipts();
    });
  }

  if (btnPrintBatch) {
    btnPrintBatch.addEventListener("click", () => {
      window.print();
    });
  }

  renderBatchStudentsTable();
}

function renderBatchStudentsTable() {
  const tbody = document.getElementById("batchStudentsTbody");
  const classSelect = document.getElementById("batchClassSelect");
  if (!tbody || !classSelect) return;

  const selectedClass = classSelect.value;
  const students = appState.students.filter(s => s.form === selectedClass);

  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding:2rem;">No students enrolled in ${selectedClass} yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = students.map((s, idx) => `
    <tr>
      <td style="text-align:center;">
        <input type="checkbox" class="batch-student-cb" value="${s.admNo}" checked>
      </td>
      <td><strong>${s.admNo}</strong></td>
      <td><strong>${s.name}</strong></td>
      <td style="color:#b91c1c; font-weight:bold;">Ksh ${formatCurrency(s.balance)}</td>
      <td>
        <input type="number" class="form-control batch-amount-input" data-adm="${s.admNo}" value="${s.balance > 0 ? s.balance : 25000}" step="any" style="width:140px;">
      </td>
      <td>
        <input type="text" class="form-control batch-ref-input" data-adm="${s.admNo}" value="BANK-${selectedClass.replace(' ', '')}-${idx + 101}" style="width:160px;">
      </td>
    </tr>
  `).join("");
}

function generateBatchClassReceipts() {
  const selectedClass = document.getElementById("batchClassSelect")?.value || "Form 1";
  const date = document.getElementById("batchDateInput")?.value || new Date().toISOString().split("T")[0];
  const purpose = document.getElementById("batchPurposeInput")?.value || "Term 1 School Fees Payment";
  const mode = document.getElementById("batchModeSelect")?.value || "Bank Deposit";
  const account = document.getElementById("batchAccountSelect")?.value || "Tuition & Boarding Account";
  const layout = document.getElementById("batchPrintLayout")?.value || "2up"; // 2up or 1up

  const checkedCbs = document.querySelectorAll(".batch-student-cb:checked");
  if (checkedCbs.length === 0) {
    alert("Please select at least one student from the class roster!");
    return;
  }

  const generatedList = [];
  checkedCbs.forEach(cb => {
    const admNo = cb.value;
    const student = appState.students.find(s => s.admNo === admNo);
    if (!student) return;

    const amountInp = document.querySelector(`.batch-amount-input[data-adm="${admNo}"]`);
    const refInp = document.querySelector(`.batch-ref-input[data-adm="${admNo}"]`);
    const amount = parseFloat(amountInp ? amountInp.value : 0) || 0;
    const refNo = refInp ? refInp.value : "REF-" + Math.floor(100000 + Math.random() * 900000);

    const receiptNo = appState.getNextReceiptNumber();
    const prevBalance = student.balance || 0;
    const newBalance = Math.max(0, prevBalance - amount);

    const receiptData = {
      id: "rc_batch_" + Date.now() + "_" + admNo,
      receiptNo,
      date,
      type: "student",
      account,
      receivedFrom: student.name,
      admNo: student.admNo,
      form: student.form,
      phone: student.phone,
      mode,
      refNo,
      amount,
      amountWords: numberToWords(amount),
      purpose,
      voteheads: [
        { name: "Boarding & Catering Fees", amount: Math.round(amount * 0.6) },
        { name: "EWC (Water & Electricity)", amount: Math.round(amount * 0.15) },
        { name: "R.M.I & Maintenance", amount: Math.round(amount * 0.1) },
        { name: "Activity & Co-Curricular", amount: Math.round(amount * 0.05) },
        { name: "Administration & Exams", amount: amount - (Math.round(amount * 0.6) + Math.round(amount * 0.15) + Math.round(amount * 0.1) + Math.round(amount * 0.05)) }
      ],
      prevBalance,
      newBalance
    };

    appState.addReceipt(receiptData);
    generatedList.push(receiptData);
  });

  // Render to Batch Preview and Print Container
  const previewArea = document.getElementById("batchReceiptsPreviewArea");
  const printContainer = document.getElementById("printContainer");
  const isHalfPage = (layout === "2up");

  const fullHtml = generatedList.map(r => generateReceiptHTML(r, { copyLabel: "ORIGINAL (STUDENT COPY)", isHalfPage })).join("");

  if (previewArea) previewArea.innerHTML = fullHtml;
  if (printContainer) printContainer.innerHTML = fullHtml;

  document.getElementById("batchResultsSummary").textContent = `Generated ${generatedList.length} receipts for ${selectedClass}! Click 'Print Batch Receipts' to send to printer or save as PDF.`;
  document.getElementById("batchResultsActions").style.display = "flex";
  
  initDashboard();
}

// 6. Ministry of Education Capitation Receipt Module
function initCapitationReceiptModule() {
  const btnGenerateCap = document.getElementById("btnGenerateCapitation");
  const btnPrintCap = document.getElementById("btnPrintCapitation");

  if (btnGenerateCap) {
    btnGenerateCap.addEventListener("click", () => {
      const receivedFrom = document.getElementById("capReceivedFrom")?.value.trim().toUpperCase() || "MINISTRY OF EDUCATION";
      const date = document.getElementById("capDateInput")?.value || new Date().toISOString().split("T")[0];
      const purpose = document.getElementById("capPurpose")?.value.trim() || "FSDE funds third term";
      const mode = document.getElementById("capMode")?.value || "EFT";
      const refNo = document.getElementById("capRef")?.value.trim() || "EFT23352520811";
      const account = document.getElementById("capAccount")?.value || "Operations Account";

      // Voteheads from capitation form
      const ewc = parseFloat(document.getElementById("capEWC")?.value) || 0;
      const ltt = parseFloat(document.getElementById("capLTT")?.value) || 0;
      const pemoluments = parseFloat(document.getElementById("capPEmoluments")?.value) || 0;
      const admin = parseFloat(document.getElementById("capAdmin")?.value) || 0;
      const activity = parseFloat(document.getElementById("capActivity")?.value) || 0;
      const infra = parseFloat(document.getElementById("capInfra")?.value) || 0;

      const totalAmount = ewc + ltt + pemoluments + admin + activity + infra;

      const voteheads = [
        { name: "EWC", amount: ewc },
        { name: "LT&T", amount: ltt },
        { name: "PEmoluments", amount: pemoluments },
        { name: "Admin Cost", amount: admin },
        { name: "Activity", amount: activity },
        { name: "Infrastructure", amount: infra }
      ];

      const receiptNo = appState.getNextReceiptNumber();

      const capReceiptData = {
        id: "rc_cap_" + Date.now(),
        receiptNo,
        date,
        type: "capitation",
        account,
        receivedFrom,
        admNo: "GOV-FSDE",
        form: "All Forms",
        phone: appState.profile.tel,
        mode,
        refNo,
        amount: totalAmount,
        amountWords: numberToWords(totalAmount),
        purpose,
        voteheads,
        prevBalance: 0,
        newBalance: 0
      };

      appState.addReceipt(capReceiptData);

      const previewDiv = document.getElementById("capitationPreviewArea");
      const printContainer = document.getElementById("printContainer");

      const html = generateReceiptHTML(capReceiptData, { copyLabel: "ORIGINAL" });
      if (previewDiv) previewDiv.innerHTML = html;
      if (printContainer) printContainer.innerHTML = html;

      if (btnPrintCap) btnPrintCap.style.display = "inline-flex";
      initDashboard();
    });
  }

  if (btnPrintCap) {
    btnPrintCap.addEventListener("click", () => {
      window.print();
    });
  }
}

// 7. Fee Structure Module
function initFeeStructureModule() {
  const classSelect = document.getElementById("fsClassSelect");
  const btnPrintFs = document.getElementById("btnPrintFeeStructure");

  if (classSelect) {
    classSelect.addEventListener("change", renderFeeStructurePreview);
  }

  if (btnPrintFs) {
    btnPrintFs.addEventListener("click", () => {
      const selectedClass = document.getElementById("fsClassSelect")?.value || "Form 1";
      const printContainer = document.getElementById("printContainer");
      if (printContainer) {
        printContainer.innerHTML = generateFeeStructureHTML(selectedClass);
      }
      window.print();
    });
  }

  renderFeeStructurePreview();
}

function renderFeeStructurePreview() {
  const classSelect = document.getElementById("fsClassSelect");
  const previewArea = document.getElementById("feeStructurePreviewArea");
  if (!classSelect || !previewArea) return;

  const selectedClass = classSelect.value;
  previewArea.innerHTML = generateFeeStructureHTML(selectedClass);
}

// 8. Receipt History Module
function initHistoryModule() {
  const typeFilter = document.getElementById("historyTypeFilter");
  const searchInput = document.getElementById("historySearchInput");
  const exportBtn = document.getElementById("btnExportHistoryCSV");

  if (typeFilter) typeFilter.addEventListener("change", renderHistoryTable);
  if (searchInput) searchInput.addEventListener("input", renderHistoryTable);

  if (exportBtn) {
    exportBtn.addEventListener("click", exportReceiptsToCSV);
  }

  renderHistoryTable();
}

function renderHistoryTable() {
  const tbody = document.getElementById("historyTableBody");
  if (!tbody) return;

  const typeFilter = document.getElementById("historyTypeFilter")?.value || "All";
  const search = (document.getElementById("historySearchInput")?.value || "").toLowerCase();

  const filtered = appState.receipts.filter(r => {
    const matchesType = (typeFilter === "All" || r.type === typeFilter);
    const matchesSearch = r.receiptNo.toLowerCase().includes(search) || 
      (r.receivedFrom && r.receivedFrom.toLowerCase().includes(search)) ||
      (r.admNo && r.admNo.toLowerCase().includes(search)) ||
      (r.purpose && r.purpose.toLowerCase().includes(search));
    return matchesType && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#94a3b8; padding:2rem;">No receipts found matching criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(r => `
    <tr>
      <td><strong>${r.receiptNo}</strong></td>
      <td>${formatDate(r.date)}</td>
      <td><strong>${r.receivedFrom}</strong><br><small style="color:#64748b;">Adm/Ref: ${r.admNo || 'N/A'}</small></td>
      <td><span class="badge-tag" style="background:#f1f5f9; color:#1e293b; border-color:#cbd5e1;">${r.form || r.type}</span></td>
      <td>${r.mode} (${r.refNo || 'N/A'})</td>
      <td style="font-weight:bold; color:#1e3a8a;">Ksh ${formatCurrency(r.amount)}</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-primary btn-sm" onclick="reprintReceipt('${r.id}')">Print</button>
          <button class="btn btn-secondary btn-sm" style="color:#b91c1c;" onclick="deleteReceiptConfirm('${r.id}')">Void</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function reprintReceipt(id) {
  const receipt = appState.receipts.find(r => r.id === id);
  if (!receipt) return;

  const printContainer = document.getElementById("printContainer");
  if (printContainer) {
    printContainer.innerHTML = generateReceiptHTML(receipt, { copyLabel: "OFFICIAL COPY", isHalfPage: false });
  }
  window.print();
}

function deleteReceiptConfirm(id) {
  if (confirm("Are you sure you want to void/delete this receipt record?")) {
    appState.deleteReceipt(id);
    renderHistoryTable();
    initDashboard();
  }
}

function exportReceiptsToCSV() {
  const rows = [
    ["Receipt_No", "Date", "Type", "Received_From", "Adm_Ref_No", "Class_Form", "Mode", "Reference_No", "Amount_Ksh", "Purpose"]
  ];

  appState.receipts.forEach(r => {
    rows.push([
      r.receiptNo,
      r.date,
      r.type,
      `"${(r.receivedFrom || '').replace(/"/g, '""')}"`,
      r.admNo,
      r.form,
      r.mode,
      r.refNo,
      r.amount,
      `"${(r.purpose || '').replace(/"/g, '""')}"`
    ]);
  });

  const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Nkaroni_Girls_Receipts_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 9. Vendor Quick Pay
function quickPayVendor(vendorId) {
  const v = appState.vendors.find(item => item.id === vendorId);
  if (!v) return;

  const amount = prompt(`Enter payment amount for ${v.name} (Outstanding: Ksh ${formatCurrency(v.balance)}):`, v.balance > 0 ? v.balance : 50000);
  if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) return;

  const mode = prompt("Payment mode (Cheque / EFT / M-Pesa / Bank Transfer):", "Cheque") || "Cheque";
  const refNo = prompt("Cheque / EFT / Transaction Reference Number:", "CHQ-" + Math.floor(100000 + Math.random() * 900000)) || "CHQ-001";
  const purpose = prompt("Being payment for:", `Payment for supply of ${v.category}`) || "Vendor Supply Payment";

  const numAmount = parseFloat(amount);
  const receiptNo = appState.getNextReceiptNumber();

  const vendorReceiptData = {
    id: "rc_vend_" + Date.now(),
    receiptNo,
    date: new Date().toISOString().split("T")[0],
    type: "vendor",
    account: "Operations Account",
    receivedFrom: v.name,
    vendorId: v.id,
    admNo: "VEND-" + v.id,
    form: v.category,
    phone: v.phone,
    mode,
    refNo,
    amount: numAmount,
    amountWords: numberToWords(numAmount),
    purpose,
    voteheads: [
      { name: v.category + " Supplies", amount: numAmount }
    ],
    prevBalance: v.balance,
    newBalance: Math.max(0, v.balance - numAmount)
  };

  appState.addReceipt(vendorReceiptData);
  renderVendorsTable();
  initDashboard();

  if (confirm(`Payment of Ksh ${formatCurrency(numAmount)} recorded for ${v.name}! Would you like to print the Payment Voucher / Receipt now?`)) {
    reprintReceipt(vendorReceiptData.id);
  }
}

// 10. Settings & Backup Module
function initSettingsModule() {
  const form = document.getElementById("settingsForm");
  if (!form) return;

  // Load current values
  const p = appState.profile;
  document.getElementById("setSchoolName").value = p.name;
  document.getElementById("setMotto").value = p.motto;
  document.getElementById("setPostalBox").value = p.postalBox;
  document.getElementById("setTel").value = p.tel;
  document.getElementById("setEmail").value = p.email;
  document.getElementById("setBankName").value = p.bankName;
  document.getElementById("setBankBranch").value = p.bankBranch;
  document.getElementById("setAccountNo").value = p.accountNo;
  document.getElementById("setPaybillNo").value = p.paybillNo;
  document.getElementById("setPaybillAcc").value = p.paybillAcc;
  document.getElementById("setBursarName").value = p.bursarName;
  document.getElementById("setPrincipalName").value = p.principalName;
  document.getElementById("setSerialPrefix").value = p.serialPrefix;
  document.getElementById("setNextReceiptNo").value = p.nextReceiptNo;
  document.getElementById("setShowStamp").checked = p.showStamp;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    appState.profile = {
      ...appState.profile,
      name: document.getElementById("setSchoolName").value.trim(),
      motto: document.getElementById("setMotto").value.trim(),
      postalBox: document.getElementById("setPostalBox").value.trim(),
      tel: document.getElementById("setTel").value.trim(),
      email: document.getElementById("setEmail").value.trim(),
      bankName: document.getElementById("setBankName").value.trim(),
      bankBranch: document.getElementById("setBankBranch").value.trim(),
      accountNo: document.getElementById("setAccountNo").value.trim(),
      paybillNo: document.getElementById("setPaybillNo").value.trim(),
      paybillAcc: document.getElementById("setPaybillAcc").value.trim(),
      bursarName: document.getElementById("setBursarName").value.trim(),
      principalName: document.getElementById("setPrincipalName").value.trim(),
      serialPrefix: document.getElementById("setSerialPrefix").value.trim(),
      nextReceiptNo: parseInt(document.getElementById("setNextReceiptNo").value, 10) || 1001,
      showStamp: document.getElementById("setShowStamp").checked
    };

    appState.save("ngss_profile", appState.profile);
    alert("School settings updated successfully!");
    renderFeeStructurePreview();
    updateSingleReceiptPreview();
  });

  // Backup & Restore
  const btnExportBackup = document.getElementById("btnExportBackup");
  const btnImportBackup = document.getElementById("btnImportBackup");
  const backupFileInput = document.getElementById("backupFileInput");

  if (btnExportBackup) {
    btnExportBackup.addEventListener("click", () => {
      const backupData = {
        profile: appState.profile,
        students: appState.students,
        vendors: appState.vendors,
        receipts: appState.receipts,
        feeStructures: appState.feeStructures,
        version: "1.0",
        exportDate: new Date().toISOString()
      };
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Nkaroni_Girls_System_Backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  if (btnImportBackup && backupFileInput) {
    btnImportBackup.addEventListener("click", () => backupFileInput.click());
    backupFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported.students && imported.receipts) {
            appState.profile = imported.profile || appState.profile;
            appState.students = imported.students || appState.students;
            appState.vendors = imported.vendors || appState.vendors;
            appState.receipts = imported.receipts || appState.receipts;
            appState.feeStructures = imported.feeStructures || appState.feeStructures;

            appState.save("ngss_profile", appState.profile);
            appState.save("ngss_students", appState.students);
            appState.save("ngss_vendors", appState.vendors);
            appState.save("ngss_receipts", appState.receipts);
            appState.save("ngss_fee_structures", appState.feeStructures);

            alert("System backup restored successfully!");
            location.reload();
          } else {
            alert("Invalid backup file format!");
          }
        } catch (err) {
          alert("Error parsing backup JSON file: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }
}

// Global Modal Helpers
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("active");
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("active");
}


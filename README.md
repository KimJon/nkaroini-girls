# Nkaroni Girls Senior School - Receipt & Fees Management System

A simple, fast, and comprehensive receipt, student fees, and fee structure management system designed for **Nkaroni Girls Senior School (Wamba, Samburu)**.

---

## 🚀 Quick Start (How to Open the System)

You have two easy ways to use the system:

### Option 1: Direct Double-Click (Recommended - No Setup Needed)
1. Double-click **`Launch System.bat`** (or right-click `index.html` and choose *Open with Google Chrome* or *Microsoft Edge*).
2. The system opens immediately in your browser. It works 100% offline with zero installation required!

### Option 2: Local Network Server (For Multi-Computer Staff Sharing)
1. Double-click **`Start School Server.bat`**.
2. It starts a local server on `http://localhost:3000` and automatically opens your browser.
3. Other computers connected to the same school Wi-Fi or LAN can access it via your computer's IP address (e.g. `http://192.168.1.100:3000`).

---

## 🌟 Key Features

### 1. 🎓 Student & Class Management
- Pre-configured with **Form 1, Form 2, Form 3, and Form 4**.
- **Add Students**: Enter Admission Number, Full Name, Class/Form, Parent Name, Phone, and Term Fee Balance.
- **Bulk CSV Import**: Import your class lists directly from Excel using the provided `sample_students_template.csv`.
- **Search & Filter**: Search students by Admission Number or Name and filter by class.
- Track fee balances with one-click **"Issue Receipt"**.

### 2. 🏢 Vendor & Supplier Management
- Manage school suppliers and contractors (Food & Cereals, Uniforms, Lab Chemicals, Repairs & Maintenance, Water & Electricity).
- Track company name, KRA PIN, contact person, phone, total payments made, and outstanding debts.
- **Pay Vendor**: Generate official Payment Vouchers / Receipts when issuing payments to suppliers.

### 3. 🧾 Single Student Fee Receipt Generator
- Select an enrolled student (auto-fills Admission Number, Class, Name, and current balance).
- Payment modes: **M-Pesa, Bank Deposit (KCB, Equity, Co-op), Cash, Cheque, EFT**.
- Automatic conversion of amounts to **words in Kenyan Shillings** (e.g., `Ksh 25,000` &rarr; `Twenty-five thousand shillings only.`).
- **Vote Heads Allocation**: Custom item breakdown (Boarding & Catering, EWC, R.M.I, Activity, Admin/Exams).
- **Live Preview**: Authentic receipt replica matching your school receipt standard with the school logo, serial number, and official rubber stamp.
- **Printing Options**:
  - **Single Receipt (A4)**: Full page.
  - **2-on-1 Receipt (A4)**: Original (School Copy) + Duplicate (Student/Parent Copy) on one A4 sheet.

### 4. 📚 Class Batch Receipt Generator (Whole Class at Once)
- Select the class (e.g., **Form 1**).
- Displays all enrolled students with checkboxes.
- Bulk-set fees for the entire class or customize individual amounts.
- Click **"Generate All Receipts for Selected Class"**:
  - Generates serial-numbered receipts for every student in that class in one single printable document!
  - Choose **2 receipts per page** (saves 50% paper!) or **1 receipt per page**.
  - One-click **"Print Batch Receipts / Save PDF"**.

### 5. 🏛️ MoE Government Capitation (FSDE) Receipt
- Replicates the official receipt format from your sample (`demo receipt.pdf`).
- Records **Ministry of Education FSDE Capitation funds**, NG-CDF, and county bursaries.
- Pre-configured with official capitation vote heads: **EWC, LT&T, P. Emoluments, Admin Cost, Activity, and Infrastructure**.

### 6. 📋 Official Fee Structure Generator
- Generates official school fee structures for **Form 1, Form 2, Form 3, and Form 4**.
- Term-by-term breakdown (**Term 1, Term 2, Term 3, and Total per Year**).
- Includes official letterhead with school logo, motto, postal address, bank deposit instructions, M-Pesa Paybill details, and Principal & Bursar signatures.
- Ready to print and issue to parents.

### 7. 📜 Receipt History & Accounting Audit
- Registry of all issued receipts and payment vouchers.
- Filter by type (Student Fee, MoE Capitation, Vendor Payment) or search by Receipt # / Student Name.
- **Export to Excel / CSV** for the school's financial records.
- Re-print any past receipt anytime.

### 8. ⚙️ School Profile & Backup
- Customize school name, motto, postal address, phone, email, and bank details.
- Custom serial numbering prefix (e.g. `NGSS-`) and counter.
- One-click **System Backup (JSON)**: Safely download your school data or restore it on any computer.

---

## 📁 File Structure in this Folder

| File | Description |
|---|---|
| `Launch System.bat` | **Double-click this to open the system instantly** |
| `index.html` | The main user interface application |
| `app.js` | System logic, calculations, batch engine, number-to-words, and storage |
| `style.css` | Modern styling and print layout engine (A4 & 2-up) |
| `logo.jpeg` | Official Nkaroni Girls Senior School logo |
| `logo_base64.js` | Embedded base64 logo fallback |
| `sample_students_template.csv` | Excel-compatible CSV file for importing student lists |
| `server.js` | Zero-dependency local Node.js HTTP server |
| `Start School Server.bat` | Starts local HTTP server on port 3000 |
| `demo receipt.pdf` | Original reference receipt sample |

# 🚀 SauceDemo Automation Framework

> Enterprise-grade Playwright + TypeScript Test Automation Architecture

A scalable, production-ready end-to-end automation framework built using **Playwright**, **TypeScript**, and a clean **Page Object Model (POM)** architecture.
Designed with maintainability, extensibility, and real-world CI integration in mind.

---

## 📌 Project Overview

This framework automates core workflows of the SauceDemo application with:

* ✅ Structured Page Object Model
* ✅ Custom Test Fixtures
* ✅ Type-safe interfaces
* ✅ Centralized configuration
* ✅ Clean separation of concerns
* ✅ Reusable utilities
* ✅ Organized test data layer
* ✅ Playwright HTML reporting

This is not a demo script repository — it’s structured like a **real industry automation framework**.

---

# 🏗 Architecture Overview

```
src/
│
├── config/          → Environment configuration
├── constants/       → UI constants & routes
├── enums/           → Centralized enums (extensible)
├── fixtures/        → Custom Playwright test fixtures
├── interfaces/      → Type-safe contracts
├── pages/           → Page Object Models
├── testdata/        → Structured test data
├── tests/           → Test specifications
└── utils/           → Reusable utility functions
```

---

# 🧠 Design Philosophy

This framework follows 6 core principles:

1. **Single Responsibility Principle**
2. **Strict Type Safety**
3. **Reusable Components**
4. **Minimal Test Logic in Specs**
5. **Scalable Folder Structure**
6. **Clean Abstraction of UI Actions**

---

# 🧱 Key Components Explained

---

## 1️⃣ Page Object Model (POM)

Located in:

```
src/pages/
```

### Example:

* `loginPage.ts`
* `inventoryPage.ts`

Each page:

* Encapsulates locators
* Contains UI actions
* Avoids assertions (assertions stay in test layer)

✔ Improves reusability
✔ Makes tests readable
✔ Reduces duplication

---

## 2️⃣ Custom Test Fixtures

Located in:

```
src/fixtures/customTestFixtures.ts
```

Used to:

* Inject reusable page objects
* Centralize setup logic
* Provide cleaner test syntax

Example concept:

```ts
test('Login Test', async ({ loginPage }) => {
  await loginPage.login(...)
})
```

This keeps test files clean and readable.

---

## 3️⃣ Strong Type Safety (Interfaces)

Located in:

```
src/interfaces/
```

Examples:

* `loginWorkflow.interface.ts`
* `userCreds.interface.ts`

Why this matters:

* Prevents invalid test data
* Makes refactoring safer
* Improves IDE auto-suggestions
* Makes framework enterprise-ready

---

## 4️⃣ Test Data Separation

Located in:

```
src/testdata/loginWorkflow/
```

✔ Business logic and test data are separated
✔ Enables data-driven testing
✔ Makes scaling easier

---

## 5️⃣ Utilities Layer

Located in:

```
src/utils/commonFunctions.ts
```

Reusable helpers like:

* Wait utilities
* Common validations
* Shared logic across tests

This prevents duplicate code across pages.

---

## 6️⃣ Centralized Configuration

```
src/config/config.ts
```

Used for:

* Base URL
* Environment control
* Global setup values

Allows environment-based execution if extended.

---

# 🧪 Sample Test Flow Covered

### Login Workflow Scenarios

* ✅ Valid user login
* ✅ Locked out user
* ✅ Partial credentials
* ❌ Negative cases with error validation

Located in:

```
src/tests/loginWorkflow.spec.ts
```

---

# 🛠 Tech Stack

| Tool                | Purpose            |
| ------------------- | ------------------ |
| Playwright          | Browser Automation |
| TypeScript          | Type Safety        |
| Node.js             | Runtime            |
| POM Pattern         | Architecture       |
| Playwright Reporter | Test Reporting     |

---

# ▶️ How to Run

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Install Playwright Browsers

```bash
npx playwright install
```

### 3️⃣ Run All Tests

```bash
npx playwright test
```

### 4️⃣ Run Specific Test File

```bash
npx playwright test src/tests/loginWorkflow.spec.ts
```

### 5️⃣ Open HTML Report

```bash
npx playwright show-report
```

Report is generated inside:

```
playwright-report/
```

---

# 📊 Reporting

* Playwright HTML Report
* Error context captured
* Failure trace support (if enabled)

Test results stored in:

```
test-results/
```

---

# 🔍 Framework Strengths

✔ Clean separation of concerns
✔ Industry-level folder structure
✔ Type-safe architecture
✔ Custom fixtures implementation
✔ Scalable for parallel execution
✔ Easy CI/CD integration
✔ Extendable for multi-browser & multi-env

---

# 📈 How This Can Be Extended

Future enhancements could include:

* 🔄 Environment-based config (DEV / QA / PROD)
* 🌍 Cross-browser matrix execution
* 📦 Docker integration
* 🔔 Slack / Email reporting
* 📊 Allure reporting
* 🧪 API + UI hybrid framework
* 🔐 Secrets management
* 🏷 Tag-based test filtering
* 🧵 Parallel execution tuning
* 🧬 CI/CD pipeline integration (GitHub Actions / Jenkins)

---

# 🧩 Why This Framework Is Portfolio-Worthy

This project demonstrates:

* Real-world automation structure
* Advanced Playwright usage
* TypeScript best practices
* Enterprise mindset
* Clean code principles
* Scalability awareness

This is how a **Senior SDET** structures automation — not as scripts, but as maintainable software.

---

# 👨‍💻 Author

**Tahil Shaikh**
Automation Engineer | Playwright | TypeScript | Framework Design

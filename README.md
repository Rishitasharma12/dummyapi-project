# 🧪 Dummy API Test Automation Project

This project demonstrates API Testing for all CRUD operations (GET, POST, PUT, DELETE) using WebdriverIO, Supertest, and Chai. It is built using Node.js and tests the public [DummyJSON API](https://dummyjson.com/docs/users).

---

## 📁 Project Structure

dummyapi-project/
│
├── test/
│ └── specs/
│ ├── getUserTest.js # GET: Fetch a user
│ ├── postUserTest.js # POST: Add a new user
│ ├── putUserTest.js # PUT: Update a user
│ ├── deleteUserTest.js # DELETE: Remove a user
│ └── mainApiTest.js # Runs all the above files together
│
├── package.json # Project dependencies
├── wdio.conf.js # WebdriverIO config


---

## ✅ Technologies Used

- **Node.js**
- **WebdriverIO**
- **Supertest**
- **Chai (Assertion Library)**
- **Mocha (Default WDIO test runner)**

---

## 🔍 What This Project Does

| Method | Description               | Test File              |
|--------|---------------------------|------------------------|
| GET    | Fetches user by ID        | `getUserTest.js`       |
| POST   | Adds a new user           | `postUserTest.js`      |
| PUT    | Updates existing user     | `putUserTest.js`       |
| DELETE | Deletes a user by ID      | `deleteUserTest.js`    |
| All    | Executes all tests        | `mainApiTest.js`       |

---

## 🚀 How to Run the Project

### 1️⃣ Install Dependencies

```bash
npm install
2️⃣ Run All Tests Together

npx wdio run wdio.conf.js --spec ./test/specs/mainApiTest.js
3️⃣ Run Single Test File (Example: GET)

npx wdio run wdio.conf.js --spec ./test/specs/getUserTest.js
📊 Sample Output
All tests should return statusCode: 200 or 201

Assertions will check:

ID matches

Name updated correctly

Deletion status

User added successfully

📌 Author
Rishita Sharma
B.Tech (CSE), Banasthali Vidyapith
Intern at GIIT Solutions
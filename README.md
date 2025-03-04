### 🔧 **Prerequisites**
Ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### 🚀 **Setup Instructions**

#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/philipchen05/blockhouse.git
cd blockhouse
```

#### 2️⃣ Install Dependencies
```sh
cd web-app
npm install
```

#### 3️⃣ Start the Web Application
```sh
npm run dev
```
This will launch the **Next.js web app** on `http://localhost:3000/`.

#### 4️⃣ Setup and Run Documentation (Docusaurus)
```sh
cd ../docs
npm install
npm run start
```
This will launch the **Docusaurus documentation** on `http://localhost:3000/`.

#### 5️⃣ Build for Production
To build the web application:
```sh
cd web-app
npm run build
npm run start
```

To build the documentation:
```sh
cd ../docs
npm run build
npm run serve
```

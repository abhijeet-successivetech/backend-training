
# Installing Node.js (Stable LTS) 

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.  
It helps you build scalable network applications quickly and efficiently.  
With Node.js, JavaScript runs on the server, enabling full-stack development with a single language.

---

## Steps to Install Node.js 

### 1. Update Package Lists

First, ensure your package lists are up to date:

```bash
sudo apt update
```

---

### 2. Install Required Dependencies

Install curl if it's not already installed.

```bash
sudo apt install curl
```

---

### 3. Add NodeSource Repository

Fetch and run the NodeSource setup script:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

---

### 4. Install Node.js and npm

Now install Node.js:

```bash
sudo apt install nodejs
```

---

### 5. Verify Installation

Check the installed versions to confirm everything worked:

```bash
node -v
```

```bash
npm -v
```



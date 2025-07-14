
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


# Installing the Latest Stable Version of Postman 

## Introduction

Postman is a popular API development and testing tool used by developers to build, test, and document APIs efficiently. Below are the steps to install and set up the latest stable version of Postman on Ubuntu.

---

## Steps to Install Postman

### 1. Open a Terminal

First, open your terminal to execute the installation commands.

---

### 2. Add the Postman Repository

Add Postman's repository to your system’s sources list:

```bash
sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
```

---

### 3. Import the Postman GPG Key

Import the GPG key to authenticate the Postman packages:

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
```

---

### 4. Update the Package List

Update your system's package list to include the newly added Postman repository:

```bash
sudo apt-get update
```

---

### 5. Install Postman

Finally, install Postman using:

```bash
sudo apt-get install postman
```
## Conclusion

Postman is now installed on your Ubuntu system. You can launch it from your application launcher or by running `postman` in your terminal to begin testing and managing your APIs effectively.

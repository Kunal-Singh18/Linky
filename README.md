# Link Shortener

A simple and efficient URL shortening service built with Node.js, Express, and MongoDB. This project allows users to shorten long URLs into compact, shareable links.

---

## Live Demo

You can try the live application here: [http://13.204.163.26/](http://13.204.163.26/)

---

## Features

- Shorten long URLs to concise, easy-to-share links
- Redirect short URLs to their original long URLs
- Store URLs and mappings securely in MongoDB
- RESTful API endpoints to create and retrieve URLs

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Deployment:** AWS EC2 instance

---

## Installation

```bash
git clone https://github.com/your-username/link-shortener.git
cd link-shortener
npm install
echo "MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name" > .env
echo "PORT=3005" >> .env
npm start
 

# **Library Management System - MongoDB Schema**

## **Overview**

You're building the backend for a library management system. In this assignment, your task is to design Mongoose schemas for books and members, including validations and references to track which books are issued to which members.

> You'll write the schema in a `schema.js` file inside the boilerplate project.

## **Schema Requirements**

### **General Guidelines**

- Use appropriate data types and Mongoose validators
- Ensure fields like `category` use enums
- Use references for relationships like issued books
- Apply constraints like `required`, `default`, `unique`, `min`, or `max` where needed

### **Schema Fields**

#### **Book Schema**

- `title`

  - Type: String
  - Required: true
  - Purpose: Title of the book

- `author`

  - Type: String
  - Required: true
  - Purpose: Name of the author

- `isbn`

  - Type: String
  - Required: true
  - Unique: true
  - Purpose: Unique identifier for the book

- `category`

  - Type: String
  - Required: true
  - Enum: \['fiction', 'non-fiction', 'comics', 'biography']
  - Purpose: Genre of the book

- `copies`

  - Type: Number
  - Required: true
  - Purpose: Total copies available in the library

- `available`

  - Type: Number
  - Default: equal to `copies`
  - Purpose: Current number of available (not issued) copies

#### **Member Schema**

- `name`

  - Type: String
  - Required: true
  - Purpose: Full name of the library member

- `email`

  - Type: String
  - Required: true
  - Unique: true
  - Purpose: Email address of the member

- `joinDate`

  - Type: Date
  - Default: current date
  - Purpose: Date the member joined

- `booksIssued`

  - Type: Array of ObjectIds
  - Ref: 'Book'
  - Purpose: List of books currently issued to the member

## **Deliverable**

- Write a MongoDB schema for the above library system, ensuring all required fields, validations, enums, and data types are correctly implemented.

# **How to Fork and Set Up Your Repository**

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:

  - **Option 1: Download and Push**

    1. Download the repository files from StackBlitz.

    2. Open your terminal/command prompt, navigate to the project folder, and run:

       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```

       Replace `<your_github_repo_url>` with your personal GitHub repository URL.

    3. Commit and push the files to your GitHub repository:

       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```

  - **Option 2: Push Directly**

    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

## **Submission Instructions**

- Submit your GitHub repo link
- Submit the Google Drive video link (ensure access permissions are open to `kalvium.community`)
- Include a short 1–2 line note summarizing your schema design
- **All of the above details must be added to a PDF file and uploaded on the submission portal.**

### **PDF Submission Format**

Title your submission file as:
`mongoose-practice#2-schema_<yourname>.pdf`

Your PDF should include:

- GitHub repository link
- Google Drive link to your video
- A short note on the schema you wrote (1–2 lines)

---

### **Example Submission Format**

- GitHub: `https://github.com/<your_username>/library-schema`
- Video: Google Drive link
- Note: “I created schemas for books and members with proper validations and used referencing to track issued books.”

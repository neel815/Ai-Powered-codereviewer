AI Code Reviewer
An interactive AI-powered code review tool that allows users to write, edit, and receive AI-generated feedback on their code in real-time. Built using React, React Simple Code Editor, Prism.js, and Express.js for backend AI integration.

🚀 Features
✅ Code Editor – Write and edit code with syntax highlighting using react-simple-code-editor.
✅ AI-Powered Review – Get AI-generated reviews of your code by clicking the "Review" button.
✅ Syntax Highlighting – Uses Prism.js to highlight syntax for better readability.
✅ Responsive UI – Optimized for all screen sizes with a clean dark theme.

🛠 Tech Stack
Frontend:
React (Vite)
React Simple Code Editor
Prism.js for syntax highlighting
Axios for API requests
Backend:
Node.js & Express
OpenAI API (or your custom AI logic)
📂 Project Structure
bash
Copy
Edit
/ai-code-reviewer  
│── /client               # React frontend  
│   ├── /src  
│   │   ├── App.jsx       # Main React component  
│   │   ├── App.css       # Styling  
│   │   ├── index.css     # Global styles  
│   │   ├── main.jsx      # React root file  
│   │── package.json      # Frontend dependencies  
│  
│── /server               # Express backend  
│   ├── /routes  
│   │   ├── review.js     # AI review route  
│   ├── server.js         # Main Express server  
│   ├── package.json      # Backend dependencies  
│  
└── README.md             # Project documentation  
💻 Installation & Setup
1️⃣ Clone the Repository

sh
Copy
Edit
git clone https://github.com/your-username/ai-code-reviewer.git  
cd ai-code-reviewer
2️⃣ Install Frontend Dependencies

sh
Copy
Edit
cd client  
npm install  
3️⃣ Start Frontend Server

sh
Copy
Edit
npm run dev  
4️⃣ Install Backend Dependencies

sh
Copy
Edit
cd ../server  
npm install  
5️⃣ Start Backend Server

sh
Copy
Edit
npm run dev  
6️⃣ Access the App
Open http://localhost:5173 in your browser.

🚀 API Endpoint
POST /ai/get-review
Request: { code: "your source code here" }
Response: { review: "AI-generated feedback" }
🔧 Troubleshooting
Code Not Displaying Properly?

Check if Prism.js is highlighting correctly (prism.highlightAll()).
Ensure proper CSS styles for .code and .review.
Button Not Showing?

Check if .review has position: absolute; inside .left.
📝 License
This project is licensed under the MIT License.


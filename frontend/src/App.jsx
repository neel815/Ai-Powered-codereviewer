import { useState, useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import prism from 'prismjs';
import './App.css';

function App() {
  const [code, setCode] = useState(`//enter your code`);
  const [review, setReview] = useState('');

  useEffect(() => {
    setTimeout(() => {
      prism.highlightAll();
    }, 50); // Gives time for rendering
  }, [code, review]); // Runs when code or review updates
  

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error('Failed to fetch review:', error);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 17,
                border: '1px solid #ddd',
                borderRadius: '5px',
                height: '100%',
                width: '100%',
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>

        {/* Editable review code */}
        <div className="right">
          <Editor
            value={review}
            onValueChange={(review) => setReview(review)}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 17,
              border: '1px solid #ddd',
              borderRadius: '5px',
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;

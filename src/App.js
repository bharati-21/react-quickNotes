import './App.css';
import {useState} from 'react';

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState("");
  const [theme, setTheme] = useState(false);

  return (
    <main className={`main ${theme ? "dark" : "light"}`}>
      {
        notes.length > 0 ? 
        <div></div> 
        :
        <section className='empty-notes'>
          <h1 className='empty-notes--head'>
            You have 0 <span class="color-accent">quickNotes</span>
          </h1>
          <div className='empty-notes--new-note'>
            <button className='btn btn-primary'>
              <span className="new-note--icon">+</span>
            </button>
            <span className="new-note--text">Create your first quickNote</span>
          </div>
        </section>
      }
    </main>
  );
}

export default App;

import './App.css';
import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import Split from 'react-split';
import WbSunnyIcon  from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(
    (notes[0] && notes[0].id) || ""
  );
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || []);
  }, []);


  useEffect(() => {
   localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      title: `Note ${notes.length + 1}`,
      body: 'This is my note'
    }
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setActiveNote(newNote.id)
  }

  function toggleActiveNote(event, id) {
    setActiveNote(id);
  }

  function changeTheme() {
    setTheme(previousTheme => !previousTheme);
  }

  function editNoteHead(event, id) {
    const title = event.target.value;
    setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === id ? {...oldNote, title: title} : oldNote;
    }))
  }

  function editNoteBody(event, id) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === id ? {...oldNote, body: event.target.value} : oldNote;
    }))
  }

  function removeNote(event, id) {
    event.stopPropagation();
    setNotes(oldNotes => oldNotes.filter(oldNote => {
      return oldNote.id !== id;
    }));

  }

  function findActiveNote() {
    const foundNote = notes.find(note => {
      return note.id === activeNote}) || notes[0];

    if(foundNote.id !== activeNote) {
      setActiveNote(foundNote.id)
    }
    return foundNote;
  }

  return (
    <main className={`main ${theme ? "dark" : "light"}`}>
      {
        notes.length > 0 ? 
        <Split
          sizes={[30, 70]} 
          direction="horizontal" 
          className="split"
          snapOffset={2}
          gutterSize={5}
          cursor='col-resize'
        >
          <Sidebar 
            notes={notes}
            createNewNote={createNewNote}
            activeNote={findActiveNote()}
            toggleActiveNote={toggleActiveNote}
            removeNote={removeNote}
          />

          {
            <Editor 
              note={findActiveNote()}
              editNoteBody={editNoteBody}
              editNoteHead={editNoteHead}
              theme={theme}
              changeTheme={changeTheme}
            />
          }
        </Split>
        :
        <section className='empty-notes'>
          <button 
            className='theme-toggle' 
            onClick={changeTheme}
          >
            {theme ? <WbSunnyIcon /> : <NightlightIcon />}
          </button>

          <h1 className='empty-notes--head'>
            You have 0 <span className="color-accent">
                quickNotes
              </span>
          </h1>

          <div className='empty-notes--new-note'>
            <button 
              className='btn btn-primary' 
              onClick={createNewNote}
            >
              <span className="new-note--icon">
                +
              </span>
            </button>
            <span 
              className="new-note--text"
            >
              Create your first quickNote
            </span>
          </div>
        </section>
      }
      <footer className="footer">
        <p>
          &lt;/&gt; by <a href="https://bharati-21.github.io/" target="_blank">Bharati</a>
          </p>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/bharati-21" target="_blank">
                <GitHubIcon  />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bharati-subramanian-29734b152/" target="_blank">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_girlwhocodes" target="_blank">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://dev.to/bharati21" target="_blank">
                <LogoDevIcon />
              </a>
            </li>
          </ul>
      </footer>
    </main>
  );
}

export default App;

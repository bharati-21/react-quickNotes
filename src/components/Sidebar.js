import DeleteIcon from '@mui/icons-material/Delete';
export default function Sidebar(props) {
    const {notes, activeNote} = props;
    return (
        <div className="sidebar-tab">
            <div className="sidebar-header">
                <h2 className="sidebar-head">quickNotes</h2>
                <div className="sidebar-header--new-note">
                    <button 
                        className='btn btn-primary' 
                        onClick={props.createNewNote}
                    >+
                    </button>
                </div>  
            </div>
            <div className="sidebar-main">
                {
                    notes.map(note => {
                        return <div 
                            key={note.id} 
                            className={`note ${activeNote.id === note.id ? 'active-note' : ''}`}
                            onClick={(event) => props.toggleActiveNote(event, note.id)}
                        >
                            <span classname='note-title'>{note.title ? note.title : 'Untitled Note'}</span>
                            <span className="delete-icon" onClick={(event) => props.removeNote(event,note.id)}><DeleteIcon /></span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
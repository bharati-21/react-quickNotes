import WbSunnyIcon  from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import TextareaAutosize from 'react-textarea-autosize';

export default function Editor(props) {
    const {note, theme} = props;

    return (
        <div className="editor-tab">
            <div className="editor-header">
                <h1>Editor</h1>
                <button className="theme-toggle" onClick={props.changeTheme}>
                    {theme ? <WbSunnyIcon /> : <NightlightIcon />}
                </button>
            </div>
            <div className='editor-main'>
                <TextareaAutosize 
                    className='note-head' 
                    onChange={(e) => props.editNoteHead(e, note.id)}
                    // contentEditable="true"
                    // suppressContentEditableWarning={true}
                    value={note.title} rows="1">{note.title}</TextareaAutosize>
                <textarea 
                    className='note-body'
                    onChange={(e) => props.editNoteBody(e, note.id)} 
                    // contentEditable="true"
                    // suppressContentEditableWarning={true}
                    value={note.body}
                >
                    {note.body}
                </textarea> 
            </div>
        </div>
    )
}
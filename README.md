# quickNotes
A notes application created using ReactJS that lets you create, edit, and delete notes quickly.

## This application allows users to create quick, easy notes
[Live demo of the application](https://react-quicknotes.netlify.app/)

<hr />

## TECHNOLOGIES/ LANGUAGES USED
- HTML
- CSS
- JavaScript
- ReactJS

## WORKING
- The initial screen displays the message `0 quickNotes` and allows users to create a new quickNote.
- The quickNote main screen is divided into 2 panels - the editor and the sidebar
- The sidebar displays the list of all quickNotes. On clicking on any of these notes, they can be edited.
- The quickNotes is the the sidebar can be deleted using the `delete icon` that appears when hovered over the quickNote.
- The editor displays the note content, and when a quickNote from the sidebar is selected, it's content is filled in the title and body section.


![Image of the application](https://github.com/bharati-21/react-quickNotes/blob/master/react-quickNotes.PNG)

## My Learnings
- One of the important learnings was understanding `lifting the state` to the nearest ancestor of components that share common state.
- How to pass references of state update functions to child components that change the state was another learning.
- Using npm packages such as `nanoid` and `react-split` was a new takeaway.

## Challenges
- The main challenge was displaying the contents of active note selected from the sidebar on the editor.
- Another challenge, was creating a dynamic textarea that changed it's height and added scrollbar depending on the contents typed onto it. I tried using eventhandler `keydown` on the textarea to set it's height as the scrollHeight property. As it did not work as expected, I used the npm package - `react-textarea-autosize`.

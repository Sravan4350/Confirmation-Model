onfirmation Modal
A simple React confirmation modal component built with React Hooks.
Demo
The app displays an Open Confirmation Modal button. Clicking it opens a modal with Confirm and Cancel buttons. After the user makes a choice, the status is displayed below the button.
Features

Open/close modal on button click
Confirm or Cancel action
Displays action status (Confirmed / Cancelled) after interaction
Clean component structure with props

Project Structure
Confirmation-Model/
├── src/
│   └── ConfirmationModal.jsx
├── public/
├── package.json
└── README.md
Getting Started
Prerequisites

Node.js
npm

Installation

Clone the repository

bashgit clone git@github.com:Sravan4350/Confirmation-Model.git

Navigate to the project folder

bashcd Confirmation-Model

Install dependencies

bashnpm install

Start the development server

bashnpm start
The app will run at http://localhost:3000
Usage
jsximport ConfirmationModal from './ConfirmationModal'

function App() {
  return <ConfirmationModal />
}
Component Details
ConfirmationModal (default export)
The main component that manages state and renders either the open button or the Popup.
StateTypeDescriptionclickedbooleanControls whether the modal is openstatusboolean / nullStores the user's last action
Popup
A presentational component that renders the modal content.
PropTypeDescriptiononConfirmfunctionCalled when Confirm is clickedonCancelfunctionCalled when Cancel is clicked
Running Tests
bashnpm test
Built With

React
React Hooks

Author
Sravan - @Sravan4350
License

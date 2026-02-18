import { useState } from "react"

const Popup = ({onConfirm, onCancel}) => {
    return (
      <div>
        <h1>Confirm Action</h1>
        <p>Are you sure you want to proceed?</p>
        <div>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    )
  }

const ConfirmationModal = () => {
  const [clicked, setIsClicked] = useState(false)
  const [status, setStatus] = useState(true)

  const onConfirm = () => {
    setStatus(true)
    setIsClicked(false)
  }
  const onCancel = () => {
    setStatus(false)
    setIsClicked(false)
  }
  return (clicked ? <Popup onConfirm={onConfirm} onCancel={onCancel} /> : 
    <div>
        <button onClick={() => setIsClicked(true)}>Open Confirmation Modal</button>
        <div>{status ? "Confirmed" : "Cancelled"}</div>
      </div>
  )
}
export default ConfirmationModal
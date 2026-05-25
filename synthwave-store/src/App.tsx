import { Application } from "./navigation/browser"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div>
      <ToastContainer
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
      <Application />
    </div>

  )
}

export default App

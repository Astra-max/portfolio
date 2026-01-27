import AppRoutes from "../routes/app-routes";
import useNotification from "../context/handleContext";
import Notification from "../context/notificationContext";

function App() {
  const { notice, setNotice } = useNotification();
  return (
    <Notification.Provider value={{notice, setNotice}}>
      <AppRoutes />
    </Notification.Provider>
  );
}

export default App;

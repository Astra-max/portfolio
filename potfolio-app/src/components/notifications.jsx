import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/index.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../context/auth";

export default function Notifications() {
    const { setToken } = useAuth()
    function HandleRemoveKey() {
        localStorage.clear()
        setToken('')
    }
  return (
    <div className="notify-cont">
      <button className="remove-psk" onClick={HandleRemoveKey}>
        <FontAwesomeIcon icon={faTrashCan} />
        passkey</button>
      <div className="user-div">
        <p className="user">Edward Stevens</p>
        <p className="user-email">edwardsteve@gmail.com</p>
        <p className="user-message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptatibus. Enim iusto, expedita, minus error nihil ratione
          obcaecati quibusdam inventore sunt ullam dignissimos reiciendis,
          provident modi dolor illum tempora laudantium.
        </p>
      </div>
    </div>
  );
}

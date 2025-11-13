import { useLocation, useNavigate } from "react-router-dom";
import AuthContainer from "../components/Auth/AuthContainer";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode =
    location.state?.mode ??
    new URLSearchParams(location.search).get("mode") ??
    "login";

  return <AuthContainer initialMode={mode} navigate={navigate} />;
}

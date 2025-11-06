import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import LoadPage from "./screens/LoadPage";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import RequireAuth from "./utils/RequireAuth";
import PersistLogin from "./utils/PersistLogin";
import { useAuth } from "./utils/hooks/useAuth";
import RequireIsSignedIn from "./utils/RequireIsSignedIn";
import StateApp from "./screens/state/StateApp";
import NationalApp from "./screens/national/NationalApp";
import HealthFacilityApp from "./screens/healthFacility/HealthFacilityApp";
import LgaApp from "./screens/lga/LgaApp";
import Loader from "./components/Loader";
import LandingPage from "./components/LandingPage";
import StateLogin from "./screens/state/pages/StateLogin";
import RequireStateAuth from "./utils/RequireStateAuth";
import PersistStateLogin from "./utils/PersistStateLogin";
import RequireNationalAuth from "./utils/RequireNationalAuth";
import PersistNationalLogin from "./utils/PersistNationalLogin";
import NationalLogin from "./screens/national/pages/NationalLogin";
import LgaLogin from "./screens/lga/pages/LgaLogin";
import RequireLgaAuth from "./utils/RequireLgaAuth";
import PersistLgaLogin from "./utils/PersistLgaLogin";
import RequireHealthfacilityAuth from "./utils/RequireHealthfacilityAuth";
import PersistHealthfacilityLogin from "./utils/PersistHealthfacilityLogin";
import HealthfacilityLogin from "./screens/healthFacility/pages/HealthfacilityLogin";
import NationalLoginRecovery from "./screens/national/pages/NationalLoginRecovery";
import NationalRecoveryConfirm from "./screens/national/pages/NationalRecoveryConfirm";
import NationalResetPassword from "./screens/national/pages/NationalResetPassword";
import DeletingAnAccount from "./components/DeletingAnAccount";
import MamiiApp from "./screens/mamii/MamiiApp";
import MamiiLogin from "./screens/mamii/pages/MamiiLogin";

function App() {
  const { auth } = useAuth();
  const isSignin = location.state?.from?.pathname === "/user/login";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<RequireIsSignedIn />}>
            <Route path="/user/login" element={<Login />}></Route>
          </Route>
        </Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireIsSignedIn />}>
            <Route path="/user/register" element={<Registration />}></Route>
          </Route>
        </Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/deleting-an-account"
          element={<DeletingAnAccount />}
        ></Route>
        <Route element={<PersistNationalLogin />}>
          <Route element={<RequireNationalAuth />}>
            <Route path="/national/*" element={<NationalApp />}></Route>
          </Route>
        </Route>
        <Route path="/national/login" element={<NationalLogin />}></Route>
        <Route
          path="/national/forgotpassword"
          element={<NationalLoginRecovery />}
        ></Route>
        <Route
          path="/national/resetpassword"
          element={<NationalResetPassword />}
        ></Route>
        <Route
          path="/national/confirmOTP"
          element={<NationalRecoveryConfirm />}
        ></Route>
        <Route element={<PersistStateLogin />}>
          <Route element={<RequireStateAuth />}>
            <Route path="/state/*" element={<StateApp />}></Route>
          </Route>
        </Route>
        <Route path="/state/login" element={<StateLogin />}></Route>
        <Route element={<PersistLgaLogin />}>
          <Route element={<RequireLgaAuth />}>
            <Route path="/lga/*" element={<LgaApp />}></Route>
          </Route>
        </Route>
        <Route path="/lga/login" element={<LgaLogin />}></Route>
        {/* healthFacility */}
        <Route element={<PersistHealthfacilityLogin />}>
          <Route element={<RequireHealthfacilityAuth />}>
            <Route
              path="/healthfacility/*"
              element={<HealthFacilityApp />}
            ></Route>
          </Route>
        </Route>

        <Route
          path="/healthfacility/login"
          element={<HealthfacilityLogin />}
        ></Route>
        {/* mamii */}
        {/* <Route element={<PersistHealthfacilityLogin />}> */}
        {/* <Route element={<RequireHealthfacilityAuth />}> */}
        <Route path="/mamii/*" element={<MamiiApp />}></Route>
        {/* </Route> */}
        {/* </Route> */}

        <Route path="/mamii/login" element={<MamiiLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

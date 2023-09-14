import { Component, useState } from "react";
import "./App.css";
// import {Route, Navigate } from "react-router-dom";

// Nav
import NavBarInstitute from "./Components/NavBarInstitute";
import NavBarSysAdmin from "./Components/NavBarSysAdmin";
import NavBarLanding from "./Component/NavBarLanding";
import Test from "./Component/Test";
// Pages
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import GenerateCert from "./Components/GenerateCert";
import CertificateDisplay from "./Components/CertificateDisplay";
import ViewCert from "./Components/ViewCert";
import {
  Route,
  Routes,
  Link,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';


// const DynamicLayoutRoute = (props) => {
//   const { component: RoutedComponent, layout, ...rest } = props;

//   // render actual Route from react-router
//   const actualRouteComponent = (
//     <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
//   );

//   // depends on the layout, you can wrap Route component in different layouts
//   switch (layout) {
//     case "INSTITUTE": {
//       return (
//         <div>
//           <NavBarInstitute />
//           {actualRouteComponent}
//         </div>
//       );
//     }
//     case "SYSADMIN": {
//       return (
//         <div>
//           <NavBarSysAdmin />
//           {actualRouteComponent}
//         </div>
//       );
//     }
//     default: {
//       return (
//         <div>
//           <NavBarLanding />
//           {actualRouteComponent}
//         </div>
//       );
//     }
//   }
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={{ backgroundColor: "#fafafa" }}>
//         <Routes>
//           <DynamicLayoutRoute
//             exact
//             path="/"
//             component={Home}
//             layout="LANDING"
//           />
//           <DynamicLayoutRoute
//             exact
//             path="/admin"
//             component={Admin}
//             layout="SYSADMIN"
//           />
//           <DynamicLayoutRoute
//             exact
//             path="/institute"
//             component={GenerateCert}
//             layout="INSTITUTE"
//           />
//           <DynamicLayoutRoute
//             path="/certificate/:id"
//             component={CertificateDisplay}
//           />
//           <DynamicLayoutRoute path="/view" element={ViewCert} />
//           <DynamicLayoutRoute path="*">
//             <Navigate to="/" />
//           </DynamicLayoutRoute>
//         </Routes>
//       </div>
//     );
//   }
// }




const App = () => {

  return (
      <div className="App" style={{ backgroundColor: "#fafafa" }}>
        <NavBarLanding/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/institute" element={<GenerateCert />} />
        <Route exact path="/view" element={<ViewCert />} />
        <Route exact path="/certificate/:id" element={<CertificateDisplay />} />

        </Routes>
      </div>
  );
};


export default App; 
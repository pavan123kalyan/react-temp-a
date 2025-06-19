import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
 import Main from "./components/Main";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
import App13 from "./components/App13";
import App14 from "./components/App14";
import Parent from "./components/Parent";
import App15 from "./components/App15";
import App16 from "./components/App16";
import App17 from "./components/App17";
import App18 from "./components/App18";
import App19 from "./components/App19";
import App20 from "./components/App20";
import App21 from "./components/App21";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="App1">App1</Link>
      <Link to="App2">App2</Link>
      <Link to="app3">App3</Link>
      <Link to="app4">App4</Link>
      <Link to="app5">App5</Link>
      <Link to="app6">App6</Link>
      <Link to="app7">App7</Link>
      <Link to="app8">App8</Link>
      <Link to="app9">App9</Link>
      <Link to="app10">App10</Link>
      <Link to="app11">App11</Link>
      <Link to="app12">App12</Link>
      <Link to="Main">Main</Link>
      {/* <Link to="Child1">Child1</Link>
      <Link to="Child2">Child2</Link> */}
      <Link to="App13">App13</Link>
      <Link to="App14">App14</Link>
      {/* <Link to="Parent">Parent</Link> */}
      <Link to="App15">App15</Link>
      <Link to="App16">App16</Link>
      <Link to="App17">App17</Link>
      <Link to="App18">App18</Link>
      <Link to="App19">App19</Link>
      <Link to="App20">App20</Link>
      <Link to="App21">App21</Link>
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}></Route>
        <Route path="App1" element={<App1/>}></Route>
        <Route path="app2" element={<App2/>}></Route>
        <Route path="app3" element={<App3/>}></Route>
        <Route path="app4" element={<App4/>}></Route>
        <Route path="app5" element={<App5/>}></Route>
        <Route path="app6" element={<App6/>}></Route>
        <Route path="app7" element={<App7/>}></Route>
        <Route path="app8" element={<App8/>}></Route>
        <Route path="app9" element={<App9/>}></Route>
        <Route path="app10" element={<App10/>}></Route>
        <Route path="app11" element={<App11/>}></Route>
        <Route path="app12" element={<App12/>}></Route>
        <Route path="Main" element={<Main/>}></Route>
        {/* <Route path="Child1" element={<Child1/>}></Route>
        <Route path="Child2" element={<Child2/>}></Route> */}
        <Route path="App13" element={<App13/>}></Route>
        <Route path="App14" element={<App14/>}></Route>
        {/* <Route path="Parent" element={<Parent/>}></Route> */}
        <Route path="App15" element={<App15/>}></Route>
        <Route path="App16" element={<App16/>}></Route>
        <Route path="App17" element={<App17/>}></Route>
        <Route path="App18" element={<App18/>}></Route>
        <Route path="App19" element={<App19/>}></Route>
        <Route path="App20" element={<App20/>}></Route>
        <Route path="App21" element={<App21/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App

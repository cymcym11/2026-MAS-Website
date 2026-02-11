    import { useState } from "react";
 import Tabs from "./components/Tabs";
  import Members from "./components/members";
  import MembersSection from "./components/MembersSection";
 

  function App() {
   const [generation, setGeneration] = useState(5); 

    return (
     <div>
       <Tabs generation={generation} setGeneration={setGeneration} />
      <Members generation={generation} />
      <MembersSection />
       
      </div>
    );
  }

 export default App; 

   /*import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Hero from "./components/Hero";
 import Cards from "./components/Cards";

 function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Hero />} />
         <Route path="/cards" element={<Cards />} />
       </Routes>
     </BrowserRouter>
   );
 }

 export default App; */

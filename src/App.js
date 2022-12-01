import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friendlist from "./Components/Friendlist/Friendlist";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import SingleFriend from "./Components/SingleFriend/SingleFriend";

export const FriendContext = createContext();
function App() {
  const [friendList, setFriendList] = useState([]);
  const [friends, setFriends] = useState([]);
  return (
    <div className="App">
      <FriendContext.Provider
        value={[friendList,setFriendList]}
      >
        <BrowserRouter>
          <Routes>
            {/* Shared layout to make navigation visible in every page  */}
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="friends" element={<Friends setFriends={setFriends} friends={friends}/>} />
              <Route path="friendList" element={<Friendlist />} />
              <Route path="friends/:friendID" element={<SingleFriend />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FriendContext.Provider>
    </div>
  );
}

export default App;

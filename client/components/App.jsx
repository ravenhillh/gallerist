import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Search />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const [search, setSearch] = useState('');

// return (
//   <div>
//     <input
//       type="text"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//     />
//     <button type="button" onClick={() => console.log(search)}>
//       Search for Art
//     </button>
//     <form
//       method="post"
//       onSubmit={() => {
//         axios.post('./logout')
//           .then((data) => console.log(data))
//           .catch((err) => console.log(err));
//       }}
//     >
//       <button
//         type="submit"
//         >
//         Log out
//       </button>

//     </form>
//     <form action="/logout" method="post">
//       <button type="submit">Sign out Pure HTML</button>
//       {/* <input type="hidden" name="altbutton" value="altbutton" /> */}
//     </form>
//   </div>
// );
// }

export default App;

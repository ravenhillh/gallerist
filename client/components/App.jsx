import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import Search from './Search';
import Gallery from './Gallery';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'gallery',
    element: <Gallery />,
  },

]);

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

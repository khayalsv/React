### Create App

npx create-react-app 'name'

### MUI Install

npm install @mui/material @emotion/react @emotion/styled

npm install @fontsource/roboto

npm install @mui/icons-material


- index.html

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

### Redux Install 

npm install @reduxjs/toolkit
npm install react-redux

### React Router Dom Install

npm install react-router-dom


### 1) Setup Pages

- create Error, Register,Login,Landing
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js



```js
Landing.js Page

const Landing = () => {
  return (
    <div>Landing</div>
  )
}

export default Landing
```

```js
index.js

import ErrorPage from "./ErrorPage";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

export { ErrorPage, Landing, Register ,Login }
```


### 2) Setup Dashboard pages

- create SharedLayout,Test
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js


- Test.js

```js
Test.js

const Test1 = () => {
  return (
    <div>Test1</div>
  )
}

export default Test1
```


```js
SharedLayout.js

import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
      SharedLayout
      <Outlet/>
    </div>
  )
}

export default SharedLayout
```


```js
index.js
import SharedLayout from "./SharedLayout";
import Test1 from "./Test1";
import Test2 from "./Test2";

export { SharedLayout, Test1, Test2 }
```


```js
App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage, Landing, Login, Register } from "./pages";
import { SharedLayout, Test1, Test2 } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Test1 />} />
          <Route path='test2' element={<Test2 />} />
        </Route>
        
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
```




```js
SharedLayout.js;

import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
      SharedLayout
      <Outlet/>
    </div>
  )
}

export default SharedLayout
```


### 3) User Slice - Setup (Store,Provider -> (Redux))

- features/user/userSlice.js

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
```

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
```

- index.js

```js
import { store } from './store';
import { Provider } from 'react-redux';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 4) Toggle Sidebar

- userSlice.js

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSidebarOpen: false,
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        }
    }
})

export const {toggleSidebar}=userSlice.actions;
export default userSlice.reducer;
```

- Use

```js
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'

const Navbar = () => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar())
  }


<Button color='inherit' onClick={toggle}>Login</Button>

To Check : F12 -> Redux
```
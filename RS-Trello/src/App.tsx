import Footer from './components/footer/footer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MainComponent from './components/main/MainComponent';
import Registration from './components/authorization/Registration';
import Login from './components/authorization/Login';
import { useTypedSelector } from './hooks/reduxHooks';
import { PrivateRout } from './components/router/PrivateRouter';
function App() {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<PrivateRout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route path="/" element={isAuth ? <MainComponent /> : <Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

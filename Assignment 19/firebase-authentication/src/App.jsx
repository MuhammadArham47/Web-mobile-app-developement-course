import './App.scss';
import './config/global'
import './config/firebase'
import "bootstrap/dist/js/bootstrap.bundle";
import { ConfigProvider } from 'antd';
import Index from './pages/Routes';
import { useAuth } from './context/Auth';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

function App() {

  const { isAuth, dispatch, setLoading } = useAuth();

  useEffect(()=> {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        dispatch({ type: "SET_LOGIN", payload: { user } });
      } else {
        console.log('No user is signed in.');
        dispatch({ type: "SET_LOGOUT" });
      }
    });

      setTimeout(() => {
        setLoading(true);
      }, 700);

  }, []);

  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0, primaryShadow: "none" } } }}> 
        <Index />
      </ConfigProvider>
    </>
  )
}

export default App
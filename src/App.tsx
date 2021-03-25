import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles'
import { Layout } from './styles/layout';
import SideBar from './components/SideBar';
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <SideBar/>
      <Layout>
        <ProfilePage/>
      </Layout>
    </div>
  );
}

export default App;

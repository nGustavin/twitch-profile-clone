import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles'
import { Layout } from './styles/layout';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <SideBar/>
      <Layout>
      </Layout>
    </div>
  );
}

export default App;

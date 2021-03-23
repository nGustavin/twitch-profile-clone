import Header from './components/Header';
import TabBar from './components/TabBar';
import GlobalStyle from './styles/GlobalStyles'
import { Layout } from './styles/layout';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Layout>
        <TabBar/>
      </Layout>
    </div>
  );
}

export default App;

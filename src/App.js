import './App.scss';
import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
  );
}

export default App;

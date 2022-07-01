import './App.scss';
import AppHeader from './components/Header/Header';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
      </Layout>
  );
}

export default App;

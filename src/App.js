import './App.scss';
import { Home } from './components/Home/Home';
import AppHeader from './components/Header/Header'
import AppFooter from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { Profile } from './components/Profile/Profile';
import { ToDoList } from './components/ToDoList/ToDoList';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Layout className="mainLayout">
              <Header>
                <AppHeader/>
              </Header>
              <Content>
                <Home />
              </Content>
              <Footer>
                <AppFooter />
              </Footer>
          </Layout>}>
        </Route>
        <Route path='/profile' element={
          <Layout className="mainLayout">
            <Header>
              <AppHeader/>
            </Header>
            <Content>
              <Profile />
            </Content>
          </Layout>} 
        />
        <Route path='/mytodolist' element={
          <Layout className="mainLayout">
            <Header>
              <AppHeader/>
            </Header>
            <Content>
              <ToDoList />
            </Content>
            <Footer>
              <AppFooter />
            </Footer>
          </Layout>} 
        />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>
  );
}


{/* <Router>
      <Layout className="mainLayout">
            <Header>
              <AppHeader/>
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </Content>
            <Footer>
              <AppFooter />
            </Footer>
      </Layout>
    </Router> */}

    {/* <Router>
      <Routes>
        <Route path='/' element={
          <Layout className="mainLayout">
              <Header>
                <AppHeader/>
              </Header>
              <Content>
                <Home />
              </Content>
              <Footer>
                <AppFooter />
              </Footer>
          </Layout>}>
        </Route>
        <Route path='/profile' element={
          <Layout className="mainLayout">
            <Header>
              <AppHeader/>
            </Header>
            <Content>
              <Profile />
            </Content>
            <Footer>
              <AppFooter />
            </Footer>
          </Layout>} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router> */}


export default App;

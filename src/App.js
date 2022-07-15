import './App.scss';
import { AuthProvider } from './hooks/contexts/AuthProvider';
import { Home } from './components/Home/Home';
import AppHeader from './components/Header/Header'
import AppFooter from './components/Footer/Footer'
import { EditProfile } from './components/EditProfile/EditProfile'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { Profile } from './components/Profile/Profile';
import { ToDoList } from './components/ToDoList/ToDoList';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000 * 60, // 5 minutes
        cacheTime: Infinity, // do not delete stale data
      },
    },
  }
); // queryClient kreiramo da bi mogli da koristimo react-query // u App.js pravimo objekat a u ostalim komponentama kada koristimo queryClient - const queryClient = useQueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
              <PrivateRoute><Layout className="mainLayout">
                <Header>
                  <AppHeader/>
                </Header>
                <Content>
                  <Profile />
                </Content>
              </Layout></PrivateRoute>} 
            />
            <Route path='/mytodolist' element={<PrivateRoute><Layout className="mainLayout">
                <Header>
                  <AppHeader/>
                </Header>
                <Content>
                  <ToDoList />
                </Content>
                <Footer>
                  <AppFooter />
                </Footer>
              </Layout></PrivateRoute>
              } 
            />
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/edit-profile' element={<EditProfile />}/>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
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

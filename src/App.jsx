import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/customNavbar/Navbar';
import Footer from './components/customFooter/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Courses from './pages/home/componets/Courses';
import CourseDescription from './pages/courses/CourseDescription';
import Signin from './pages/signin/Signin';
import Dashboard from './pages/dashboard/Dashboard';
import AddNewCourse from './pages/dashboard/AddNewCourse';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDescription />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/dashboard/course/create/:id" element={<ProtectedRoute element={<AddNewCourse/>} />} />
          <Route path="/dashboard/course/create" element={<ProtectedRoute element={<AddNewCourse/>} />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

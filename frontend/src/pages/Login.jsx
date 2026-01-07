import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AuthForm } from '../components/auth/AuthForm';
import { useToast } from '../hooks/use-toast';
import api from '../lib/api'; 

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (data) => {
    console.log('Login attempt:', data); // Debug log

    try {
      // 1. Send the login request
      const response = await api.post('/users/login', {
        email: data.email,
        password: data.password
      });

      console.log("Login success:", response.data); // Debug log

      // 2. Save user data
      localStorage.setItem('user', JSON.stringify(response.data));

      toast({
        title: "Login successful",
        description: "Welcome back to Cyber Connect!",
      });

      // 3. Redirect
      navigate('/dashboard');

    } catch (error) {
      console.error("Login failed:", error); // Debug log
      toast({
        title: "Login Failed",
        description: error.response?.data?.error || "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-white pt-24 pb-16">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
          <AuthForm type="login" onSubmit={handleLogin} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
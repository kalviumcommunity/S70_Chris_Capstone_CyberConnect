import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AuthForm } from '../components/auth/AuthForm';
import { useToast } from '../hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = (data) => {
    console.log('Register attempt:', data);

    // Password validation check
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }


    toast({
      title: "Registration successful",
      description: "Welcome to Cyber Connect!",
    });

    // Redirect to dashboard
    navigate('/dashboard');
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 bg-white pt-24 pb-16">
        <div className="w-full max-w-md p-8 bg-white  rounded-2xl shadow-lg animate-fade-in ">
          <AuthForm type="register" onSubmit={handleRegister} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
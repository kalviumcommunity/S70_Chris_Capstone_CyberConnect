import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AuthForm } from '../components/auth/AuthForm';
import { useToast } from '../hooks/use-toast';

const ForgotPassword = () => {
  const { toast } = useToast();

  const handleForgotPassword = (data) => {
    console.log('Forgot password attempt:', data);

    // Simulate sending password reset email
    toast({
      title: "Password reset email sent",
      description: "Check your inbox for instructions on how to reset your password.",
    });
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg animate-fade-in border border-gray-200 dark:border-gray-800">
          <AuthForm type="forgot-password" onSubmit={handleForgotPassword} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
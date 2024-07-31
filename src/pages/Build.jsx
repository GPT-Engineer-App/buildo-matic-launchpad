import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Build = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Start Building Your Software</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Welcome to the build page. Here you can start creating your own software using our innovative tools.
      </p>
      <Button 
        onClick={() => navigate('/')} 
        className="bg-white text-black hover:bg-gray-200 text-lg py-2 px-6"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Build;

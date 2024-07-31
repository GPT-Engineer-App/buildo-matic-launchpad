import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-xl font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="#" className="hover:text-gray-300">Vision</a></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <svg viewBox="0 0 24 24" className="w-48 h-48 mx-auto">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#FFD93D" />
                <stop offset="100%" stopColor="#6BCB77" />
              </linearGradient>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGradient)" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-4">The last piece of software.</h1>
        <p className="text-xl mb-8 max-w-2xl">
          We're building software that builds software. Our <span className="underline">vision</span> is to unlock
          human creativity — by enabling anyone to create software.
        </p>
        <Button 
          onClick={() => navigate('/build')} 
          className="bg-white text-black hover:bg-gray-200 text-lg py-2 px-6"
        >
          Start building
        </Button>
      </main>
    </div>
  );
};

export default Index;

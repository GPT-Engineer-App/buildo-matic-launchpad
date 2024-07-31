import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Chat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (location.state?.prompt) {
      setMessages([
        { role: "user", content: location.state.prompt },
        { role: "assistant", content: "Certainly! I'll create a bare-bones application that you can easily modify and build upon. This application will have a simple layout with a header, main content area, and a footer. We'll use React components and Tailwind CSS for styling." },
      ]);
    }
  }, [location.state?.prompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { role: "user", content: inputValue }]);
      setInputValue("");
      // Here you would typically send the message to your backend and get a response
      // For now, we'll just simulate a response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "I'm sorry, but I'm just a demo. I can't actually process your request." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.role === "user" ? "bg-blue-900 ml-auto" : "bg-gray-800"
            } max-w-[80%]`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-gray-800 text-white border-gray-700"
          />
          <Button type="submit" variant="ghost">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

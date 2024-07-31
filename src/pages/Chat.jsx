import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Chat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [previewCode, setPreviewCode] = useState("");

  useEffect(() => {
    if (location.state?.prompt) {
      setMessages([
        { role: "user", content: location.state.prompt },
        { role: "assistant", content: "Certainly! I'll create a bare-bones application that you can easily modify and build upon. This application will have a simple layout with a header, main content area, and a footer. We'll use React components and Tailwind CSS for styling." },
      ]);
      setPreviewCode(`
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      <main className="flex-grow p-4">
        <p>Main content goes here</p>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
      `);
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
          { role: "assistant", content: "I've updated the code based on your request. You can see the changes in the preview pane." },
        ]);
        // Simulate code update
        setPreviewCode((prevCode) => prevCode + "\n// New code added based on user request");
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="flex flex-col w-1/2 border-r border-gray-700">
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
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code>{previewCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default Chat;

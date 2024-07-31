import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table2, CalendarDays, Paperclip, Footprints, Paperclip as AttachmentIcon, Zap } from "lucide-react";

const Build = () => {
  const projectOptions = [
    { title: "A tool to upload and edit CSV files", icon: <Table2 className="w-6 h-6 text-green-500" /> },
    { title: "A page showing top stories from Hacker News", icon: <CalendarDays className="w-6 h-6 text-orange-500" /> },
    { title: "Create a boilerplate app I can easily modify", icon: <Paperclip className="w-6 h-6 text-blue-500" /> },
    { title: "A tool to help me manage my sneaker addiction", icon: <Footprints className="w-6 h-6 text-pink-500" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-12 text-center">
        What do you want <span className="text-yellow-500">to</span>{" "}
        <span className="text-green-500">build</span><span className="text-blue-500">?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-4xl">
        {projectOptions.map((option, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col justify-between">
            <p className="text-lg mb-4">{option.title}</p>
            <div className="self-end">{option.icon}</div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl relative">
        <Input
          type="text"
          placeholder="Message GPT Engineer..."
          className="w-full bg-gray-900 text-white border-gray-700 py-3 pl-4 pr-12 rounded-lg"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
          <AttachmentIcon className="w-5 h-5 text-gray-500" />
          <Zap className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Build;

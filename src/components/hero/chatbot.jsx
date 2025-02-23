import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    window.chtlConfig = { chatbotId: "2312696876" };

    const script = document.createElement("script");
    script.async = true;
    script.dataset.id = "2312696876";
    script.id = "chatling-embed-script";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 p-6">
      <p className="text-sm text-gray-500 hidden md:block"></p>
    </div>
  );
};

export default Chatbot;

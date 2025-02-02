import Chatbot from '../components/Chatbot';
import Sidebar from '../components/Sidebar';

function Chat() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      <Sidebar />
      <Chatbot />
    </div>
  );
}

export default Chat;

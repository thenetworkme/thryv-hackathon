import Chatbot from '../components/Chatbot';
import Sidebar from '../components/Sidebar';

function Chat() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <Chatbot />
    </div>
  );
}

export default Chat;

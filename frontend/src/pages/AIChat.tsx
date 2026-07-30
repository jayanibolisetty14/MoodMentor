import { useState } from "react";

function AIChat() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello 😊 I'm MoodMentor AI. How are you feeling today?"
    }
  ]);


  const sendMessage = () => {

    if (message.trim() === "") return;


    setMessages([
      ...messages,
      {
        sender: "User",
        text: message
      },
      {
        sender: "AI",
        text: "I understand. Thank you for sharing. Remember to take care of yourself 💙"
      }
    ]);


    setMessage("");

  };


  return (
   <div className="w-full p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">


        <h1 className="text-3xl font-bold text-blue-600 text-center">
          MoodMentor AI Assistant 🤖
        </h1>


        <p className="text-center text-gray-600 mt-2">
          Your personal AI mental wellness companion.
        </p>



        {/* Chat Area */}

        <div className="mt-8 h-96 bg-gray-50 rounded-xl p-5 overflow-y-auto">


          {messages.map((msg, index) => (

            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "User"
                ? "text-right"
                : "text-left"
              }`}
            >

              <div
                className={`inline-block p-4 rounded-xl ${
                  msg.sender === "User"
                  ? "bg-blue-600 text-white"
                  : "bg-green-100 text-gray-800"
                }`}
              >

                <p>
                  {msg.text}
                </p>

              </div>

            </div>

          ))}


        </div>



        {/* Input Section */}

        <div className="flex gap-3 mt-5">


          <input

            type="text"

            value={message}

            onChange={(e) => setMessage(e.target.value)}

            placeholder="Type your message..."

            className="flex-1 border rounded-lg p-3"

          />


          <button

            onClick={sendMessage}

            className="bg-blue-600 text-white px-6 rounded-lg"

          >
            Send
          </button>


        </div>



      </div>

    </div>
  );
}

export default AIChat;
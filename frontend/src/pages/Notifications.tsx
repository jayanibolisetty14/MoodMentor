function Notifications() {
  return (
   <div className="w-full p-8">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          Notifications 🔔
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Stay updated with your wellness activities.
        </p>


        <div className="mt-8 space-y-4">

          <div className="bg-blue-100 p-5 rounded-xl">
            <h2 className="font-semibold">
              😊 Mood Check Reminder
            </h2>
            <p className="text-gray-600 mt-2">
              Don't forget to update your mood today.
            </p>
            <span className="text-sm text-gray-500">
              10 minutes ago
            </span>
          </div>


          <div className="bg-green-100 p-5 rounded-xl">
            <h2 className="font-semibold">
              🧘 Meditation Reminder
            </h2>
            <p className="text-gray-600 mt-2">
              Your daily meditation session is waiting.
            </p>
            <span className="text-sm text-gray-500">
              1 hour ago
            </span>
          </div>


          <div className="bg-purple-100 p-5 rounded-xl">
            <h2 className="font-semibold">
              📊 Weekly Report Ready
            </h2>
            <p className="text-gray-600 mt-2">
              Your emotional wellness report has been generated.
            </p>
            <span className="text-sm text-gray-500">
              Yesterday
            </span>
          </div>


        </div>


        <button className="w-full mt-8 bg-blue-600 text-white p-3 rounded-lg">
          Mark All as Read
        </button>


      </div>

    </div>
  );
}

export default Notifications;
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSave = () => {
    // Placeholder save logic
    alert('Profile saved!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Profile Settings</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
          <input
            id="name"
            type="text"
            defaultValue="John Doe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            defaultValue="john.doe@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

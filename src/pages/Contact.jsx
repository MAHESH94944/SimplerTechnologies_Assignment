import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | User Platform</title>
        <meta
          name="description"
          content="Contact us for support or inquiries."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">
              Other Ways to Reach Us
            </h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> support@example.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> (123) 456-7890
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span> 123 Main St, City,
                Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

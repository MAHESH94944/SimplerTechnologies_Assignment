import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About | User Platform</title>
        <meta
          name="description"
          content="Learn more about our platform and team."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Welcome to our platform! We're dedicated to providing you with the
            best user experience.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to create intuitive and beautiful interfaces that
            make technology accessible to everyone.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-medium text-indigo-800">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-medium text-indigo-800">Jane Smith</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import UserCard from "../components/UserCard";

const Home = React.memo(() => {
  const users = useMemo(
    () => [
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" },
      { name: "Robert Johnson", email: "robert@example.com" },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Home | User Platform</title>
        <meta
          name="description"
          content="Welcome to our user platform. Discover users and more."
        />
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome to Our Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard key={index} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </>
  );
});

export default Home;

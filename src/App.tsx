import React from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [data, setData] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div>
      <div>
        {data?.map((user, index) => (
          <div key={index}>{user.title}</div>
        ))}
      </div>
    </div>
  );
};

export default App;

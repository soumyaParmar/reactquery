import axios from "axios";
import { useEffect, useState } from "react";

const OldMethod = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function foo(){
        try {
            const res = await axios.get("http://localhost:4000/demoData");
            setData(res.data);
            setLoading(false);
          } catch (e) {
            console.log(e);
          }
    }
    foo()
  },[]);

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default OldMethod;

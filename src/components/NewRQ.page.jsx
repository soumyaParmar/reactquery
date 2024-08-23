import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const NewRQ = () => {
    const {data,isError,isLoading,error} = useQuery({
        queryKey:['demo'],
        queryFn : foo,
        staleTime:5000,  // it will make the query/result fresh for time being and will not do refetching until 5s
    })

    async function foo(){
        const res = await axios.get("http://localhost:4000/demoData");
        return res.data;
    }

    if(isLoading){
        return (<div>Loading...</div>)
    }

    if(isError){
        console.log(error);
        return (<div>Error...</div>)
    }

    return (
      <div>
        {data.map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
        </ul>
      ))}
      </div>
    )
  }
  
  export default NewRQ
import { useEffect, useState } from "react";
const searchone = () => {
  const { users, setUsers } = useState({});
  const { search, useSearch } = useState("");

  const URL = "";

  const showData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
  
  const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target);
      };
    
  };


  let result = [];
  
  }
    return (
    
  )
};
export default searchone;
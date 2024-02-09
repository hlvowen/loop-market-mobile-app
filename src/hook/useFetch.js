import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllAds = () => {
    setIsLoading(true);

    fetch("http://localhost:8500/api/annonces-disponibles/10")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;

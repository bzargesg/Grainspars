import {useState} from "react";

export const useFetch = async (url: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    var response = await fetch(url);
    var body = response.json();

    setData(body);
    setIsLoading(false);
    return [data, isLoading];
};

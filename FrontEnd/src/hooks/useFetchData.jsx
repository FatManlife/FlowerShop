import { useEffect, useState } from "react";
import api from "../api/api";

export const useFetchData = (url, refreshKey) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const controller = new AbortController();

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await api.get(url);
                setData(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchdata();

        return () => controller.abort();
    }, [url, refreshKey]);

    return { data, error, loading };
};

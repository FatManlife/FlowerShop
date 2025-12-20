import { useEffect, useState } from "react";
import api from "../api/api";

export const useFetchData = (url, refreshKey) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(url, {
                    signal: controller.signal,
                });
                setData(response.data);
            } catch (e) {
                if (e.name !== "CanceledError") setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url, refreshKey]);

    return { data, error, loading };
};

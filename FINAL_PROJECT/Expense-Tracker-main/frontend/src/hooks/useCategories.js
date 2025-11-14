import { useEffect, useState } from "react";
import UserService from "../services/userService";
import toast from "react-hot-toast";

function useCategories() {
    const [categories, setCategories] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await UserService.get_categories();
                const data = response.data;

                if (data.status === "SUCCESS") {
                    // Wrapped format (ApiResponseDto)
                    setCategories(data.response);
                } else if (Array.isArray(data)) {
                    // Plain array format
                    setCategories(data);
                } else {
                    toast.error("Unexpected response format from server");
                }
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.response || "Failed to fetch categories");
                } else {
                    toast.error("Failed to fetch categories: Try again later!");
                }
            } finally {
                setIsFetching(false);
            }
        };

        getCategories();
    }, []);

    return [categories, isFetching];
}

export default useCategories;

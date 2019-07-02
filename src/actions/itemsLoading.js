import { ITEMS_LOADING } from "./types";

export const itemsLoading = (data) => {
    return {
        type: ITEMS_LOADING,
        payload: data,
    };
};

import { QUOTE_API_HOST } from "../constants/config";


export const quoteApiService = {
    LIST_QUOTES: ( page ) => `${QUOTE_API_HOST}/quotes?page=${page}`,
    LIST_AUTHORS: ( page ) => `${QUOTE_API_HOST}/authors?page=${page}`,
    LIST_TAGS: `${QUOTE_API_HOST}/tags`
};
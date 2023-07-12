import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../API/Api";

function useSearchPosts(cat, searchTerm, pageNum, postsUpdate) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const LIMIT = 6;
    useEffect(() => {
        setPosts([]);
    }, [postsUpdate]);

    useEffect(() => {
        let cancel;

        setIsLoading(true);
        setError(false);
        let url = `page=${pageNum}&limit=${LIMIT}`;
        if (cat && cat != "null" && cat != "All") {
            url += `&cat=${cat}`;
        }
        if (searchTerm) {
            url += `&search=${searchTerm}`;
        }
        Api.getPostsByPage(url)
            .then((res) => {
                console.log("res---", res);
                let updatedData = res.data.map((item, index) => {
                    let div = document.createElement("div");
                    div.style.display = "none";
                    div.innerHTML = item.desc;
                    let text = div.textContent || div.innerText || "";
                    item.excerpt = text;
                    return item;
                });
                setPosts((prev) => {
                    return [...new Set([...prev, ...updatedData])];
                });
                setHasMore(res.data.length > 0);
                setIsLoading(false);
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                setError(err);
            });

        return () => () => {};
    }, [searchTerm, cat, pageNum]);

    return { isLoading, error, posts, hasMore };
}

export default useSearchPosts;

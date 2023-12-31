import { useEffect } from "react";

const useSetTitle = titleText => {
    useEffect(() => {
        document.title = `${titleText} Happy Smile`;
    }, [titleText])
};

export default useSetTitle;
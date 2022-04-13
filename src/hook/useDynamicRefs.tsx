import { useRef, createRef } from "react";

function useDynamicRefs<T>(count: number) {
    const refs = useRef(Array(count).map(() => createRef<T>()));

    return refs;
}

export default useDynamicRefs;

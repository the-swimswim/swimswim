import { useState } from "react";
import ReactVideo from "react-player";

const Scene3 = () => {
    const [num, setNum] = useState(0);

    function onEnded(key: string) {
        console.log("ended: " + key);
    }

    function onReady(key: string) {
        console.log("ready: " + key);
    }

    function onBufferEnd(key: string) {
        console.log("onBufferEnd: " + key);
        if (num < 3){
            setNum(prev => prev + 1);

        }
    }

    return (
        <div>
            <button onClick={() => setNum(prev => prev + 1)}>next</button>
            <ReactVideo
                key="abc1"
                playing={true}
                autoPlay
                muted
                width="200px"
                height="120px"
                url={num > 0 ? [{ src: "일반 영상.webm", type: "video/webm" }] : []}
                // onEnded={() => onEnded("1")}
                // onReady={() => onReady("1")}
                onBufferEnd={() => onBufferEnd("1")}
            />
            <ReactVideo
                key="abc2"
                playing={true}
                autoPlay
                muted
                width="200px"
                height="120px"
                url={num > 1 ? [{ src: "일반 영상2.webm", type: "video/webm" }] : []}
                // onEnded={() => onEnded("2")}
                // onReady={() => onReady("2")}
                onBufferEnd={() => onBufferEnd("2")}
            />
            <ReactVideo
                key="abc3"
                playing={true}
                autoPlay
                muted
                width="200px"
                height="120px"
                url={num > 2 ? [{ src: "일반 영상3.webm", type: "video/webm" }] : []}
                // onEnded={() => onEnded("3")}
                // onReady={() => onReady("3")}
                onBufferEnd={() => onBufferEnd("3")}
            />
        </div>
    )
}

export default Scene3;

//import { constants } from "buffer";
import { useState} from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRenderWithNewEmoji] = useState("⏰")

    const handleEmojiChangetoEgg = () => {
        queueRenderWithNewEmoji("🍳");
        console.log(
            "previous emoji:",
            emojiFromCurrentRender,
            "current emoji: 🍳",
        );
    };

    const handleEmojiChangetoPlate = () => {
        queueRenderWithNewEmoji("🍽️");
        console.log(
            "previous emoji:",
            emojiFromCurrentRender,
            "current emoji: 🍽️",
        );
    };

    const handleEmojiChangetoFace = () => {
        queueRenderWithNewEmoji("😋");
        console.log(
            "previous emoji:",
            emojiFromCurrentRender,
            "current emoji: 😋",
        );
    };

    const handleEmojiChangetoClock = () => {
        queueRenderWithNewEmoji("⏰");
        console.log(
            "previous emoji:",
            emojiFromCurrentRender,
            "current emoji: ⏰",
        );
    };

    return (
        <>
            <h1>Emoji Picker</h1>
            <p>Your emoji: {emojiFromCurrentRender}</p>
            <button onClick={handleEmojiChangetoClock}>⏰</button>
            <button onClick={handleEmojiChangetoEgg}>🍳</button>
            <button onClick={handleEmojiChangetoPlate}>🍽️</button>
            <button onClick={handleEmojiChangetoFace}>😋</button>
        </>
    );
}


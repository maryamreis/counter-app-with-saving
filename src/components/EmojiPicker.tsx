//import { constants } from "buffer";
import { useState} from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRenderWithNewEmoji] = useState("⏰")
    const [storedEmojisFromCurrentRender, queueRenderWithNewStoredEmojis] = useState<string[]>([]);

    const handleEmojiChangetoEgg = () => {
        queueRenderWithNewEmoji("🍳");
    };

    const handleEmojiChangetoPlate = () => {
        queueRenderWithNewEmoji("🍽️");
    };

    const handleEmojiChangetoFace = () => {
        queueRenderWithNewEmoji("😋");
    };

    const handleEmojiChangetoClock = () => {
        queueRenderWithNewEmoji("⏰");
    };

    const handleStoreCurrentEmoji = () => {
        queueRenderWithNewStoredEmojis(
            [
                ...storedEmojisFromCurrentRender,
                emojiFromCurrentRender
            ]
        );
    }

    console.log(storedEmojisFromCurrentRender)

    return (
        <>
            <h1>Emoji Picker</h1>
            <p>Stored emojis: {storedEmojisFromCurrentRender.slice(-5).map((emoji, index) => <li key={index}>{emoji}</li>)}</p>
            <p>Your emoji: {emojiFromCurrentRender}</p>
            <button onClick={handleEmojiChangetoClock}>⏰</button>
            <button onClick={handleEmojiChangetoEgg}>🍳</button>
            <button onClick={handleEmojiChangetoPlate}>🍽️</button>
            <button onClick={handleEmojiChangetoFace}>😋</button>
            <button onClick={handleStoreCurrentEmoji}>Store currrent emoji</button>
        </>
    );
}


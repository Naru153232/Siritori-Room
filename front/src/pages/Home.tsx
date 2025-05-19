import { createSignal } from "solid-js";
import "../css/Home.css";

export default function Home() {
    const [roomId, setRoomId] = createSignal("");

    return (
        <div class="container">
            <div class="column-layout">
                {/* タイトル */}
                <p class="title">しりとルーム</p>

                {/* ルーム作成ボタン */}
                <button class="create-room-btn">
                    ルームを作成
                </button>

                {/* ルーム検索フィールド */}
                <form class="search-form">
                    <div class="input-wrapper">
                        <input
                            type="text"
                            placeholder="ルームIDを入力"
                        />
                        <button type="submit" aria-label="検索">{">"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

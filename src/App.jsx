import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import InfoSection from "./components/InfoSection/InfoSection";
import CommentSection from "./components/CommentSection/CommentSection";
import QueueSection from "./components/QueueSection/QueueSection";

function App() {
    return (
        <>
            <Header />
            <main>
                <Video />
                <InfoSection />
                <CommentSection />
                <QueueSection />
            </main>
        </>
    );
}

export default App;

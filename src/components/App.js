import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit("cars");
    }

    onSearchSubmit = async (text) => {
        const response = await youtube.get("/search", {
            params: {
                q: text,
            },
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "30px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid" style={{ marginTop: "30px" }}>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

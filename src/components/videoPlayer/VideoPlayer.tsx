import "./VideoPlayer.css";

interface VideoPlayerProps {
    className?: string;
    src: string;
    width?: number;
    height?: number;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    className,
    src,
    width,
    height,
    controls,
    autoPlay,
    loop,
    muted,
}) => {
    return (
        <video
            className={className}
            src={src}
            width={width}
            height={height}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
        />
    );
};

export default VideoPlayer;
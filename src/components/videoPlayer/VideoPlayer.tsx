interface VideoPlayerProps {
    className?: string;
    src: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    style?: React.CSSProperties;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    className,
    src,
    controls,
    autoPlay,
    loop,
    muted,
    style
}) => {
    return (
        <video
            className={className}
            src={src}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            style={style}
        />
    );
};

export default VideoPlayer;
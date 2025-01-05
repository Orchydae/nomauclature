interface VideoPlayerProps {
    className?: string;
    src: string;
    controls?: boolean;
    autoPlay?: boolean;
    playsInline?: boolean;
    loop?: boolean;
    muted?: boolean;
    style?: React.CSSProperties;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    className,
    src,
    controls,
    autoPlay,
    playsInline,
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
            playsInline={playsInline}
            loop={loop}
            muted={muted}
            style={style}
        />
    );
};

export default VideoPlayer;
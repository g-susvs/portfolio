interface Props {
    className?: string;
    width?: string;
    height?: string;
    src: string
    alt: string
}

const LazyImage = (props: Props) => {
    return (
        <img {...props} loading="lazy" />
    )
}
export default LazyImage

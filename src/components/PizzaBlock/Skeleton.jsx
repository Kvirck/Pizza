import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
    className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="NaN" rx="10" ry="10" width="280" height="NaN" />
        <circle cx="133" cy="129" r="125" />
        <rect x="0" y="273" rx="10" ry="10" width="280" height="22" />
        <rect x="2" y="312" rx="0" ry="0" width="280" height="88" />
        <rect x="9" y="420" rx="10" ry="10" width="95" height="32" />
        <rect x="125" y="411" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
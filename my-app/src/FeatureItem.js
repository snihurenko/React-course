const FeatureItem = ({text, url}) => {
    return ( 
        <div className="features-slider_item">
            <div className="features-img" style={{backgroundImage: url}}></div>
            <div className="features-feature">{text}</div>
        </div>
    );
}

export default FeatureItem;
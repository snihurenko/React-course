import FeatureItem from './FeatureItem';

const Features = () => {
    return ( 
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                                    сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                                    оратору отточить.
                    </div>
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <FeatureItem text="Первое целевое преимущество" url="url(./images/1.svg)"/>
                            <FeatureItem text="Второе целевое преимущество" url="url(./images/2.svg)"/>
                            <FeatureItem text="Третье целевое преимущество" url="url(./images/3.svg)"/>
                            <FeatureItem text="Четвертое целевое преимущество" url="url(./images/4.svg)"/>                                
                        </div>
                        <button className="features-slider-arrow features-slider-prev">
                            <svg width="9" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                        <button className="features-slider-arrow features-slider-next">
                            <svg width="9"
                                    height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
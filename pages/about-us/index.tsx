import React from 'react';
import Footer from '../../components/Footer';

const AboutUs = () => {
    return (
        <div className="page__container">
            <div className="page__header">
                <div className="page__overlay">
                    <h3>About Us</h3>
                </div>
            </div>
            <div className="container page__body">
                <p>
                People come together for a reason, for a season or for a lifetime, we have therefore decided that for us, we will come together for a lifetime. We are a group of passionate and industruos producers, directors and film makers pushing and edge of what&apos;s possible on the African continental movie and entertainment industry.
                </p>
                <p>
                    We are a people who understand the needs of content distrubtion and building according t our own culture, therefore we have set out to build and maintain a dedicated platform for African content producers to live from their art and craft bby finding a place in the universe where they can feel rewarded to put out great content.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;

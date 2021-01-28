import React, { useState } from "react";
import plants from '../assets/images/plants.png';

export const Plants = () => {

    const [imgLoaded, setImgLoaded] = useState(false)

    return (
        <>
            <div className="img">
                <img onLoad={() => setImgLoaded(true)} alt="plants-img" src={plants} />
            </div>
            <div className="description">
            {imgLoaded && plantsText.map(text => <p>{text}</p>)}
            </div>
        </>

    )
};

const plantsText = [`Plant medicine is a beautiful, effective way of supporting the body to rebalance and restore from a place of imbalance, illness and depletion.
Plant medicines have a range of actions.`,
`They may work to regulate blood pressure or emotions of the heart (eg Rose or Hawthorn), others such as Thyme, Elder and Wild Indigo support immune function. Plant medicine has a wealth to offer to boost energy levels, regulate the nervous system, and restore healthy digestive function. The art and skill lies in the careful choosing and blending of the herbs.`,
`As a qualified medical herbalist I have over 13 years of experience working with herbs. I offer a great deal of care and attentiveness, listening to how your story and the physiological landscape of your body are woven together. Both head and heart work to formulate a suitable blend, usually in convenient tincture form. On occasion teas, creams and other forms of medicine are prepared.`,
`I would love to hear from you if you wish to know more or discuss a potential consultation.`
]







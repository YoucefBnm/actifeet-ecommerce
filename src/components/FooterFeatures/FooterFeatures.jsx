import { footerFeturesContent } from '../../constants'
import './FooterFeatures.scss'

const FooterFeatures = () => {
  return (
    <div className="features bg--primary d--flex d--justify-center pad--y-default pad--x-default gap--6 d--flex-wrap">
        {
            footerFeturesContent.map(feature => (
                <div 
                    className="features__card d--flex d--align-center gap--3"
                    key={feature.id}
                >
                    <div className="features__card-icon">
                        <img src={feature.icon} alt='icon' />
                    </div>

                    <div className="features__card-text d--flex d--flex-col color--light gap--1">
                        <h4 className="heading heading--xs">{feature.heading}</h4>
                        <p>{feature.text}</p>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default FooterFeatures
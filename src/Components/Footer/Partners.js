import Partner1 from '../../images/partner1.png'
import Partner2 from '../../images/partner2.png'
import Partner3 from '../../images/partner3.png'
import Partner4 from '../../images/partner4.png'
import social9 from '../../images/socials9.png'

const Partner = () => {
    return(
        <div className="partnerdiv">
            <br/><br/><br/>
            <p className="partnerHead">Our Partners</p>

            <div className="flex-container">
            <div className="flex-item-partner-image">
                    <img className="partner-image" src= {social9} alt="Partner Image"/>
                </div>
                <div className="flex-item-partner-image">
                    <img className="partner-image" src= {Partner1} alt="Partner Image"/>
                </div>
                <div className="flex-item-partner-image">
                    <img className="partner-image" src= {Partner2} alt="Partner Image"/>
                </div>
                <div className="flex-item-partner-image">
                    <img className="partner-image" src= {Partner3} alt="Partner Image"/>
                </div>
                <div className="flex-item-partner-image">
                    <img className="partner-image" src= {Partner4} alt="Partner Image"/>
                </div>
               
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default Partner;
import impact1 from '../../images/impact1.png'
import impact2 from '../../images/impact2.png'
import impact3 from '../../images/impact3.png'

const RecentImpact = () => {
    return(
        <div className="divofrecentimpacts">
            <p className="RecentImpactHead">Recent Impacts</p>

            <div className="flex-container">
                <div className="flex-item">
                    <img className="impact-image" src= {impact1} alt="Recent Impact"/>
                </div>
                <div className="flex-item">
                    <img className="impact-image" src= {impact2} alt="Recent Impact"/>
                </div>
                <div className="flex-item">
                    <img className="impact-image" src= {impact3} alt="Recent Impact"/>
                </div>
            </div>
        </div>
    )
}

export default RecentImpact;
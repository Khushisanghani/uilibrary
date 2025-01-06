import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBaseball, faBell, faCircleInfo, faCoffee, faCog, faCompactDisc, faCompass, faFaceFlushed, faHeart, faSpinner, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function FontIcon(){
    return(
        <>
            
            <h1>FontIcon</h1>
            <FontAwesomeIcon icon={faCoffee} swapOpacity/>
            <FontAwesomeIcon icon={faAddressCard} size="2xl"/>
            <FontAwesomeIcon icon={faFaceFlushed} fixedWidth/>
            <FontAwesomeIcon icon={faTwitter}  rotation={90} size="2xl"/>
            <FontAwesomeIcon icon={faTwitter}  rotation={180} size="2xl"/>
            <FontAwesomeIcon icon={faTwitter}  rotation={270} size="2xl"/><br/>
            <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" flip="horizontal"/>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" flip="vertical" />
            <FontAwesomeIcon icon={faWhatsapp} size="xl" flip="both" /><br />
            <FontAwesomeIcon icon={faHeart} beat />
            <FontAwesomeIcon icon={faCircleInfo} beatFade />
            <FontAwesomeIcon icon={faBaseball} bounce />
            <FontAwesomeIcon icon={faTriangleExclamation} fade />
            <FontAwesomeIcon icon={faCompactDisc} flip />
            <FontAwesomeIcon icon={faBell} shake />
            <FontAwesomeIcon icon={faCog} spin />
            <FontAwesomeIcon icon={faCompass} spin spinReverse />
            <FontAwesomeIcon icon={faSpinner} spinPulse /><br/>
            <FontAwesomeIcon icon={faInstagram} border />
            <FontAwesomeIcon icon={faInstagram} pull="left" />
            <FontAwesomeIcon icon={faInstagram} pull="right" />
            <FontAwesomeIcon icon={faInstagram} transform="shrink-6 left-4" />
            <FontAwesomeIcon icon={faInstagram}  transform={{ rotate: 42 }}  />
        </>
    )
}
export default FontIcon;
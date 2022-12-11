import './ContactUs.css';

function ContactUs(){
    return(
        <div className="contact">
            <div className="email">
                <h2 className="email-title">Email Us</h2>
                <p className="email__item">MEMBER SERVICES: membership@finalproject.org</p>
                <p className="email__item">ADOPTION HOTLINE: adopt@finalproject.org</p>
                <p className="email__item">MEDIA INQUIRIES: media@finalproject.org</p>
                <p className="email__item">FUNDRAISING INQUIRIES: donation@finalproject.org</p>
            </div>

            <div className="call">
                <h2 className="call-title">Call Us</h2>
                <div className="call-hours">
                    <i className="gg-time" alt="icon for time"></i>
                    <p className="call__item-hours">
                        Office Hours: Sun - Thurs, 11AM GMT - 4PM EST
                    </p>
                </div>
                <p className="call__item">
                    <i className="call-item__icon" alt="UK icon">🇬🇧</i>
                    UK: +44 203 000 0000
                </p>
                <p className="call__item">
                    <i className="call-item__icon" alt="AU icon">🇦🇺</i>
                    AU: +61 1 1110 0111
                </p>
                <p className="call__item">
                    <i className="call-item__icon" alt="US icon">🇺🇸</i>
                    US: +1 300 000 0000
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
import "./NewsLetter.css"
import bannerImg from "../../assets/images/illustration-sign-up-desktop.svg"
import { useState } from "react";
import subscribeIcon from "../../assets/images/icon-success.svg"
const NewsLetter = () => {
    const [thanksSms,setThanksSms] = useState(false);
    const [getEmail, setEGetEmail] = useState("")
    const [error,setError] = useState(false)
    const getEmailValue = (e) =>{
        e.preventDefault()

        const email = e.target.email.value;
        
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const checkPattern = pattern.test(email)
        if(!checkPattern){
            return setError(true)
        }
        setEGetEmail(email)
        setThanksSms(true)
    }
    return (
       <>
       {
        !thanksSms &&  <section className="newsContainer">
        <div className="newsInfo">
        <h1 className="newsInfo__Heading">Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="newsInfo__list">
            <li className="newsInfo__list__items">Product discovery and building what matters</li>
            <li className="newsInfo__list__items">Measuring to ensure updates are a success</li>
            <li className="newsInfo__list__items">And much more!</li>
        </ul>

    <form onSubmit={getEmailValue}>
        <div className="form__column">
        <div className="form__lable">
        <label htmlFor="email" className="newsInfo__input_label">Email address</label>
        {error && <label htmlFor="email" className="newsInfo__errorSms newsInfo__input_label">valid email required</label>}
        </div>
        <input type="email" name="email" id="" placeholder="email@company.com" className={`newsInfo__input_email ${error && "error"}`} onFocus={()=> setError(false)}/>
        </div>
            <div>
            <input type="submit" value="Subscribe to monthly newsletter" className="newsInfo__submit_btn"/>
            </div>
    </form>

        </div>
        <img src={bannerImg} alt="" className="newsInfo__banner"/>
       
    </section>
       }
        {
          thanksSms &&  <section className="subscribeSms">
            <img src={subscribeIcon} alt="" />
            <h1 className="subscribeSms__title">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>{getEmail}.</b> 
Please open it and click the button inside to confirm your subscription.</p>
        <button className="newsInfo__submit_btn" onClick={() => setThanksSms(!thanksSms)}>Dismiss message</button>
    </section>
        }
       </>
    );
};

export default NewsLetter;
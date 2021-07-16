import React, {useState, useEffect} from 'react'
import styles from './Register.module.css'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUsername from '../Steps/StepUsername/StepUsername'

const steps ={
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}

const Register = () => {
    const [step, setStep] = useState(1);

    function onClick(){
        setStep(step+1)
    }
    const Step = steps[step]
    return (
        <div>
            <Step onClick={onClick}/>
        </div>
    )
}

export default Register

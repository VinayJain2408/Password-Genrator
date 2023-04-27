import React from 'react'
import { useState } from 'react'

function Password() {
    const [length, setLength] = useState(10)
    const [choices, setChoices] = useState([])
    const [finalpasswd, setFinalPasswd] = useState('')

    const options = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        number: '0123456789',
        spchar: "!@#$%^&*()_+}:<>/|\'"
    }
    function handleChange(e) {
        if (e.target.checked) {


            setChoices([...choices, options[e.target.value]])
            console.log(choices)
        }
        else {
            setChoices(choices.filter((ch) => {
                return ch !== options[e.target.value]
            }))
        }
 
        console.log(choices)
    }

    function handleClick() {
        let finalPswd = ''
        let beforefinal = choices.join('')
        for (let i = 0; i < length; i++) {

            finalPswd += beforefinal[Math.floor(Math.random() * beforefinal.length)]
        }
        setFinalPasswd(finalPswd)

    }

    return (
        <div>
            <label><input type='number' placeholder='enter length' value='uppercase' onChange={handleChange}></input></label>
            <br />
            <input type='checkbox' value='uppercase' onChange={handleChange}></input>includes uppercase <br />

            <input type='checkbox' value='lowercase' onChange={handleChange}></input>includes lowercase<br />

            <input type='checkbox' value='number' onChange={handleChange}></input>includes number <br />

            <input type='checkbox' value='spchar' onChange={handleChange}></input>includes special character<br />
            <button onClick={handleClick}>genrate password</button>
            <h3>{finalpasswd}</h3>

        </div>
    )
}

export default Password
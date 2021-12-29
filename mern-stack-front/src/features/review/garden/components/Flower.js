import React, { useState } from "react";
import nor1 from 'features/review/garden/images/normal/1.png'
import nor2 from 'features/review/garden/images/normal/2.png'
import nor3 from 'features/review/garden/images/normal/3.png'
import red4 from 'features/review/garden/images/red/4.png'
import red5 from 'features/review/garden/images/red/5.png'
import 'features/review/style/gridStyle.scss'

export default function Flower() {
    const [step, setStep] = useState(1)
    const grow = (grade) => {
        if (grade === "1") {
            return (<img className='flower-img' src={nor1} />)
        } if (grade === "2") {
            return (<img className='flower-img' src={nor2} />)
        } if (grade === "3") {
            return (<img className='flower-img' src={nor3} />)
        } if (grade === "4") {
            return (<img className='flower-img' src={red4} />)
        } if (grade === "5") {
            return (<img className='flower-img' src={red5} />)
        } else {
            return (<></>)
        }
    }
    const juuflowers = [
        {
            "id": "1",
            "create_date": "2021-12-13 16:56:53.704187+00:00",
            "update_date": "2021-12-13 16:56:53.704187+00:00",
            "title": "작업",
            "grade": "0",
            "step": "1",
            "color": "YELLOW",
            "log_id": "[15]",
            "event_id": null,
            "user_id": "1"
        },
        {
            "id": "2",
            "create_date": "2021-12-13 16:56:53.811239+00:00",
            "update_date": "2021-12-13 16:56:53.812239+00:00",
            "title": "요가 수업",
            "grade": "5",
            "step": "15",
            "color": "YELLOW",
            "log_id": "[16]",
            "event_id": null,
            "user_id": "1"
        },
        {
            "id": "10",
            "create_date": "2021-12-15 08:56:35.526895+00:00",
            "update_date": "2021-12-15 09:11:46.843991+00:00",
            "title": "자바 공부",
            "grade": "2",
            "step": "6",
            "color": "BLUE",
            "log_id": "[18]",
            "event_id": null,
            "user_id": "1"
        }
    ]
    const test = juuflowers.map((value, index, array) => {
        return (<>
            {value.grade==0?<></>
            : <div className="flower-div" >
            <h1>{value.title} 꽃을 키워보자!</h1>
            <div>{grow(value.grade)}</div>
            <p>GRADE : {value.grade}</p>
            <p>STEP : {value.step}</p>
            {/* <button onClick={() => setStep(step + 1)}>Grow UP!</button> */}

        </div>
    }
            
        </>)

    })
    return (
        <div>
            {test}
        </div>
    )
}
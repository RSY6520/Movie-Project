import {React, useEffect, useState} from 'react'
import Covid19Table from './Covid19Table';
import './Covid19.css';

export default function Covid19ReportStatewise() {
    const [data, setData] = useState([]);

        const getData = async () => {
            const response = await fetch('https://data.covid19india.org/data.json');
            const actualData = await response.json();
            setData(actualData.statewise);
        }
    useEffect(() => {
        document.title = 'COVID-19 REPORT'
        getData();
    }, [])
    return (
        <div className='main-container'>
            <div className='header-container'>
                <p><span> INDIA </span> COVID-19 STATEWISE REPORT </p>
            </div>
            <div className='covid-container'>
                <Covid19Table StateData={data}/>
            </div>
        </div>
    )
}


import React from 'react'

export default function Covid19Table({StateData}) {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th className='state'>STATE</th>
                        <th className='confirmed'>CONFIRMED</th>
                        <th className='recovered'>RECOVERED</th>
                        <th className='deaths'>DEATHS</th>
                        <th className='active'>ACTIVE</th>
                        <th className='updated'>UPDATED</th>
                    </tr>
                </thead>
                
                <tbody>
                    { StateData.map((data, index) => { return ( 
                        <tr key={index}>
                        <td className='green'>{data.state}</td>
                        <td className='green'>{data.confirmed}</td>
                        <td className='green'>{data.recovered}</td>
                        <td className='red'>{data.deaths}</td>
                        <td className='green'>{data.active}</td>
                        <td className='green'>{data.lastupdatedtime}</td>
                        </tr>
                    )
                    })
                    }   
                </tbody>
            </table>
            
        </div>
    )
}

import React from 'react'

export default function MainContent(props) {
    console.log(props)
    return (
        <>
            <div>MainContent</div>
            {props.data.map((item) => {
                return (
                    <>
                    { console.log(item)}
                        <h2>{item.userName || 'hamza'}</h2>
                        <p>{item.userDescription || 'this is default'}</p>
                        </> 
                        )
                 
            })}
        </>
    )
}

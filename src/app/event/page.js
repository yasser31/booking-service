"use client";

import { useState, useEffect } from "react";


export default function Event() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api/event/")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    
    if (data === null) {
        return (<div><p>....Loading</p></div>)
    }
    else {
        return (
            <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.address}
          </li>
        ))}
      </ul>
        )
    }
}
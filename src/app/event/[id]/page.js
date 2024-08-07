"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function EventDetails() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        if(id) {
        fetch(`/api/event/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
        }
    }, [id])

    if (data === null) {
        return (<div><p>....Loading</p></div>)
    }

    else {
        console.log(data);
    }
}
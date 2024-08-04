"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import EventForm from "../../../../components/forms/EventForm";



const EditEvent = () => {
    
    const [initialData, setInitialData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            fetch(`/api/event/${id}`)
                .then((res) => res.json())
                .then((data) => setInitialData(data));
        }
    }, [id]);

    const handleSubmit = async (formData) => {
        const response = await fetch(`/api/event/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Event Updated", data);
        }
        else {
            console.error("Failed To Update Event");
        }
    }
    return (
        <div>
            <h1> Edit Event </h1>
            {initialData && <EventForm onSubmit={handleSubmit} initialData={initialData}></EventForm>}
        </div>
    )
}

export default EditEvent;
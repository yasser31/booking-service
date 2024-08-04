"use client";
import EventForm from "../../../components/forms/EventForm";



const CreateEvent = () =>{
    const handleSubmit = async(formData) => {
        const response = await fetch("/api/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            const data = await response.json();
            console.log("Event Created", data);
        }
        else {
            console.error("Failed To Create Event");
        }
    };

    return (
        <div>
            <h1>Create Event</h1>
            <EventForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default CreateEvent;
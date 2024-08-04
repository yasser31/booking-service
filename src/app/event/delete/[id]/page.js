"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import EventForm from "../../../../components/forms/EventForm";



const DeleteEvent = () => {

    
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            const response = fetch(`/api/event/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 204) {
                console.log("Event DELETED");
            }
            else {
                console.error(response.error);
            }
        }
    }, [id]);
}

export default DeleteEvent;
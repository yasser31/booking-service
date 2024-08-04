"use client";
import { useState } from "react";


const EventForm = ({ onSubmit, initialData = {} }) => {

    const [formData, setFormData] = useState(
        {
            name: initialData.name || "",
            address: initialData.address || ""
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value

        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
            </div>
            <div>
                <label>Address: </label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
            </div>
            <button type="submit"> Submit </button>
        </form>
    );

};

export default EventForm;
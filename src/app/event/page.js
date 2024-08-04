const Event = () => {
    const response = fetch("/api/event/")
    if (response.ok) {
        const data = response.json()
        return (
            <p>{data}</p>
        )
    }
    else {
        console.error("error");
    }
} 


export default Event;
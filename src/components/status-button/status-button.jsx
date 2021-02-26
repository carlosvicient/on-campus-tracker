import './status-button.css';

function StatusButton({ available }) {
    
    const busyOrAvailable = available === true ? "available" : "busy";

    return (
        <div className="StatusButton">
            <p>{busyOrAvailable}</p>
            <div class={`innerCircle ${busyOrAvailable}`}></div>
        </div>
    );
}

export default StatusButton;
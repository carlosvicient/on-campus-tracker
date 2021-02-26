import './status-button.css';

function StatusButton({ available }) {

    const busyOrAvailable = available === true ? "available" : "busy";

    return (
        <div className="StatusButton"> {busyOrAvailable.toLocaleUpperCase()}
            <div class={`innerCircle ${busyOrAvailable}`}></div>
            <div class={`outerCircle ${busyOrAvailable}`}></div>
        </div>
    );
}

export default StatusButton;
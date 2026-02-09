const Learnings = (props) => {
    return (
        <div className="learning">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

export default Learnings;
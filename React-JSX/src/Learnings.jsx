const Learnings = (props) => {
    return (
        <div className="learning">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Learnings;
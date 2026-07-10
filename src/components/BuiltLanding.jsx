function BuiltWith ( {stack} ) {
    const ListStack = stack.map(stack =>
        <li key={stack.icon}>
            {stack.type === "emoji" ? <i>{stack.icon}</i> : 
            <i className={stack.icon}></i>} 
            <span className="name-icon">{stack.name}</span>
        </li>
    )
    
    return (
        <section className="built-landing">
            <h2>Built With</h2>
            <div className="stack-section">
                <div className="stack-card">
                    <ul className="list-stack">
                        {ListStack}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BuiltWith
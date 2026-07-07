function Spinner ( {loading} ) {
    return (
        loading ?
        <div className="spinner"></div>
        :
        null
    )
}

export default Spinner
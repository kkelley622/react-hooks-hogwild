function HogDetails({ hog }) {
    return (
        <div>
            <div> {hog.specialty} </div>
            <div> {hog.weight} </div>
            <div> {hog.greased ? "Is Greased" : "Is Not Greased"} </div>
            <div> {hog["highest medal achieved"]} </div>
        </div>
            )
}

export default HogDetails;
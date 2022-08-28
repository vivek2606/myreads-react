const Card = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center shadow-xl hover:shadow-blue-500/50 mx-3 p-5 rounded-2xl">{children}</div>
    )
}

const CardImage = ({ image }) => {
    return (
        <div className="py-5">
            <img className="shadow-2xl"
                alt={`card-${image}`}
                src={image}
                style={{ width: 128, height: 193 }}
            />
        </div>

    )
}

const CardTitle = ({ titleText }) => {
    return (
        <div className="text-sm text-black w-96 text-center">
            {titleText}
        </div>
    )
}

const CardSelector = ({ defaultValue, onChange }) => {
    return (
        <select
            className="w-38 rounded-full bg-indigo-600 text-white text-xs cursor-pointer"
            defaultValue={defaultValue}
            onChange={onChange}>
            <option disabled>
                Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

const CardAuthors = ({ authorNames }) => {
    return (
        <div className="text-sm text-slate-600">
            {authorNames}
        </div>
    )
}

const CardComponent = ({ image, titleText, defaultValue, onChange, authorNames }) => {
    return (
        <Card>
            <CardImage image={image} />
            <CardSelector defaultValue={defaultValue} onChange={onChange} />
            <CardTitle titleText={titleText} />
            <CardAuthors authorNames={authorNames} />
        </Card>
    )
}

export { Card, CardImage, CardTitle, CardAuthors, CardSelector, CardComponent };
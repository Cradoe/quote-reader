
const TagItem = ( { tag } ) => {
    return (
        <span className="py-2 px-6 font-semibold rounded-full bg-violet-600 text-white">
            {tag.name}
        </span>
    )
}

export default TagItem;
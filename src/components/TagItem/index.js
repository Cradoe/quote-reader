import { Fade } from 'react-awesome-reveal';
const TagItem = ( { tag } ) => {
    return (
        <Fade direction="bottom">
            <span className="py-2 px-6 font-semibold rounded-full bg-violet-600 text-white">
                {tag.name}
            </span>
        </Fade>
    )
}

export default TagItem;
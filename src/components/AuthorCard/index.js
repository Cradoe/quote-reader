const AuthorCard = ( { author } ) => {
    return (
        <div className="shadow  hover:shadow-xl ease-in-out delay-100 bg-white rounded-xl p-4">
            <div className="font-sans">
                <div className="flex flex-col justify-around items-center h-full bg-slate-100 rounded-xl p-1 gap-2">

                    <div className="flex-auto text-3xl text-center font-bold text-violet-900 mb-10">
                        {author.name}
                    </div>
                    <div className="flex-auto text-sm text-center font-bold text-violet-500 mb-10">
                        {author.description}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AuthorCard;
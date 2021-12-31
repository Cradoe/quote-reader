const LoadAudioButton = ( { onClick } ) => {
    return (
        <button onClick={onClick} type="button" className="focus:animate-spin bg-white text-gray-900 dark:bg-gray-100 dark:text-gray-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-gray-900/5 shadow-md flex items-center justify-center focus:outline-none">
            <svg className="max-h-full max-w-ful" viewBox="0 0 1280.000000 1280.000000" >
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="currentColor">
                    <path d="M4620 6400 c0 -2286 3 -2861 13 -2857 6 2 939 540 2072 1194 1133
654 2243 1295 2467 1424 315 181 404 237 395 246 -7 6 -311 184 -677 396 -366
211 -1469 848 -2452 1415 -983 568 -1794 1035 -1803 1038 -13 6 -15 -288 -15
-2856z"/>
                </g>
            </svg>
        </button>

    )
}

export default LoadAudioButton
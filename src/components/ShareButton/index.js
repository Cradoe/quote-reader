import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames ( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

export default function ShareButton ( { content } ) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z" /></svg>
                </Menu.Button>
            </div >

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40">
                    <div className="py-1 md:hidden ">
                        <Menu.Item>
                            {( { active } ) => (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`whatsapp://send?text=${content}`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Whatsapp
                                </a>
                            )}
                        </Menu.Item>
                    </div>

                    <div className="py-1 hidden md:block">
                        <Menu.Item>
                            {( { active } ) => (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`https://web.whatsapp.com/send?text=${content}`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Whatsapp
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {( { active } ) => (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`sms:?&body=${content}`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    SMS
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu >
    )
}

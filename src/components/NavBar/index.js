import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'
import { navigationRoutes } from '../../utils/common'
import { logoWhite } from '../../utils/sharedAssets'


export default function NavBar () {

    return (
        <Disclosure as="nav" className="bg-indigo-800">
            {( { open } ) => (
                <>
                    <div className=" mx-auto px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex-1 flex items-center justify-center">
                                <div className="flex-shrink-0 flex items-center basis-1/4">

                                    <Link to="/">
                                        <div className="flex flex-row items-center">
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                alt="Logo"
                                                src={logoWhite}
                                            />
                                            <h2 className="relative -left-3 text-white">uoteReader</h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6 basis-1/2">
                                    <div className="flex space-x-4">
                                        {navigationRoutes.map( ( item ) => (
                                            <Link
                                                key={item.name}
                                                to={item.route}
                                                className={'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                            >
                                                {item.name}
                                            </Link>
                                        ) )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationRoutes.map( ( item ) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.route}
                                    className={'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ) )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

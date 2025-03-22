'use client'

import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import AuthButton from "@/components/exit-button"
import { SafeUser } from "../../types"

interface MenuProps{
    currentUser: SafeUser
}

const Menu: React.FC<MenuProps> = ({currentUser}) => {

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <i className="fa-solid fa-bars text-black text-[2.5rem] hover:text-red-500 cursor-pointer dark:text-DarkTextColor"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gradient-to-t from-cianinho to-rosinha border-[6px] dark:from-DarkMenuColor dark:to-DarkMenuColor px-2 p-4">
                {currentUser ? 
                    <>
                    <button>
                            <div className="flex items-center">
                                <Avatar>
                                    {/*@ts-ignore*/}
                                    <AvatarImage src={currentUser?.image} alt="Imagem de perfil" />
                                    <AvatarFallback>ᕕ(ᐛ)ᕗ</AvatarFallback>
                                </Avatar>
                                <DropdownMenuLabel className="text-[2rem] font-nickname">{currentUser?.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                            </div>
                    </button> 
                    <DropdownMenuSeparator />
                    </>
                    : <></>
                }
                    <a href="/config"><DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70] md:hidden cursor-pointer">Configurações</DropdownMenuItem></a>

                    <a href="https://instagram.com/lg_trufadasso" target="_blank"><DropdownMenuItem className="flex text-[2rem] md:hidden hover:bg-[#ffffff70]">Contato</DropdownMenuItem></a>

                    <a href="/about"><DropdownMenuItem className="flex text-[2rem] md:hidden hover:bg-[#ffffff70]">Sobre</DropdownMenuItem></a>
                    <DropdownMenuSeparator className="md:hidden"/>
                    <DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70]">
                        <AuthButton page="login" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Menu;
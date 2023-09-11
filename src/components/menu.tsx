import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function Menu() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                        <i className="fa-solid fa-bars text-black text-[2.5rem] hover:text-red-500 cursor-pointer"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gradient-aah border-[6px]">
                    <button className="flex items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <DropdownMenuLabel className="text-[2rem]">Flash reverso</DropdownMenuLabel>
                    </button>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[2rem]">Configurações</DropdownMenuItem>
                    <DropdownMenuItem className="text-[2rem]">Historico de compra</DropdownMenuItem>
                    <DropdownMenuItem className="text-[2rem]">Carrinho</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[2rem]">Fazer Login</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
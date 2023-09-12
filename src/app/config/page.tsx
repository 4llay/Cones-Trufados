"use client"

import { useTheme } from "next-themes"

export default function Config() {
    const { setTheme } = useTheme()
    return (

        <main className="w-full h-full flex justify-center pt-[50px]">
            <div className="w-[50dvw] bg-slate-100 dark:bg-DarkMenuColor p-[30px] rounded-md flex flex-col items-center">
                    <h1 className="text-[40px]">Tema</h1>
                <div className="flex justify-center gap-[50px] text-[30px]">
                    <button onClick={() => setTheme("light")} className="w-[93px]">
                        <i className="fa-solid fa-sun"></i>
                        <h1>Claro</h1>
                    </button>
                    <button onClick={() => setTheme("dark")} className="w-[93px]">
                        <i className="fa-solid fa-moon"></i>
                        <h1>Escuro</h1>
                    </button>
                    <button onClick={() => setTheme("system")} className="w-[93px]">
                        <i className="fa-solid fa-desktop"></i>
                        <h1>Sistema</h1>
                    </button>
                </div>
            </div>
        </main>
    )
}
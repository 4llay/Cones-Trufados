"use client"

import React, { useEffect } from 'react';
import { Courgette } from 'next/font/google'
import Menu from '@/components/menu'

const courgette = Courgette({
    subsets: ['latin'],
    weight: '400'
})

export function Header() {
    // useEffect(() => {
    //     let menuBtn = document.querySelector('.header__bars');
    //     let mobileNav = document.querySelector('.mobile-nav');
    //     let mobileMenu = document.querySelectorAll('.mobile-nav__menu li');
    //     let erase = ['contato', 'sobre'];
    //     let menuAberto = false;

    //     // menuBtn.addEventListener('click', () => {
    //     //     if (menuAberto) {
    //     //         mobileNav.style.display = 'none';
    //     //     } else {
    //     //         mobileNav.style.display = 'flex';
    //     //     }
    //     //     menuAberto = !menuAberto;
    //     // });

    // });
    return (
        <div className='justify-center select-none'>
            <div className={courgette.className}>
                <header className="w-full m-auto flex justify-around items-center py-[1rem]select-none">
                    <div className='flex items-center gap-[10.7px]'>
                        <img className="hidden md:flex w-[70px] pr-[-15px]" src="/logo pro.png" />
                        <h1 className='text-[1.6em] xs:text-[2em] sm:text-[3em] md:text-[2em] lg:text-[3em] xl:text-[4rem]'>Cones Trufadassos</h1>
                    </div>

                    { <nav>
                        <ul className="flex items-center gap-[1em] lg:gap-[1.7em] xl:gap-[2em]">
                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer">Sobre</a>
                            </li>

                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer" target="_blank" href="https://instagram.com/lg_trufadasso"> contato</a>
                            </li>

                            <li className="hidden md:flex border-[1px] pt-[2.5em] border-slate-500 cursor-pointer"></li>

                            <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </li>

                            <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer">
                                <i className="fa-solid fa-sun"></i>
                            </li>

                            <li>
                                <Menu />
                            </li>
                        </ul>
                    </nav>}
                </header>
                <span className="border-[1px] border-slate-500 absolute flex left-[50%] pr-[90%] translate-x-[-50%]"></span>
{/* 
            // </div> }}

            {/* <div class="mobile-nav">
                <nav>
                    <ul class="mobile-nav__menu">
                        <li><button class="profile-button"><img class="profile-button__img" src="/logo pro.png"></img><p class="profile-button__text">Olá 123456789012345</p></button></li>
                        <li class="mobile-nav__text erase">Sobre</li>
                        <li><a class="mobile-nav__text erase" href="https://instagram.com/lg.cones_trufados.2023">Contato</a></li>
                        <li class="mobile-nav__line erase"></li>
                        <li class="mobile-nav__text">Configurações</li>
                        <li class="mobile-nav__text">Historico de compra</li>
                        <li class="mobile-nav__text">Carrinho</li>
                        <li class="mobile-nav__line"></li>
                        <li class="mobile-nav__text"><a href="">Fazer Login</a></li>
                    </ul>
                </nav>
                </div> */}
        </div></div>
    )
}
"use client"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
import { products } from '../../utils/products';
import Button from './Button';

export const revalidate = 0;

const Slider = () => {

  const router = useRouter();

  return (
    <main className="w-full">
      <Swiper
        id='mySlider'
        className="mySwiper"
        loop={true}
        mousewheel={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 5000, // tempo de autoplay
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          910: { slidesPerView: 2 },
          1430: { slidesPerView: 3 },
        }}
        modules={[Mousewheel, Pagination, Autoplay]}>
        {products.map((product: any, index) => (
          <SwiperSlide key={index}>
            <section className="w-full h-[500px] flex flex-col items-center justify-center border-sky-100 border-4 gap-4 bg-gradient-to-t from-cianinho to-rosinha rounded-2xl select-none cursor-grab dark:from-DarkMenuColor dark:to-DarkMenuColor">
              <AlertDialog>
                <AlertDialogTrigger className='flex flex-col items-center justify-between gap-12'>
                  <div>
                    <Image src={product.image} width={200} height={200} alt={product.name} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[40%] border-4 border-pink-200' />
                  </div>
                  <div>
                    <p className="text-center text-3xl xs:text-3xl tracking-tighter">
                      {product.name}
                    </p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-sky-100 dark:bg-slate-800 shadow-3xl'>
                  <div className='text-center flex flex-col justify-center items-center select-none'>
                    <AlertDialogCancel className='absolute top-4 right-4 text-2xl font-sans hover:scale-[1.05] transition-transform'>X</AlertDialogCancel>
                    <Image src={product.image} width={200} height={200} alt={product.name} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[100%] border-4 border-rosinha dark:border-cianinho' />
                    <AlertDialogTitle className='text-3xl font-sans'>{product.name}</AlertDialogTitle>
                    <AlertDialogDescription className='text-xl'>{product.description}</AlertDialogDescription>
                    <AlertDialogDescription className='text-2xl text-black-300'>R$: {product.price}</AlertDialogDescription>
                    <Button label='Ver produto' onClick={() => { router.push(`/product/${product.id}`) }} />
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export default Slider;
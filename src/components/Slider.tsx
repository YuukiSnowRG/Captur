"use client"
import { SliderData } from '@/data/SliderData';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface SliderProps {
  slides: {
    image: string;
  }[];
}

function Slider({slides}:SliderProps) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  /* current = length -1 ? 0: checa se o index current esta no entire length do array -1
  ou seja se ele esta na ultima foto, entao se ele tiver, ele seta o current para 0 reiniciando
  para a primeira imagem, em codigo normal seria: 
  if (current === length - 1) {
    setCurrent(0);
  } else {
    setCurrent(current + 1);
  }
};
 */
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  /* mesma coisa nesse codigo so q ao contrario, ele checa se o seletor esta no 0 e entao seta o
  current para length -1 ou seja o valor inteiro do length -1 */
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  /* Array.isArray(slides) Checa se slides é um array, Array.isArray retorna  verdadeiro pq slides é um array */
  /* slides.length <= 0 checa se o array é menor ou igual a 0, retorna verdadeiro se esse for o caso */
  /* || operador OU */
  /* !Array.isArray(slides) || slides.length <= 0 essa operação inteira checa se 
  ou o slides não um array, ou se ele for um array vazio, se qualquer um dos 2 casos for verdadeiro
  ele retorna verdadeiro  */
  /* if (!Array.isArray(slides) || slides.length <= 0) { return null; }: If the expression is true, the code inside the if block is executed. It returns null, which can be useful in scenarios where the function should terminate early if the slides variable doesn't meet the expected criteria. */
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
            /* seta a opacidade da imagem selecionada
            current é o contador de onde a aplicação esta no array, e index é o
            identificador pessoal da imagem */
            
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
}

export default Slider
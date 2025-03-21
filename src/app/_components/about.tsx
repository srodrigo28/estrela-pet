import Image from 'next/image'
import { Check, MapPin } from 'lucide-react';
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (

      <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto">
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                        <div className='relative' data-aos="fade-up" data-aos-delay="500">
                              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                                    <Image
                                          fill
                                          priority
                                          quality={100}
                                          src={about1Img}
                                          alt='Foto do Cachorro'
                                          className='object-cover hover:scale-110 duration-300'
                                    />
                              </div>

                              <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                                    <Image
                                          fill
                                          priority
                                          quality={100}
                                          src={about2Img}
                                          alt='Foto do Cachorro 2'
                                    />
                              </div>
                        </div>

                        <div className="space-y-6 mt-10">
                              <h2 className="text-4xl font-bold">SOBRE</h2>

                              <p>
                                    Bem-vindo à <span className='font-semibold text-yellow-400'>Estrela Pet</span>, a sua melhor opção para cuidar do bem-estar e felicidade do seu pet em Aparecida de Goiânia, Goiás! 
                                    Somos apaixonados por animais e dedicados a oferecer os melhores produtos e serviços para cuidar daqueles que fazem parte da sua família.
                              </p>

                              <ul className="space-y-4">
                                    <li className='flex items-center gap-2'>
                                          <Check className="text-red-500" />
                                          Aberto desde 2006.
                                    </li>

                                    <li className='flex items-center gap-2'>
                                          <Check className="text-red-500" />
                                          Nossa Equipe possui mais de 02 veterinários.
                                    </li>

                                    <li className='flex items-center gap-2'>
                                          <Check className="text-red-500" />
                                          Qualidade é nossa prioridade.
                                    </li>
                              </ul>

                              <div className="flex gap-2">
                                    <a
                                          data-aos="fade-up"
                                          data-aos-delay="500"
                                          target="_blank"
                                          href={`https://wa.me/5562998579084?text=Olá vim me pelo site do Pet-Dev e gostaria de mais informações.`}
                                          className="w-fit bg-green-500 px-5 py-2 rounded-md font-medium gap-2 flex items-center justify-center"
                                    >    
                                          <WhatsappLogo className="w-5 h-5 text-white font-semibold" />
                                          Contato via WhatsApp
                                    </a>
                                    
                                    <a
                                          href="#"
                                          className="flex items-center justify-center w-fit px-4 py-2 rounded-md"
                                    >
                                          <MapPin className='w-5 h-5 text-black'/>
                                          Endereço da Loja
                                    </a>
                              </div>
                        </div>

                  </div>
            </div>
      </section>
  )
}
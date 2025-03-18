import Image from "next/image";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">

      <div>
            <Image
                  fill
                  priority
                  src={dogImg}
                  sizes="100vw"
                  alt="Foto do Cachorro"
                  className="object-cover opacity-60 lg:hidden"
            />

            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 md:pb-0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                        <h1
                              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                              data-aos="fade-down"
                        >
                              Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p className="text-base lg:text-lg" data-aos="fade-right">
                              Oferecemos os melhores serviços para garantir o bem-estar e a
                              felicidade do seu amigo de quatro patas.
                        </p>

                        <div>
                              <a
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    target="_blank"
                                    href={`https://wa.me/556799998800?text=Olá vim me pelo site do Pet-Dev e gostaria de mais informações.`}
                                    className="w-fit bg-green-500 px-5 py-2 rounded-md font-medium gap-2 flex items-center justify-center"
                              >    
                                    <WhatsappLogo className="w-5 h-5" />
                                    Contato via WhatsApp
                              </a>
                        </div>

                        <div className="mt-8">
                              <p className="text-sm mb-4">
                                    <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira conta.
                              </p>

                              <div className="flex mt-4">
                                    <div className="w-32 hidden lg:block">
                                          <Image
                                                src={catImg}
                                                alt="Foto do Gato"
                                                quality={100}
                                                className="object-fill"
                                          />
                                    </div>
                              </div>

                        </div>

                  </div>

                  <div className="hidden md:block h-full relative">
                        <Image
                              fill
                              priority
                              src={dogImg}
                              quality={100}
                              alt="Foto do Doguinho"
                              className="object-contain"
                              sizes="(max-width: 768px) 0vw, 50vw"
                        />
                  </div>
            </article>
      </div>
    </section>
  )
}
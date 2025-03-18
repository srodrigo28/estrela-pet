import React from "react"
import Image from "next/image";
import royal from "../../../public/royal.png";
import golden from "../../../public/golden.png";
import whiskas from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const brands = [
      { name: "Royal Canin", logo: royal },
      { name: "Golden", logo: golden },
      { name: "Primier", logo: primier },
      { name: "Formula Natural", logo: natural },
      { name: "Whiskas", logo: whiskas },
      { name: "Golden", logo: golden },
]

export default function Footer() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="container mx-auto px-4">
            
            <div className="border-b border-white/20 pb-8">
                  <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>

                  <div  className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                    <Image
                                          alt={item.name}
                                          width={100}
                                          height={50}
                                          quality={100}
                                          src={item.logo}
                                          style={{
                                                width: "auto",
                                                height: "auto",
                                          }}
                                          className="object-contain"
                                    />
                              </div>
                        ))}
                  </div>

            </div>
            
            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                  <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
                        <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação</p>
                  
                        <a
                              href=""
                              className="bg-green-500 px-4 py-2 rounded-md mt-4"
                        >
                              Contato via WhatsApp
                        </a>
                  </div>


                  <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: contato-estrela-pet@gmail.com</p>
                        <p>Cidade: Aparecida de Goiânia, Estado: Goiás - CEP: 74961-070</p>
                        <p>Telefone: (XX) 1231831238</p>
                  </div>


                  <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                              <a
                                    href="#"
                                    target="_blank"
                              >
                                    <FacebookLogo className="w-8 h-8" />
                              </a>

                              <a
                                    href="#"
                                    target="_blank"
                              >
                                    <InstagramLogo className="w-8 h-8" />
                              </a>

                              <a
                                    href="#"
                                    target="_blank"
                              >
                                    <YoutubeLogo className="w-8 h-8" />
                              </a>
                        </div>
                  </div>
            </footer>

      </div>
    </section>
  )
}
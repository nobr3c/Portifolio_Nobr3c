"use client"
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"
import BalaoMensagem from "./BalaoMensagem"
import Image from "next/image"

export default function JanelaChat() {
	const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	const [texto, setTexto] = useState("")
	const fimChatRef = useRef<HTMLDivElement>(null)

	function enviarMensagem() {
		adicionarMensagem(texto)
		setTexto("")
	}

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
			<div className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl font-bold">Olá Visitante!</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]">
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
					{mensagens.map((mensagem, i) => {
						const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
						return (
							<BalaoMensagem
								key={mensagem.id}
								mensagem={mensagem}
								omitirAutor={mesmoAutor}
							/>
						)
					})}
					{pensando && (
						<Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
					)}
					<div ref={fimChatRef}></div>
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4" />
			<div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white ">
				<input
					type="text"
					value={texto}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setTexto(e.target.value)
					}}
					onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
						if (e.key === "Enter") enviarMensagem()
					}}
				/>
				<button
					className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500"
					onClick={enviarMensagem}
				>
					<IconSend className="text-white" size={18} />
				</button>
			</div>
		</div>
	)
}

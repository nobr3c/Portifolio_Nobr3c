import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjetoProps {
	projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
	return (
		<Link href={`/projeto/${props.projeto.id}`}>
			<div
				className="
                    relative rounded-2xl overflow-hidden border border-zinc-800
                    min-w-64 min-h-64 
                "
			>
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					objectFit="cover"
				/>
			</div>
		</Link>
	)
}

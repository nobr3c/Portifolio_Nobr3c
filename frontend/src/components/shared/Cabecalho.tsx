import Image from "next/image"
import Container from "./Container"
import Link from "next/link"

export default function Cabecalho() {
    return <header className="bg-red-500 flex items-center h-16">
        <Container>
            <div>
                <Link href="/"  className="hidden sm:block">
                    <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                </Link>
            </div>
        </Container>
    </header>
}

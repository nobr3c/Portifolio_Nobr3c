export async function obterReadme(repoUrl: string) {
	const repositorio = repoUrl.split("github.com/")[1]
	const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`
	const resposta = await fetch(readmeUrl)
	return resposta.text()
}

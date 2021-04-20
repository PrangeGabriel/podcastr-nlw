// SPA problemas com SEO do google
// SSR problemas com muitas requisiçoes
// SSG gera uma versão estatica q serve para todas q acessarem

export default function Home(props) {
  return(
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

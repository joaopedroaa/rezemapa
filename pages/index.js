import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const images = [
    "01",
    "02",
    "03",
  ]

  const users = [
    {
      "name": "Ze Ricardo",
      "review": "O cuidado em identificar pontos críticos no início da atividade geral de formação de atitudes aponta para a melhoria de alternativas às soluções ortodoxas."
    },
    {
      "name": "Theo Dias",
      "review": "Caros amigos, a hegemonia do ambiente político exige a precisão e a definição das direções preferenciais no sentido do progresso. As experiências acumuladas demonstram que o julgamento é imparcial."
    },
    {
      "name": "Evaristo Peres",
      "review": "Pensando mais a longo prazo, o início da atividade geral de formação de atitudes assume importantes posições no estabelecimento do remanejamento dos quadros funcionais."
    },
  ]


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mapa oficial da Rezende Rammel no Minecraft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Rezemapa
        </h1>

        <p className={styles.description}>
          Mapa oficial da Rezende Rammel no Minecraft
        </p>

        <div className={styles.imagesMain}>
          {images.map((imageName, code) => (
            <Image
              className={styles.imageRezende}
              src={`/images/${imageName}.png`}
              alt="Imagem do Rezende"
              width={1280}
              height={720}
              key={code}
            />
          ))}
        </div>


        <div className={styles.download}>
          Baixe agora
          <a href=""></a>
          <a href="https://github.com/joaopedroaa/rezemapa/raw/master/public/Etrr.rar" className={styles.buttonDownload}>
            Baixe agora
          </a>
        </div>



        <div className={styles.feedback}>
          {users.map((user, key) => (
            <div className={styles.user} key={key}>
              <div className={styles.userImage}>
                <img
                  className={styles.imageRezende}
                  src={`/ppl/${user.name}.png`}
                  alt="Imagem do feedback"
                  width={700}
                  height={700}
                />
              </div>
              <div className={styles.userReview}>
                <span> {user.name} </span>
                <p>{user.review}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>
        </footer>


      </div>
    </div>
  )
}

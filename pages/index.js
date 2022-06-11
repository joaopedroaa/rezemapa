/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel();
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const images = ["01", "02", "03", "04", "05", "06", "07"];

  const users = [
    {
      name: "Ze Ricardo",
      review:
        "O cuidado em identificar pontos críticos no início da atividade geral de formação de atitudes aponta para a melhoria de alternativas às soluções ortodoxas.",
    },
    {
      name: "Theo Dias",
      review:
        "Caros amigos, a hegemonia do ambiente político exige a precisão e a definição das direções preferenciais no sentido do progresso. As experiências acumuladas demonstram que o julgamento é imparcial.",
    },
    {
      name: "Evaristo Peres",
      review:
        "Pensando mais a longo prazo, o início da atividade geral de formação de atitudes assume importantes posições no estabelecimento do remanejamento dos quadros funcionais.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Minecraft Mapa - Rezende Rammel</title>
        <meta
          name="description"
          content="Mapa oficial da Rezende Rammel no Minecraft"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>Rezemapa</h1>

        <p className={styles.description}>
          Mapa oficial da Rezende Rammel no Minecraft
        </p>

        <div className={styles.imagesMain} ref={emblaRef}>
          <div className={styles.embla__container}>
            {images.map((imageName, code) => (
              <img
                className={styles.embla__slide}
                src={`/images/${imageName}.png`}
                alt="Imagem do Rezende"
                key={code}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.download} ${styles.download2}`}>
          <h3>Por que baixar esse mapa agora mesmo?</h3>
          <p>
            Com o nosso mapa a prática cotidiana prova que a consulta aos
            diversos militantes faz parte de um processo de gerenciamento dos
            conhecimentos estratégicos para atingir a excelência. Neste sentido,
            a competitividade nas transações comerciais desafia a capacidade de
            equalização dos relacionamentos verticais entre as hierarquias.
          </p>

          <p>
            Todas estas questões, devidamente ponderadas, levantam dúvidas sobre
            se a hegemonia do ambiente político exige a precisão e a definição
            do remanejamento dos quadros funcionais. No mundo atual, a estrutura
            atual da organização causa impacto indireto na reavaliação das
            condições financeiras e administrativas exigidas.
          </p>
        </div>

        <div className={`${styles.download} `}>
          <h3>Com o este mapa, você será capaz de:</h3>
          <ul>
            <li>
              A nível organizacional, o desenvolvimento contínuo de distintas
              formas de atuação talvez venha a ressaltar a relatividade das
              condições inegavelmente apropriadas.
            </li>

            <li>
              É importante questionar o quanto o fenômeno da Internet pode nos
              levar a considerar a reestruturação de alternativas às soluções
              ortodoxas.
            </li>
            <li>
              Podemos já vislumbrar o modo pelo qual o comprometimento entre as
              equipes maximiza as possibilidades por conta dos modos de operação
              convencionais.
            </li>
          </ul>
        </div>

        <div className={`${styles.download} ${styles.download2}`}>
          <h3>Não se preocupe, você está totalmente seguro.</h3>
          <p>
            Todas estas questões, devidamente ponderadas, levantam dúvidas sobre
            se a execução dos pontos do programa oferece uma interessante
            oportunidade para verificação das posturas dos órgãos dirigentes com
            relação às suas atribuições.
          </p>
          <p>
            Assim mesmo, a consulta aos diversos militantes deve passar por
            modificações independentemente dos níveis de motivação
            departamental. A nível organizacional, a contínua expansão de nossa
            atividade é uma das consequências do sistema de participação geral.
          </p>
          <p>
            A certificação de metodologias que nos auxiliam a lidar com a
            determinação clara de objetivos obstaculiza a apreciação da
            importância do levantamento das variáveis envolvidas.
          </p>
        </div>

        <div className={styles.download}>
          <h3>NÃO PERCA ESTA OPORTUNIDADE E BAIXE AGORA 100% GRATUITO</h3>
          <a
            href="https://github.com/joaopedroaa/rezemapa/raw/master/public/Etrr.rar"
            className={styles.buttonDownload}
          >
            SIM! EU QUERO BAIXAR AGORA!
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

        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}

import actorofvalor from "../../../covers/agsobanuye/actofvalor.jpg"
import HunterKiller from "../../../covers/agsobanuye/hunterKiller.jpg"
import Passionofchrist from "../../../covers/agsobanuye/passionofchrist.jpg"
import Snitch from "../../../covers/agsobanuye/snitch.jpg"

const FilmsData = [
  {
    Code: 1,
    Categorie: "agasobanuye",
    Type: "Film",
    Volume: "600MB",
    Tittle: "Act Of Valor",
    Cover: `${actorofvalor}`,
    trailerUrl: "",
    description: `
    Des militaires doivent entamer une mission pour venir à la rescousse d'un agent de la CIA, pendant laquelle ils découvrent un complot terroriste à l'échelle mondiale contre les États-Unis. Ils font tout pour déjouer cette tentative sans risquer trop de pertes.
    `,
    price: "200FBU",
  },
  {
    Code: 2,
    Categorie: "agasobanuye",
    Type: "Film",
    Volume: "600MB",
    Tittle: "Hunter Killer",
    Cover: `${HunterKiller}`,
    trailerUrl: "",
    description:
      "Dans les profondeurs de l'océan Arctique, alors que le commandant sous-marinier Joe Glass tente de retrouver un sous-marin américain en détresse, il découvre que des terroristes russes préparent un coup d'État menaçant de bouleverser l'ordre du monde. Glass doit désormais réunir une troupe de Navy Seals afin de sauver le président russe retenu en otage et éviter la Troisième Guerre mondiale.",
    price: "200FBU",
  },
  {
    Code: 3,
    Categorie: "agasobanuye",
    Type: "Film",
    Volume: "600MB",
    Tittle: "Passion Of Christ",
    Cover: `${Passionofchrist}`,
    trailerUrl: "",
    description:
      "Les 12 dernières heures de la vie du Christ. Rendu au Mont des Oliviers, Jésus prie après avoir partagé un dernier repas avec ses apôtres. Il résiste maintenant aux tentations de Satan. Trahi par Judas, Jésus est arrêté et emmené à Jérusalem, où les chefs des Pharisiens l'accusent de blasphème et lui font un procès qui a pour issue sa condamnation à mort.",
    price: "200FBU",
  },
  {
    Code: 4,
    Categorie: "agasobanuye",
    Type: "Film",
    Volume: "600MB",
    Tittle: "Snitch",
    Cover: `${Snitch}`,
    trailerUrl: "",
    description:
      "John Matthews, un homme d'affaires, est dévasté lorsque son fils Jason, 18 ans, est condamné à 10 ans de prison : il a été arrêté en possession d'un paquet de drogue envoyé par un de ses amis, mais il ignorait tout de son contenu. John propose alors un marché au procureur : il va infiltrer le plus redoutable des cartels de la drogue afin d'en faire tomber les têtes en échange d'une réduction de peine.",
    price: "200FBU",
  },
]

export default FilmsData

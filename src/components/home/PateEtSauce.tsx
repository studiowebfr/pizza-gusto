import MediaFrame from "@/components/MediaFrame";

export default function PateEtSauce() {
  return (
    <section className="flex flex-col">
      <div className="grid md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center gap-4 bg-noir-fumee px-6 py-20 md:order-1 md:px-14 md:py-28">
          <p className="eyebrow">La Pâte</p>
          <h2 className="font-script text-[clamp(2.25rem,5vw,3.75rem)] text-or-clair">
            la pâte
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-gris-perle">
            Pétrie selon les techniques boulangères des écoles italiennes, avec les
            meilleures farines d&apos;Italie — la base de chaque pizza de la maison.
          </p>
        </div>
        <MediaFrame
          legende="La pâte « Gusto » travaillée à la main."
          variante="braise"
          className="order-1 aspect-[4/3] w-full md:order-2 md:aspect-auto"
          video={{
            mp4: "/media/video/pate.mp4",
            webm: "/media/video/pate.webm",
            poster: "/media/video/pate-poster.jpg",
          }}
        />
      </div>

      <div className="grid md:grid-cols-2">
        <MediaFrame
          legende="La sauce « Gusto » travaillée dans sa cuve."
          variante="braise"
          className="aspect-[4/3] w-full md:aspect-auto"
          video={{
            mp4: "/media/video/sauce.mp4",
            webm: "/media/video/sauce.webm",
            poster: "/media/video/sauce-poster.jpg",
          }}
        />
        <div className="flex flex-col justify-center gap-4 bg-noir-fumee px-6 py-20 md:px-14 md:py-28">
          <p className="eyebrow">La Sauce</p>
          <h2 className="font-script text-[clamp(2.25rem,5vw,3.75rem)] text-or-clair">
            la sauce Gusto
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-gris-perle">
            Une recette maison qui revient dans presque chaque pizza de la carte —
            la signature technique de Pizza Gusto.
          </p>
        </div>
      </div>
    </section>
  );
}

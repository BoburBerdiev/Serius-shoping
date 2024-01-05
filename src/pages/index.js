import { IndexBanner, IndexCard, SectionTitle} from "@/components";


export default function Home() {
  return (
      <main

      >
        <section >
          <div
              className={'w-full grid md:grid-cols-2  grid-cols-1 md:gap-4 gap-0'}
          >
            <div
                className={' h-[500px] max-h-[720px] md:h-[37vw]  col-span-1 md:col-span-2 '}>
              <IndexBanner button={'true'} carHeader={false}/>

            </div>
            <div
                className={'col-span-1  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner  button={'true'} carHeader={false}/>

            </div>
            <div
                className={'col-span-1  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner button={'true'} carHeader={false}/>

            </div>
            <div
                className={' col-span-1 md:col-span-2  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner/>

            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container section-item-space'}>
            <SectionTitle title={'Explore Li Auto Technologies'} subBigTitle={'Let\'s explore Li Auto\'s REEV, Magic Carpet Air Suspension™, Smart Cabin, and Pilot Assistance features.'} />
            <div className={'grid md:grid-cols-2  grid-cols-1  md:gap-4 gap-2'}>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'items-start'}/>
              </div>
            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container section-item-space'}>
            <SectionTitle title={'Learn About Li Auto'} subBigTitle={
              "  We are dedicated to \"Create a Mobile Home, Create Happiness\". "
            } />

            <div className={'grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2'}>
              <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                <IndexCard contentPositionEnd={'items-end'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                <IndexCard contentPositionEnd={'items-end'}/>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

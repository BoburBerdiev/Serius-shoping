import { ButtonUI, ImageUI, SectionTitleUI, SectionUI } from "@/components"

const index = () => {
  return (
    <SectionUI customPadding={'pt-[140px] md:pt-40 font-rubik pb-10 md:pb-20'}>
      <div className="flex flex-col items-center gap-5 md:gap-[30px]">
        <div className="w-full h-[200px] md:w-[300px] lg:w-[447px] lg:h-[267px] relative">
          <ImageUI src={'/404.png'} imgStyle={'object-contain'}/>
        </div>
        <div className="flex flex-col items-center">
          <SectionTitleUI title={'Страница не найдена'} ismargin={true} isBorder={true}/>
          <p className="mt-2.5 text-center">Кажется что-то пошло не так... Неправильно набран адрес или такой страницы не существует</p>
        </div>
        <div className="grid w-full sm:grid-cols-2 gap-4 lg:gap-[30px] sm:max-w-[500px]">
          <ButtonUI className={'py-3 md:py-4 text-center flex justify-center'} text={'Вернуться назад'}/>
          <ButtonUI cardBtn={true} className={'py-3 md:py-4'} text={'Перейти на главную'}/>
        </div>
      </div>
    </SectionUI>

  )
}

export default index
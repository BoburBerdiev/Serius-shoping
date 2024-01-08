import {ServiceCardUI} from "../"
const serviceData = [
  {
    title: 'Лучшие цены',
    subTitle: 'Мы предлагаем лучшее соотношение цены и качества',
    img: '/mobile-images/services/service (4).png'
  },
  {
    title: 'Бонусы и скидки',
    subTitle: 'Выгода в каждой покупке. Накапливайте бонус и покупайте со скидкой',
    img: '/mobile-images/services/service (3).png'
  },
  {
    title: 'Быстрая доставка',
    subTitle: 'Время ожидания заказа 1-4 рабочих дней. При заказе свыше ... бесплатная доставка по ...!',
    img: '/mobile-images/services/service (2).png'
  },
  {
    title: 'Поддержка 24/7',
    subTitle: 'Вы можете связаться с нами 24 часа в сутки, 7 дней в неделю.',
    img: '/mobile-images/services/service (1).png'
  },
]

const ServiceSectionUI = () => {
  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-5">
      {
        serviceData.map(item => (
          <ServiceCardUI title={item.title} subTitle={item.subTitle} icon={item.img}/>
        ))
      }
    </div>
  )
}

export default ServiceSectionUI
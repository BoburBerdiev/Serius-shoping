import {ServiceCardUI} from "../"
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {Fragment} from "react";

const ServiceSectionUI = ({service}) => {


  return (


    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {
        service &&
        service.map(item => (
            <Fragment key={item?.id}>
              <ServiceCardUI icon={item?.image} title_uz={item?.title_uz} title_ru={item?.title_ru} subTitle_ru={item?.sub_title_ru} subTitle_uz={item?.sub_title_uz}/>
            </Fragment>
        ))
      }
    </div>
  )
}

export default ServiceSectionUI

const InputUI = ({className, type, placeholder , formname}) => {
  return (
    <div className={className}>
      <input {...formname} className="py-3 px-4 md:py-4 md:px-5 rounded-lg w-full font-rubik text-currentGrey border border-zborderGrey outline-none bg-white" type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputUI
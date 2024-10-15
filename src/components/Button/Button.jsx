const Button = ({btnText="No Name", isActive, showModal,}) => {
  return (
    <div className={isActive ? 'activeBtn' : 'disableBtn'} onClick={showModal}>{btnText}</div>
  )
}
export default Button

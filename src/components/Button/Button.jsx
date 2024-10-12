const Button = ({btnText="No Name", isActive}) => {
  return (
    <div className={isActive ? 'activeBtn' : 'disableBtn'}>{btnText}</div>
  )
}
export default Button

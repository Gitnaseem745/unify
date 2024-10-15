const Button = ({btnText="No Name", isActive=false, showModal, handleRemove, isRemoveActive}) => {
  return (
    <div className={`${isRemoveActive ? 'bg-[var(--accent)]' : ""} ${isActive ? 'activeBtn' : 'disableBtn'}`} onClick={() => isActive ? showModal() : handleRemove()}>{btnText}</div>
  )
}
export default Button

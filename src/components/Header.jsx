import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className="bg-gris py-10 flex flex-col items-center">
      <div>
        <img src={logo} className="w-full h-full"/>
      </div>
    </header>
  )
}

export default Header
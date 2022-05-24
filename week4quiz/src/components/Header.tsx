type HeaderProps = {
    title: string;
  }

const Header = ({title}: HeaderProps) => {
    //console.log(props);
    return (
      <header>
        <h1>{title}</h1><hr></hr>
      </header>
    );
  };

  export default Header;
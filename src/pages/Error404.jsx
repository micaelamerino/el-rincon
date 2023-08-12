import image from "../assets/helloerror.gif";
const Error404 = () => {
  return (
    <div className="mt-5 w- flex flex-col items-center text-center">
      <h3>¿Qué pasó?</h3>
      <p>La página solicitada no existe</p>
      <div className="w-72">
        <img
          src={image}
          alt="Imágen animada de un osito indicando que ésta página no existe"
        />
      </div>
    </div>
  );
};

export default Error404;

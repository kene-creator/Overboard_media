const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-700 to-pink-600 hover:from-indigo-800 hover:to-pink-700 text-white font-normal py-2 px-4 rounded-full font-mono"
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;

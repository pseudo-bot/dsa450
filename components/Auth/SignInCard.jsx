
const SignInButton = ({signInWith, onClick, signInImg}) => {
	return (
		<div className={`dark:text-white m-4 p-4 border flex relative justify-between items-center cursor-pointer rounded dark:bg-gray-600 text-gray-800`}
		onClick={onClick}
		>
			<img src={signInImg} alt={signInWith} className={`block h-6 mx-4`}/>
			<div className="mx-4 tracking-wide font-medium relative before:absolute before:h-full before:w-0.5 before:-left-4 before:bg-gray-600 dark:before:bg-white">Sign in with {signInWith}</div>
		</div>
	);
}

const Footer = () => {
	return (
		<div className={`rounded m-4 p-4 text-[12px] text-gray-600 dark:text-gray-300`}>
			By signing in, you accept our <span className="dark:text-blue-400 text-blue-700 cursor-pointer">Terms of Services</span> & <span className="dark:text-blue-400 text-blue-700 cursor-pointer">Privacy Policy</span>
		</div>
	);
}

const SignInCard = ({ signInWithGoogle }) => {
	return (
		<div className={`max-w-[40rem] min-w-[20rem] mx-auto w-1/2 absolute top-1/3 right-1/2 translate-x-1/2 flex flex-col justify-around items-center`}>
			<SignInButton signInWith={"Google"} onClick={signInWithGoogle} signInImg={"/images/google.png"}></SignInButton>
			{/* <SignInButton signInWith={"GitHub"} onClick={""} signInImg={"/images/github.png"}></SignInButton>
			<SignInButton signInWith={"Twitter"} onClick={""} signInImg={"/images/twitter.png"}></SignInButton> */}
			<Footer/>
		</div>
	);
};

export default SignInCard;
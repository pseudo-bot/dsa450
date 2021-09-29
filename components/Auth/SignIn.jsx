const SignInCard = () => {
	return (
		<div
			className={`mx-auto h-[20rem] max-w-sm rounded-2xl shadow-lg flex flex-col p-6 
      items-center justify-center relative bg-gray-200
      after:absolute after:w-full after:h-[150%] after:rotate-[15deg] after:bg-green-400 after:-left-1/2 
      tracking-wider overflow-hidden`}
		>
			<div className="text-4xl my-5 text-green-900 uppercase text-center poppins z-10">Login</div>
			<div className="h-10 shadow-lg my-5 w-4/5 bg-white rounded-full flex items-center justify-center relative cursor-pointer poppins tracking-wider z-10 text-sm sm:text-base text-gray-700">
				<img
					src="/images/google.png"
					alt="Sign in with google"
					className={`block h-3/5 mx-2`}
				/>
				<span className="mx-2">Sign in with google</span>
			</div>
		</div>
	);
};
export default function SignIn() {
	return (
		<div className={`w-full px-10 top-44 relative`}>
			<SignInCard />
		</div>
	);
}

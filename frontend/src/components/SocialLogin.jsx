export default function SocialLogin() {
    return (
        <>
            <button
                type="button"
                className="
          w-full h-12
          flex items-center justify-center gap-2
          border border-black-300
          rounded-xl
          text-sm font-semibold
          hover:bg-gray-50
          transition-colors
        "
            >
                Sign in with Google
            </button>

            <p className="mt-6 text-center text-sm text-black-600">
                Don&apos;t have an account?{' '}
                <span className="text-primary font-semibold cursor-pointer">
                    Sign Up
                </span>
            </p>
        </>
    )
}

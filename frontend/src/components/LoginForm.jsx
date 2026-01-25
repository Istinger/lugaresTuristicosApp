export default function LoginForm() {
    return (
        <>
            <form className="space-y-4">
                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="e.g. tourist@example.com"
                        className="
              w-full h-12
              rounded-xl
              border border-black-300
              px-4
              text-sm
              placeholder:text-black-400
              focus:outline-none
              focus:ring-2
              focus:ring-primary
            "
                    />
                </div>

                {/* Password */}
                <div>
                    <div className="flex justify-between mb-1">
                        <label className="text-sm font-semibold">
                            Password
                        </label>
                        <button
                            type="button"
                            className="text-primary text-sm font-semibold"
                        >
                            Forgot?
                        </button>
                    </div>

                    <input
                        type="password"
                        placeholder="••••••••"
                        className="
              w-full h-12
              rounded-xl
              border border-black-300
              px-4
              text-sm
              placeholder:text-black-400
              focus:outline-none
              focus:ring-2
              focus:ring-primary
            "
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="
            w-full h-12
            bg-primary
            text-black
            font-semibold
            rounded-xl
            shadow-md
            hover:bg-primary/90
            transition-colors
          "
                >
                    Log In
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="px-3 text-xs text-black-400">
                    or continue with
                </span>
                <div className="flex-1 h-px bg-black-200" />
            </div>
        </>
    )
}

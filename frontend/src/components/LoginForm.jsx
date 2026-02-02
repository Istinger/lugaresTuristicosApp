import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function LoginForm() {
    const { login, loading } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="e.g. tourist@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                    disabled={loading}
                    className="
            w-full h-12
            bg-primary
            text-black
            font-semibold
            rounded-xl
            shadow-md
            hover:bg-primary/90
            transition-colors
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
                >
                    {loading ? 'Logging in...' : 'Log In'}
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

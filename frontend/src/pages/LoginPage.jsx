import { useState } from "react";
import { Compass, Eye, EyeOff, ArrowRight, Sparkles, Globe, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">

              {/* LOGIN FORM SECTION */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>

                {/* Logo Section */}
                <div className="mb-8 flex items-center gap-3 relative z-10">
                  <div className="relative">
                    <Compass className="size-10 text-cyan-400 animate-spin-slow" />
                    <div className="absolute inset-0 size-10 bg-cyan-400/20 rounded-full blur animate-pulse"></div>
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

                      Vārtālāpa
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <Sparkles className="size-3 text-yellow-400 animate-pulse" />
                      <span className="text-xs text-slate-400 font-medium">Welcome Back</span>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm animate-shake">
                    <p className="text-red-300 text-sm font-medium">{error.response.data.message}</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Sign in to your account to continue your language journey
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Email Field */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="hello@example.com"
                          className={`w-full px-4 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm ${focusedField === 'email'
                              ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 bg-slate-700/70'
                              : 'border-slate-600 hover:border-slate-500'
                            }`}
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className={`w-full px-4 py-4 pr-12 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm ${focusedField === 'password'
                              ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 bg-slate-700/70'
                              : 'border-slate-600 hover:border-slate-500'
                            }`}
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                        </button>
                        {focusedField === 'password' && (
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      onClick={handleLogin}
                      disabled={isPending}
                      className="btn w-full relative group overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        {isPending ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Signing in...
                          </>
                        ) : (
                          <>
                            Sign In
                            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center pt-4">
                      <p className="text-slate-400">
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 hover:underline"
                        >
                          Create one
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VISUAL SECTION */}
              <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-slate-800/60 via-purple-800/20 to-slate-800/60 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

                <div className="relative p-12 flex flex-col items-center justify-center text-center space-y-8">
                  {/* Advanced Animated Illustration */}
                  <div className="relative">
                    <div className="w-80 h-80 relative">
                      {/* Central Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse-slow shadow-2xl">
                        <MessageCircle className="size-10 text-white animate-bounce-subtle" />
                      </div>

                      {/* Orbiting Icons */}
                      {[
                        { icon: Globe, delay: '0s', color: 'from-blue-400 to-cyan-400' },
                        { icon: Users, delay: '2s', color: 'from-purple-400 to-pink-400' },
                        { icon: Sparkles, delay: '4s', color: 'from-green-400 to-blue-400' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 animate-orbit"
                          style={{
                            animationDelay: item.delay,
                            transformOrigin: '50% 120px'
                          }}
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm animate-float-gentle`}>
                            <item.icon className="size-6 text-white" />
                          </div>
                        </div>
                      ))}

                      {/* Connection Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute border border-cyan-400/30 rounded-full animate-ping"
                            style={{
                              width: `${(i + 1) * 60}px`,
                              height: `${(i + 1) * 60}px`,
                              animationDelay: `${i * 0.8}s`,
                              animationDuration: '3s'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 max-w-md">
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      Connect with language partners worldwide
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Practice conversations, make friends, and improve your language skills together
                    </p>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[
                        { icon: MessageCircle, text: 'Real-time Chat' },
                        { icon: Globe, text: 'Global Network' },
                        { icon: Users, text: 'Language Partners' },
                        { icon: Sparkles, text: 'Smart Matching' }
                      ].map((feature, index) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/50 animate-fade-in-up hover:bg-slate-700/50 transition-all duration-300"
                          style={{ animationDelay: `${index * 0.15}s` }}
                        >
                          <feature.icon className="size-4 text-cyan-400" />
                          <span className="text-sm text-slate-200 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-20px) translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-orbit { animation: orbit 15s linear infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        
        .bg-grid-pattern {
          background-image: url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M0 20h40M20 0v40"/%3E%3C/g%3E%3C/svg%3E');
        }
        
        .bg-circuit-pattern {
          background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0"/%3E%3Cpath d="M30 10v20M10 30h20M50 30h-20M30 50v-20"/%3E%3C/g%3E%3C/svg%3E');
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
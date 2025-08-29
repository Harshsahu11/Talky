import { useState } from "react";
import { Compass, Eye, EyeOff, Sparkles, MessageCircle, Video, Users, Shield, Check, Star, ArrowRight, Globe, Zap, Heart } from "lucide-react";
import { Link } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: signupMutation, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const handleSignup = (e) => {
    e && e.preventDefault();
    if (agreedToTerms) {
      signupMutation(signupData);
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(signupData.password);
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

        {/* Animated Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="size-1 text-white/30 fill-current" />
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* SIGNUP FORM SECTION */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

                {/* Logo Section */}
                <div className="mb-8 flex items-center gap-3 relative z-10">
                  <div className="relative">
                    <Compass className="size-12 text-cyan-400 animate-spin-slow" />
                    <div className="absolute inset-0 size-12 bg-cyan-400/20 rounded-full blur animate-pulse"></div>
                  </div>
                  <div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Talky
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <Sparkles className="size-3 text-yellow-400 animate-pulse" />
                      <span className="text-xs text-slate-400 font-medium">Join the Revolution</span>
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
                    <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Join thousands of users experiencing the future of real-time communication
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Full Name Field */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Harsh Sahu"
                          className={`w-full px-4 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm ${
                            focusedField === 'fullName'
                              ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 bg-slate-700/70'
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          value={signupData.fullName}
                          onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        {focusedField === 'fullName' && (
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Harsh@gmail.com"
                          className={`w-full px-4 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm ${
                            focusedField === 'email'
                              ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 bg-slate-700/70'
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          value={signupData.email}
                          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
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
                          placeholder="Create a strong password"
                          className={`w-full px-4 py-4 pr-12 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm ${
                            focusedField === 'password'
                              ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 bg-slate-700/70'
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          value={signupData.password}
                          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
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

                      {/* Password Strength Indicator */}
                      {signupData.password && (
                        <div className="mt-3 space-y-2">
                          <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                  i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-slate-600'
                                }`}
                              ></div>
                            ))}
                          </div>
                          <p className="text-xs text-slate-400">
                            Password strength: {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : 'Too short'}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="relative">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-1">
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="sr-only"
                            required
                          />
                          <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                            agreedToTerms
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 border-transparent'
                              : 'border-slate-500 bg-slate-700/50'
                          }`}>
                            {agreedToTerms && <Check className="size-3 text-white" />}
                          </div>
                        </div>
                        <span className="text-sm text-slate-400 leading-relaxed">
                          I agree to the{" "}
                          <span className="text-cyan-400 hover:text-cyan-300 transition-colors">terms of service</span> and{" "}
                          <span className="text-cyan-400 hover:text-cyan-300 transition-colors">privacy policy</span>
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit" 
                      onClick={handleSignup}
                      disabled={isPending || !agreedToTerms}
                      className="w-full relative group overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        {isPending ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            <Shield className="size-5" />
                            Create Account
                            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>

                    {/* Sign In Link */}
                    <div className="text-center pt-4">
                      <p className="text-slate-400">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 hover:underline"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VISUAL SECTION */}
              <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-slate-800/60 via-purple-800/20 to-slate-800/60 relative overflow-hidden">
                {/* Dynamic Background Pattern */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

                <div className="relative p-12 flex flex-col items-center justify-center text-center space-y-8">
                  {/* Advanced Animated Illustration */}
                  <div className="relative">
                    <div className="w-80 h-80 relative">
                      {/* Central Communication Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse-slow shadow-2xl">
                        <MessageCircle className="size-12 text-white animate-bounce-subtle" />
                      </div>

                      {/* Orbiting Feature Icons */}
                      {[
                        { icon: Video, delay: '0s', color: 'from-blue-400 to-cyan-400', distance: '140px' },
                        { icon: Users, delay: '2s', color: 'from-purple-400 to-pink-400', distance: '140px' },
                        { icon: Shield, delay: '4s', color: 'from-green-400 to-blue-400', distance: '140px' },
                        { icon: Sparkles, delay: '6s', color: 'from-yellow-400 to-orange-400', distance: '140px' }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 animate-orbit-reverse"
                          style={{
                            animationDelay: item.delay,
                            transformOrigin: `50% ${item.distance}`
                          }}
                        >
                          <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm animate-float-gentle`}>
                            <item.icon className="size-8 text-white" />
                          </div>
                        </div>
                      ))}

                      {/* Pulsing Connection Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute border border-cyan-400/30 rounded-full animate-ping"
                            style={{
                              width: `${(i + 1) * 80}px`,
                              height: `${(i + 1) * 80}px`,
                              animationDelay: `${i * 0.7}s`,
                              animationDuration: '3s'
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Floating Data Particles */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-random"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6 max-w-md">
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      Connect. Communicate. Collaborate.
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Join our revolutionary platform that brings people together through HD video calls, instant messaging, and seamless real-time communication
                    </p>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[
                        { icon: Video, text: 'HD Video' },
                        { icon: MessageCircle, text: 'Real-time Chat' },
                        { icon: Users, text: 'Global Network' },
                        { icon: Shield, text: 'Secure & Private' }
                      ].map((feature, index) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/50 animate-fade-in-up hover:bg-slate-700/50 transition-all duration-300"
                          style={{ animationDelay: `${index * 0.15}s` }}
                        >
                          <feature.icon className="size-5 text-cyan-400" />
                          <span className="text-sm text-slate-200 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 pt-6">
                      {[
                        { number: '10K+', label: 'Active Users' },
                        { number: '50+', label: 'Countries' },
                        { number: '99.9%', label: 'Uptime' }
                      ].map((stat, index) => (
                        <div
                          key={stat.label}
                          className="text-center animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                        >
                          <div className="text-2xl font-bold text-white">{stat.number}</div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
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

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(10px, -10px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(-5px, -20px) scale(0.9); opacity: 1; }
          75% { transform: translate(-15px, -5px) scale(1.05); opacity: 0.6; }
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
        
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-orbit-reverse { animation: orbit-reverse 12s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-random { animation: float-random 4s ease-in-out infinite; }
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

export default SignUpPage;
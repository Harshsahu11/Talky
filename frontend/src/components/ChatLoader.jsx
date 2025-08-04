import { LoaderIcon, MessageCircleIcon, WifiIcon, SignalIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center justify-center backdrop-blur-md bg-base-100/30 rounded-3xl p-8 border border-base-300/50 shadow-2xl max-w-md w-full">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-20 h-20 border-2 border-secondary/30 rounded-full animate-pulse border-r-secondary"></div>
          
          {/* Inner icon container */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-bounce">
              <MessageCircleIcon className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text with Typewriter Effect */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Connecting to Chat
          </h2>
          <div className="flex items-center justify-center gap-2 text-base-content/70">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce animation-delay-150"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-300"></div>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-3 text-sm text-base-content/60 mb-4">
          <WifiIcon className="w-4 h-4 animate-pulse text-primary" />
          <span className="font-mono">Establishing secure connection...</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-base-300/50 rounded-full h-2 mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-loading-bar"></div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2 text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-success rounded-full absolute"></div>
            <span>Secure</span>
          </div>
          
          <div className="flex items-center gap-2 text-warning">
            <SignalIcon className="w-3 h-3 animate-pulse" />
            <span>Connecting</span>
          </div>
          
          <div className="flex items-center gap-2 text-info">
            <LoaderIcon className="w-3 h-3 animate-spin" />
            <span>Loading</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-accent/20 rounded-full animate-float animation-delay-2000"></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 100%; transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-loading-bar { animation: loading-bar 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

export default ChatLoader;
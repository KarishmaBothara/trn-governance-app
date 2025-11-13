import { Loader2, Zap, CircleDot } from "lucide-react";

export default function LoadingComponent() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full animate-spin"></div>

                {/* Middle pulsing ring */}
                <div className="absolute inset-2 w-28 h-28 border-4 border-transparent border-b-pink-400 border-l-blue-400 rounded-full animate-spin animation-delay-150" style={{animationDirection: 'reverse'}}></div>

                {/* Inner content area */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Central icon with pulse */}
                    <div className="relative">
                        <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />

                        {/* Orbiting dots */}
                        <div className="absolute inset-0 w-8 h-8 animate-spin" style={{animationDuration: '2s'}}>
                            <CircleDot className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-cyan-400" />
                        </div>

                        <div className="absolute inset-0 w-8 h-8 animate-spin" style={{animationDuration: '2s', animationDelay: '0.5s'}}>
                            <CircleDot className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-purple-400" />
                        </div>

                        <div className="absolute inset-0 w-8 h-8 animate-spin" style={{animationDuration: '2s', animationDelay: '1s'}}>
                            <CircleDot className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-pink-400" />
                        </div>

                        <div className="absolute inset-0 w-8 h-8 animate-spin" style={{animationDuration: '2s', animationDelay: '1.5s'}}>
                            <CircleDot className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-blue-400" />
                        </div>
                    </div>
                </div>

                {/* Glowing effect */}
                <div className="absolute inset-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 animate-pulse blur-md"></div>
            </div>

            {/* Loading text */}
            <div className="absolute mt-48">
                <div className="flex items-center space-x-2 text-white">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-lg font-medium tracking-wide animate-pulse">Loading</span>
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            </div>

            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-25" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
            </div>
        </div>
    );
}

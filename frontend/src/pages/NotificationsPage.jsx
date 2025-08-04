import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests } from "../lib/api";
import { 
  BellIcon, 
  ClockIcon, 
  MessageSquareIcon, 
  UserCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  XIcon,
  MoreHorizontalIcon,
  HeartIcon,
  StarIcon,
  ZapIcon
} from "lucide-react";
import NoNotificationsFound from "../components/NoNotificationsFound";

const NotificationsPage = () => {
  const queryClient = useQueryClient();

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const { mutate: acceptRequestMutation, isPending } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });

  const incomingRequests = friendRequests?.incomingReqs || [];
  const acceptedRequests = friendRequests?.acceptedReqs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Notification Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <BellIcon className="absolute top-20 left-10 w-4 h-4 text-primary/20 animate-float" />
        <MessageSquareIcon className="absolute top-40 right-20 w-5 h-5 text-secondary/20 animate-float animation-delay-1000" />
        <HeartIcon className="absolute bottom-40 left-20 w-3 h-3 text-accent/20 animate-float animation-delay-2000" />
        <StarIcon className="absolute bottom-20 right-10 w-4 h-4 text-primary/20 animate-float animation-delay-3000" />
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-gradient-x">
                Notifications
              </h1>
              <div className="absolute -top-2 -right-2">
                <SparklesIcon className="w-8 h-8 text-accent animate-pulse" />
              </div>
            </div>
            <p className="text-base-content/60 text-lg">Stay connected with your language learning community</p>
            
            {/* Stats Bar */}
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <UserCheckIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{incomingRequests.length} Pending</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 backdrop-blur-sm border border-success/20">
                <CheckCircleIcon className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">{acceptedRequests.length} Accepted</span>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
                <div className="absolute inset-2 w-12 h-12 border-2 border-secondary/30 rounded-full animate-pulse border-r-secondary"></div>
                <BellIcon className="absolute inset-6 w-4 h-4 text-accent animate-bounce" />
              </div>
              <p className="mt-6 text-lg font-medium text-base-content/70">Loading notifications...</p>
            </div>
          ) : (
            <>
              {/* Friend Requests Section */}
              {incomingRequests.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <div className="relative">
                        <UserCheckIcon className="h-6 w-6 text-primary" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      Friend Requests
                      <span className="px-3 py-1 bg-primary text-primary-content rounded-full text-sm font-bold animate-pulse">
                        {incomingRequests.length}
                      </span>
                    </h2>
                    
                    <button className="btn btn-ghost btn-sm hover:btn-primary transition-all duration-300">
                      <MoreHorizontalIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid gap-4">
                    {incomingRequests.map((request, index) => (
                      <div
                        key={request._id}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-base-200 to-base-300 hover:from-base-300 hover:to-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up border border-base-300/50"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Animated Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <div className="relative p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {/* Enhanced Avatar */}
                              <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 animate-pulse">
                                  <div className="w-full h-full rounded-full bg-base-100 p-0.5">
                                    <img 
                                      src={request.sender.profilePic} 
                                      alt={request.sender.fullName}
                                      className="w-full h-full rounded-full object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-base-100 flex items-center justify-center">
                                  <UserCheckIcon className="w-3 h-3 text-white" />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                                  {request.sender.fullName}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium border border-secondary/30">
                                    🌟 Native: {request.sender.nativeLanguage}
                                  </span>
                                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                                    📚 Learning: {request.sender.learningLanguage}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                              <button className="btn btn-ghost btn-circle hover:btn-error transition-all duration-300 group/decline">
                                <XIcon className="w-5 h-5 group-hover/decline:rotate-90 transition-transform duration-300" />
                              </button>
                              
                              <button
                                className="btn btn-primary hover:btn-success transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group/accept"
                                onClick={() => acceptRequestMutation(request._id)}
                                disabled={isPending}
                              >
                                {isPending ? (
                                  <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 rounded-full animate-spin border-t-white"></div>
                                    <span>Accepting...</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-4 h-4 group-hover/accept:scale-110 transition-transform duration-300" />
                                    <span>Accept</span>
                                  </div>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* New Connections Section */}
              {acceptedRequests.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <div className="relative">
                        <BellIcon className="h-6 w-6 text-success animate-pulse" />
                        <ZapIcon className="absolute -top-1 -right-1 w-3 h-3 text-warning animate-ping" />
                      </div>
                      New Connections
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {acceptedRequests.map((notification, index) => (
                      <div
                        key={notification._id}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-success/10 to-success/5 hover:from-success/20 hover:to-success/10 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up border border-success/20"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-success/10 via-transparent to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                              <div className="relative mt-1">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-success to-info p-0.5">
                                  <img
                                    src={notification.recipient.profilePic}
                                    alt={notification.recipient.fullName}
                                    className="w-full h-full rounded-full object-cover"
                                  />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100 animate-bounce">
                                  <CheckCircleIcon className="w-full h-full text-white p-0.5" />
                                </div>
                              </div>
                              
                              <div className="flex-1 space-y-2">
                                <h3 className="font-bold text-lg group-hover:text-success transition-colors duration-300">
                                  {notification.recipient.fullName}
                                </h3>
                                <p className="text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                                  {notification.recipient.fullName} accepted your friend request
                                </p>
                                <div className="flex items-center gap-2 text-sm text-base-content/60">
                                  <ClockIcon className="h-3 w-3 animate-pulse" />
                                  <span>Recently</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              <div className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium border border-success/30 flex items-center gap-2">
                                <MessageSquareIcon className="h-3 w-3 animate-pulse" />
                                New Friend
                              </div>
                              
                              <button className="btn btn-sm btn-ghost hover:btn-success transition-all duration-300">
                                Start Chat
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Empty State */}
              {incomingRequests.length === 0 && acceptedRequests.length === 0 && (
                <div className="relative">
                  <NoNotificationsFound />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default NotificationsPage;
// ✅ Reusable Confirmation Modal Component
export default function Modal({
                           isOpen,
                      onClose,
                         onConfirm,
                    title = "Confirm Action",
                                            message = "Are you sure you want to proceed with this action?",
                                            confirmText = "Confirm",
                                            cancelText = "Cancel",
                                            variant = "danger", // "danger", "warning", "success", "info"
                                showExtraWarning = false,
                                            warningMessage = "This action cannot be undone!"
                                          }) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  // Variant-based styling
  const variantStyles = {
    danger: {
      iconBg: "bg-red-500/20",
      iconColor: "text-red-500",
      buttonGradient: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      buttonShadow: "hover:shadow-red-500/50",
      warningBg: "bg-red-500/10 border-red-500/20",
      warningText: "text-red-400"
    },
    warning: {
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-500",
      buttonGradient: "from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700",
      buttonShadow: "hover:shadow-yellow-500/50",
      warningBg: "bg-yellow-500/10 border-yellow-500/20",
      warningText: "text-yellow-400"
    },
    success: {
      iconBg: "bg-green-500/20",
      iconColor: "text-green-500",
      buttonGradient: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      buttonShadow: "hover:shadow-green-500/50",
      warningBg: "bg-green-500/10 border-green-500/20",
      warningText: "text-green-400"
    },
    info: {
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-500",
      buttonGradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      buttonShadow: "hover:shadow-blue-500/50",
      warningBg: "bg-blue-500/10 border-blue-500/20",
      warningText: "text-blue-400"
    }
  };

  const styles = variantStyles[variant];

  // Icon based on variant
  const renderIcon = () => {
    switch (variant) {
      case 'danger':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        );
      case 'warning':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      case 'success':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      case 'info':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideUp">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className={`rounded-full p-3 ${styles.iconBg}`}>
            <svg
              className={`w-12 h-12 ${styles.iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {renderIcon()}
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center mb-3 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Message */}
        <p className="text-gray-400 text-center mb-6 leading-relaxed">
          {message}
        </p>

        {/* Extra Warning Badge */}
        {showExtraWarning && (
          <div className={`mb-6 p-3 ${styles.warningBg} border rounded-lg`}>
            <div className={`flex items-center gap-2 ${styles.warningText} text-sm`}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-medium">{warningMessage}</span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {cancelText}
          </button>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className={`flex-1 px-4 py-3 rounded-lg bg-gradient-to-r ${styles.buttonGradient} text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg ${styles.buttonShadow} flex items-center justify-center gap-2`}
          >
            {variant === 'danger' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            )}
            {variant === 'success' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {variant === 'warning' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {variant === 'info' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {confirmText}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
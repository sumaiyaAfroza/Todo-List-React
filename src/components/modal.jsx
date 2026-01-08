import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, Info, X, Trash2, Check } from 'lucide-react';

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

  // Variant-based styling with indigo/purple theme
  const variantStyles = {
    danger: {
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
      icon: AlertTriangle,
      buttonGradient: "from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
      buttonShadow: "hover:shadow-lg hover:shadow-red-500/25",
      warningBg: "bg-red-500/10 border-red-500/20",
      warningText: "text-red-400",
      glowColor: "shadow-red-500/20"
    },
    warning: {
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      icon: AlertCircle,
      buttonGradient: "from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500",
      buttonShadow: "hover:shadow-lg hover:shadow-yellow-500/25",
      warningBg: "bg-yellow-500/10 border-yellow-500/20",
      warningText: "text-yellow-400",
      glowColor: "shadow-yellow-500/20"
    },
    success: {
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      icon: CheckCircle,
      buttonGradient: "from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500",
      buttonShadow: "hover:shadow-lg hover:shadow-green-500/25",
      warningBg: "bg-green-500/10 border-green-500/20",
      warningText: "text-green-400",
      glowColor: "shadow-green-500/20"
    },
    info: {
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      icon: Info,
      buttonGradient: "from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
      buttonShadow: "hover:shadow-lg hover:shadow-indigo-500/25",
      warningBg: "bg-indigo-500/10 border-indigo-500/20",
      warningText: "text-indigo-400",
      glowColor: "shadow-indigo-500/20"
    }
  };

  const styles = variantStyles[variant];
  const IconComponent = styles.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl shadow-2xl ${styles.glowColor} max-w-md w-full p-8 animate-slideUp`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`rounded-full p-4 ${styles.iconBg} border border-white/5`}>
            <IconComponent className={`w-12 h-12 ${styles.iconColor}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center mb-3 text-white">
          {title}
        </h3>

        {/* Message */}
        <p className="text-gray-300 text-center mb-6 leading-relaxed">
          {message}
        </p>

        {/* Extra Warning Badge */}
        {showExtraWarning && (
          <div className={`mb-6 p-4 ${styles.warningBg} border rounded-xl backdrop-blur-sm`}>
            <div className={`flex items-start gap-3 ${styles.warningText}`}>
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium leading-relaxed">{warningMessage}</span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-gray-200 font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            {cancelText}
          </button>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r ${styles.buttonGradient} text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg ${styles.buttonShadow} flex items-center justify-center gap-2`}
          >
            {variant === 'danger' && <Trash2 className="w-4 h-4" />}
            {variant === 'success' && <Check className="w-4 h-4" />}
            {variant === 'warning' && <AlertCircle className="w-4 h-4" />}
            {variant === 'info' && <Info className="w-4 h-4" />}
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
                  transform: translateY(30px) scale(0.95);
                  opacity: 0;
              }
              to {
                  transform: translateY(0) scale(1);
                  opacity: 1;
              }
          }

          .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
          }

          .animate-slideUp {
              animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
      `}</style>
    </div>
  );
}